const connect = require('./db-connect')
const db = connect.wrapDB()

exports.getEmployeeNames = async () => {
	return await db.query("SELECT CONCAT_WS(' ', fname, lname) as `name` FROM employees;")
}

exports.getEmployeeDepartments = async () => {
	return await db.query("SELECT emp_id, CONCAT(fname, ' ', lname) as 'names', name as department FROM employees JOIN department USING(dept_id) ORDER BY dept_id;")
}

exports.getMaxSale = async () => {
	return await db.query("select emp_id as id, CONCAT(fname, ' ', lname) AS 'name', total_sales As 'max' FROM employees INNER JOIN sales_employees using(emp_id) order by total_sales DESC LIMIT 1;")
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
