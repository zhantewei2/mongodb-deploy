use admin;
db.auth("root","scrmpwd123");

cfg=rs.conf();
cfg.members.push({
    _id:4,
    host: "mongodb_shard1_0",
    priority: 1
})

rs.reconfig(cfg);
