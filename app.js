// make a fetch request to the Node.js server to retrieve the data
fetch('http://localhost:3000/api/family')
  .then(response => response.json())
  .then(data => {
console.log(data)

const dataTable = document.querySelector('.table tbody');

data.forEach(item => {
  const row = document.createElement('tr');
  const idCell = document.createElement('td');
  const nameCell = document.createElement('td');
  const parentCell = document.createElement('td');
  const genderCell = document.createElement('td');
  const actionCell = document.createElement('td');

  idCell.textContent = item.id;
  nameCell.textContent = item.name;
  parentCell.textContent = item.parent;
  genderCell.textContent = item.gender;
  actionCell.innerHTML = `
    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
  `;

  row.appendChild(idCell);
  row.appendChild(nameCell);
  row.appendChild(parentCell);
  row.appendChild(genderCell);
  row.appendChild(actionCell);

  dataTable.appendChild(row);
});

  });

  function submitForm(event) {
    event.preventDefault();  // Prevent the form from refreshing the page
    console.log('submit test')

    const familyName = document.querySelector('#familyName').value;
    const parentID = document.querySelector('#parentID').value;
    const gender = document.querySelector('#gender').value;
    
    console.log(familyName)
    // Do something with the form values (e.g. send them to a server)
    fetch('http://localhost:3000/api/family', {
        method: 'POST',
        body: JSON.stringify({
          name: familyName,
          parent: parentID,
          gender: gender
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

  const Addform = document.getElementById('addFamily');
  if (Addform) Addform.addEventListener('submit', submitForm);
  