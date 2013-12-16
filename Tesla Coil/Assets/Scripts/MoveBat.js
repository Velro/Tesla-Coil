#pragma strict
var coil : GameObject;
var minSpeed : float = 1;
var maxSpeed : float = 2;
private var speed : float = 1.5;

function Start () {
	var random : float = Random.value;
	speed = Mathf.Lerp(minSpeed, maxSpeed, random);
	coil = GameObject.Find("tesla coil");
	for (var state : AnimationState in animation){
		state.time = Mathf.Lerp(0, state.length, random);
	}
}

function Update () {
	transform.LookAt(coil.transform.position);
	transform.position += transform.forward * speed * Time.deltaTime;

}