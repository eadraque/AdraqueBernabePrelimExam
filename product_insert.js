const pool = require('./db'); 

const sql = 'INSERT INTO "PrelimExam"."AB_Product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
const data = [2, 'lappy', 200];


pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();