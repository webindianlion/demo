const pool  = require("../../config/database");

module.exports = {

 getUsers: (callBack) => { 
    pool.query(
    `select * from registration`,
    [],
    (err, results, fields)=>{
        if(err){
            return callBack(err);
        }
        return callBack(null, results)
    }
)},
getUserById: (id, callBack)=>{
    pool.query(
        `select * from registration where id=?`,
        [id],
        (err, results, fields) => {
            if(err){
                return callBack(err)
            }
            return callBack(null, results)
        }
    );
},

createUser: (data, callBack)=>{
    pool.query(
        `insert into registration(firstName, lastName, gender, email, password, number) values(?,?,?,?,?,?)`,
        [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number,
         ],
         (err, results, fields) => {
            if(err){
                return callBack(err)
            }
            return callBack(null, results)
         }
    )
},

updataUser: (data, callBack)=>{
    pool.query(
        `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id=?`,
        [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number,
            data.id
        ],
        (err, results, fields)=>{
            if(err){
               return callBack(err)
            }
            return callBack(null, results)
        }
    )
},

deleteUser: (id, callBack)=>{
    pool.query(
        `delete from registration where id=?`,
        [id],
        (err, results, fields)=>{
            if(err){
                return callBack(err)
            }
            return callBack(null, results)
        }
    )
},

getUserByEmal: (email, callBack)=>{
    pool.query(
        `select * from registration where email=?`,
        [email],
        (err, results, fields)=>{
            if(err){
                return callBack(err)
            }
            return callBack(null, results[0])
        }
    )
}

}

// console.log(pool)



