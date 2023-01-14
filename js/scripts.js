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
      document.querySelector("js").removeAttribute(".hidden")
    } else if (pickProgram === "apps" && motivation === "back" && comfy === "hacker") {
      document.querySelector("python").removeAttribute(".hidden")
    } else if (pickProgram === "apps" && motivation === "front" && comfy === "youtube") {
      document.querySelector("ruby").removeAttribute(".hidden")
    } else if (pickProgram === "apps" && motivation === "wait" && comfy === "hacker"){
      document.querySelector("explore").removeAttribute(".hidden")
    };

    if (pickProgram === "games" && motivation === "back" && comfy === hacker) {
      document.querySelector("python").removeAttribute(".hidden")
    } else if (pickProgram === "game" && motivation === "dog" && comfy === "youtube") {
      document.querySelector("explore").removeAttribute(".hidden")
    } else if (pickProgram === "game" && motivation === "front" && comfy === "youtube") {
      document.querySelector("ruby").removeAttribute(".hidden")
    } else if (pickProgram === "game" && motivation === "back" && comfy === "youtube") {
      document.querySelector("js").removeAttribute(".hidden")
    };

    if (pickProgramA === "web" && motivation === "back" && comfy === youtube) {
      document.querySelector("ruby").removeAttribute(".hidden")
    } else if (pickProgramA === "web" && motivation === "front" && comfy === "youtube") {
      document.querySelector("js").removeAttribute(".hidden")
    } else if (pickProgramA === "web" && motivation === "wait" && comfy === "hacker") {
      document.querySelector("explore").removeAttribute(".hidden")
    } else if (pickProgramA === "web" && motivation === "dog" && comfy === "tumblr") {
      document.querySelector("js").removeAttribute(".hidden")
    };
    
    if (pickProgramA === "dogs" && motivation === "dog" && comfy === hacker) {
      document.querySelector("explore").removeAttribute(".hidden")
    } else if (pickProgramA === "dogs" && motivation === "front" && comfy === "tumblr") {
      document.querySelector("js").removeAttribute(".hidden")
    } else if (pickProgramA === "dogs" && motivation === "front" && comfy === "youtube") {
      document.querySelector("ruby").removeAttribute(".hidden")
    } else if (pickProgramA === "dogs" && motivation === "back" && comfy === "youtube") {
      document.querySelector("python").removeAttribute(".hidden")
    };
    });
});
