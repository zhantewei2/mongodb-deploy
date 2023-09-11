import {MongoClient} from "mongodb";
import config from "./config.mjs";
const client=new MongoClient(config.mongodbUrl);

const getCollection=corpId=>`behavior_${corpId}`;
await client.connect();

export const mongod=client;
export const insertBatch=async(messages)=>{

  const list={};
  for(let message of messages){
    let i;
    let corpId;
    let collectionName;
    try{
      i=JSON.parse(message.value.toString());
    }catch (e){
      console.log("[warn] json parse failure.");
      continue;
    }
    corpId=i["corpId"];
    if(!corpId){
      console.log("[warn] Ignore ,corpId is empty.");
      continue;
    }
    if(!i["code"]){
      console.log("[warn] Ignore, code is empty.")
      continue;
    }
    collectionName=getCollection(corpId);
    if(!list[collectionName])list[collectionName]=[];
    delete i.corpId;
    list[collectionName].push(i);
  }
  const keys=Object.keys(list);
  for(let key of keys){
    const insertResult= await client.db(config.mongodbDb).collection(key).insertMany(list[key]);
    console.log("[info] OutputResult:",insertResult.insertedCount);
  }

}
