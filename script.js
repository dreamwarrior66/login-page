function verifyStudent(event) {
  event.preventDefault();
  const id = document.getElementById('identifier').value.trim();

  if (!id) {
    alert('Please enter a valid Email or ID');
    return;
  }

  // Simulated student data
  const student = {
    name: "John Doe",
    email: id,
    mobile: "9876543210",
    domain: "Web Development",
    college: "Dummy University",
    start: "01 June 2024",
    duration: "1 Month",
    photo: "https://via.placeholder.com/130",
    assignments: [true, false, true, true],
    certificate: "#",
    status: "Completed"
  };

  // Store data in sessionStorage
  sessionStorage.setItem("studentData", JSON.stringify(student));

  // Navigate to result page
  window.location.href = "result.html";
}
