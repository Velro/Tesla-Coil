#pragma strict

var channeling : boolean = false;
var angleRange : float = 100;
var distanceRange : float = 8;

var charge : float = 0;
var chargeSpeed : float = 0.5;
var chargeLossSpeed : float = 1;

var shocked : boolean = false;
var shockedDamage : float = 10;
var shockedDuration : float = 4;
private var shockedTime : float = 0;

var damage : float = 8;
var chain : float = 0;

var health : float = 100;
var takeDamageCooldown : float = 1;
var lastTimeDamageTaken : float = 0;

var upgradePoints : float = 0;

var chain1 : boolean = false;
var chain2 : boolean = false;
var chain3 : boolean = false;

var damage1 : boolean = false;
var damage2 : boolean = false;
var damage3 : boolean = false;

var range1 : boolean = false;
var range2 : boolean = false;
var range3 : boolean = false;

var coilShooting : boolean = false;


function Update () {
	if (channeling == false && charge > 0){	//decrease over time
		charge -= chargeLossSpeed * Time.deltaTime;
	}
	if (charge > 100){ //shocked!
		charge = 100;
		channeling = false;
		shocked = true;
		shockedTime = Time.time;
		health -= 10;
	}
	if (Time.time - shockedTime > shockedDuration){
		shocked = false;
	}
	CheckUpgrades();
}
function CheckUpgrades (){
	if (damage1)damage = 12;
	if (damage2)damage = 16;
	if (damage3)damage = 20;
	
	if (range1){
		angleRange = 120;
		distanceRange = 12;
	}
	if (range2){
		angleRange = 140;
		distanceRange = 16;
	}
	if (range3){
		angleRange = 160;
		distanceRange = 20;
	}
	if (chain1) chain = 1;
	if (chain2) chain = 2;
	if (chain3) chain = 3;
	
	
}