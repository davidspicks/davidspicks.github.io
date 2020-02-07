buildtitle = "stage-05 build name";
buildnumber = "nnn";

if (document.getElementById("stage-05-announce")) {
  document.getElementById("stage-05-announce").innerHTML = buildtitle + "; build " + buildnumber;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle + "; build " + buildnumber;
}
