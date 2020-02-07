buildtitle = "stage-07 build name";
buildnumber = "nnn";

if (document.getElementById("stage-07-announce")) {
  document.getElementById("stage-07-announce").innerHTML = buildtitle + "; build " + buildnumber;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle + "; build " + buildnumber;
}
