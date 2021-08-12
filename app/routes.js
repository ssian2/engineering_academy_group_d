const express = require('express')
const router = express.Router()
const emp = require('./employee-data')

// Add your routes here - above the module.exports line

router.get('/vertical', async (req, res) => {

	res.render('vertical-slice', {
		employees: await emp.getEmployeeNames()
	})
});

module.exports = router
