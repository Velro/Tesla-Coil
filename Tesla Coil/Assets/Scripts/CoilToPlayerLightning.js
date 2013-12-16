#pragma strict

var coil : GameObject;
var staff : GameObject;
var player : GameObject;

private var lineRenderer : LineRenderer;
private var playerStats : PlayerStats;
private var offset : float = 0;
private var once : boolean;
private var overlayGUI : OverlayGUI;

function Start () {
	lineRenderer = gameObject.GetComponent(LineRenderer);
	lineRenderer.SetPosition(0, coil.transform.position);
	playerStats = player.GetComponent(PlayerStats);
	overlayGUI = player.GetComponent(OverlayGUI);
}

function Update () {
	if (Input.GetButton("Fire1") && playerStats.shocked == false && !overlayGUI.paused && !overlayGUI.upgradeMenu){
		playerStats.channeling = true;
		lineRenderer.SetPosition(1, staff.transform.position);
		playerStats.charge += playerStats.chargeSpeed * Time.deltaTime;

	} else {
		lineRenderer.SetPosition(1, coil.transform.position);
		player.GetComponent(PlayerStats).channeling = false;
	}
	once = false;
}

