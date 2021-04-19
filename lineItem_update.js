const pool = require('./db'); 

const sql = 'UPDATE "PrelimExam"."AB_LineItem" SET li_quan = $1, li_price = $2 WHERE po_id =4 RETURNING *';
const data = [6, 6000];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});


pool.end();