buildtitle = "picks-web-react-nocompile";
buildnumber = "011";

if (document.getElementById("stage-03-announce")) {
  document.getElementById("stage-03-announce").innerHTML = buildtitle + "; build " + buildnumber;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle + "; build " + buildnumber;
}

document.getElementById("release-notes").innerHTML = 
'<ul>'
  +'<li>react-nocompile in app.js</li>'
  +'<li>date-range select dropdown</li>'
  +'<li>ReactPicksWebPOC</li>'
  +'<li>minimum page content</li>'
+'</ul>';   
