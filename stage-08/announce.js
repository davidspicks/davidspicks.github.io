buildtitle = "stage-08 build name";
buildnumber = "nnn";

if (document.getElementById("stage-08-announce")) {
  document.getElementById("stage-08-announce").innerHTML = buildtitle + "; build " + buildnumber;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle + "; build " + buildnumber;
}
