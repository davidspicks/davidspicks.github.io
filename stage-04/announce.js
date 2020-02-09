buildtitle = "picks-web-react-nocompile";
buildnumber = "012";

if (document.getElementById("stage-03-announce")) {
  document.getElementById("stage-03-announce").innerHTML = buildtitle;
} else if (document.getElementById("base-announce"))
{
  document.getElementById("base-announce").innerHTML = buildtitle;
}

document.getElementById("release-notes").innerHTML = 
'<ul>Build '+buildnumber
  +'<li>css styles</li>'
  +'<li>top hero image</li>'
  +'<li>banner text overlays hero image</li>'
  +'<li>dummy comment button overlays hero image</li>'
  +'<li>right navbar with dummy content</li>'
  +'<li>picks content panel with scrollbar</li>'
+'</ul>';  

document.getElementById("build-011").innerHTML = 
'<ul>Build 011'
  +'<li>react-nocompile in app.js</li>'
  +'<li>date-range select dropdown</li>'
  +'<li>ReactPicksWebPOC</li>'
  +'<li>minimum page content</li>'
+'</ul>';  

document.getElementById("build-010").innerHTML = 
'<ul>Build 010'
+'<li>react no-compile app implemented as &#060script> tags in index.html to render </li>content from  picks_content.js </li>'
+'<li>react no-compile code in filter_button.js to render show/hide filter button (filter functionality not implemented)</li>'
+'<li>davidspicks.com content</li>'
+'<li>picks favicon</li>'


