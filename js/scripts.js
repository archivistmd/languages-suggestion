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

    const name = document.getElementById("name").value;
    const pickProgram = document.querySelector("input[name='pickProgramA']:checked").value;
    const motivation = document.querySelector("input[name='motivation']:checked").value;
    const comfy = document.querySelector("input[name='comfy']:checked").value;
    const game = document.querySelector("input[name='game']:checked").value;
    document.querySelectorAll("span.nameHere").innerText = name;

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
