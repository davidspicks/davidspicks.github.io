buildtitle = "base build name";
buildnumber = "nnn";
releasenotes = 
   '<ul>Build '+buildnumber
  +'<li>first point</li>'
  +'<li>second point</li>'
  +'<li>third point</li>'
+'</ul>';  


if (document.getElementById("stage-06-announce")) 
{
  document.getElementById("stage-06-announce").innerHTML = buildtitle+'; Build '+buildnumber;
} 
else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle;
  document.getElementById("base-release-notes").innerHTML = releasenotes;

}

//historic notes from previous builds
if (document.getElementById("build-nnn-release-notes")) {
document.getElementById("build-nnn-release-notes").innerHTML = 
'<ul>'
  +'<li>first point</li>'
  +'<li>second point</li>'
  +'<li>third point</li>'
+'</ul>';  
}; 
