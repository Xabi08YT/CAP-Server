"use server"

const pg = require('pg');

/*const dbConfig = {
    user: USERNAME,
    password: ADMIN_PASSWORD,
    host: DATABASE_URL,
    port: DB_PORT,
    database: TARGET_DB,
};*/

/**
 * Execute one request on the server by automatically connecting the client to the database, making the request and closing the connection.
 * @param {Request to execute on the DATABASE SERVER} request 
 * @param {Parameters for the request (not mandatory)} params 
 */
let execOneRequest = async (request, params) => {
    const DB_CLIENT = new pg.Client(dbConfig);
    try {
        DB_CLIENT.connect();
        let res;
        if (params == null || params == undefined) {
            res = await DB_CLIENT.query(request);
        } else {
            res = await DB_CLIENT.query(request, params);
        }
        DB_CLIENT.end();
        return res;
    } catch (err) {
        throw err;
    }
}

export async function getFallbackLabel(uid) {
/*    let results = await execOneRequest(`SELECT firstname,lastname FROM users WHERE uid=?`,[uid]).catch(err => {
        console.error(err);
    });
    console.log(results);*/
    return "FB";
}