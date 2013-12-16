#pragma strict
var player : GameObject;
var origin : GameObject;
var destination : GameObject;

function Update () {
	if (GameObject.Find("PlayerToEnemyLines").GetComponent(PlayerToEnemyLightning).hittingEnemy == false){
		Destroy(gameObject);
	}
	if (origin != null){
		gameObject.GetComponent(LineRenderer).SetPosition(0, origin.transform.position);
	}
	if (destination != null){
		gameObject.GetComponent(LineRenderer).SetPosition(1, destination.transform.position);
	}
}

function SetOrigin (originObject : GameObject) {
	origin = originObject;
}

function SetDestination (destinationObject : GameObject) {
	destination = destinationObject;
}