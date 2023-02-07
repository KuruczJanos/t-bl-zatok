/*
* File: app.js
* Author: Kurucz János
* Copyright: 2023, Kurucz János
* Group: Szoft 1/I/E
* Date: 2023-02-07
* Github: https://github.com/KuruczJanos/t-bl-zatok.git
* Licenc: GNU GPL
*/
 const employeeBody = document.querySelector("#employeeBody");
 const employeeTable = [{Name:"Pali", Country:"Budapest", Salary: 385},
                        {Name:"Kati", Country:"Miskolc", Salary:325},
                        {Name:"Guszti", Country:"Debrecen", Salary:286},
                        {Name:"József", Country:"Nyíregyháza", Salary:550},
                        {Name:"Anna", Country:"Szolnok", Salary:425},
                        {Name:"Károly", Country:"Pécs", Salary: 369},
                        {Name:"Béla", Country:"Dunaújváros", Salary:755},
                        {Name:"Mária", Country:"Székesfehérvár", Salary:222},
                        {Name:"Géza", Country:"Sopron", Salary:855}
];

employeeTable.forEach((employee)=>{
    console.log(employee.Country);
    let tr = document.createElement('tr');
    let tdName=document.createElement('td');
    let tdCountry=document.createElement('td');
    let tdSalary=document.createElement('td');
    tdName.textContent = employee.Name;
    tdCountry.textContent = employee.Country;
    tdSalary.textContent = employee.Salary;
    employeeBody.append(tr);
    tr.append(tdName);
    tr.append(tdCountry);
    tr.append(tdSalary);
});
