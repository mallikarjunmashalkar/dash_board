import React from "react";
import "./Style.css";

const DashBoard = () => {
  return (
    <>
      <div className="top-border">
        <div className="left-border">
          <button style={{background:"blue"}}>
            <i class="fa fa-tachometer fa-2x" style={{ color: "white" }}></i>
          </button>
          <button>
          <i class="fa fa-search fa-2x" style={{ color: "	#878787" }}></i>
          </button>
          <button>
            <i class="fa fa-signal fa-2x" style={{ color: "	#878787" }}></i>
          </button>
          <button>
            <i class="fa fa-comment fa-2x" style={{ color: "	#878787" }}></i>
          </button>
          <button>
            <i class="fa fa-bullseye fa-2x" style={{ color: "	#878787" }}></i>
          </button>
          <button>
            <i class="fa fa-phone fa-2x" style={{ color: "	#878787" }}></i>
          </button>
          <button>
            <i class="fa fa-envelope fa-2x" style={{ color: "	#878787" }}></i>
          </button>
          <button>
            <i class="fa fa-paper-plane fa-2x" style={{ color: "	#878787" }}></i>
          </button>
          <button>
            <i class="fa fa-user fa-2x" style={{ color: "	#878787" }}></i>
          </button>
          <button>
            <i class="fa fa-clipboard fa-2x" style={{ color: "	#878787" }}></i>
          </button>
        </div>
        <span style={{ paddingLeft: "1.6rem" }}>your</span>
        <span style={{ color: "#00BFFF" }}>LOGO</span>
      </div>

      <div className="cards-1">
        <div className="card-a">
          <div className="container-a">
            <h2>3,009</h2>
            <p>Facebook Likes</p>
          </div>
          <div className="card-aa">
            <div className="container-aa" style={{paddingTop:"0.5rem"}}>
              <h2>342</h2>
              <p>Youtube Subscribers</p>
            </div>
          </div>
        </div>
        <div className="card-b">
          <div className="container-b">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GRjd_lFlSQhtCElohv5pJh2yl5FhA9UTeA&usqp=CAU" alt="" />
          </div>
        </div>
        <div className="card-c">
          <div className="container-c">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtoJp0g_H-X9FPwBXYU6ObRu-7jrAxsmaGg&usqp=CAU" alt="" />
          </div>
        </div>
        <div className="card-d">
          <div className="container-d">
            <h2>^25%</h2>
            <p>Google Ranking</p>
          </div>
          <div className="card-dd">
          <div className="container-dd">
            <img src="data:image/jpeg;base64,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" alt="" />
          </div>
          </div>
        </div>
      </div>

      <div className="cards-2">
        <div className="card-e">
          <div className="container-e">
            <h2>143</h2>
            <p>Linkedin Followers</p>
          </div>

          <div className="card-ee">
            <div className="container-ee"  style={{paddingTop:"0.5rem"}}>
              <h2>3,111</h2>
              <p>Twitter Followers</p>
            </div>
          </div>
        </div>
        <div className="card-f">
          <div className="container-f">
            <span style={{paddingRight:"15.5rem"}}>Audience Growth</span> 
            <span>20</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOcqfxVPRao8MtbdnIwKKTKacIFBJQHXr-Q&usqp=CAU" alt="" />
          </div>
        </div>
        <div className="card-g">
          <div className="container-g">
            <span style={{paddingRight:"6rem"}}>AdWords Conversions</span>
           <span>353</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXw2W5ZV1LiYm2xvHKNla4LXGRaHH_hffjlg&usqp=CAU" alt="" />
          </div>
        </div>
        <div className="card-h">
          <div class="container-h">
            <span style={{paddingRight:"11rem"}}> Site Audit Score</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDcOjbch2DpYJ_7J_nwRMI7-N7hmIGqn98w&usqp=CAU" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
