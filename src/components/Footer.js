import React from 'react';
import '../styles/Footer.css'; // Import the corresponding CSS file
import bottomboy from "../assets/bottomboy1.png"
import bottomtopboy from "../assets/bottomtopboy.png"
import instagram from "../assets/instagram.jpg";
import facebook from "../assets/facebook.jpg";
import whatsapp from "../assets/whatsapp.jpg";

function Footer() {
  return (
    <div className='mainContainer'>
      <div className="headercolumn">
        <div className="headertext" alt="column">
          <h1>
            SUBSCRIBE OUR LATEST <br /> NEWSLETTERS
          </h1>
          <p>
            <br />
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
        <br />

        <input placeholder="Enter you email " className="searchinput" />
        <button className="btnsearch">add arrow here  </button>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div>
        <br />
        <br />

         <div className="bigboxbottom">
        <div className="testboxfoot">
       
          <h4>NEVER MISS A DROP </h4>
          <p>
            Wallet Connect Protocol Does not Run on a BlockChain and there are
            no Fees
          </p>
          <button >Start Project</button>
        </div>
        <br/>
      </div> 
      
 
      </div>
      <div className='endfooter'>
          <div className="header">
            <div className='entryP'>
              <a className="navbarEntry">Entry</a>
              <p>  NFTFY makes it easy for you to create a real nft on the blockchain straight from your iphone in a few taps ! <br /> No coding experience needed!
              </p>
              

            </div>
            <div className='hearder1'>
            <img src={facebook} id="icons" />
            <img src={instagram} id="icons" />
            <img src={whatsapp} id="icons" />

            </div>

            <table>
              <tb>
                <tr>
                  <td>
                    <h3>Explore</h3>
                  </td>
                  <td>
                    <h3>Help Center</h3>
                  </td>
                  <td>
                    <h3>Become a Partner</h3>
                  </td>
                  <td>
                    <h3>Job</h3>
                  </td>
                </tr>
              </tb>
            </table>
          </div>
         

        </div>
        <div className='datefooter'>
              <hr />
              <hr />

            <footer className="footer ">{/* bg-light text-center py-3    &copy; {new Date().getFullYear()}*/}
            <p>Privacy Policy</p>
            <p>CopyRight @ Nft Creative agency</p>
            <p>Terms of Service</p>
            </footer>
            </div>



    </div>
  );
}

export default Footer;