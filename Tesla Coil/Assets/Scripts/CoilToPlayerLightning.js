#pragma strict

var coil : GameObject;
var staff : GameObject;
var player : GameObject;


private var lineRenderer : LineRenderer;
private var playerStats : PlayerStats;
private var offset : float = 0;
private var once : boolean;

function Start () {
	lineRenderer = gameObject.GetComponent(LineRenderer);
	lineRenderer.SetPosition(0, coil.transform.position);
	playerStats = player.GetComponent(PlayerStats);
	gameObject.renderer.material.mainTextureScale = Vector2(1/3, 0);
}

function Update () {
	if (offset ==64 && !once) {offset = 128;once = true;}
	if (offset == 128 && !once){ offset = 0; once = true;}
	if (offset == 0 && !once) {offset = 64; once = true;}
	
	
	gameObject.renderer.material.mainTextureOffset = Vector2(Time.time*2,0);
	if (Input.GetButton("Fire1")){
		playerStats.channeling = true;
		lineRenderer.SetPosition(1, staff.transform.position);
		playerStats.charge += playerStats.chargeSpeed * Time.deltaTime;

	} else {
		lineRenderer.SetPosition(1, coil.transform.position);
		player.GetComponent(PlayerStats).channeling = false;
	}
	once = false;
}

