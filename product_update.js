const pool = require('./db'); 

const sql = 'UPDATE "PrelimExam"."AB_Product" SET prod_name = $1, prod_price = $2 WHERE supp_id = 1 RETURNING *';
const data = ['lappy1', 28000];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();