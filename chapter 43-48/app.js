// num1
function clickeable()
{
   alert("Hello Dear")
}
// // Qno:02
function showAlert(mobileName)
{
  alert('You clicked on ' + mobileName);
}


//  num3
// Array of student data
const students = [
   { id: 1, name: 'John Doe', age: 20 },
   { id: 2, name: 'Jane Smith', age: 22 },
   { id: 3, name: 'Alice Johnson', age: 19 },
   { id: 4, name: 'Bob Brown', age: 21 },
   { id: 5, name: 'Charlie Davis', age: 23 },
   { id: 6, name: 'David Wilson', age: 20 },
   { id: 7, name: 'Eve Lewis', age: 21 },
   { id: 8, name: 'Frank Green', age: 22 },
   { id: 9, name: 'Grace Martin', age: 19 },
   { id: 10, name: 'Hank Harris', age: 23 }
];

// Function to display students in the table
function displayStudents() {
   const tableBody = document.getElementById('studentTable');
   tableBody.innerHTML = ''; // Clear existing rows

   students.forEach((student, index) => {
       const row = document.createElement('tr');

       row.innerHTML = `
           <td>${student.id}</td>
           <td>${student.name}</td>
             <td>${student.age}</td>
               <td><button onclick="deleteRow(${index})">Delete</button></td>
           `;

           tableBody.appendChild(row);
       });
   }

   // Function to delete a student row
   function deleteRow(index) {
       students.splice(index, 1); // Remove student from the array
       displayStudents(); // Re-display the updated list
   }

   // Initial display of students
   displayStudents();

   // num4
   const imgElement = document.getElementById('myImage');

   imgElement.addEventListener('mouseover', function () {
       imgElement.src = 'image2.jpg'; 
   });

   imgElement.addEventListener('mouseout', function () {
       imgElement.src = 'image1.jpg';
   });

   // num5
   let count = 0;

   function increase() {
       count++;
       document.getElementById("counter").innerText = count;
   }

   function decrease() {
       count--;
       document.getElementById("counter").innerText = count;
   }
