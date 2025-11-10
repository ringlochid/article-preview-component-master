function main() {
  const share_btn = document.querySelector(".share-btn");
  const pop = document.getElementById("share-popover");

  share_btn.setAttribute("aria-expanded", "false");

  share_btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = !pop.hidden;
    pop.hidden = isOpen;
    share_btn.setAttribute("aria-expanded", String(!isOpen));
  });

  document.addEventListener("click", (e) => {
    if (!share_btn.contains(e.target) && !pop.contains(e.target)) {
      pop.hidden = true;
      share_btn.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      pop.hidden = true;
      share_btn.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("DOMContentLoaded", main);