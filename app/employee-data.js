const connect = require('./db-connect')
const db = connect.wrapDB()

exports.getEmployeeNames = async () => {
	return await db.query("SELECT CONCAT_WS(' ', fname, lname) as `name` FROM employees;")
}

exports.addEmployee = async (employee) => {
	return await db.query(
		`INSERT INTO employees 
			(fname, lname, dob, ni_number, email, salary, address, dept_id)
		VALUES
			(?, ?, ?, ?, ?, ?, ?, ?);`,
		[
			employee['fname'],
			employee['lname'],
			'' + employee['dob_year'] + '-' + employee['dob_month'] + '-' + employee['dob_day'],
			employee.ni_number,
			employee.email,
			employee.salary,
			employee.address,
			employee.department
		]
	);
}
