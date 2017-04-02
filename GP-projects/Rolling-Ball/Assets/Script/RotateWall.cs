using UnityEngine;
using System.Collections;

public class RotateWall : MonoBehaviour {
	
	// Update is called once per frame
	void Update () {
        transform.Rotate(Vector3.up * 15 * Time.deltaTime, Space.World);
    }
}
