buildtitle = "stage-10 build name";
buildnumber = "nnn";

if (document.getElementById("stage-10-announce")) {
  document.getElementById("stage-10-announce").innerHTML = buildtitle + "; build " + buildnumber;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle + "; build " + buildnumber;
}
