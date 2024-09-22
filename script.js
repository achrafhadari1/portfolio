document.addEventListener("DOMContentLoaded", function () {
  const svgatorObject = document.getElementById("animated-svg");

  // Ensure the SVG is fully loaded
  svgatorObject.addEventListener("load", function () {
    const svgatorDocument =
      svgatorObject.contentDocument || svgatorObject.contentWindow.document;

    if (!svgatorDocument) {
      console.error("SVG document not found.");
      return;
    }

    const svgatorElement = svgatorDocument.getElementById("e4VADjyvLY61");

    if (svgatorElement && svgatorElement.svgatorPlayer) {
      svgatorElement.svgatorPlayer.play();
    }
  });

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
  setTimeout(simulateScrollAndReset, 1000);

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
  document.querySelector(".socials").addEventListener("click", function () {
    // Scroll to the bottom of the page
    document.querySelector(".talk-lets").scrollIntoView({ behavior: "smooth" });
    console.log("clci");
  });
});
