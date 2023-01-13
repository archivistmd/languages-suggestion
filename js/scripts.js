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

    const pickProgram = parseInt(document.querySelector("pickProgramA'").value);
    const motivation = parseInt(document.querySelector("motivation").value);
    const comfy = parseInt(document.querySelector("comfy").value);

    const results = pickProgramA + motivation + comfy;

    if (pickProgram === "apps" && motivation === "back" && comfy === tumblr) {
      document.querySelector("div.ruby").removeAttribute(".hidden")
    } else if (comfy === "youtube") {
      document.querySelector("div#python").removeAttribute(".hidden")
    } else {
      document.querySelector("div.ruby").removeAttribute(".hidden")
    };

    if (pickProgram === "games" && motivation === "back" && comfy === hacker) {
    document.querySelector("div.python").removeAttribute(".hidden")
    } else if (comfy === "wait") {
    document.querySelector("div#explore").removeAttribute(".hidden")
    } else {
      document.querySelector("dive.ruby").removeAttribute(".hidden")
    };

    if (pickProgramA === "web" && motivation === "back" && comfy === tumblr) {
    document.querySelector("div.ruby").removeAttribute(".hidden")
    } else if (comfy === "tumblr") {
    document.querySelector("div#js").removeAttribute(".hidden")
    } else {
      document.querySelector("div.explore").removeAttribute(".hidden")
    };
    
    if (pickProgramA === "dogs" && motivation === "dog" && comfy === hacker) {
    document.querySelector("div.explore").removeAttribute(".hidden")
    } else if (comfy === "tumblr") {
    document.querySelector("div#js").removeAttribute(".hidden")
    } else {
      document.querySelector("div.ruby").removeAttribute(".hidden")
    };
    });
});
