interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const Student_1: Student = {
    firstname: "Sogbamisero",
    lastname: "Oke",
    age: 12,
    location: "Palau Islands"
};

const Student_2: Student ={
    firstname: "Soeganmidogo",
    lastname: "Oke",
    age: 12,
    location: "Palau Islands"
};

const Studentlist: Student[] = [Student_1, Student_2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);

Studentlist.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const nameArea = document.createElement('td')
    const locationArea = document.createElement('td');

    nameArea.textContent = student.firstname;
    locationArea.textContent = student.location;
    
    row.appendChild(nameArea);
    row.appendChild(locationArea);
    tbody.appendChild(row)
});
document.body.appendChild(table);