document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("siteStatus");
  const closeButton = document.getElementById("dismissStatus");

  if (!banner || !closeButton) return;

  // Change this whenever you update the banner message
  const SITE_STATUS_VERSION = "2026-02-08";
  const storageKey = `siteStatusDismissed_${SITE_STATUS_VERSION}`;

  // Hide banner only if THIS version was dismissed
  if (localStorage.getItem(storageKey) === "true") {
    banner.style.display = "none";
  }

  closeButton.addEventListener("click", function () {
    banner.style.display = "none";
    localStorage.setItem(storageKey, "true");
  });
});
