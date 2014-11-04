window.onload = function () {
  var plays = [
    {
      "play": "The Two Gentlemen of Verona", 
      "date": "1589-1591",
      "record": "Francis Meres'…",
      "published": "First Folio (1623)",   
      "performance": "adaptation by Benjamin Victor…",
      "evidence": "The play contains…" 
    }, { 
      "play": "The Taming of the Shrew",     
      "date": "1590-1594", 
      "record": "possible version…", 
      "published": "possible version…", 
      "performance": "According to Philip Henslowe…",  
      "evidence": "Kier Elam posits…"
    }, { 
      "play": "Henry VI, Part 2",
      "date": "1590-1591", 
      "record": "version of the…",   
      "published": "version of the…",   
      "performance": "although it is known…",         
      "evidence": "It is known…" 
    },
    //…
  ]
var descTerms = [
    { key: "record",      label: "First official record"},
    { key: "published",   label: "First published"},
    { key: "performance", label: "First recorded performance"},
    { key: "evidence",    label: "Evidence"},
];
container = document.getElementById("timeline");
list = document.createElement("ol");
list.className = "timeline";
container.appendChild(list);
plays.forEach(function(play) {
    var listItem = document.createElement("li");
    if (play.date.indexOf("-") !== -1) {
        var dates = play.date.split("-");
        var time = document.createElement("time");
        time.textContent = dates[0];
        listItem.appendChild(time);
        time = document.createElement("time");
        time.textContent = dates[1];
        listItem.appendChild(time);
    } else {
        var time = document.createElement("time");
        time.textContent = play.date;
        listItem.appendChild(time);
    }
    var cite = document.createElement("cite");
    cite.textContent = play.play;
    listItem.appendChild(cite);
    var descList = document.createElement("dl");
    descTerms.forEach(function(term)  {
        if (play[term.key]) {
            var descTerm = document.createElement("dt");
            descTerm.textContent = term.label;
            descList.appendChild(descTerm);
            var descElem = document.createElement("dd");
            descElem.textContent = play[term.key];
            descList.appendChild(descElem);
        }
    });
    listItem.appendChild(descList);
    list.appendChild(listItem);
})

$("#timeline").on("click", "cite", function() {
    $(this).parent("li").toggleClass("expanded");
})
}