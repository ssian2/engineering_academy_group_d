const express = require('express')
const router = express.Router()
const emp = require('./employee-data')

// Add your routes here - above the module.exports line

router.get('/vertical', async (req, res) => {

	res.render('vertical-slice', {
		employees: await emp.getEmployeeNames()
	})
});

router.get('/hr/departments', async (req, res) => {

	res.render('hr_department', {
		employees: await emp.getEmployeeDepartments()
	})
});

module.exports = router
