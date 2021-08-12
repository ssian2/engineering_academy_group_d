const connect = require('./db-connect')
const db = connect.wrapDB()

exports.getEmployeeNames = async () => {
	return await db.query("SELECT CONCAT_WS(' ', fname, lname) as `name` FROM employees;")
}

exports.getEmployeeDepartments = async () => {
	return await db.query("SELECT emp_id, CONCAT(fname, ' ', lname) as 'names', name as department FROM employees JOIN department USING(dept_id) ORDER BY dept_id;")
}

exports.addEmployee = async (employee) => {
	return await db.query(
		`INSERT INTO employees 
			(fname, lname, dob, ni_number, email, salary, address, dept_id)
		VALUES
			(?, ?, ?, ?, ?, ?, ?, ?);`,
		[
			employee['first-name'],
			employee['last-name'],
			'' + employee['dob-year'] + '-' + employee['dob-month'] + '-' + employee['dob-day'],
			employee.ni_number,
			employee.email,
			employee.salary,
			employee.address,
			employee.department
		]
	);
}
