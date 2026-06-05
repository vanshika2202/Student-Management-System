let students = [];

const studentNameInput = document.getElementById("studentName");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("studentTableBody");

addBtn.addEventListener("click", addStudent);

function addStudent() {

    const name = studentNameInput.value.trim();

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    const student = {
        id: Date.now(),
        name: name
    };

    students.push(student);

    renderStudents();

    studentNameInput.value = "";
}

function renderStudents() {

    tableBody.innerHTML = "";

    students.forEach((student, index) => {

        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>
                    <button
                        class="delete-btn"
                        onclick="deleteStudent(${student.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(id) {

    students = students.filter(student => student.id !== id);

    renderStudents();
}