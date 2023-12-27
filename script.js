document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const imageUrl = document.getElementById('imageurl').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const skills = Array.from(document.querySelectorAll('input[name="skill"]:checked')).map(skill => skill.value);
  
    // Create student entry
    const detailsContainer = document.getElementById('enroll-details');
  
    const entry = document.createElement('div');
    entry.classList.add('student-entry');
  
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details-container');
  
    const details = document.createElement('div');
    details.classList.add('student-info');
    details.innerHTML = `
      <h2>Enrollment Details</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Website:</strong> ${website}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Skills:</strong> ${skills.join(', ')}</p>
    `;
    detailsDiv.appendChild(details);
    entry.appendChild(detailsDiv);
  
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image-container');
  
    const img = document.createElement('img');
    img.classList.add('student-img');
    img.src = imageUrl;
    img.alt = 'Student Image';
    imageDiv.appendChild(img);
    entry.appendChild(imageDiv);
  
    detailsContainer.appendChild(entry);
  
    // Show the enrollment details container
    detailsContainer.style.display = 'block';
  });
