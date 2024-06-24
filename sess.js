document.getElementById('sessionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    created();
  });
  
  function created() {
    var sessionName = document.getElementById('name').value;
    var sessionDate = document.getElementById('date').value;
    var sessionTime = document.getElementById('time').value;
    var sessionStudents = document.getElementById('students').value;
  
    // Display an alert message
    alert('SYour session is created successfully!');
  
    // Create a new list item with the form details
    var newSession = document.createElement('li');
    newSession.textContent = `Name: ${sessionName},  \nDate: ${sessionDate}, \nTime: ${sessionTime}, Students: ${sessionStudents}`;
  
    // Append the new list item to the existing sessions list
    document.getElementById('sessionList').appendChild(newSession);
  
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('students').value = '';
  }