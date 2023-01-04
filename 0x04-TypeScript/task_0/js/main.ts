interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;

}

let Student1: Student = {
    firstName: 'kendi',
    lastName: 'rita',
    age: 22,
    location: 'Canada'

};

let Student2: Student = {
    firstName: 'mbaya',
    lastName: 'shui',
    age: 24,
    location: 'New york'
};

let studentsList: Student[] = [Student1, Student2];

// let table = document.createElement('table');

// for (let Student of studentsList) {
//     let row = table.insertRow();
//     let firstNameCell = row.insertCell();
//     let lastNameCell = row.insertCell();
//     let ageCell = row.insertCell();
//     let locationCell = row.insertCell();

// }

const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});

document.body.appendChild(table);