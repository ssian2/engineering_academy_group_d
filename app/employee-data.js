const connect = require('./db-connect')
const db = connect.wrapDB()

exports.getEmployeeNames = async () => {
	return await db.query("SELECT CONCAT_WS(' ', fname, lname) as `name` FROM employees;")
}

exports.getEmployeeDepartments = async () => {
	return await db.query("SELECT CONCAT(fname, ' ', lname) as 'names', name as department FROM employees JOIN department USING(dept_id) ORDER BY dept_id;")
}