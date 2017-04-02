using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class BallMovement : MonoBehaviour {

    Rigidbody physicBody;
    public float speed = 10;

    public Text countText;
    public Text winText;
    private int count;

    public GameObject openWall;

	// Use this for initialization
	void Start () {
        physicBody = GetComponent<Rigidbody>();
        count = 0;
        SetCountText();
        winText.text = "";
	}
	
	// Update is called once per frame
	void Update () {
        float horizontalInput = Input.GetAxisRaw("Horizontal");
        float verticalInput = Input.GetAxisRaw("Vertical");

        Vector3 movementVector = new Vector3(horizontalInput, 0, verticalInput);
        physicBody.AddForce(movementVector.normalized * speed);
	}

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag ("Pick Up"))
        {
            other.gameObject.SetActive(false);
            count += 1;
            SetCountText();
        }
    }

    void OpenWall()
    {
        if (count >= 9)
        {
            openWall.SetActive(false);
        }
    }

    void SetCountText()
    {
        countText.text = "Count: " + count.ToString();
        if (count >= 10)
        {
            winText.text = "YOU WIN!";
        }
    }
}
