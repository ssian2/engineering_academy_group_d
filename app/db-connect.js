const mysql = require('mysql2');
const dbconfig = require('./dbconfig.json');
const util = require('util');

exports.wrapDB = function () {
	const pool = mysql.createPool(dbconfig)
	return {
		query(sql, args) {
			console.log("Executing query")
			return util.promisify(pool.query)
			.call(pool, sql, args)
		}
	}
}
