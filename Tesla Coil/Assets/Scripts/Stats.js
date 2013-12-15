#pragma strict

var health : float = 100;

function Update () {
	if (health <= 0){
		Debug.Log(gameObject.name+" is destroyed.");
		Destroy (gameObject);
	}
}