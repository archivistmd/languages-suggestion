function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden")
  document.getElementById("python").setAttribute("class", "hidden")
  document.getElementById("js").setAttribute("class", "hidden")
  document.getElementById("explore").setAttribute("class", "hidden")
}


  window.addEventListener("load", function(){
    const form = this.document.getElementByID("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      hideResults();

    const name = parseInt(document.getElementById("name").value);
    const pickProgram = parseInt(document.querySelector("pickProgramA'").value);
    const motivation = parseInt(document.querySelector("motivation").value);
    const comfy = parseInt(document.querySelector("comfy").value);
    const game = parseInt(document.querySelector("game").value);
    document.querySelectorAll("span.nameHere").innerText = name;

    const results = pickProgramA + motivation + comfy + game;

    if (pickProgram === "apps" && motivation == "back") {
      document.querySelector("div.ruby").removeAttribute(".hidden")
    } else if (comfy === "youtube") {
      document.querySelector("div#python").removeAttribute(".hidden")
    } else {
      document.querySelector("div.ruby").removeAttribute(".hidden")
    };

    if (pickProgram === "games" && motivation == "back") {
    document.querySelector("div.python").removeAttribute(".hidden")
    } else if (comfy === "wait") {
    document.querySelector("div#explore").removeAttribute(".hidden")
    };

    if (pickProgramA === "web" && motivation == "back") {
    document.querySelector("div.ruby").removeAttribute(".hidden")
    } else if (comfy === "tumblr") {
    document.querySelector("div#js").removeAttribute(".hidden")
    };
    
    if (pickProgramA === "dogs" && motivation == "dog") {
    document.querySelector("div.explore").removeAttribute(".hidden")
    } else if (comfy === "hacker") {
    document.querySelector("div#js").removeAttribute(".hidden")
    };
    });
});
