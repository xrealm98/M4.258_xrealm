/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

function scrollToTop() {
  const btnToTop = document.getElementById("btnToTop");

  btnToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  window.addEventListener("scroll", () => {
    window.scrollY > 600
      ? (btnToTop.style.display = "block")
      : (btnToTop.style.display = "none");
  });
}

scrollToTop();
