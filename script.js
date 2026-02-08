document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("siteStatus");
  const closeButton = document.getElementById("dismissStatus");

  if (!banner || !closeButton) return;

  closeButton.addEventListener("click", function () {
    banner.style.display = "none";
  });
});
