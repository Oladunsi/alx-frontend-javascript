interface Teacher {
    readonly firstName?: string;
    readonly lastname?: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
};


const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

console.log(teacher3);
// const table = document.createElement('table');
// const tbody = document.createElement('tbody');

// table.appendChild(tbody);

// Studentlist.forEach((student: Student): void => {
//     const row = document.createElement('tr');
//     const nameArea = document.createElement('td')
//     const locationArea = document.createElement('td');

//     nameArea.textContent = student.firstname;
//     locationArea.textContent = student.location;
    
//     row.appendChild(nameArea);
//     row.appendChild(locationArea);
//     tbody.appendChild(row)
// });
// document.body.appendChild(table);