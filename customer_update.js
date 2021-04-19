const pool = require('./db'); 
const sql = 'UPDATE "PrelimExam"."AB_customer" SET cust_add = $1 WHERE cust_id =2 RETURNING *';
const data = ['SASA DAVAO CITY'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();