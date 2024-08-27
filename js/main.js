//Recursos Dinâmicos
(function(g){new WOW().init();var f=g("#main-nav");var c=g(".toggle");var b={disableAt:false,customToggle:c,levelSpacing:10,navTitle:"Niwax Menu",levelTitles:true,levelTitles:true,labelClose:false,levelTitleAsBack:true,levelOpen:"expand",closeOnClick:true,insertClose:true,closeActiveLevel:true,insertBack:true};var e=f.hcOffcanvasNav(b);function h(){if(g(window).scrollTop()>=80){g(".navfix").addClass("sticky")}else{g(".navfix").removeClass("sticky")}}g(function(){g(window).scroll(h);h()});var a=g("li.sbmenu");a.hover(function(){g(this).addClass("hover")},function(){g(this).removeClass("hover")});g(".video-link").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,});var d=g(".service-card-prb");d.owlCarousel({items:4,loop:true,autoplay:true,margin:20,nav:false,dots:false,autoplayTimeout:3500,autoplayHoverPause:true,smartSpeed:2000,responsive:{0:{items:1},520:{items:2},768:{items:3},1200:{items:3},1400:{items:3},1600:{items:3},}});var d=g(".testimonial-card-a");d.owlCarousel({items:1,loop:true,autoplay:true,autoplayTimeout:6000,autoplayHoverPause:true,smartSpeed:500,responsive:{0:{items:1},768:{items:1},1024:{items:1},1400:{items:1}}});var d=g(".video-testimonials");d.owlCarousel({items:2,nav:false,dots:false,autoplay:false,autoplayTimeout:3500,smartSpeed:1500,margin:20,responsive:{0:{items:1},768:{items:2},1024:{items:2},1400:{items:2}}});var d=g(".project-screens");d.owlCarousel({items:4,loop:true,autoplay:true,margin:20,nav:false,dots:false,autoplayTimeout:3500,autoplayHoverPause:true,smartSpeed:2000,responsive:{0:{items:1},520:{items:2},768:{items:3},1200:{items:3},1400:{items:3},1600:{items:3},}});var d=g(".porto-slide");d.owlCarousel({items:1,loop:true,autoplay:true,margin:10,nav:false,dots:true,stagePadding:50,autoplayTimeout:350000,autoplayHoverPause:true,smartSpeed:2000,responsive:{0:{items:1,stagePadding:0},520:{items:1,stagePadding:0},768:{items:1,stagePadding:0},1200:{items:1},1400:{items:1},1600:{items:1},}});var d=g(".single-slide");d.owlCarousel({items:1,loop:true,autoplay:true,margin:10,nav:false,dots:true,stagePadding:100,autoplayTimeout:3500,autoplayHoverPause:true,smartSpeed:2000,responsive:{0:{items:1,stagePadding:0},520:{items:1,stagePadding:0},768:{items:1,stagePadding:0},1200:{items:1},1400:{items:1},1600:{items:1},}});var d=g(".bages-slider");d.owlCarousel({items:4,loop:true,autoplay:true,centre:true,margin:20,nav:false,dots:false,autoplayTimeout:4000,autoplayHoverPause:true,smartSpeed:2000,responsive:{0:{items:2},520:{items:3},768:{items:3},1200:{items:3},1400:{items:4},1600:{items:4},}});var d=g(".logo-weworkfor");d.owlCarousel({items:4,loop:true,autoplay:true,margin:10,nav:false,dots:false,autoplayTimeout:1800,autoplayHoverPause:false,smartSpeed:2000,responsive:{0:{items:3},520:{items:3},768:{items:4},1200:{items:4},1400:{items:5},1600:{items:6},}});var d=g(".testimonial-card-b");d.owlCarousel({items:1,loop:true,autoplay:true,autoplayTimeout:3000,autoplayHoverPause:true,dots:true,dotsContainer:"#testimonials-avatar",smartSpeed:500,responsive:{0:{items:1},768:{items:1},1024:{items:1},1400:{items:1}}});var d=g(".zoomowl");d.owlCarousel({stagePadding:200,loop:true,margin:10,nav:false,items:1,lazyLoad:true,responsive:{0:{items:1,stagePadding:60},600:{items:1,stagePadding:100},1000:{items:1,stagePadding:200},1200:{items:1,stagePadding:250},1400:{items:1,stagePadding:300},1600:{items:1,stagePadding:350},1800:{items:1,stagePadding:400}}});g(".counter").counterUp({delay:10,time:2500,});g.scrollUp({animation:"fade",scrollImg:{active:true,type:"background"}});g(".card-list").imagesLoaded(function(){var i=g(".card-list").isotope({itemSelector:".single-card-item",percentPosition:true,masonry:{columnWidth:".grid-sizer"}});g(".filter-menu").on("click","li",function(){var j=g(this).attr("data-filter");i.isotope({filter:j})})});g(".filter-menu li").on("click",function(i){g(this).siblings(".is-checked").removeClass("is-checked");g(this).addClass("is-checked");i.preventDefault()});g("[data-background]").each(function(){g(this).css("background-image","url("+g(this).attr("data-background")+")")})})(jQuery);
//Digitação Automática
document.addEventListener("DOMContentLoaded", function() { var typingEffect = new Typed(".typedText", { strings: [ "Engenheiro de Software", "Desenvolvedor Backend"], loop: true, typeSpeed: 100, backSpeed: 70, backDelay: 2500 }); });
//Filtragem Dinâmica de Conteúdo na Web
document.addEventListener("DOMContentLoaded", function () { const filterButtons = document.querySelectorAll('.filter-btn'); const projectItems = document.querySelectorAll('.single-card-item'); filterButtons.forEach(button => { button.addEventListener('click', () => { const filterValue = button.getAttribute('data-filter'); filterProjects(filterValue); setActiveButton(button); }); }); function filterProjects(category) { projectItems.forEach(item => { const itemCategories = item.getAttribute('data-category').split(' '); if (category === 'all' || itemCategories.includes(category)) { item.style.display = 'block'; } else { item.style.display = 'none'; } }); } function setActiveButton(clickedButton) { filterButtons.forEach(button => { button.classList.remove('active-filter'); }); clickedButton.classList.add('active-filter'); } });
// Adiciona o evento de clique a todos os links de projeto
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Previne o comportamento padrão do link
      const projectId = this.dataset.project;
      showModal(projectId);
  });
});

