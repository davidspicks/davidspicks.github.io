buildtitle = "stage-03 build name";
buildnumber = "nnn";

if (document.getElementById("stage-03-announce")) {
  document.getElementById("stage-03-announce").innerHTML = buildtitle + "; build " + buildnumber;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle + "; build " + buildnumber;
}
