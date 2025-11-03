// destroyer_death.js

function safeRun(tag, fn){
    try{
        fn();
    }catch(err){
        print("[ERROR][" + tag + "] " + err);
    }
}

Events.on(UnitDestroyEvent, e => {
    safeRun("DestroyerDeath", () => {
        let unit = e.unit;
        if(unit == null) return;

        print("[Destroyer] unit type: " + unit.type.name);

        if(unit.type.name == "myfirstmod-cerberus-destroyer"){
            print("[Destroyer] 爆発開始 at " + unit.x + "," + unit.y);

            // エフェクト
            Fx.bigShockwave.at(unit.x, unit.y);
            Fx.massiveExplosion.at(unit.x, unit.y);
            print("[Destroyer] エフェクト成功");

            let radius = 160;
            let damage = 8000;

            // === 敵ユニットへダメージ ===
            Groups.unit.each(cons(other => {
                if(other.team != unit.team && other.team != Team.derelict){
                    if(Mathf.within(unit.x, unit.y, other.x, other.y, radius)){
                        other.damage(damage);
                    }
                }
            }));

            // === 敵建物へダメージ ===
            Groups.build.each(cons(build => {
                if(build.team != unit.team && build.team != Team.derelict){
                    if(Mathf.within(unit.x, unit.y, build.x, build.y, radius)){
                        build.damage(damage);
                    }
                }
            }));

            print("[Destroyer] ダメージ処理完了");
        }
    });
});