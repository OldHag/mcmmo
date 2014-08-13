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
acro = {
  level: 0,
  roll: 0,
  groll: 0,
  dodge: 0
}
function rAxes() {
  document.getElementById('axelevel').innerHTML = "Level "+ String(axes.level);
  document.getElementById('axeadmg').innerHTML = "Deal "+String(axes.dmg)+ " damage to armour";
  document.getElementById('axebdmg').innerHTML = "bonus "+ String(axes.mas)+" damage";
  document.getElementById('axecrit').innerHTML = String(axes.crit)+"% chance to Crit"
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
    rAxes();
}
function rBow() {
  document.getElementById('bowlevel').innerHTML = "Level "+String(bows.level);
  document.getElementById('bowbd').innerHTML = "Skill Shot Bonus Damage "+String(bows.bd)+"%";
  document.getElementById('bowdaze').innerHTML = "Daze Chance "+String(bows.daze)+"%";
  document.getElementById('bowrtr').innerHTML = "Chance to retrieve Arrows "+String(bows.rtr)+"%"
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
  rBow();
}
function rAcro() {
  document.getElementById('acrolevel').innerHTML = "Level "+String(acro.level);
  document.getElementById('acroroll').innerHTML = "Roll Chance "+String(acro.roll)+"%";
  document.getElementById('acrogroll').innerHTML = "Gracefull Roll Chance "+String(acro.groll)+"%";
  document.getElementById('acrododge').innerHTML = "Dodge Chance "+String(acro.dodge)+"%";
}
function mcmmoacro() {
  acro.level = prompt('Acrobatics Level');
  if(acro.level > 800){
    acro.dodge = 20
  }else{
    acro.dodge = Math.abs(acro.level*0.025).toFixed(3)
  }
  if(acro.level > 500){
    acro.groll = 100
  }else{
    acro.groll = Math.abs(acro.level*0.2).toFixed(2)
  }
  if(acro.level > 1000){
    acro.roll = 100
  }else{
    acro.roll = Math.abs(acro.level*0.1).toFixed(2)
  }
  rAcro();
}