// Initialize the employees array
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Jane Davis', age: 40, department: 'HR', salary: 55000 },
    // More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function to calculate total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display employees in the HR department
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to find and display employee details by ID
function findEmployeeById(employeeId) {
    // Find the employee with the matching ID
    const foundEmployee = employees.find(employee => employee.id === employeeId);

    // Check if an employee was found and display their details
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `
            <p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        // Display a message if no employee was found with the given ID
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}

