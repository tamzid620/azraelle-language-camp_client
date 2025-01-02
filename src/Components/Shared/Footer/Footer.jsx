import footerimg from '../../../../src/assets/icons/Azraelle-logo-bgless.png'

const Footer = () => {
    return (
        <div>
            <footer 
             style={{fontFamily: "Nunito Sans, serif"}}
             className="footer footer-center p-10 bg-[#004C7F] text-white">
                <div>
                    <img className='w-[150px]' src={footerimg} alt="" />
                    <p className="font-bold text-lg">
                        Azraelle language club <br />providing an exceptional experience since 2023
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                    <div className="">
                       
                    </div>
            </footer>
        </div>
    );
};

export default Footer;