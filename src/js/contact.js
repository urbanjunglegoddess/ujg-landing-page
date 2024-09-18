const formSelection = document.getElementById("form-selection");
const generalForm = document.getElementById("general-form");
const projectForm = document.getElementById("project-form");
const collaborationForm = document.getElementById("collaboration-form");

formSelection.addEventListener("change", function() {
  // Hide all forms initially
  generalForm.classList.add("hidden");
  projectForm.classList.add("hidden");
  collaborationForm.classList.add("hidden");

  // Show the selected form
  if (formSelection.value === "general") {
    generalForm.classList.remove("hidden");
  } else if (formSelection.value === "project") {
    projectForm.classList.remove("hidden");
  } else if (formSelection.value === "collaboration") {
    collaborationForm.classList.remove("hidden");
  }
});

export default formSelection;
export default generalForm;
export default projectForm;
export default collaborationForm;
