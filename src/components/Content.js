import React from "react";
import "../styles/Content.css"; // Import the corresponding CSS file
import companyNames from "../assets/companyNames.png";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";
import image5 from "../assets/img5.png";
import image6 from "../assets/img6.png";
import image7 from "../assets/img7.png";
import image8 from "../assets/img8.png";
import wallet from "../assets/wallet.png";
import store from "../assets/store.png";
import card from "../assets/card.png";
import human1 from "../assets/human1.jpg";
import human2 from "../assets/human2.jpg";
import human3 from "../assets/human3.jpg";
function Content() {
  return (
    <div className="contentmain">
      <div className="companynames">
        <img src={companyNames} alt="companynames" />
      </div>
      <div className="contentwords">
        <h1>YOU JOURNEY STARTS HERE </h1>
        <p>
          The lorem tag inserts a specified amount of random text.
          <br />
          The "random" text is the famous "Lorum ipsum" text, in lower case
          letters. Example.
        </p>
      </div>

      <div className="threeboxes">
        <div className="testbox">
          <img src={wallet} id="icons" />
          <h4>Connect Wallet</h4>
          <p>
            Wallet Connect Protocol Does not Run on a BlockChain and there are
            no Fees
          </p>
        </div>

        <div className="testbox">
          <img src={store} id="icons" />
          <h4>NFT Marketplace</h4>
          <p>
            An NFT , Or Non-Fungible Token , Is A unique Token Recorded In A
            Blockchain Ownership Of A Digital Or Physical Assest
          </p>
        </div>

        <div className="testbox">
          <img src={card} id="icons" />
          <h4>Collect NFT</h4>
          <p>
            NFTs or Non-Fungible Tokens Are Digital Assets Based on Blockchain
            Technology
          </p>
        </div>
      </div>

     <div>
     <div className="trend">
        <h1>TRENDING NFT THIS WEEK</h1>
        <p>
          it is illegal to screenshot and nft and pass it off as your own. it it
          also illegal to post it online or make a Physical copy.<br/>it is illegal to screenshot and nft and pass it off as your own. it it
          also illegal to post it online or make a Physical copy.<br/>it is illegal to screenshot and nft and pass it off as your own. it it
          also illegal to post it online or make a Physical copy.
        </p>
      </div>
      <br/>
      <div className="sign">
          <button className="btnsignup">All Categories</button>
          <button className="btnsignup">Art</button>
          <button className="btnsignup">Abstract</button>
          <button className="btnsignup">Video</button>
          <button className="btnsignup">Game</button>
        </div>
        <br/>
        <br/>
      
     </div>

      <div className="container">

        <div className="column">
          <img src={image1} />
          <h2>Ast Digital Art #19</h2>
          <p>Current Bid 2.3 ETH</p>
          <img src={human1} id="imagesmall" />
          <span className="name">Gelan Stack</span>
        </div>
        <div className="column">
          <img src={image2} />
          <h2>Ast Digital Art #19</h2>
          <p>Current Bid 2.3 ETH</p>
          <img src={human1} id="imagesmall" />
          <span className="name">Gelan Stack</span>
        </div>
        <div className="column">
          <img src={image3} />
          <h2>Ast Digital Art #19</h2>
          <p>Current Bid 2.3 ETH</p>
          <img src={human1} id="imagesmall" />
          <span className="name">Gelan Stack</span>
        </div>
        <div className="column">
          <img src={image4} />
          <h2>Ast Digital Art #19</h2>
          <p>Current Bid 2.3 ETH</p>
          <img src={human1} id="imagesmall" />
          <span className="name">Gelan Stack</span>
        </div>
      </div>

      <div className="container2">
        <div className="column2">
          <img src={image5} />
          <h2>Ast Digital Art #19</h2>
          <p>Current Bid 2.3 ETH</p>
          <img src={human1} id="imagesmall" />
          <span className="name">Gelan Stack</span>
        </div>
        <div className="column2">
          <img src={image6} />
          <h2>Ast Digital Art #19</h2>
          <p>Current Bid 2.3 ETH</p>
          <img src={human1} id="imagesmall" />
          <span className="name">Gelan Stack</span>
        </div>
        <div className="column2">
          <img src={image7} />
          <h2>Ast Digital Art #19</h2>
          <p>Current Bid 2.3 ETH</p>
          <img src={human1} id="imagesmall" />
          <span className="name">Gelan Stack</span>
        </div>
        <div className="column2">
          <img src={image8} />
          <h2>Ast Digital Art #19</h2>
          <p>Current Bid 2.3 ETH</p>
          <img src={human1} id="imagesmall" />
          <span className="name">Gelan Stack</span>
        </div>
      </div>
      <div className="bottomnav">
      <div className="trend">
        <h1>TOP ARTIST</h1>
        <p>
          it is illegal to screenshot and nft and pass it off as your own. it it
          also illegal to post it online or make a Physical copy.<br/>it is illegal to screenshot and nft and pass it off as your own. it it
          also illegal to post it online or make a Physical copy.<br/>it is illegal to screenshot and nft and pass it off as your own. it it
       
        </p>
      </div>
      <div className="threeboxes2">
        <div className="testbox2">
          <img src={human1} id="icons2" />
          <h4>bessie cooper</h4>
          <p>
          Total sale 12.29ETH
          </p>
        </div>

        <div className="testbox2">
          <img src={human1} id="icons2" />
          <h4>jenny wilson</h4>
          <p>
          Total sale 12.29ETH
          </p>
        </div>

        <div className="testbox2">
          <img src={human2} id="icons2" />
          <h4>esther howard</h4>
          <p>
          Total sale 12.29ETH
          </p>
        </div>
        <div className="testbox2">
          <img src={human3} id="icons2" />
          <h4>jacob jones</h4>
          <p>
          Total sale 12.29ETH
          </p>
        </div>
        <div className="testbox2">
          <img src={human1} id="icons2" />
          <h4>marvin mckin</h4>
          <p>
          Total sale 12.29ETH
          </p>
        </div>
        <div className="testbox2">
          <img src={human2} id="icons2" />
          <h4>jerome bell</h4>
          <p>
          Total sale 12.29ETH
          </p>
        </div>
      </div>

      <div className="threeboxes2">
        <div className="testbox2">
          <img src={human3} id="icons2" />
          <h4>@devidmalan</h4>
          <p>
          Total sale 12.29ETH
          </p>
        </div>

        <div className="testbox2">
          <img src={human1} id="icons2" />
          <h4>@isco</h4>
          <p>
          Total sale 12.29ETH
          </p>
        </div>

        <div className="testbox2">
          <img src={human2} id="icons2" />
          <h4>@modric</h4>
          <p>
          Total sale 12.29ETH
          </p>
        </div>
        <div className="testbox2">
          <img src={human3} id="icons2" />
          <h4>@vinicius</h4>
          <p>
          Total sale 12.29ETH
          </p>
        </div>
      </div>


      </div>
    </div>
  );
}

export default Content;
