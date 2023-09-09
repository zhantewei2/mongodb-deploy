use admin;
db.auth("root","scrmpwd123");

rs.initiate({
    _id: "scrm_config",
    configsvr: true,
    members:[
        {_id:0, host: "mongodb_config1:27017"}
    ]
});
