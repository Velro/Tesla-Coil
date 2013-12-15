﻿#pragma strict

var player : GameObject;
var angleRange : float;
var distanceRange : float;

private var enemies : GameObject[];
private var currentEnemy : GameObject;
private var playerStats : PlayerStats;
private var lineRenderer : LineRenderer;

function Start () {
	enemies = GameObject.FindGameObjectsWithTag("enemy");
	playerStats = player.GetComponent(PlayerStats);
	lineRenderer = gameObject.GetComponent(LineRenderer);
}

function Update () {
	lineRenderer.SetPosition(0, player.transform.position);
	if (CheckEnemies() != null && playerStats.channeling == true ){
		currentEnemy = CheckEnemies() as GameObject;
		if (currentEnemy != null){
			Debug.Log(currentEnemy.name+" being hit");
			lineRenderer.SetPosition(1, currentEnemy.transform.position);
			currentEnemy.GetComponent(Stats).health -= playerStats.damage * Time.deltaTime;
		}
	} else {
		lineRenderer.SetPosition(1, player.transform.position);
	}
}

function CheckEnemies () {
	for (var enemy : GameObject in enemies){
		if (enemy != null){
			var direction = enemy.transform.position - player.transform.position;
			var angleBetween = Vector3.Angle(player.transform.forward, direction);
			var distance = Vector3.Distance(player.transform.position, enemy.transform.position);
			if (angleBetween < angleRange && distance < distanceRange){
				return enemy;
			}
		}
	}
}