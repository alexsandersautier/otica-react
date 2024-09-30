import { RiMapPin2Line } from "react-icons/ri";
import { HiOutlinePhone } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import Footer from "../Footer";

export default function Contact(){
    return(
        <div className="relative h-screen flex items-center flex-col bg-blue-950 text-white	justify-center gap-10" id="contact">
            <h1 className="font-bold text-4xl">Fale conosco</h1>
            <p className="font-bold w-1/3">Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col">
                    <h3>Contato</h3>
                    <ul>
                        <li className="flex items-center gap-1"><RiMapPin2Line /> Nova Iguaçu, RJ</li>
                        <li className="flex items-center gap-1"><HiOutlinePhone/> (21) 9999-9999</li>
                        <li className="flex items-center gap-1"><CiMail/> contato@oticavida.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Nossas Redes Sociais</h3>
                    <ul>
                        <li className="flex items-center gap-1"><LiaFacebookSquare /> /OticaVida</li>
                        <li className="flex items-center gap-1"><CiInstagram/> @oticavidarj</li>
                        <li className="flex items-center gap-1"><RiTwitterXFill/> @oticavidarj</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    );
}