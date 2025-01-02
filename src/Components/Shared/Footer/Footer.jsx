import footerimg from '../../../../src/assets/icons/Azraelle-logo-bgless.png'
import socialMedia1 from '../../../../src/assets/icons/facebook.png'
import socialMedia2 from '../../../../src/assets/icons/twitter.png'
import socialMedia3 from '../../../../src/assets/icons/linkedin.png'

const Footer = () => {
    return (
        <div>
            <footer 
             style={{fontFamily: "Nunito Sans, serif"}}
             className="footer footer-center p-10 bg-[#004C7F] text-white">
                <div>
                    <img className='w-[150px] drop-shadow-lg' src={footerimg} alt="" />
                    <p className="font-bold text-lg">
                        Azraelle language club <br />providing an exceptional experience since 2023
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                    <div className="flex justify-center items-center gap-5">
                       <img className='w-[35px] drop-shadow-lg' src={socialMedia1} alt="" />
                       <img className='w-[35px] drop-shadow-lg' src={socialMedia2} alt="" />
                       <img className='w-[35px] drop-shadow-lg' src={socialMedia3} alt="" />
                    </div>
            </footer>
        </div>
    );
};

export default Footer;