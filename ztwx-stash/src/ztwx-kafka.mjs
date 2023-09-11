import {Kafka} from "kafkajs";
import config from "./config.mjs";
import {insertBatch,mongod} from "./mongo.mjs";


const kafka= new Kafka({
  clientId: config.clientId,
  brokers: config.brokers,
  ssl: false,
  sasl: config.sasl
});

const consumer=kafka.consumer({
  groupId: config.groupId
});

await consumer.connect();
await consumer.subscribe({topic:config.topic});
console.log("start.");
await consumer.run({
  eachBatchAutoResolve: true,
  eachBatch: async({batch,heartbeat,resolveOffset})=>{
    insertBatch(batch.messages);
    await heartbeat();
  }
})
