window.onload = function() {
  // the form element
  const form = document.querySelector("form");
  // event handler for the form's submission
  form.onsubmit = function(event) {
    event.preventDefault();
