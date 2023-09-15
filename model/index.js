import pgs from "pg"
import { config } from "./config.js"

const {Pool} = pgs
export const pool = new Pool(config)
pool.connect((err) => {


	if(err)
	{
		console.log(err)
		return
	}

    else
    {
        console.log("connected")
        const query =  `Create Table if not exists Person( id serial primary key, name varchar(50) not null) `
        try {
            pool.query(query)
            .then(console)
        } catch (error) {
            
        }
    }
	
})
