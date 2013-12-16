#pragma strict
var coil : GameObject;
var minSpeed : float = 1;
var maxSpeed : float = 2;
var damage : float = 1;

private var speed : float = 1.5;
private var controller : CharacterController;

function Start () {
	controller = gameObject.GetComponent(CharacterController);
	coil = GameObject.Find("tesla coil");
	var randomNumber : float = Random.value;
	speed = Mathf.Lerp(minSpeed, maxSpeed, randomNumber);
}

function Update () {
	transform.LookAt(coil.transform.position);
	controller.Move(Vector3.Normalize(coil.transform.position - transform.position)*speed*Time.deltaTime);
} 

function OnControllerColliderHit (other : ControllerColliderHit){
	if (other.gameObject.name == "zombie"){
		Debug.Log("hit");
	}
}