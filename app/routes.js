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

	if (!employee['fname']) {
		res.locals.fnameerror = "Need a first name";
		isValid = 0;
	}

	if (!employee['lname']) {
		res.locals.lnameerror = "Need a last name";
		isValid = 0;
	}

	if (!employee['address']) {
		res.locals.addresserror = "Need an address";
		isValid = 0;
	}

	if (!employee['salary']) {
		res.locals.salaryerror = "Need a salary";
		isValid = 0;
	} else if (employee['salary'] < 0) {
		res.locals.salaryerror = "Salary must be positive"
		isValid = 0;
	}

	if (!employee['dob_day'] ||
	    !employee['dob_month'] ||
	    !employee['dob_year']) {
		res.locals.doberror = "Need a full date of birth";
		isValid = 0;
	}

	if (!employee['ni_number']) {
		res.locals.nierror = "Need a full national insurance number";
		isValid = 0;
	}

	if (!employee['email']) {
		res.locals.emailerror = "Need an email address";
		isValid = 0;
	}

	if (isValid) {
		await emp.addEmployee(employee);
		res.redirect(302, '/');
	} else {
		res.render('hr_employee_add', req.body);
	}
});

router.get('/hr/departments', async (req, res) => {

	res.render('hr_department', {
		employees: await emp.getEmployeeDepartments()
	})
});

module.exports = router
