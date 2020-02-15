buildtitle = "picksweb-react-npm";
buildnumber = "001";
releasenotes = 
   '<ul>Build '+buildnumber
  +'<li>React with JSX, requires npm build</li>'
  +'<li>Select badges filter</li>'
  +'<li>Select date range filter</li>'
  +'</ul>'
  +'<div class="auto-resize-screenshot">'
  +'<img src ="Annotation 2020-02-14 124416.png">'
  +'</div>'
;  


if (document.getElementById("stage-05-announce")) 
{
  document.getElementById("stage-05-announce").innerHTML = buildtitle+'; Build '+buildnumber;
} 
else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle;
  document.getElementById("base-release-notes").innerHTML = releasenotes;

}

//historic notes from previous builds
if (document.getElementById("release-notes-build-001")) {
document.getElementById("release-notes-build-001").innerHTML = 
'<ul>'
  +'<li>first point</li>'
  +'<li>second point</li>'
  +'<li>third point</li>'
  +'</ul>'
}; 
