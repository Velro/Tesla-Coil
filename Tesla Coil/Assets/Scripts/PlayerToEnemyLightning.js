#pragma strict

var player : GameObject;
var chainLightning : GameObject;
var hittingEnemy : boolean = false;
var exitRecursion : boolean = false;
private var enemies : GameObject[];
private var currentEnemy : GameObject;
private var playerStats : PlayerStats;
private var lineRenderer : LineRenderer;

private var secondHitEnemy : GameObject;
private var thirdHitEnemy : GameObject;

function Start () {
	playerStats = player.GetComponent(PlayerStats);
	lineRenderer = gameObject.GetComponent(LineRenderer);
}

function Update () {
	lineRenderer.SetPosition(0, player.transform.position);
	if (CheckEnemies() != null && playerStats.channeling == true ){
		currentEnemy = CheckEnemies() as GameObject;
		if (currentEnemy != null){
			hittingEnemy = true;
			if (currentEnemy.name == "bat"){lineRenderer.SetPosition(1, currentEnemy.transform.position + Vector3(0,1,0));
			} else if (currentEnemy.name == "zombie"){lineRenderer.SetPosition(1, currentEnemy.transform.position + Vector3(0,0.5,0));
			} else { lineRenderer.SetPosition(1, currentEnemy.transform.position);}
			
			currentEnemy.GetComponent(Stats).health -= playerStats.damage * Time.deltaTime;
			secondHitEnemy = CheckForJump(currentEnemy) as GameObject;
			if (secondHitEnemy != null && playerStats.chain2 == true){
				thirdHitEnemy = CheckForJump(secondHitEnemy) as GameObject;
				if (thirdHitEnemy != null && playerStats.chain3 == true){
					CheckForJump(thirdHitEnemy);
				}
			}
		}
	} else {
		lineRenderer.SetPosition(1, player.transform.position);
		hittingEnemy = false;
	}	

}

function CheckForJump (firstEnemy : GameObject){
	if (playerStats.chain1){
		for (var currentEnemy : GameObject in enemies){
			if (currentEnemy != null){
				if (Vector3.Distance(firstEnemy.transform.position, currentEnemy.transform.position) < playerStats.distanceRange){	
					var chain : GameObject;
					if (firstEnemy.Find("chainLightning(Clone)") == null){
						chain = Instantiate (chainLightning, currentEnemy.transform.position, Quaternion.identity);
						chain.transform.parent = firstEnemy.transform;
						Debug.Log(chain.transform.parent);
						//Debug.Log("spawned");
					} else {
						chain = firstEnemy.Find("chainLightning(Clone)").gameObject;
					}
					chain.SendMessage("SetOrigin", firstEnemy);
					chain.SendMessage("SetDestination",currentEnemy);
					
					currentEnemy.GetComponent(Stats).health -= (playerStats.damage * 0.5) * Time.deltaTime;
					return currentEnemy;
				}
			}
		}
	}
}
function CheckEnemies () {
	enemies = GameObject.FindGameObjectsWithTag("enemy");
	for (var enemy : GameObject in enemies){
		if (enemy != null){
			var direction = enemy.transform.position - player.transform.position;
			var angleBetween = Vector3.Angle(player.transform.forward, direction);
			var distance = Vector3.Distance(player.transform.position, enemy.transform.position);
			if (angleBetween < playerStats.angleRange && distance < playerStats.distanceRange){	
				return enemy;
			}
		}
	}
}