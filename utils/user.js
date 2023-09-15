import {pool} from "../model/index.js"

export const create = async(name) => {

    const query = "insert into person (name) values($1) returning id, name"

try {
  const res = await pool.query(query, [name])
 
  return {err: false,person: res.rows[0]}
} catch (error) {
    console.log(error)
    return {err: true, message: "An error occur try again"}
}

}

export const update = async(name, id) => {

    const query = "update person set name = $1 where id = $2 returning id, name"
try {
    
   const res = await pool.query(query,[name,id])
   console.log(res)
    return {err: false,person: res.rows[0]}
   
} catch (error) {
    console.log(error)
  return {err: true, message: "An error occur try again"}
}

}

export const remove = async(id) => {

    const query = "delete from person where id = $1 returning id, name"
try {
    
   const res = await pool.query(query,[id])
   console.log(res)
   return {err: false,person: res.rows[0]}
   
} catch (error) {
    console.log(error)
     return {err: true, message: "An error occur try again"}
}

}

export const fetch_person = async(name="", id="") => {
  console.log("Fetching")
  var query;
    if(name !== "")
    {
        query = "select id, name from person where name = $1"
        console.log("fetching by name",name)
          try {
        const res = await pool.query(query, [name])
        return {err: false,person: res.rows[0]}
    } catch (error) {
        console.log(error)
          return {err: true, message: "An error occur try again"}
    }
    }
    else if(id !== "")
 {   
    query = "select id, name from person where id = $1"
    console.log("fetching by id",id)
      try {
        const res = await pool.query(query, [id])
        return {err: false,person: res.rows[0]}
    } catch (error) {
        console.log(error)
         return {err: true, message: "An error occur try again"}
    }

}

else 
 return {err: true, message: "An error occur try again"}
    
}