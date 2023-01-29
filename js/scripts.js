function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("js").setAttribute("class", "hidden");
  document.getElementById("explore").setAttribute("class", "hidden");
}

    function getResults (event) {
    event.preventDefault();
    hideResults();
      
    const pickProgram = document.querySelector("input[name='pickProgram']:checked").value;
    const motivation = document.querySelector("input[name='motivation']:checked").value;
    const comfy = document.querySelector("input[name='comfy']:checked").value;

    console.log("you've made it to the getResults function!");

    const results = pickProgram + motivation + comfy;

    if ((pickProgram === "apps" || pickProgram === "web") && motivation !== "back" && comfy !== "hacker"){
      document.getElementById("js").removeAttribute("class");
    } else if ((pickProgram === "apps" || pickProgram === "games") && motivation !== "front" && comfy === "hacker") {
      document.getElementById("python").removeAttribute("class")
    } else if (pickProgram === "games" && motivation === "dog" && comfy !== "hacker") {
      document.getElementById("explore").removeAttribute("class");
    } else if (pickProgram !== "games" && motivation !== "back" && comfy !== "hacker") {
      document.getElementById("ruby").removeAttribute("class");
    } else if ((pickProgram === "app" || pickProgram === "games") && motivation !== "dog" && comfy === "hacker") {
      document.getElementById("explore").removeAttribute("class");
    } else if ((pickProgram === "dog" || pickProgram === "web") && motivation === "dog" && comfy !== "youtube") {
      document.getElementById("explore").removeAttribute("class");
    };
  }

    window.addEventListener("load", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", getResults);
    });