use admin;
db.auth("root","scrmpwd123");

rs.initiate({
    _id: "scrm_shard2",
    members: [
        {
            _id: 0,
            host: "mongodb_shard2_0:27017",
            priority: 2
        },
        {
            _id: 1,
            host: "mongodb_shard2_1:27017",
            priority: 1
        }
    ]
});
