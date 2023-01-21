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

    const pickProgram = document.querySelector("input[name='comfy']:checked");
    const motivation = document.querySelector("input[name='motivation']:checked");
    const comfy = document.querySelector("input[name='comfy']:checked");

    const results = pickProgram + motivation + comfy;

    if ((pickProgram === "apps" || pickProgram === "web") && motivation === "front" && comfy === "tumblr") {
      document.querySelector("js").removeAttribute(".hidden");
    } else if ((pickProgram ==="apps" || pickProgram === "web") && motivation === "front" && comfy === ".youtube") {
      document.querySelector("ruby").removAttribute(".hidden");
    } else if ((pickProgram === "apps" || pickProgram === "games") && motivation === "back" && comfy === ".hacker") {
      document.querySelector("python").removeAttribute(".hidden")
    } else if ((pickProgram === "apps" || pickProgram === "web") && motivation === "wait" && comfy === ".hacker"){
      document.querySelector("explore").removeAttribute(".hidden");
    } else if ((pickProgram === "game" || pickProgram === "web") && motivation === "dog" && comfy === "youtube") {
      document.querySelector("explore").removeAttribute(".hidden");
    } else if ((pickProgram === "game" || pickProgram === "web") && motivation === "front" && comfy === "youtube") {
      document.querySelector("ruby").removeAttribute(".hidden");
    } else if ((pickProgram === "game" || pickProgram === "web") && motivation === "dog" && comfy === "hacker") {
      document.querySelector("explore").removeAttribute(".hidden");
    } else if (pickProgram === "web" && motivation === "back" && comfy === "youtube") {
      document.querySelector("ruby").removeAttribute(".hidden");
    } else if (pickProgram === "web" && motivation === "front" && comfy === "youtube") {
      document.querySelector("js").removeAttribute(".hidden");
    } else if (pickProgram === "web" && motivation === "wait" && comfy === "hacker") {
      document.querySelector("explore").removeAttribute(".hidden");
    } else if (pickProgram === "web" && motivation === "dog" && comfy === "tumblr") {
      document.querySelector("js").removeAttribute(".hidden");
    } else if (pickProgram === "web" && motivation === "dog" && comfy === "hacker") {
      document.querySelector("explore").removeAttribute(".hidden");    
    } else if (pickProgram === "dogs" && motivation === "dog" && comfy === "hacker") {
      document.querySelector("explore").removeAttribute(".hidden");
    } else if (pickProgram === "dogs" && motivation === "front" && comfy === "tumblr") {
      document.querySelector("js").removeAttribute(".hidden");
    } else if (pickProgram === "dogs" && motivation === "front" && comfy === "youtube") {
      document.querySelector("ruby").removeAttribute(".hidden");
    } else if (9pickProgram === "dogs" || pickProgram === "games") && motivation === "back" && comfy === "hacker") {
      document.querySelector("python").removeAttribute(".hidden");
    } else if ((pickProgram === "dogs" || pickProgram === "apps") && motivation === "dog" && comfy === "wait") {
      document.querySelector("explore").removeAttribute(".hidden")
    };
});
