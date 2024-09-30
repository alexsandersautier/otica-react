import loja from '../../../public/loja.png'
import atendimento from '../../../public/atendimento.png'

export default function About(){
    return(
        <div className="h-screen" id='about'>
            <h2 className="text-center font-bold uppercase text-3xl py-4">QUEM SOMOS NÓS?</h2>
            <p className="text-center">Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de</p>
            <p className="text-center">Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className='flex flex-col justify-center items-center py-14'>
                <div className='flex '>
                    <div className='w-96'>
                        <img src={loja.src}/>
                    </div>
                    <div className='w-96 border-gray-400 border-solid border-2	p-4 flex flex-col gap-5 justify-center items-center'>
                        <h1 className='font-bold text-4xl'>Nossas Filiais</h1>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                </div>
                <div className='flex '>
                    <div className='w-96 border-gray-400 border-solid border-2	p-4 flex flex-col gap-5 justify-center items-center'>
                        <h1 className='font-bold text-4xl'>Atendimento flexível</h1>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className='w-96'>
                        <img src={atendimento.src}/>
                    </div>
                </div>

            </div>
        </div>
    );
}