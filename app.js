const WHATSAPP_NUMBER = "919043792188"; // your number

// Set Year
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

// Modal open/close
function openQuote(){
  document.getElementById("quoteModal").classList.add("open");
}
function closeQuote(){
  document.getElementById("quoteModal").classList.remove("open");
}

// Submit Quote
function handleQuoteSubmit(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value.trim();
  const budget = document.getElementById("budget").value.trim();
  const date = document.getElementById("date").value.trim();
  const message = document.getElementById("message").value.trim();

  const text =
`Hi PixelCloud Tech 👋
New Quote Request ✅

Name: ${name}
Phone: ${phone}
Email: ${email}

Service: ${service}
Budget: ${budget || "Not mentioned"}
Needed Date: ${date || "Not mentioned"}

Requirement:
${message}`;

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");

  closeQuote();
}
document.getElementById("quoteForm").addEventListener("submit", handleQuoteSubmit);