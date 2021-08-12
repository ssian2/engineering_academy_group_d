const express = require('express')
const router = express.Router()
const emp = require('./employee-data')

// Add your routes here - above the module.exports line

router.get('/vertical', async (req, res) => {

	res.render('vertical-slice', {
		employees: await emp.getEmployeeNames()
	})
});

router.post('/hr_employee_add', async (req, res) => {
	var employee = req.body;

	var isValid = 1;

	if (isValid) {
		await emp.addEmployee(employee);
	}
	
	res.redirect(302, '/');
});

router.get('/hr/departments', async (req, res) => {

	res.render('hr_department', {
		employees: await emp.getEmployeeDepartments()
	})
});

module.exports = router
