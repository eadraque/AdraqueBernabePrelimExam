const pool = require('./db'); 

const sql =
    'INSERT INTO "PrelimExam"."AB_LineItem"(po_id, prod_id, li_quan, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
const data = [2, 4, 1, 5000];


pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();