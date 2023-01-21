function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden")
  document.getElementById("python").setAttribute("class", "hidden")
  document.getElementById("js").setAttribute("class", "hidden")
  document.getElementById("explore").setAttribute("class", "hidden")
}


  window.addEventListener("load", function(){
    const form = this.document.getElementById("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      hideResults();

    const pickProgram = parseInt(document.querySelector("pickProgram'").value);
    const motivation = parseInt(document.querySelector("motivation").value);
    const comfy = parseInt(document.querySelector("comfy").value);

    const results = pickProgram + motivation + comfy;

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
    } else if (pickProgram === "game" && motivation === "dog" && comfy === "hacker") {
      document.querySelector("explore").removeAttribute(".hidden")
    };

    if (pickProgram === "web" && motivation === "back" && comfy === youtube) {
      document.querySelector("ruby").removeAttribute(".hidden")
    } else if (pickProgram === "web" && motivation === "front" && comfy === "youtube") {
      document.querySelector("js").removeAttribute(".hidden")
    } else if (pickProgram === "web" && motivation === "wait" && comfy === "hacker") {
      document.querySelector("explore").removeAttribute(".hidden")
    } else if (pickProgram === "web" && motivation === "dog" && comfy === "tumblr") {
      document.querySelector("js").removeAttribute(".hidden")
    } else if (pickProgram === "web" && motivation === "dog" && comfy === "hacker") {
      document.querySelector("explore").removeAttribute(".hidden")
    };
    
    if (pickProgram === "dogs" && motivation === "dog" && comfy === hacker) {
      document.querySelector("explore").removeAttribute(".hidden")
    } else if (pickProgram === "dogs" && motivation === "front" && comfy === "tumblr") {
      document.querySelector("js").removeAttribute(".hidden")
    } else if (pickProgram === "dogs" && motivation === "front" && comfy === "youtube") {
      document.querySelector("ruby").removeAttribute(".hidden")
    } else if (pickProgram === "dogs" && motivation === "back" && comfy === "youtube") {
      document.querySelector("python").removeAttribute(".hidden")
    } else if (pickProgram === "dogs" && motivation === "dog" && comfy === "wait") {
      document.querySelector("explore").removeAttribute(".hidden")
    };
    });
});
