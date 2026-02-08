document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("siteStatus");
  const closeButton = document.getElementById("dismissStatus");

  if (!banner || !closeButton) return;

  // Hide banner if previously dismissed
  if (localStorage.getItem("siteStatusDismissed") === "true") {
    banner.style.display = "none";
  }

  closeButton.addEventListener("click", function () {
    banner.style.display = "none";
    localStorage.setItem("siteStatusDismissed", "true");
  });
});
