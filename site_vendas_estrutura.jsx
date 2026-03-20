<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SuaMarca - Produto Oficial</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            background-color: #f5f5f5;
            color: #333;
        }

        header {
            background: #fff;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: auto;
        }

        .flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        nav a {
            margin-left: 20px;
            text-decoration: none;
            color: #333;
            font-size: 14px;
        }

        .btn {
            background: #000;
            color: #fff;
            padding: 12px 25px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: 0.3s;
        }

        .btn:hover {
            background: #333;
        }

        .hero {
            padding: 80px 0;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 40px;
        }

        .hero-text {
            flex: 1;
        }

        .hero-text h2 {
            font-size: 40px;
            margin-bottom: 20px;
        }

        .hero-text p {
            margin-bottom: 30px;
            font-size: 18px;
            color: #666;
        }

        .hero-img {
            flex: 1;
            background: #ddd;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        section {
            padding: 70px 0;
        }

        .grid-3 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .card {
            background: #fff;
            padding: 25px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .offer {
            background: #fff;
            text-align: center;
            padding: 50px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .offer h3 {
            font-size: 32px;
            margin-bottom: 20px;
        }

        .price {
            font-size: 36px;
            font-weight: bold;
            margin: 20px 0;
        }

        footer {
            background: #000;
            color: #fff;
            text-align: center;
            padding: 30px 0;
            font-size: 14px;
        }

        @media (max-width: 768px) {
            .hero {
                flex-direction: column;
            }

            .hero-text h2 {
                font-size: 30px;
            }
        }
    </style>
</head>
<body>

<header>
    <div class="container flex">
        <h1>SuaMarca</h1>
        <nav>
            <a href="#beneficios">Benefícios</a>
            <a href="#oferta">Oferta</a>
            <a href="#faq">FAQ</a>
        </nav>
    </div>
</header>

<section class="hero container">
    <div class="hero-text">
        <h2>Título Forte Para Seu Produto</h2>
        <p>Subtítulo persuasivo explicando o principal benefício e porque seu produto resolve o problema do cliente.</p>
        <a href="#oferta" class="btn">Comprar Agora</a>
    </div>
    <div class="hero-img">
        Imagem do Produto
    </div>
</section>

<section id="beneficios" style="background:#fff;">
    <div class="container">
        <h2 style="text-align:center; margin-bottom:40px;">Por Que Escolher Nosso Produto?</h2>
        <div class="grid-3">
            <div class="card">
                <h3>Alta Qualidade</h3>
                <p>Produto desenvolvido com materiais premium.</p>
            </div>
            <div class="card">
                <h3>Garantia</h3>
                <p>Satisfação garantida ou seu dinheiro de volta.</p>
            </div>
            <div class="card">
                <h3>Entrega Rápida</h3>
                <p>Envio rápido para todo o Brasil.</p>
            </div>
        </div>
    </div>
</section>

<section id="oferta">
    <div class="container">
        <div class="offer">
            <h3>Oferta Especial</h3>
            <p>Aproveite essa condição exclusiva por tempo limitado.</p>
            <div class="price">R$ 199,90</div>
            <a href="#" class="btn">Finalizar Compra</a>
            <p style="margin-top:20px; font-size:14px; color:#777;">Compra segura | Pix, Cartão ou Boleto</p>
        </div>
    </div>
</section>

<section id="faq" style="background:#fff;">
    <div class="container">
        <h2 style="text-align:center; margin-bottom:40px;">Perguntas Frequentes</h2>
        <div class="card" style="margin-bottom:20px;">
            <h4>Qual o prazo de entrega?</h4>
            <p>Resposta estratégica que remove objeções do cliente.</p>
        </div>
        <div class="card" style="margin-bottom:20px;">
            <h4>Tem garantia?</h4>
            <p>Resposta estratégica que remove objeções do cliente.</p>
        </div>
        <div class="card">
            <h4>Como funciona o pagamento?</h4>
            <p>Resposta estratégica que remove objeções do cliente.</p>
        </div>
    </div>
</section>

<footer>
    <div class="container">
        © 2026 SuaMarca. Todos os direitos reservados.<br>
        Política de Privacidade | Termos de Uso
    </div>
</footer>

</body>
</html>
