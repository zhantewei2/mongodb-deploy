use admin;
db.auth("root","scrmpwd123");
cfg=rs.conf();
cfg.members[0].priority=2;
rs.reconfig(cfg);
