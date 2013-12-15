#pragma strict

var coil : GameObject;
var staff : GameObject;
var player : GameObject;


private var lineRenderer : LineRenderer;

function Start () {
	lineRenderer = gameObject.GetComponent(LineRenderer);
	lineRenderer.SetPosition(0, coil.transform.position);
}

function Update () {
	if (Input.GetButton("Fire1")){
		player.GetComponent(PlayerStats).channeling = true;
		lineRenderer.SetPosition(1, staff.transform.position);

	} else {
		lineRenderer.SetPosition(1, coil.transform.position);
		player.GetComponent(PlayerStats).channeling = false;
	}
}

