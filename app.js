const WHATSAPP_NUMBER = "919043792188";
const EMAIL = "janukabi2005@gmail.com";

// Open / Close Modal
function openQuote(service = "") {
  const modal = document.getElementById("quoteModal");
  modal.classList.add("open");

  const serviceSelect = document.getElementById("service");
  if (service && serviceSelect) serviceSelect.value = service;
}

function closeQuote() {
  const modal = document.getElementById("quoteModal");
  modal.classList.remove("open");
}

// Mobile menu
function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  nav.classList.toggle("open");
}

// Escape key closes modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeQuote();
});

// Click outside modal closes
document.addEventListener("click", (e) => {
  const modal = document.getElementById("quoteModal");
  if (!modal) return;
  if (modal.classList.contains("open") && e.target === modal) closeQuote();
});

// Handle form submit: Email + WhatsApp
function handleQuoteSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value.trim();
  const budget = document.getElementById("budget").value.trim();
  const date = document.getElementById("date").value.trim();
  const message = document.getElementById("message").value.trim();

  const text =
`Hi MK Tech 👋
New Quote Request ✅

Name: ${name}
Phone: ${phone}
Email: ${email}

Service: ${service}
Budget: ${budget || "Not mentioned"}
Needed Date: ${date || "Not mentioned"}

Requirement:
${message}`;

  // 1) Open WhatsApp with prefilled message
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");

  // 2) Submit to Email using FormSubmit (hidden form)
  const form = document.getElementById("emailForm");
  document.getElementById("fs_name").value = name;
  document.getElementById("fs_phone").value = phone;
  document.getElementById("fs_email").value = email;
  document.getElementById("fs_service").value = service;
  document.getElementById("fs_budget").value = budget;
  document.getElementById("fs_date").value = date;
  document.getElementById("fs_message").value = message;

  form.submit();

  // Close modal after submit
  closeQuote();
}

// Set year
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});