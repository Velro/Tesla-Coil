#pragma strict

var health : float = 100;
var collisionDamage : float = 0;


function Update () {
	if (health <= 0){
		Destroy (gameObject);
	}
}