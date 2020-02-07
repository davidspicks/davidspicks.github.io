buildtitle = "stage-06 build name";
buildnumber = "nnn";

if (document.getElementById("stage-06-announce")) {
  document.getElementById("stage-06-announce").innerHTML = buildtitle + "; build " + buildnumber;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle + "; build " + buildnumber;
}
