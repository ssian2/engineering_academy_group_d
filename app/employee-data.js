const connect = require('./db-connect')
const db = connect.wrapDB()

exports.getEmployeeNames = async () => {
	return await db.query("SELECT CONCAT_WS(' ', fname, lname) as `name` FROM employees;")
}
