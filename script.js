//your JS code here. If required.
//your JS code here. If required.
let div = document.createElement("div");
div.setAttribute("id", "browser-info");
let browserName = navigator.appName;
let version = navigator.appVersion;
div.textContent =  "You are using " + browserName + " version " + version
document.body.append(div);