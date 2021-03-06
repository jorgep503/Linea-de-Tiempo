
var plays = [
  {
    "play": "The Two Gentlemen of Verona", 
    "date": "1589-1591",
    "record": "Francis Meres' ...",
    "published": "First Folio (1623)",   
    "performance": "adaptation by Benjamin Victor...",
    "evidence": "The play contains..." 
  }, { 
    "play": "hola a todos",     
    "date": "1590-1594", 
    "record": "possible version ...", 
    "published": "possible version ...", 
    "performance": "According to Philip Henslowe...",  
    "evidence": "Kier Elam posits ..."
  }, { 
    "play": "Henry VI, Part 2",
    "date": "1590-1591", 
    "record": "version of the ...",   
    "published": "version of the ...",   
    "performance": "although it is known ...",         
    "evidence": "It is known ..." 
  }
]

    var events = $.map(plays, function(play) {
    var event = {};
    
    if (play.date.indexOf("-") !== -1) {
    event.title = play.play;
        var daterange = play.date.split("-");
        event.dates = [new Date(daterange[0], 0, 1), new Date(daterange[1], 11, 31)]
    } else {
        event.dates = [new Date(play.date, 0, 1), new Date(play.date, 11, 31)]
    }
    return event;
});
       


$(function() {
    var timeline = new Chronoline($("#timeline")[0], events, {});

    });
