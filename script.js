document.addEventListener("DOMContentLoaded", function () {
  const svgatorObject = document.getElementById("animated-svg");
  const svgatorDocument =
    svgatorObject.contentDocument || svgatorObject.contentWindow.document;
  const svgatorElement = svgatorDocument.getElementById("e4VADjyvLY61");
  if (svgatorElement && svgatorElement.svgatorPlayer) {
    svgatorElement.svgatorPlayer.play();
  }

  // Flag to track if animation and scroll reset has occurred
  let animationAndResetDone = false;

  // Function to simulate scroll and trigger animation and reset
  function simulateScrollAndReset() {
    const overlay = document.getElementById("overflow");
    const body = document.body;
    body.style.overflow = "visible";
    overlay.classList.add("wipeout-animation");
    if (!animationAndResetDone) {
      window.scrollTo(0, 0);
    }
    animationAndResetDone = true;
  }

  // Simulate scroll and reset after a delay
  setTimeout(simulateScrollAndReset, 1000); // Adjust delay as needed

  // Event listener for wheel scroll
  window.addEventListener("wheel", function () {
    simulateScrollAndReset();
  });

  // Event listener for arrow key scroll
  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      simulateScrollAndReset();
    }
  });
});
