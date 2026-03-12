<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
    <link rel="stylesheet" href="src/styles/style.css">
    <script src="http://unpkg.com/scrollreveal"></script>

   
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
   
</head>
<body>
    <header>
        <nav id="navbar">
            <i class="fa-solid fa-burger" id="nav_logo">BURGER</i>
            
            <ul id="nav_list">
                <li class="nav_item active">
                    <a href="#home">Inicio</a>
                </li>
                <li class="nav_item">
                    <a href="#menu">Cardápio</a>
                </li>
                <li class="nav_item">
                    <a href="#testimonials">Avaliações</a>
                </li>
            
            </ul>

            <button class="btn-default">
                Peça aqui
            </button>
            <button id="mobile_btn">
                <i class="fa-solid fa-bars"></i>
            </button>

        </nav>
        <div id="mobile_menu">
            <ul id="mobile_nav_list">
                <li class="nav_item"><a href="#home">Inicio</a>
                </li>
                <li class="nav_item"><a href="#menu">Cardapio</a>
                </li>
                <li class="nav_item"><a href="#testimonials">Avaliações</a>
                </li>
            </ul>
            <button class="btn-default">
                Peça aqui
            </button>
       </div>
    </header>
    <main id="content">

        <section id="home">
            <div class="shape"></div>
            <div id="cta">
                <h1> O Sabor vai até <span><strong>você</strong></span> </h1>
                <p class="description">Experimente o melhor da culinária local em conforto de casa!

                </p>
                <div id="cta_buttons">
                    <a href="" class="btn_default1">Ver Cardápio

                    </a>
                    <a href="tel:+351 914 951 836" id="phone_button"> 
                        <button class="btn_default">914 951 836
                            <i class="fa-solid fa-phone" ></i>
                        </button>
                    </a>
                </div>
                 <div class="socialmediabuttons">
                 <a href="">
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                 </a>
            </div>
            </div>
           
            <div id="banner">
               <img src="src/img/hamburger-menu.png" alt="">
            </div>
        </section>

         <section id="menu">
            <h2 class="section-title">Cardápio</h2>
            <h3 class="section-subtitle">Descubra nossa seleção de hamburguers & porções deliciosas.

            </h3>
            <div id="dishes">
                <div class="dish">
                    <div class="dishes-heart">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <img src="src/img/13476603.jpg" class="dishes-image" alt="">
                    <h3 class="dishes-title">Nosso Cardápio</h3>
                    <span class="dishe-description">Uma seleção de porções & hamburguers deliciosos, perfeitos para compartilhar.</span>
                    <div class="dishe-rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span>(500+)</span>
                        <div class="price">R$ 29,90
                            <button class="btn-default">
                                <i class="fa-solid fa-plus, fa-basket-shopping"></i>
                            </button>
                        </div>
                       
                </div>
            </div>
        </section>
        <section id="testimonials">
            <img src="src/img/pngtree-thumb-chef-chef-png-image_6430548.png" id="testimonials-chef" alt="">

            <div id="testimonials-content">
                <h2 class="section-title">
                    Depoimentos.
                </h2>
                <h3 class="section-subtitle">
                    O que nossos clientes estão dizendo sobre nós.
                </h3>
                <div id="feedbacks">
                    <div class="feedback">
                        <img src="src/img/pngtree-man-avatar-image-for-profile-png-image_9197911.png"  class="feedback-avatar" alt="Avatar do cliente">
                        <div class="feedback-content">
                            <h3 class="feedback-name">João Silva</h3>
                            <p class="feedback-text">"O melhor hambúrguer que já comi! A qualidade é incrível e o atendimento é excelente. Recomendo a todos!"
                                <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                            </p>
                        </div>
                    </div>
                     <div id="feedbacks">
                    <div class="feedback">
                        <img src="src/img/Project Avatar 1 1 79.png"  class="feedback-avatar" alt="Avatar do cliente">
                        <div class="feedback-content">
                            <h3 class="feedback-name">Pedro Santos</h3>
                            <p class="feedback-text">"O melhor hambúrguer que já comi! A qualidade é incrível e o atendimento é excelente. Recomendo a todos!"
                                <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                            </p>
                        </div>
                    </div>
                    
                </div>
                <button class="btn_default2">Ver Mais Avaliações</button>
            </div>

        </section>
    </main>

    <footer>
        <img src="src/img/wave.svg" alt="">
        <div id="footer_items">
            <span id="copyrigth">
                &copy; 2026 DC Dayviops. Todos os direitos reservados.
                <div class="socialmediabuttons">
                 <a href="">
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                 </a>
            </div>
                 </div>
                 
            </span>
        </div>
    </footer>
    

     <script src="javascript/script.js"></script>
</body>
</html>
