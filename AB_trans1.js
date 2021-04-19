const pool = require("./db");

(async ()=>{

    const client = await pool.connect();
    try{
       
      await client.query('BEGIN');
      const q1 = `INSERT INTO "PrelimExam"."AB_supplier" 
                    (supp_id, 
                     supp_name, 
                     supp_add) 
                  VALUES ($1, 
                          $2, 
                          $3)`;
      const data1 = [1,
                     'Chester Bernabe',
                     'Buhangin'];
      const res = await client.query(q1,data1);
  
      const q2 = `INSERT INTO "PrelimExam"."AB_supplier"
                    (supp_id, 
                     supp_name, 
                     supp_add) 
                  VALUES ($1, 
                          $2, 
                          $3)`;
      const data2 = [3,
                     'Eddie Edraque',
                     'Calinan'];
      await client.query(q2,data2);

      const q3 = `INSERT INTO "PrelimExam"."AB_supplier"
      (supp_id, 
       supp_name, 
       supp_add) 
    VALUES ($1, 
            $2, 
            $3)`;
const data3 = [4,
       'Reniel Espinosa',
       'Cotabato'];
await client.query(q3,data3);

const q4 = `INSERT INTO "PrelimExam"."AB_supplier"
(supp_id, 
 supp_name, 
 supp_add) 
VALUES ($1, 
      $2, 
      $3)`;
const data4 = [5,
 'Ricart Narvasa',
 'Panabo'];
await client.query(q4,data4);

const q5 = `INSERT INTO "PrelimExam"."AB_supplier"
(supp_id, 
 supp_name, 
 supp_add) 
VALUES ($1, 
      $2, 
      $3)`;
const data5 = [6,
 'Bryan Apale',
 'Buhangin'];
await client.query(q5,data5);

const q6 = `INSERT INTO "PrelimExam"."AB_customer"
(cust_id, 
 cust_name, 
 cust_add) 
VALUES ($1, 
      $2, 
      $3)`;
const data6 = [1,
 'Patric',
 'Marilog'];
await client.query(q6,data6);

const q7 = `INSERT INTO "PrelimExam"."AB_customer"
(cust_id, 
 cust_name, 
 cust_add) 
VALUES ($1, 
      $2, 
      $3)`;
const data7 = [3,
 'Clyde chester',
 'Buhangin'];
await client.query(q7,data7);

const q8 = `INSERT INTO "PrelimExam"."AB_customer"
(cust_id, 
 cust_name, 
 cust_add) 
VALUES ($1, 
      $2, 
      $3)`;
const data8 = [4,
 'Tabornok',
 'street'];
await client.query(q8,data8);

const q9 = `INSERT INTO "PrelimExam"."AB_customer"
(cust_id, 
 cust_name, 
 cust_add) 
VALUES ($1, 
      $2, 
      $3)`;
const data9= [5,
 'knune',
 'roxAS'];
await client.query(q9,data9);

const q10 = `INSERT INTO "PrelimExam"."AB_Product"
(prod_id, 
 supp_id, 
 prod_name, 
 prod_price) 
VALUES ($1, 
      $2, 
      $3,
      $4)`;
const data10 = [2,
    1,
 'mouse',
 450];
await client.query(q10,data10);

const q11 = `INSERT INTO "PrelimExam"."AB_Product"
(prod_id, 
 supp_id, 
 prod_name, 
 prod_price) 
VALUES ($1, 
      $2, 
      $3,
      $4)`;
const data11 = [3,
    2,
 'keyboard',
 370];
await client.query(q11,data11);

const q12 = `INSERT INTO "PrelimExam"."AB_Product"
(prod_id, 
 supp_id, 
 prod_name, 
 prod_price) 
VALUES ($1, 
      $2, 
      $3,
      $4)`;
const data12= [8,
    3,
 'fdd',
 750];
await client.query(q12,data12);

const q13 = `INSERT INTO "PrelimExam"."AB_Product"
(prod_id, 
 supp_id, 
 prod_name, 
 prod_price) 
VALUES ($1, 
      $2, 
      $3,
      $4)`;
const data13 = [5,
    5,
 'harddive',
 240];
await client.query(q13,data13);

const q14 = `INSERT INTO "PrelimExam"."AB_Product"
(prod_id, 
 supp_id, 
 prod_name, 
 prod_price) 
VALUES ($1, 
      $2, 
      $3,
      $4)`;
const data14 = [6,
    5,
 'donggle',
 250];
await client.query(q14,data14);

await client.query('COMMIT');

    }catch(e){
      //failure state
      await client.query('ROLLBACK');
      throw e;
    }finally{
      //success state
      client.release();
    }
  })().catch(e=>console.error(e.stack))