// Função para exibir o modal com o conteúdo do projeto
function showModal(projectId) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modal-body');
  
  let content = '';
  
  // Define o conteúdo detalhado com base no ID do projeto
  switch (projectId) {
      case '1':
          content = getProject1Content();
          break;
      case '2':
          content = getProject2Content();
          break;
      case '3':
          content = getProject3Content();
          break;
      default:
          content = '<p>Projeto não encontrado.</p>';
  }
  
  // Atualiza o conteúdo do modal e exibe o modal
  modalBody.innerHTML = content;
  modal.style.display = 'block';
}
// Detalhamento do Projeto I
function getProject1Content() {
  return `
     <!-- GIF -->
    <img src="images/Gif/gif-18.gif" alt="Demonstração do Sistema de Gestão de Usuários" 
     style="width:100%; height:auto; max-height:200px; object-fit:cover; border-radius:12px; box-shadow:0 6px 12px rgba(0,0,0,0.3); transition:transform 0.3s ease, box-shadow 0.3s ease;" 
     this.style.boxShadow='0 8px 16px rgba(0,0,0,0.4)';"this.style.boxShadow='0 6px 12px rgba(0,0,0,0.3)';">
    </div>
    
    <!-- Título do Projeto -->
    <h2 style="font-family:'Poppins', sans-serif; margin-bottom:0.5rem;">Sistema de Gestão de Usuários</h2>

     <!-- Links do Projeto -->
    <div class="project-links" style="margin:1rem 0; display:flex; justify-content:center; gap:1rem;">
      <a href="https://github.com/usuario/sistema-gestao-usuarios" target="_blank" style="color:#007bff; text-decoration:none; padding:0.75rem 1.5rem; border-radius:4px; display:flex; align-items:center; gap:0.5rem; font-size:1rem; border: 2px solid #007bff; transition: color 0.3s ease, border-color 0.3s ease;">
        <i class="fab fa-github"></i> GitHub
      </a>
      <a href="https://live-demo.com/projeto1" target="_blank" style="color:#28a745; text-decoration:none; padding:0.75rem 1.5rem; border-radius:4px; display:flex; align-items:center; gap:0.5rem; font-size:1rem; border: 2px solid #28a745; transition: color 0.3s ease, border-color 0.3s ease;">
        <i class="fas fa-external-link-alt"></i> Visualizar ao Vivo
      </a>
    </div>

    <!-- Descrição do Projeto -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-info-circle"></i> Descrição do Projeto:</strong> 
      O sistema foi desenvolvido utilizando <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Java</strong> e 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Boot</strong> para o backend, com 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Data JPA</strong> para interagir com o 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">MongoDB</strong>. Utilizou-se 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Redis</strong> para cache de dados e 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Security</strong> para autenticação e controle de acesso.
    </p>

     <!-- Galeria de Imagens -->
    <div class="project-gallery" style="margin-top:1rem;">
      <h3 style="font-family:'Poppins', sans-serif; font-size:1rem; margin-bottom:0.5rem;">
        <i class="fas fa-images" style="margin-right:0.5rem;"></i> Galeria do Projeto
      </h3>
      <div class="gallery-images" style="display:flex; flex-wrap:wrap; gap:1rem;">
        <img src="images/portfolio/img-12.jpg" alt="Tela principal do Sistema de Gestão de Usuários" style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
        <img src="images/portfolio/img-13.jpg" alt="Visualização do Sistema de Gestão" style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
      </div>
    </div>

    <!-- Desafios e Soluções -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-tools"></i> Desafios e Soluções:</strong>
    </p>
    <ul style="padding-left: 20px; font-family:'Poppins', sans-serif; line-height:1.6;">
      <li>
        <strong><i class="fas fa-exclamation-circle"></i> Desafio:</strong> Implementar um sistema de autenticação robusto com integração a múltiplos provedores de identidade (como OAuth).
        <br><strong><i class="fas fa-check-circle"></i> Solução:</strong> Utilização de 
        <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Security</strong> para configurar autenticação baseada em tokens e integração com provedores de OAuth.
      </li>
    </ul>

    <!-- Resultados e Próximos Passos -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-trophy"></i> Resultados e Próximos Passos:</strong> 
      A aplicação foi implementada com sucesso, oferecendo uma interface amigável e segura para a gestão de usuários. O uso de 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Boot</strong> e 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">JPA</strong> possibilitou um desenvolvimento ágil e eficiente, com alto desempenho e fácil manutenção. 
    </p>
  `;
}

