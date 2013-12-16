#pragma strict

private var materials : Material[];
var changeSpeed : float = 0.2;

function Start () {
	materials = renderer.materials;
}

function Update () {
	var index : int = Time.time/changeSpeed;
	index = index % materials.Length;
	renderer.sharedMaterial = materials[index];
}