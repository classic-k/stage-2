import express from "express";
import { fetch_person, create, update, remove} from "../utils/user.js";

export const router = express.Router();

router.get("/", async(req, res) => {

    const pname = req.query['name']
    const pid = req.query['id']
    console.log(pname,pid)
  let resp
    
     if(pname)
     {
        console.log(pname)
       resp = await fetch_person(pname,"")
     }
     else if(pid)
     {
        console.log(pid)
       resp = await fetch_person("",pid)
     }
     else
     {
        return res.send({message: "Specify name or id as query or parameter"})
     }
   if(resp.err)
     res.send({message:resp.message})

     else

     res.send({person: resp.person})
});

// get via user id
router.get("/:nameid", async(req, res) => {
    const param = req.params['nameid']
    let resp;
    if(param === "")

 {
    res.send({message: "Specify name or id to fetch person details"})
 }
 try {
       const pid = parseInt(param)
        resp = await fetch_person("",pid)
 } catch (error) {

         resp = await fetch_person(param,"")
 }

   if(resp.err)
     res.send({message:resp.message})

     else

     res.send({person: resp.person})
});

// post for creating users
router.post("/",  async(req, res) => {
let resp;

    const pname = req.body['name']

    if(pname !== "")
    {
    resp = await create(pname)

    }
 else
 {
    return res.send({ message:"specify name to add person to DB"})
 }
    if(resp.err)
     res.send({message:resp.message})

     else

     res.send({message: "successful", person: resp.person})
});


router.patch("/:id", async(req, res) => {

    let resp;
 const name = req.body['name']
const pid = req.params.id
    if(name !== "")
    {
    resp = await update(name, pid)

    }
 else
 {
    return res.send({ message:"specify name to add person to DB"})
 }
    
      if(resp.err)
     res.send({message:resp.message})

     else

     res.send({message: "successful", person: resp.person})
});

router.delete("/:id", async(req, res) => {

let resp
const pid = req.params.id
  
   resp = await remove(pid)


     if(resp.err)

     res.send({message:resp.message})

     else

     res.send({message: "delete successful", person: resp.person})
});