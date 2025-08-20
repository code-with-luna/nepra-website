document.getElementById("complianceForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form submission
  let valid = true;

  // Clear old errors
  document.querySelectorAll("small").forEach(el => el.textContent = "");

  // Name
  let name = document.getElementById("name").value.trim();
  if (name.length < 3 || !/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById("nameError").textContent = "Name must be at least 3 letters and contain only alphabets.";
    valid = false;
  }

  // Email
  let email = document.getElementById("email").value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  }

  // Phone
  let phone = document.getElementById("phone").value.trim();
  if (!/^\d{10,15}$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone must be 10–15 digits.";
    valid = false;
  }

  // Company
  let company = document.getElementById("company").value.trim();
  if (company.length < 2) {
    document.getElementById("companyError").textContent = "Company name must be at least 2 characters.";
    valid = false;
  }

  // Job
  let job = document.getElementById("job").value.trim();
  if (job.length < 2) {
    document.getElementById("jobError").textContent = "Job title must be at least 2 characters.";
    valid = false;
  }

  // Date
  let date = new Date(document.getElementById("date").value);
  let today = new Date();
  today.setHours(0,0,0,0);
  if (!date || date <= today) {
    document.getElementById("dateError").textContent = "Please select a future date.";
    valid = false;
  }

  // Time
  let time = document.getElementById("time").value;
  if (!time) {
    document.getElementById("timeError").textContent = "Please select a time.";
    valid = false;
  }

  // Terms
  if (!document.getElementById("terms").checked) {
    document.getElementById("termsError").textContent = "You must agree to the Terms & Conditions.";
    valid = false;
  }

  // If all valid
  if (valid) {
    alert("Form submitted successfully ✅");
    this.reset();
  }
});
