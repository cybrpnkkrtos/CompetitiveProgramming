$(document).ready(function(){$(".polls a").live("click",function(){var a=$(this).attr("link"),b=$(".polls a").attr("link").split("/"),c=b[b.length-2],d=$(this).parent().find(".polls-count");if(d&&d.hasClass("only-positive"))var e=!0;else var e=!1;if($(this).hasClass("polls-up"))var f=$(this).parent().find(".polls-down");else var f=$(this).parent().find(".polls-up");var g={count:d.text()*1,this_class:$(this).attr("class"),other_class:f.attr("class")};$(this).hasClass("polls-up")?$(this).hasClass("polls-unset-vote")?f&&f.hasClass("polls-set-vote")?(d&&(e?d.text(d.text()*1+1):d.text(d.text()*1+2)),f.removeClass("polls-set-vote"),f.addClass("polls-unset-vote"),$(this).removeClass("polls-unset-vote"),$(this).addClass("polls-set-vote")):(d&&d.text(d.text()*1+1),$(this).removeClass("polls-unset-vote"),$(this).addClass("polls-set-vote")):(d&&d.text(d.text()*1-1),$(this).removeClass("polls-set-vote"),$(this).addClass("polls-unset-vote")):$(this).hasClass("polls-unset-vote")?f&&f.hasClass("polls-set-vote")?(d&&(e?d.text(d.text()*1-1):d.text(d.text()*1-2)),f.removeClass("polls-set-vote"),f.addClass("polls-unset-vote"),$(this).removeClass("polls-unset-vote"),$(this).addClass("polls-set-vote")):(d&&!e&&d.text(d.text()*1-1),$(this).removeClass("polls-unset-vote"),$(this).addClass("polls-set-vote")):(d&&!e&&d.text(d.text()*1+1),$(this).removeClass("polls-set-vote"),$(this).addClass("polls-unset-vote"));var h=$(this);return $.ajax({type:"POST",url:a,complete:function(a){a.responseText=="error"&&(d&&d.text(g.count),h.attr("class",g.this_class),f.attr("class",g.other_class))}}),!1})});