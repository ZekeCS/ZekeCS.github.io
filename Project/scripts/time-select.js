// js file for the time select modal
const modal = document.getElementById("meetingModal");
const btn = document.getElementById("set-meeting");
const span = document.getElementsByClassName("close")[0];

// when the user clicks the button, open the modal 
btn.onclick = () => {
  modal.style.display = "block";
};

span.onclick = () => {
  modal.style.display = "none";
};
//close modal when user clicks outside of it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};