const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."AB_supplier"(supp_id,supp_name,supp_add) VALUES ($1,$2,$3) RETURNING *';
const data = ['2','chester','buhangin'];

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});
pool.end();