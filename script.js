document.querySelectorAll("a").forEach((a) => {
  if (a.href.includes("https://app.adjust.com/")) {
    a.style.display = "none";
  }
  if (a.href == document.location.href) {
    a.classList.add("active");
  }
});
