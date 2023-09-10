use admin;
db.auth("root","scrmpwd123");

rs.initiate({
    _id: "scrm_shard4",
    members: [
        {
            _id: 0,
            host: "mongodb_shard4_0:27017",
            priority: 2
        },
        {
            _id: 1,
            host: "mongodb_shard4_1:27017",
            priority: 1
        }
    ]
});
