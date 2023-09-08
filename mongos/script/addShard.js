use admin;
db.auth("root","scrmpwd123");
sh.addShard("scrm_shard1/mongodb_shard1_0:27017,mongodb_shard1_1:27017");
sh.addShard("scrm_shard2/mongodb_shard2_0:27017,mongodb_shard2_1:27017");
