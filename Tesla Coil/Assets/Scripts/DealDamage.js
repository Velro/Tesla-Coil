#pragma strict
var player : GameObject;
private var playerStats : PlayerStats;


function Start () {
	playerStats = GameObject.FindGameObjectWithTag("Player").GetComponent(PlayerStats);
}

function OnTriggerEnter (other : Collider) {
	if (other.tag == "Player"){
		var damage: float = gameObject.GetComponent(Stats).collisionDamage;
		if (Time.time - playerStats.lastTimeDamageTaken > playerStats.takeDamageCooldown){
			playerStats.health -= damage;
			playerStats.lastTimeDamageTaken = Time.time;
		}
	}
}