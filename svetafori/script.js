const ColorMixin = {
    changeColor(lightElements, currentIndex) {
      lightElements.forEach((el, index) => {
        el.style.backgroundColor =
          index === currentIndex
            ? el.classList.contains("red")
              ? "red"
              : el.classList.contains("yellow")
              ? "yellow"
              : "green"
            : "gray";
      });
    },
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const lights = document.querySelectorAll(".light");
    const switchButton = document.getElementById("switch");
  
    let currentLight = 0;
  

    switchButton.addEventListener("click", () => {
      currentLight = (currentLight + 1) % lights.length;
      ColorMixin.changeColor(lights, currentLight);
    });
  });
  