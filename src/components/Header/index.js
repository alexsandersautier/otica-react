import logo from '../../../public/logo.png';

export default function Header(){
    return(
        <div className='flex justify-around items-center h-14'>
            <div>
                <img className='w-40' src={logo.src}/>
            </div>
            <div>
                <ul className='flex gap-3 font-bold'>
                    <li><a href='#product'>PRODUTOS</a></li>
                    <li><a href='#about'>SOBRE</a></li>
                    <li><a href='#contact'>CONTATO</a></li>
                </ul>
            </div>
        </div>
    );
}