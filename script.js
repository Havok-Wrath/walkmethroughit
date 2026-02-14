document.addEventListener("DOMContentLoaded", function () {
  // ===== Site Status Banner (versioned dismissal) =====
  const banner = document.getElementById("siteStatus");
  const closeButton = document.getElementById("dismissStatus");

  if (banner && closeButton) {
    const SITE_STATUS_VERSION = "2026-02-08";
    const storageKey = `siteStatusDismissed_${SITE_STATUS_VERSION}`;

    if (localStorage.getItem(storageKey) === "true") {
      banner.style.display = "none";
    }

    closeButton.addEventListener("click", function () {
      banner.style.display = "none";
      localStorage.setItem(storageKey, "true");
    });
  }

  // ===== FAQ Accordion (only one open at a time) =====
  const faqItems = document.querySelectorAll(".faq-item");

  if (faqItems.length > 0) {
    faqItems.forEach(function (item) {
      const summary = item.querySelector("summary");
      if (!summary) return;

      summary.addEventListener("click", function () {
        // If this item is currently closed, it's about to open -> close others first
        if (!item.hasAttribute("open")) {
          faqItems.forEach(function (otherItem) {
            if (otherItem !== item) {
              otherItem.removeAttribute("open");
            }
          });
        }
      });
    });
  }
});

const form = document.getElementById("suggestionForm");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const message = document.getElementById("confirmationMessage");
    message.style.display = "block";

    form.reset();
  });
}

