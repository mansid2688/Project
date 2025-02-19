document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;

    // Store data (for demonstration, we will just show a message)
    const message = `Profile Created:\nName: ${name}\nAge: ${age}\nGender: ${gender}\nContact: ${contact}\nAddress: ${address}`;
    document.getElementById('message').innerText = message;

    // Optionally, you can hide the form and show the edit button
    document.getElementById('patientForm').style.display = 'none';
    document.getElementById('editButton').style.display = 'block';
});

// Edit button functionality (for demonstration)
document.getElementById('editButton').addEventListener('click', function() {
    document.getElementById('patientForm').style.display = 'block';
    document.getElementById('editButton').style.display = 'none';
    document.getElementById('message').innerText = ''; // Clear message
});