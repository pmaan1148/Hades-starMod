// Hydra 死亡時 → Link1 を 2機召喚
Events.on(UnitDestroyEvent, e => {
    let u = e.unit;
    if(!u) return;

    if(u.type.name == "myfirstmod-cerberus-hydra"){
        let link1 = Vars.content.getByName(ContentType.unit, "myfirstmod-hydra-link1");
        if(link1){
            for(let i = 0; i < 2; i++){
                link1.spawn(u.team, u.x + Mathf.range(20), u.y + Mathf.range(20));
            }
        }
    }

    // Link1 死亡時 → Link2 を 2機召喚
    if(u.type.name == "myfirstmod-hydra-link1"){
        let link2 = Vars.content.getByName(ContentType.unit, "myfirstmod-hydra-link2");
        if(link2){
            for(let i = 0; i < 2; i++){
                link2.spawn(u.team, u.x + Mathf.range(20), u.y + Mathf.range(20));
            }
        }
    }
});