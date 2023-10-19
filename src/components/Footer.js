import React from 'react';
import '../styles/Footer.css'; // Import the corresponding CSS file
import bottomboy from "../assets/bottomboy1.png"
import bottomtopboy from "../assets/bottomtopboy.png"
import wallet from "../assets/wallet.png";

function Footer() {
    return (
      <div className='mainContainer'>
         <div className="headercolumn">
      <div className="headertext" alt="column">
        <h1>
          SUBSCRIBE OUR LATEST <br /> NEWSLETTERS
        </h1>
        <p>
          <br/>
          A good NFT project Will Have Community Following them .<br /> The Ones
          With the Most Engagement Are Usually <br /> The Projects Which Will Be
          Most Successfull. <br /> NFTs Are The More than just Owning a piece of
          Art.
          <br /> They Are Being Part Of A Community .<br /> Where A Culture Has
          Been Created, And Culture Creates A following{" "}
        </p>
      </div>

      <div className="heardergirls" alt="column">
          <img src={bottomboy} alt="image1" className="image1" />
          <img src={bottomtopboy} alt="image2" className="image2" />
          </div>
    </div>
    <div className="search">
          <br/>
      
          <input placeholder="Enter you email " className="searchinput"/>
          <button className="btnsearch">add arrow here  </button>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>

        <div>
        <div className="bigboxbottom">
        <div className="testbox">
          <img src={wallet} id="icons" />
          <h4>Connect Wallet</h4>
          <p>
            Wallet Connect Protocol Does not Run on a BlockChain and there are
            no Fees
          </p>
        </div>
      </div>
        </div>









      {/* <footer className="footer bg-light text-center py-3">
        &copy; {new Date().getFullYear()} Your Company
      </footer> */}
      </div>
    );
  }
  
  export default Footer;