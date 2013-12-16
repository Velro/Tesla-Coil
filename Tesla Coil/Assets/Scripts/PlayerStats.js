#pragma strict

var channeling : boolean = false;
var angleRange : float = 100;
var distanceRange : float = 8;
var charge : float = 100;
var chargeSpeed : float = 0.5;
var chargeLossSpeed : float = 1;
var shocked : boolean = false;
var damage : float = 0.5;
var chain : float = 0;

var health : float = 100;
var takeDamageCooldown : float = 1;
var lastTimeDamageTaken : float = 0;

var upgradePoints : float = 1;

var chain1 : boolean = false;
var chain2 : boolean = false;
var chain3 : boolean = false;

var damage1 : boolean = false;
var damage2 : boolean = false;
var damage3 : boolean = false;

var range1 : boolean = false;
var range2 : boolean = false;
var range3 : boolean = false;



function Update () {
	if (channeling == false && charge > 0){	//decrease over time
		charge -= chargeLossSpeed * Time.deltaTime;
	}
	if (charge > 100){ //shocked!
		charge = 100;
		shocked = true;
	}
	if (shocked == true && charge <= 99){
		shocked = false;
	}
	CheckUpgrades();
}
function CheckUpgrades (){
	if (damage1)damage = 0.75;
	if (damage2)damage = 1;
	if (damage3)damage = 1.25;
	
	if (range1){
		angleRange = 120;
		distanceRange = 11;
	}
	if (range2){
		angleRange = 140;
		distanceRange = 14;
	}
	if (range3){
		angleRange = 160;
		distanceRange = 17;
	}
	if (chain1) chain = 1;
	if (chain2) chain = 2;
	if (chain3) chain = 3;
	
	
}