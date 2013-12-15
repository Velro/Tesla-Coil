#pragma strict
var coil : GameObject;
var speed : float = 1;
var damage : float = 1;

private var controller : CharacterController;

function Start () {
	controller = gameObject.GetComponent(CharacterController);
}

function Update () {
	transform.LookAt(coil.transform.position);
	controller.Move(Vector3.Normalize(coil.transform.position - transform.position)*speed*Time.deltaTime);
} 
