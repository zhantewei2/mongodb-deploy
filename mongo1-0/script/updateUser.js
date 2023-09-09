use admin;
db.auth("root","scrmpwd123");
db.runCommand({
    "updateUser":"scrm",
    "roles":[
        { role: 'dbOwner', db: 'stat_uat' },
        { role: 'dbOwner', db: 'dialogue_uat' },
        { role: 'dbOwner', db: 'stat' },
        { role: 'dbOwner', db: 'dialogue' },
        { role: 'dbOwner', db: 'cps' },
        { role: 'dbOwner', db: 'behavior'}
    ]
})
