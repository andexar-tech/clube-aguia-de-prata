<!DOCTYPE html>
<html lang="pt-br">
<head>
    <script src="https://kit.fontawesome.com/241f61ceb6.js" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script type="module" src="animar.js" defer></script>
    <script src="js/app.js"></script>

    <script src="js/login.js" defer></script>
    <title>Águia de Prata</title>
</head>
<body>
    <header>
        <div class="container">
            <a href="https://dehhander.github.io/clube-aguia-de-prata/" class="logo"><img src="img/logo.png"></a>
            <div class="menu">
                <nav>
                    <a href="https://dehhander.github.io/clube-aguia-de-prata/historia/">História</a>
                    <a href="https://dehhander.github.io/clube-aguia-de-prata/agenda/">Agenda</a>
                    <a href="https://dehhander.github.io/clube-aguia-de-prata/unidades/">Unidades</a>
                    <a href="https://dehhander.github.io/clube-aguia-de-prata/contato/">Contato</a>
                </nav>
            </div>

            <div class="social">
                <a href="https://www.instagram.com/clubeaguiadeprata/" target="_blank">
                    <button><i class="fa-brands fa-instagram"></i></button></a>
                <a href="https://www.facebook.com/clubeaguiadeprata/?locale=pt_BR" target="_blank">
                    <button><i class="fa-brands fa-facebook"></i></button></a>
                <a href="https://www.youtube.com/channel/UCgtxBK9ygrPW1dkWYeqOZ4Q" target="_blank">
                    <button><i class="fa-brands fa-youtube"></i></button></a>
            </div>
        </div>
    </header>

    <section class="slider">
        <div class="slider-content">
            <input type="radio" name="btn-radio" id="radio1" checked>
            <input type="radio" name="btn-radio" id="radio2">
            <input type="radio" name="btn-radio" id="radio3">

            <div class="slide-box primeiro">
                <img class="img-desktop" src="img/slide-1.png" alt="slide 1">
                <img class="img-mobile" src="img/slide-1-mob.png" alt="slide 1">
            </div>

            <div class="slide-box">
                <img class="img-desktop" src="img/slide-2.png" alt="slide 3">
                <img class="img-mobile" src="img/slide-2-mob.png" alt="slide 1">
            </div>

            <div class="slide-box">
                <img class="img-desktop" src="img/slide-3.png" alt="slide 3">
                <img class="img-mobile" src="img/slide-3-mob.png" alt="slide 3">
            </div>

            <div class="nav-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
            </div>

            <div class="nav-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
            </div>
        </div>
    </section>
    <hr>
    
    <div class="body2">
        <section id="sobre" class="about">
            <div class="container2">
                <h2 class="sob" contenteditable="true">Sobre o Clube</h2>
                <p contenteditable="true" data-identifier="txt1">O Clube Águia de Prata é um espaço dedicado ao lazer, esportes e desenvolvimento pessoal. Com infraestrutura de qualidade, oferecemos atividades para todas as idades.</p>
                <img src="img/sobre.jpg" alt="Sobre o clube" class="about-image">
            </div>
        </section>

        <section id="atividades" class="services">
            <div class="container2">
                <h2 class="ativ" contenteditable="true">Nossas Atividades</h2>
                <div class="cards">
                    <div class="card" contenteditable="true" data-identifier="txt2">
                        <h3>Mental</h3>
                        <p>Quadras, campos e muito mais para você se manter ativo.</p>
                    </div>
                    <div class="card" contenteditable="true" data-identifier="txt3">
                        <h3>Físico</h3>
                        <p>Organizamos eventos sociais e culturais para toda a família.</p>
                    </div>
                    <div class="card" contenteditable="true" data-identifier="txt4">
                        <h3>Espiritual</h3>
                        <p>Biblía, áreas de descanso e espaços verdes para relaxar.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="contato" class="contact">
            <div class="container2">
                <h2 contenteditable="true">Fale Conosco</h2>
                <p contenteditable="true">Entre em contato para saber mais sobre o clube ou agendar uma visita.</p>
                <a href="mailto:contato@aguia.com.br" class="btn">Envie um E-mail</a>
            </div>
        </section>
    </div>

    <button id="save-changes" class="save-btn" style="display: none;">Salvar Alterações</button>

    <button id="login-btn" class="login-btn">admin</button>
    <div id="login-modal" class="modal">
        <div class="modal-content"> 
            <span class="close">&times;</span>
            <h2>Login</h2>
            <form id="login-form">
                <label for="email">E-mail:</label>
                <input type="email" id="email" placeholder="Digite seu e-mail" required>
                <label for="password">Senha:</label>
                <input type="password" id="password" placeholder="Digite sua senha" required>
                <button type="submit">Entrar</button>
            </form>
        </div>
    </div>

    <script src="js/firebase.js"></script>
    <script src="js/app.js" defer></script> <!-- Importei o app.js aqui -->
    <script src="js/login.js" defer></script>

    <footer>
        <div class="container2">
            <p>&copy; 2025 Clube Águia de Prata - APL - 3ª Região - Jardim Artartica</p>
        </div>
    </footer>
    
</body>
</html>
