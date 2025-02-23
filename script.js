document.querySelectorAll("a").forEach((a) => {
  if (a.href.includes("https://app.adjust.com/")) {
    a.style.display = "none";
  }
  if (a.href == document.location.href) {
    a.classList.add("active");
  }
});

  let deferredPrompt;
  const installButton = document.getElementById("installButton");

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.style.display = "block";
  });

  installButton.addEventListener("click", async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User installed the app");
      }
      deferredPrompt = null;
    }
  });