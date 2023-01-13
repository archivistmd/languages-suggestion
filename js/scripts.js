function languageSuggestion(event) {
  event.preventDefault();
}

    const pickProgram = document.querySelector("input[name='pickProgramA']:checked")
    const motivation = document.querySelector("input[name='motivation']:checked")
    const comfy = document.querySelector("input[name='comfy']:checked")
    const game = document.querySelector("input[name='game']:checked")

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
  
  window.addEventListener("load", function(){
    const form = this.document.getElementByID("form");
    form.addEventListener("submit", languageSuggestion)
  })
