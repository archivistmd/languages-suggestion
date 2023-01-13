window.onload = function() {
  // the form element
  const form = document.querySelector("form");
  // event handler for the form's submission
  form.onsubmit = function(event) {
    event.preventDefault();

    function handleSelect(event) {
      event.preventDefault();
      const selection = document.getElementById("baseQs").value;
    }
    
    window.addEventListener("load", function() {
      document.getElementById("select-form").addEventListener("submit", handleSelect);
    });