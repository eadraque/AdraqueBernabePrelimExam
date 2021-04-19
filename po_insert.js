const pool = require('./db'); 

const sql =
    'INSERT INTO "PrelimExam"."AB_PurchaseOrder"(po_id,supp_id,cust_id, po_date, po_condition) VALUES ($1,$2,$3,$4,$5) RETURNING *';
const data = [2, 2, 2, '2021-04-07', 'good'];


pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});