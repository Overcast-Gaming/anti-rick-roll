// this uses words and shit, probably not a good idea to always keep on, only when you make that shifty click
// this feeds off the general public's dumbassery and nature to say "rICkrOLl" on every disguised rick roll
// link that they see. lmao. after 7 years of development, i hope it's been worth the wait.

function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}


function main(){
    var rolled = false;

    function scanElement(element){
        if(!rolled){
            try{
                setTimeout(function(){
                    if(element != null && element.children != null){
                        var children = element.children
                        for(var i = 0; i < children.length; i++){
                            if(children[i].innerText.toLowerCase().includes("rick astley") || children[i].innerText.toLowerCase().includes("rickroll") || children[i].innerText.toLowerCase().includes("richroll") || children[i].innerText.toLowerCase().includes("rich roll") || children[i].innerText.toLowerCase().includes("wreckroll") || children[i].innerText.toLowerCase().includes("wreck roll") || children[i].innerText.toLowerCase().includes("never gonna give you up")){
                                if(children[i].tagName != "SCRIPT") {
                                    rolled = true;
                                    while(document.firstChild) {document.removeChild(document.firstChild)}
                                    var html = document.createElement("html")
                                    html.style = "font-family: 'Roboto', sans-serif; background-color:#D0D0D0"
                                    var link = document.createElement("link")
                                    link.href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                                    link.rel="stylesheet"
                                    var h1 = document.createElement("p")
                                    h1.innerText = "RickRoll Prevented!"
                                    h1.style = "text-align: center; font-size: 100px;"
                                    var h3 = document.createElement("p")
                                    if(children[i] != null && element != null) {
                                        h3.innerText = "URL: " + window.location + "\nElement flagged name: " + children[i].tagName + "\nElement parent: " + element.tagName + "\nAnti-Rickroll UserScript created by: Allink#9308"
                                    } else {
                                       h3.innerText = "URL: " + window.location + "\nAnti-Rickroll UserScript created by: Allink#9308"
                                    }
                                    h3.style = "text-align: center; font-size: 50px;"
                                    //var vid = document.createElement("VIDEO");
                                    //vid.src="https://github.com/allink-git/allink-git.github.io/blob/master/hitman.mp4?raw=true"
                                    //vid.autoplay = true
                                    //vid.loop = true
                                    //vid.style = "width: 30%;height: 5%; margin:auto; display: block;"
                                    document.appendChild(html)
                                    html.appendChild(link)
                                    html.appendChild(h1)
                                    html.appendChild(h3)
                                    //html.appendChild(vid)
                               }
                            }
                            scanElement(children[i])
                        }
                    }
                },200);
            } catch (exception){
              console.log(exception)
            }
        }
    }
    scanElement(document)
    setInterval(function(){
        scanElement(document)
    },500)
    if(document.title.toLowerCase().includes("never gonna give you up") || document.title.toLowerCase().includes("rickroll") || document.title.toLowerCase().includes("wreck roll") || document.title.toLowerCase().includes("wreckroll") || document.title.toLowerCase().includes("richroll") || document.title.toLowerCase().includes("rick roll") || document.title.toLowerCase().includes("rich roll")){
        if(!window.location.toLowerCase().includes("duckduckgo") && !window.location.toLowerCase().includes("google")) {
            rolled = true
            while(document.firstChild) {document.removeChild(document.firstChild)}
            console.log("Detected by URL!")
            var html = document.createElement("html")
            html.style = "font-family: 'Roboto', sans-serif; background-color:#D0D0D0"
            var link = document.createElement("link")
            link.href= "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            link.rel= "stylesheet"
            var h1 = document.createElement("p")
            h1.innerText = "RickRoll Prevented!"
            h1.style = "text-align: center; font-size: 100px;"
            var h3 = document.createElement("p")
            h3.innerText = "URL: " + window.location + "\nTitle: " + document.title + "\nAnti-Rickroll UserScript created by: Allink#9308"
            h3.style = "text-align: center; font-size: 50px;"
            document.appendChild(html)
            html.appendChild(link)
            html.appendChild(h1)
            html.appendChild(h3)
        }
    }
}

addJQuery(main);
