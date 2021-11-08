let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');


let employees = [
    { Name: 'James', email : 'a@1',phone : 90000000,website : 'ee',companyname : 'eee'},
    { Name: 'James',email:'b@1' ,phone: 90808000 ,website: 'ef',companyname: 'jddj' },
    { Name: 'James',email:'c@1' ,phone: 087077707 ,website:'dd',companyname:'dhd' },
    { Name: 'James',email:'d@1' ,phone: 3787987370 ,website: 'ddd',companyname:'eej' },
    { Name: 'James',email:'e@1',phone:4898444 ,website:'rrr',companyname:'rir' },
    { Name: 'James',email:'y@1' ,phone: 848409494 ,website:'jruuhu',companyname:'rjiir' },
]

let headers = ['Name', 'Email', 'Phone','Website','Company name'];

btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    employees.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });

    myTable.appendChild(table);
});