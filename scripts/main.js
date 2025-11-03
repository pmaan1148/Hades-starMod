Events.on(ContentInitEvent, () => {
    const hydra = Vars.content.getByName(ContentType.unit, "myfirstmod-cerberus-hydra");
    const link1 = Vars.content.getByName(ContentType.unit, "myfirstmod-hydra-link1");
    const link2 = Vars.content.getByName(ContentType.unit, "myfirstmod-hydra-link2");

    if(hydra == null) Log.err("[Hydra] cerberus-hydra not found!");
    else Log.info("[Hydra] Hydra loaded! (" + hydra.name + ")");

    if(link1 == null) Log.err("[Hydra] hydra-link1 not found!");
    else Log.info("[Hydra] Link1 loaded! (" + link1.name + ")");

    if(link2 == null) Log.err("[Hydra] hydra-link2 not found!");
    else Log.info("[Hydra] Link2 loaded! (" + link2.name + ")");
});



require("saferun");
require("Phoenix_death");
require("destroyer_death");
require("hydra_death");



