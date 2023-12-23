import MenuSmall from "../menuSmall/MenuSmall";
import MenuWide from "../menuWide/MenuWide";
import drawing from '../../assets/bg-main.png';

const Menu = () => {

    return (
        <section id="menu" className="pb-14 md:pb-0 md:px-14">
            <div className="container mx-auto">
                <div className="lg:hidden">
                    <MenuSmall />
                </div>
                <div className="hidden lg:block">
                    <MenuWide />
                </div>
                <img className="relative object-cover object-left h-screen lg:object-center lg:object-contain lg:w-screen lg:px-4 md:-z-10 lg:-top-60" src={drawing} alt="" />
            </div>
        </section>
    )    
};

export default Menu;
