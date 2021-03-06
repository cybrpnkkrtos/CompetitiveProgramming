// Global Firestore instance
var firebaseApp = null;

// Initialise Firestore globally
firebaseApp = firebase.initializeApp(
  window.firebaseConfig,
  name = "mycareerstack",
);

var CustomRealTimeMessageListener = function(name, uniqueID, listenerFunc) {
  /*
    RealTimeNotification System
    --params--
        -name:
        -uniqueID:
        -listenerFunc
  */
  this.collectionName = name + "-" + uniqueID;
  this.firestoreDB = firebase.firestore(firebaseApp);
  this.collection = this.firestoreDB.collection(this.collectionName);
  this.collection.onSnapshot(function(querySnapshot) {
    querySnapshot.docChanges().forEach(listenerFunc);
  });
};

window.CustomRealTimeMessageListener = CustomRealTimeMessageListener;

function get_realtime_collection_names() {
  var collection_names = [];
  var el = $("[id^=realtime-collection-name]");
  for (var i = 0; i < el.length; i++) {
    var name = $(el[i]).text();
    if (name) {
      collection_names.push(name);
    }
  }
  return collection_names;
}

function snapshot_received(snapshot) {
  if (snapshot.type === "modified") {
    var msg = snapshot.doc.data();
    if (msg) update_html(msg);
  }
}

function update_html(msg) {
  var msg_timestamp = msg.timestamp;
  var html_el_id = msg.html_id;
  var accepted_timedelta = msg.accepted_timedelta;
  var message = msg.message;
  var ntf_type = msg.ntf_type;
  var insert_mode = msg.insert_mode;
  var hyperlink = encodeURI(msg.hyperlink);
  var callback = msg.callback;
  var callback_args = msg.callback_args;
  var locking_enabled = msg.locking;
  var animate_enabled = msg.animate;
  var html = message;

  var html_el = $("#" + html_el_id);

  var el_timestamp = html_el.attr("timestamp");
  // This is probably the first time that message has arrived
  if (typeof el_timestamp === "undefined") {
    el_timestamp = 0;
  }

  try {
    // Check if got more recent message, only then update this message.
    el_timestamp = parseFloat(el_timestamp);
    msg_timestamp = parseFloat(msg_timestamp);
    if (msg_timestamp < el_timestamp) {
      return;
    }

    // Check accepted_timedelta to find if message can be
    // added to html
    if (accepted_timedelta != undefined) {
      var current_time = Date.now() / 1000;
      if (current_time - msg_timestamp > accepted_timedelta) {
        return;
      }
    }
  } catch (err) {
    return;
  }

  if (html_el_id === "common-notification") {
    html = createNotificationDiv(message, ntf_type, hyperlink);
    // Decode html for any special characters
    html = html_decode(html);
    var new_notification = $(html);
    new_notification.appendTo(html_el);
    new_notification.delay(15000).fadeOut(1000);
  } else {
    // Decode html for any special characters
    html = html_decode(html);
    switch (insert_mode) {
      case "append":
        html_el.append(html);

        if (animate_enabled) animateUpdatedElement(html_el);

        break;

      case "insert":
        html_el.html(html);

        if (animate_enabled) {
          var updated_el_index = html_el.children().length - 1;

          if (updated_el_index > -1)
            var updated_el = html_el.children()[updated_el_index];
          else var updated_el = html_el;

          animateUpdatedElement(updated_el);
        }

        break;

      case "prepend":
        html_el.prepend(html);

        if (animate_enabled) {
          var updated_el = html_el.children()[0];
          animateUpdatedElement(updated_el);
        }

        break;

      case "delete":
        html_el.empty();
        break;

      case "replace":
        html_el.replaceWith(html);

        if (animate_enabled) animateUpdateElement(html_el);

        break;

      case "idle":
        break;
    }
  }

  //html_el.parent().show();
  html_el.attr("timestamp", msg_timestamp);

  // Execute javascripts in html message
  if (insert_mode == "insert") {
    var scripts = html_el.find("script");
    var len = scripts.length;
    for (var i = 0; i < len; ++i) {
      var script = scripts[i];
      var scriptEl = $(script);
      // Evaluate the javascript inside script tag
      eval(scriptEl.text());
    }
  }

  // Execute callbacks if any
  if (callback) {
    try {
      window[callback].apply(this, callback_args);
    } catch (e) {
      // fail silently
    }
  }
}

function animateUpdatedElement(updated_el) {
  // Animate updated element
  var animation_time = 700;
  $(updated_el)
    .hide()
    .fadeIn(animation_time);
}

function createNotificationDiv(message, ntf_type, hyperlink) {
  // add wrapper CSS classes and hyperlink for a notification
  var wrapper_div_classes = "";
  //if(ntf_type){
  //    wrapper_div_classes += " ntf-"+ntf_type;
  //}
  var close_html =
    "<div class='notification-close'><i class='fa fa-times fa-lg lighter' aria-hidden='true'></i></div>";
  var html =
    "<div class='" +
    wrapper_div_classes +
    " notification-container dark'>" +
    message +
    close_html +
    "</div>";

  if (hyperlink) {
    wrapper_div_classes += " pointer";
    html =
      "<div class='" +
      wrapper_div_classes +
      " notification-container'>" +
      message +
      close_html +
      "<a class='notification-link' href='" +
      hyperlink +
      "' target='_blank'></a></div>";
  }
  return html;
}

// For remove some special characters
function html_decode(value) {
  var textArea = document.createElement("textarea");
  textArea.innerHTML = value;
  return textArea.value;
}

function makeid() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

$(document).ready(function() {
  var firestoreDB = firebase.firestore(firebaseApp);
  if (!firestoreDB) return;

  var collection_names = get_realtime_collection_names();
  for (var i = 0; i < collection_names.length; i++) {
    var collection_name = collection_names[i];
    var collection = firestoreDB.collection(collection_name);
    collection.onSnapshot(function(querySnapshot) {
      querySnapshot.docChanges().forEach(snapshot_received);
    });
  }
});

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                                                                           //
//                        For desktop notifications                          //
///////////////////////////////////////////////////////////////////////////////

function spawnNotification(theTitle, theBody, theUrl) {
  // trigger desktop notification API with given TITLE, BODY and URL if
  // desktop notification is enabled on client browser
  var options = {
    body: theBody,
    icon:
      "https://static-fastly.hackerearth.com/static/hackerearth/images/logo/HE_identity.png",
  };

  if ("hidden" in document && document.hidden) {
    var notification = new Notification(theTitle, options);
    if (theUrl) {
      notification.onclick = function() {
        window.location.href = theUrl;
      };
    }
    //setTimeout(notification.close.bind(notification), 15000);
  }
}

var eventStartNotification = function(title, body, url) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log(
      "Seems like your browser is outdated, please update your browser.",
    );
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    spawnNotification(title, body, url);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function(permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        spawnNotification(title, body, url);
      } else {
        return;
      }
    });
  }
};

var requestDesktopNotificationPermission = function(url) {
  if (Notification.permission != "granted") {
    // Request users to enable desktop notification while registering
    Notification.requestPermission().then(function(result) {
      var title = "Kudos! We will notify you when Challenge starts.";
      var body =
        "Make sure you've enabled web notifications in your HackerEarth profile settings.";
      spawnNotification(title, body, url);
    });
  }
};

// End desktop notification
