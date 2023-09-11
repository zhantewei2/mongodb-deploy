export default {
  brokers: ["elk-kafka1:9092","elk-kafka2:9092","elk-kafka3:9092"],
  groupId: "logstash-behavior",
  topic: "behavior-topic",
  clientId: "ztw-stash",
  sasl: {
    mechanism: "PLAIN",
    username: "scrm",
    password: "scrmpwd123"
  },
  mongodbUrl: "mongodb://scrm:scrmpwd123@mongos:27017/user_center?authSource=admin",
  mongodbDb: "user_center"
}
