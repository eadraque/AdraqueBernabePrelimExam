const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."AB_customer"(cust_id,cust_name,cust_add) VALUES ($1,$2,$3) RETURNING *';
const data = ['2','shan','mintal'];

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});
pool.end();