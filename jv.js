axes = {
        level: 0,
        mas: 0,
        dmg: 1,
        crit: 0,
        sks: 2
    };
function mcmmoaxe() {
    axes.level=prompt("Axes Level");
    if(axes.level > 200){
        axes.mas = 4
    }else{
        axes.mas = axes.level*0.02
    }
    axes.dmg = (axes.level*0.02)+1;
    if(axes.level > 750){
        axes.crit - 37.5
    }else{
        axes.crit = axes.level*0.05
    }
    alert("Level "+ String(axes.level)+ "\nDeal "+String(axes.dmg)+ " damage to armour\nbonus "+ String(axes.mas)+" damage\n"+String(axes.crit)+"% chance to Crit")
}