// Detalhamento do Projeto II
function getProject2Content() {
  return `

    <!-- GIF -->
    <img src="images/Gif/gif-7.gif" alt="Demonstração do Sistema de Gestão de Usuários" 
     style="width:100%; height:auto; max-height:200px; object-fit:cover; border-radius:12px; box-shadow:0 6px 12px rgba(0,0,0,0.3); transition:transform 0.3s ease, box-shadow 0.3s ease;" 
     this.style.boxShadow='0 8px 16px rgba(0,0,0,0.4)';"this.style.boxShadow='0 6px 12px rgba(0,0,0,0.3)';">
    </div>

    <!-- Título do Projeto -->
    <h2 style="font-family:'Poppins', sans-serif; margin-bottom:0.5rem;">Sistema de Gestão de Usuários</h2>
    
    <!-- Links do Projeto -->
    <div class="project-links" style="margin:1rem 0; display:flex; justify-content:center; gap:1rem;">
      <a href="https://github.com/usuario/sistema-gestao-usuarios" target="_blank" style="color:#007bff; text-decoration:none; padding:0.75rem 1.5rem; border-radius:4px; display:flex; align-items:center; gap:0.5rem; font-size:1rem; border: 2px solid #007bff; transition: color 0.3s ease, border-color 0.3s ease;">
        <i class="fab fa-github"></i> GitHub
      </a>
      <a href="https://live-demo.com/projeto1" target="_blank" style="color:#28a745; text-decoration:none; padding:0.75rem 1.5rem; border-radius:4px; display:flex; align-items:center; gap:0.5rem; font-size:1rem; border: 2px solid #28a745; transition: color 0.3s ease, border-color 0.3s ease;">
        <i class="fas fa-external-link-alt"></i> Visualizar ao Vivo
      </a>
    </div>

    <!-- Descrição do Projeto -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-info-circle"></i> Descrição do Projeto:</strong> O sistema foi desenvolvido utilizando <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Java</strong> e 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Boot</strong> para o backend, com 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Data JPA</strong> para interagir com o 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">MongoDB</strong>. O <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Redis</strong> foi utilizado para cache de dados e o 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Security</strong> para autenticação e controle de acesso.
    </p>

    <!-- Galeria de Imagens -->
    <div class="project-gallery" style="margin-top:1rem;">
      <h3 style="font-family:'Poppins', sans-serif; font-size:1rem; margin-bottom:0.5rem;">
        <i class="fas fa-images" style="margin-right:0.5rem;"></i> Galeria do Projeto
      </h3>
      <div class="gallery-images" style="display:flex; flex-wrap:wrap; gap:1rem;">
        <img src="images/portfolio/img-12.jpg" alt="Tela principal do Sistema de Gestão de Usuários" style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
        <img src="images/portfolio/img-13.jpg" alt="Visualização do Sistema de Gestão" style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
      </div>
    </div>

    <!-- Desafios e Soluções -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-tools"></i> Desafios e Soluções:</strong>
    </p>
    <ul style="padding-left: 20px; font-family:'Poppins', sans-serif; line-height:1.6;">
      <li>
        <strong><i class="fas fa-exclamation-circle"></i> Desafio 1:</strong> Implementar um sistema de autenticação robusto que permita a integração com múltiplos provedores de identidade (como OAuth).
        <br><strong><i class="fas fa-check-circle"></i> Solução:</strong> Utilização de 
        <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Security</strong> para configurar autenticação baseada em tokens e integração com provedores de OAuth.
      </li>
      <li>
        <strong><i class="fas fa-exclamation-circle"></i> Desafio 2:</strong> Garantir a segurança dos dados sensíveis, como senhas, utilizando criptografia forte.
        <br><strong><i class="fas fa-check-circle"></i> Solução:</strong> Implementação de criptografia 
        <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">AES</strong> para senhas e dados sensíveis, além de práticas recomendadas para armazenamento seguro.
      </li>
    </ul>
    
    <!-- Resultados e Próximos Passos -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-trophy"></i> Resultados e Próximos Passos:</strong> A aplicação foi implementada com sucesso, oferecendo uma interface amigável e segura para a gestão de usuários. O uso de 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Boot</strong> e 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">JPA</strong> permitiu um desenvolvimento rápido e eficiente, com alto desempenho e fácil manutenção.
    </p>
  `;
}


