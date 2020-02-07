buildtitle = "stage-04 build name";
buildnumber = "nnn";

if (document.getElementById("stage-04-announce")) {
  document.getElementById("stage-04-announce").innerHTML = buildtitle + "; build " + buildnumber;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle + "; build " + buildnumber;
}
