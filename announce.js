buildtitle = "picks-web-react-nocompile";
buildnumber = "010";

if (document.getElementById("stage-01-announce")) {
  document.getElementById("stage-01-announce").innerHTML = buildtitle + "; build " + buildnumber;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle + "; build " + buildnumber;
}
