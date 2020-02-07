buildtitle = "stage-02 build name";
buildnumber = "nnn";

if (document.getElementById("stage-02-announce")) {
  document.getElementById("stage-02-announce").innerHTML = buildtitle + "; build " + buildnumber;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle + "; build " + buildnumber;
}
