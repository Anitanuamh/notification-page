const notification1 = document.querySelector(".notification-1");
const message = notification1.querySelector(".message");

notification1.addEventListener("click", function () {
  message.classList.toggle("active");
  if (message.classList.contains("active")) {
    // calculate the height of the message and add it as padding to the bottom of the notification
    const messageHeight = message.offsetHeight;
    notification1.style.paddingBottom = `${messageHeight}px`;
  } else {
    // remove the padding from the bottom of the notification
    notification1.style.paddingBottom = "10px";
  }
});
