buildtitle = "stage-11 build name";
buildnumber = "nnn";

if (document.getElementById("stage-11-announce")) {
  document.getElementById("stage-11-announce").innerHTML = buildtitle + "; build " + buildnumber;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle + "; build " + buildnumber;
}
