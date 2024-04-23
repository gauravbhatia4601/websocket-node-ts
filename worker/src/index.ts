import { createClient } from "redis";


const redisClient = createClient();

async function main(){
    await redisClient.connect();

    while(1){
        const submissions = await redisClient.brPop("problems", 0)
        console.log(submissions)
        console.log("submission processed");
    }
}

main()