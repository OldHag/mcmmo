axes = {
        level: 0,
        mas: 0,
        dmg: 1,
        crit: 0,
        sks: 2
    };
bows = {
  level: 0,
  bd: 0,
  daze: 0,
  rtr: 0
}
function mcmmoaxe() {
    axes.level=prompt("Axes Level");
    if(axes.level > 200){
        axes.mas = 4
    }else{
        Math.abs(axes.mas = axes.level*0.02).toFixed(2)
    }
    axes.dmg = Math.abs((axes.level*0.02)+1).toFixed(2);
    if(axes.level > 750){
        axes.crit = 37.5
    }else{
        axes.crit = Math.abs(axes.level*0.05).toFixed(2)
    }
    alert("Level "+ String(axes.level)+ "\nDeal "+String(axes.dmg)+ " damage to armour\nbonus "+ String(axes.mas)+" damage\n"+String(axes.crit)+"% chance to Crit")
}
function mcmmobow() {
  bows.level=prompt("Archery Level");
  if(bows.level > 1000){
    bows.bd = 200;
    bows.daze = 50;
    bows.rtr = 100;
  }else{
    bows.daze = Math.abs(bows.level*0.05).toFixed(2);
    bows.bd = Math.abs(bows.level*0.2).toFixed(2);
    bows.rtr = Math.abs(bows.level*0.1).toFixed(2);
  }
  alert("Level "+String(bows.level)+"\nSkill Shot Bonus Damage "+String(bows.bd)+"%\nDaze Chance "+String(bows.daze)+"%\nChance to retrieve Arrows "+String(bows.rtr)+"%")
}
