import Card from "../Card";
import Product1 from "../../../public/oculos01.png"
import Product2 from "../../../public/oculos02.png"
import Product3 from "../../../public/oculos03.png"
import Product4 from "../../../public/oculos04.png"

export default function Product(){
    const product1 = {
        title: "Óculos de grau",
        price: "R$ 500,00",
        image: Product1.src
    }
    const product2 = {
        title: "Óculos transition",
        price: "R$ 750,00",
        image: Product2.src
    }
    const product3 = {
        title: "Óculos de sol",
        price: "R$ 700,00",
        image: Product3.src
    }
    const product4 = {
        title: "Óculos infantil",
        price: "R$ 500,00",
        image: Product4.src
    }
    return(
        <div className="h-screen" id="product">  
            <h2 className="text-center font-bold uppercase text-3xl py-4">Nossos produtos</h2>
            <p className="text-center">Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p className="text-center">Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className="flex flex-col items-center py-4">
                <div>
                    <div className="flex gap-4">
                        <Card props={product1}/>
                        <Card props={product2}/>
                    </div>
                    <div className="flex gap-4">
                        <Card props={product3}/>
                        <Card props={product4}/>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p>Todos os nossos produtos incluem:</p>
                <ul type="circle">
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </div>
    );
}