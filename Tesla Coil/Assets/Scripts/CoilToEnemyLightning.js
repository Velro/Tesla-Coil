#pragma strict

var player : GameObject;
var lightningSource : GameObject;
var range : float = 20;
var damage : float = 10;
var cooldown : float = 2;
var chargeLimit : float = 3;

var currentCharge : float = 0;
var onCooldown : boolean = false;
var timeOnCooldown : float = 0;
var isShooting : boolean = false;
private var playerStats : PlayerStats;
private var enemies : GameObject[];
private var lineRenderer : LineRenderer;

function Start () {	
	playerStats = player.GetComponent(PlayerStats);
	lineRenderer = gameObject.GetComponent(LineRenderer);
	lineRenderer.SetPosition(0, lightningSource.transform.position);
	lineRenderer.SetPosition(1, lightningSource.transform.position);
}

function Update () {
	enemies = GameObject.FindGameObjectsWithTag("enemy");
	if (playerStats.coilShooting == true){
		for (var enemy : GameObject in enemies){
			if (enemy != null){
				if (Vector3.Distance(lightningSource.transform.position, enemy.transform.position) < range && onCooldown == false){
					lineRenderer.SetPosition(1, enemy.transform.position);
					isShooting = true;
					currentCharge += Time.deltaTime;
					enemy.GetComponent(Stats).health -= damage * Time.deltaTime;
				}
			}
		}	
	}
	if (currentCharge >= chargeLimit){
		lineRenderer.SetPosition(1, lightningSource.transform.position);
		onCooldown = true;
		timeOnCooldown += Time.deltaTime;
	}
	if (timeOnCooldown >= cooldown){
		onCooldown = false;
		timeOnCooldown = 0;
		currentCharge = 0;
	}
	
	if (CheckAllEnemies() == false){
		lineRenderer.SetPosition(1, lightningSource.transform.position);
	}
}

function CheckAllEnemies(){
	var bool : boolean = false;
	for (var enemy : GameObject in enemies){
		if (enemy != null){
			bool = true;
		}
	}
	return bool;
}