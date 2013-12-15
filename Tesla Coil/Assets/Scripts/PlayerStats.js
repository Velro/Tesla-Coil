#pragma strict

var channeling : boolean = false;
var health : float = 100;
var charge : float = 100;
var chargeSpeed : float = 0.5;
var chargeLossSpeed : float = 1;
var shocked : boolean = false;
var damage : float = 0.5;
var takeDamageCooldown : float = 1;
var lastTimeDamageTaken : float = 0;

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
}
