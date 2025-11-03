
// フェニックス撃破時にセンチネルを出す (セーフティ付き)
Events.on(UnitDestroyEvent, e => {
    try{
        let unit = e.unit;

        if(unit == null || unit.type == null){
            Log.warn("[MyFirstMod][PhoenixDeath] unit または unit.type が null");
            return;
        }

        // フェニックスが死んだ場合のみ
        if(unit.type.name == "myfirstmod-cerberus-phoenix"){
            let sentinel = Vars.content.getByName(ContentType.unit, "myfirstmod-cerberus-sentinel");
            
            if(sentinel == null){
                Log.err("[MyFirstMod][PhoenixDeath] Sentinel が見つからなかった！");
                return;
            }

            // 3体出す
            for(let i = 0; i < 3; i++){
                try{
                    sentinel.spawn(unit.team, unit.x + Mathf.range(20), unit.y + Mathf.range(20));
                }catch(spawnErr){
                    Log.err("[MyFirstMod][PhoenixDeath] Sentinel spawn error: " + spawnErr);
                }
            }

            Log.info("[MyFirstMod][PhoenixDeath] Phoenix destroyed -> 3 Sentinels spawned!");
        }
    }catch(err){
        Log.err("[MyFirstMod][PhoenixDeath] Fatal error: " + err);
    }
});