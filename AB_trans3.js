const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
     
        await client.query('BEGIN');

        
        const isCustomerCancel = true;

        
        const q1 =
            'INSERT INTO "PrelimExam"."AB_LineItem"(po_id, prod_id, li_quan, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const d1 = [2, 8, 1, 1500];
        const res1 = await client.query(q1, d1);

        
        if (isCustomerCancel) {
            throw '\nERROR: Customer Order Canceled!!';
        }

      
        await client.query('COMMIT');
    } catch (e) {
        
        await client.query('ROLLBACK');
        console.error(e);
        console.log('Failure State: Transaction Rollback!');
        throw e;
    } finally {
       
        client.release();
    }
})().catch(e => console.error(e.stack));