function getProject3Content() {
  return `
   <!-- GIF -->
    <img src="images/Gif/gif-19.gif" alt="Demonstração do Sistema de Gestão de Usuários" 
     style="width:100%; height:auto; max-height:200px; object-fit:cover; border-radius:12px; box-shadow:0 6px 12px rgba(0,0,0,0.3); transition:transform 0.3s ease, box-shadow 0.3s ease;" 
     this.style.boxShadow='0 8px 16px rgba(0,0,0,0.4)';"this.style.boxShadow='0 6px 12px rgba(0,0,0,0.3)';">
    </div>

  <!-- Título do Projeto -->
  <h2 style="font-family:'Poppins', sans-serif; margin-bottom:0.5rem;">Painter AR</h2>

   <!-- Links do Projeto -->
    <div class="project-links" style="margin:1rem 0; display:flex; justify-content:center; gap:1rem;">
      <a href="https://github.com/usuario/sistema-gestao-usuarios" target="_blank" style="color:#007bff; text-decoration:none; padding:0.75rem 1.5rem; border-radius:4px; display:flex; align-items:center; gap:0.5rem; font-size:1rem; border: 2px solid #007bff; transition: color 0.3s ease, border-color 0.3s ease;">
        <i class="fab fa-github"></i> GitHub
      </a>
      <a href="https://live-demo.com/projeto1" target="_blank" style="color:#28a745; text-decoration:none; padding:0.75rem 1.5rem; border-radius:4px; display:flex; align-items:center; gap:0.5rem; font-size:1rem; border: 2px solid #28a745; transition: color 0.3s ease, border-color 0.3s ease;">
        <i class="fas fa-external-link-alt"></i> Visualizar ao Vivo
      </a>
    </div>

  <!-- Descrição do Projeto -->
  <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
    <strong><i class="fas fa-info-circle"></i> Descrição do Projeto:</strong> O sistema foi desenvolvido utilizando <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Java</strong> e 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Boot</strong> para o backend, com 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Data JPA</strong> para interagir com o 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">MongoDB</strong>. O <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Redis</strong> foi utilizado para cache de dados e o 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Security</strong> para autenticação e controle de acesso.
  </p>

   <!-- Timeline do Projeto -->
  <h3 style="font-family:'Poppins', sans-serif; font-size:1rem; margin-bottom:0.5rem; cursor:pointer; display:flex; align-items:center;" onclick="toggleSection('timeline', 'timeline-toggle')">
    <i class="fas fa-stream" style="margin-right:0.5rem; color:#986dff;"></i> Timeline do Projeto 
    <span id="timeline-toggle" style="font-size:0.8rem; color:#007bff; margin-left:auto; transition: transform 0.3s ease;">&#9660;</span>
  </h3>
  <ul id="timeline" style="font-family:'Poppins', sans-serif; list-style:none; padding:0; display:none; overflow:hidden; transition: max-height 0.5s ease;">
    <li style="margin-bottom:1.5rem; position:relative; padding-left:2rem;">
      <span style="position:absolute; left:0; top:0; font-size:1.2rem; color:#986dff;">&#9679;</span>
      <strong>Janeiro 2024:</strong> Concepção inicial e definição dos requisitos do projeto.
    </li>
    <li style="margin-bottom:1.5rem; position:relative; padding-left:2rem;">
      <span style="position:absolute; left:0; top:0; font-size:1.2rem; color:#986dff;">&#9679;</span>
      <strong>Fevereiro 2024:</strong> Desenvolvimento do backend usando Java e Spring Boot.
    </li>
    <li style="margin-bottom:1.5rem; position:relative; padding-left:2rem;">
      <span style="position:absolute; left:0; top:0; font-size:1.2rem; color:#986dff;">&#9679;</span>
      <strong>Março 2024:</strong> Integração com MongoDB e implementação de cache com Redis.
    </li>
    <li style="margin-bottom:1.5rem; position:relative; padding-left:2rem;">
      <span style="position:absolute; left:0; top:0; font-size:1.2rem; color:#986dff;">&#9679;</span>
      <strong>Abril 2024:</strong> Desenvolvimento da interface de usuário e design da experiência.
    </li>
  </ul>

  <!-- Tecnologias Usadas -->
  <h3 style="font-family:'Poppins', sans-serif; font-size:1rem; margin-bottom:0.5rem; cursor:pointer; display:flex; align-items:center;" onclick="toggleSection('technologies', 'technologies-toggle')">
    <i class="fas fa-cogs" style="margin-right:0.5rem; color:#f39c12;"></i> Tecnologias Usadas 
    <span id="technologies-toggle" style="font-size:0.8rem; color:#007bff; margin-left:auto; transition: transform 0.3s ease;">&#9660;</span>
  </h3>
  <ul id="technologies" style="font-family:'Poppins', sans-serif; list-style:none; padding:0; display:none; overflow:hidden; transition: max-height 0.5s ease;">
    <li style="margin-bottom:1rem;">
      <strong>Java</strong> - Linguagem de programação utilizada no desenvolvimento do backend.
    </li>
    <li style="margin-bottom:1rem;">
      <strong>Spring Boot</strong> - Framework para simplificar o desenvolvimento do backend.
    </li>
    <li style="margin-bottom:1rem;">
      <strong>Spring Data JPA</strong> - Utilizado para interagir com o banco de dados MongoDB.
    </li>
    <li style="margin-bottom:1rem;">
      <strong>MongoDB</strong> - Banco de dados NoSQL utilizado para armazenar dados.
    </li>
    <li style="margin-bottom:1rem;">
      <strong>Redis</strong> - Sistema de cache utilizado para melhorar a performance.
    </li>
    <li style="margin-bottom:1rem;">
      <strong>Spring Security</strong> - Framework para implementar autenticação e controle de acesso.
    </li>
  </ul>

  <!-- Galeria de Imagens -->
  <div class="project-gallery" style="margin-top:1rem;">
    <h3 style="font-family:'Poppins', sans-serif; font-size:1rem; margin-bottom:0.5rem;">
      <i class="fas fa-images" style="margin-right:0.5rem;"></i> Galeria do Projeto
    </h3>
    <div class="gallery-images" style="display:flex; flex-wrap:wrap; gap:1rem;">
      <img src="images/portfolio/img-1.jpg" alt="Tela principal do Painter AR" style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
      <img src="images/portfolio/img-2.jpg" alt="Visualização em AR" style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
    </div>
  </div>

  <!-- Desafios e Soluções -->
  <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
    <strong><i class="fas fa-tools"></i> Desafios e Soluções:</strong>
  </p>
  <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
    <strong><i class="fas fa-exclamation-circle"></i> Desafios:</strong> Integrar 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">design de produto</strong> com 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">tecnologia de AR</strong>, necessitando conhecimento de 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">C#</strong> e 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Unity 3D</strong>. Além disso, criar uma 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">identidade visual coesa</strong> e intuitiva para usuários de diferentes perfis, como artistas e compradores.
  </p>

  <!-- Resultados e Próximos Passos -->
  <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
    <strong><i class="fas fa-trophy"></i> Resultados e Próximos Passos:</strong> A plataforma permite que os usuários descubram 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">obras de arte</strong>, aprendam mais sobre os artistas e visualizem pinturas em seus próprios espaços usando AR. O projeto destacou a importância de uma 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">experiência de usuário personalizada</strong> e a necessidade de um 
    <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">design visual claro</strong> e diferenciado.
  </p>
  `;
}

  
// Fecha o modal ao clicar no botão de fechar
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('projectModal').style.display = 'none';
});

// Fecha o modal ao clicar fora do modal
window.onclick = function(event) {
  if (event.target == document.getElementById('projectModal')) {
      document.getElementById('projectModal').style.display = 'none';
  }
};

// Icone dropdown
function toggleSection(sectionId, toggleId) {
  const section = document.getElementById(sectionId);
  const toggle = document.getElementById(toggleId);
  const isVisible = section.style.display === 'block';
  section.style.display = isVisible ? 'none' : 'block';
  toggle.innerHTML = isVisible ? '&#9660;' : '&#9650;';
}