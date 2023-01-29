function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("js").setAttribute("class", "hidden");
  document.getElementById("explore").setAttribute("class", "hidden");
}


  window.addEventListener("load", function(){
    const form = this.document.getElementById("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      hideResults();

    const pickProgram = document.getElementById("input[name='pickProgram']:checked").value;
    const motivation = document.getElementById("input[name='motivation']:checked").value;
    const comfy = document.getElementById("input[name='comfy']:checked").value;

    const results = pickProgram + motivation + comfy;

    if ((pickProgram === "apps" || pickProgram === "web") && motivation === "front" && comfy === "tumblr") {
      document.getElementById("js").removeAttribute("hidden");
    } else if ((pickProgram ==="apps" || pickProgram === "web") && motivation === "front" && comfy === "youtube") {
      document.getElementById("ruby").removeAttribute("hidden");
    } else if ((pickProgram === "apps" || pickProgram === "games") && motivation === "back" && comfy === "hacker") {
      document.getElementById("python").removeAttribute("hidden")
    } else if ((pickProgram === "apps" || pickProgram === "web") && motivation === "wait" && comfy === "hacker"){
      document.getElementById("explore").removeAttribute("hidden");
    } else if ((pickProgram === "game" || pickProgram === "web") && motivation === "dog" && comfy === "youtube") {
      document.getElementById("explore").removeAttribute("hidden");
    } else if ((pickProgram === "game" || pickProgram === "web") && motivation === "front" && comfy === "youtube") {
      document.getElementById("ruby").removeAttribute("hidden");
    } else if ((pickProgram === "game" || pickProgram === "web") && motivation === "dog" && comfy === "hacker") {
      document.getElementById("explore").removeAttribute("hidden");
    } else if (pickProgram === "web" && motivation === "back" && comfy === "youtube") {
      document.getElementById("ruby").removeAttribute("hidden");
    } else if (pickProgram === "web" && motivation === "front" && comfy === "youtube") {
      document.getElementById("js").removeAttribute("hidden");
    } else if (pickProgram === "web" && motivation === "wait" && comfy === "hacker") {
      document.getElementById("explore").removeAttribute("hidden");
    } else if (pickProgram === "web" && motivation === "dog" && comfy === "tumblr") {
      document.getElementById("js").removeAttribute("hidden");
    } else if (pickProgram === "web" && motivation === "dog" && comfy === "hacker") {
      document.getElementById("explore").removeAttribute("hidden");    
    } else if (pickProgram === "dogs" && motivation === "dog" && comfy === "hacker") {
      document.getElementById("explore").removeAttribute("hidden");
    } else if (pickProgram === "dogs" && motivation === "front" && comfy === "tumblr") {
      document.getElementById("js").removeAttribute("hidden");
    } else if (pickProgram === "dogs" && motivation === "front" && comfy === "youtube") {
      document.getElementById("ruby").removeAttribute("hidden");
    } else if ((pickProgram === "dogs" || pickProgram === "games") && motivation === "back" && comfy === "hacker") {
      document.getElementById("python").removeAttribute("hidden");
    } else if ((pickProgram === "dogs" || pickProgram === "apps") && motivation === "dog" && comfy === "wait") {
      document.getElementById("explore").removeAttribute("hidden")
    };
  })
});
