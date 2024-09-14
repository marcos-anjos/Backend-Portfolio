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


// Detalhamento do Projeto I - Sistema GPS para Identificação de POIs
function getProject1Content() {
  return `
    <!-- Título do Projeto -->
    <h2 style="font-family:'Poppins', sans-serif; margin-bottom:0.5rem; text-align:center;">Sistema GPS para Identificação de Pontos de Interesse</h2>
    
    <!-- Descrição do Projeto -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-info-circle"></i> Descrição do Projeto:</strong> Este projeto é uma aplicação desenvolvida em 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Java</strong> e 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring Boot</strong>. Ele utiliza 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">API REST</strong> para criar, listar e buscar pontos de interesse (POIs) com base em coordenadas GPS. A aplicação interage com uma base de dados geográfica e permite buscas por proximidade.
    </p>

    <!-- Links do Projeto -->
    <div class="project-links" style="margin:1rem 0; display:flex; justify-content:center; gap:1rem;">
      <a href="#" target="_blank" style="text-decoration:none; display:flex; align-items:center; gap:0.5rem; font-size:1rem; transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;">
        <i class="fab fa-github" style="font-size:1.2rem;"></i> GitHub
      </a>
      <a href="#" target="_blank" style="text-decoration:none; display:flex; align-items:center; gap:0.5rem; font-size:1rem; transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;">
        <i class="fas fa-eye" style="font-size:1.2rem;"></i> Visualizar ao Vivo
      </a>
    </div>

    <!-- Galeria de Imagens -->
    <div class="project-gallery" style="margin-top:1rem;">
      <h3 style="font-family:'Poppins', sans-serif; font-size:1rem; margin-bottom:0.5rem;">
        <i class="fas fa-images" style="margin-right:0.5rem;"></i> Galeria do Projeto
      </h3>
      <div class="gallery-images" style="display:flex; flex-wrap:wrap; gap:1rem;">
        <img src="images/portfolio/expense-tracker-1.jpg" alt="Tela principal do sistema GPS para identificação de POIs" style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
        <img src="images/portfolio/expense-tracker-2.jpg" alt="Tela de busca do sistema GPS para POIs" style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
      </div>
    </div>

    <!-- Desafios e Soluções -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-tools"></i> Desafios e Soluções:</strong>
    </p>
    <ul style="padding-left: 20px; font-family:'Poppins', sans-serif; line-height:1.6;">
      <li>
        <strong><i class="fas fa-exclamation-circle"></i> Desafio:</strong> Garantir a precisão na localização de POIs com base em coordenadas GPS variáveis.
        <br><strong><i class="fas fa-check-circle"></i> Solução:</strong> Implementação de algoritmos de cálculo de distância geográfica e otimização da busca por proximidade utilizando o banco de dados geográfico.
      </li>
    </ul>

    <!-- Resultados e Próximos Passos -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-trophy"></i> Resultados e Próximos Passos:</strong> 
      A plataforma foi desenvolvida com sucesso, permitindo uma busca eficiente e precisa por POIs em um raio de distância determinado. A integração de serviços REST com a base de dados geográfica oferece alta performance e flexibilidade para futuros aprimoramentos.
    </p>
  `;
}

// Detalhamento do Projeto II - Sistema de Gerenciamento de Despesas
function getProject2Content() {
  return `
    <!-- Título do Projeto -->
    <h2 style="font-family:'Poppins', sans-serif; margin-bottom:0.5rem; text-align:center;">Sistema de Gerenciamento de Despesas</h2>
    
    <!-- Descrição do Projeto -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-info-circle"></i> Descrição do Projeto:</strong> Este sistema permite o gerenciamento de despesas pessoais, incluindo funcionalidades para adicionar, editar, visualizar e excluir despesas. Desenvolvido com <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Java</strong> e 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Spring MVC</strong>, com <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">Thymeleaf</strong> para renderização de páginas e 
      <strong style="background: linear-gradient(90deg, #2E8B57, #60A982); -webkit-background-clip: text; color: transparent;">MySQL</strong> para persistência de dados.
    </p>

     <!-- Links do Projeto -->
    <div class="project-links" style="margin:1rem 0; display:flex; justify-content:center; gap:1rem;">
      <a href="#" target="_blank" style="text-decoration:none; display:flex; align-items:center; gap:0.5rem; font-size:1rem; transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;">
        <i class="fab fa-github" style="font-size:1.2rem;"></i> GitHub
      </a>
      <a href="#" target="_blank" style="text-decoration:none; display:flex; align-items:center; gap:0.5rem; font-size:1rem; transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;">
        <i class="fas fa-eye" style="font-size:1.2rem;"></i> Visualizar ao Vivo
      </a>
    </div>

    <!-- Galeria de Imagens -->
    <div class="project-gallery" style="margin-top:1rem;">
      <h3 style="font-family:'Poppins', sans-serif; font-size:1rem; margin-bottom:0.5rem;">
        <i class="fas fa-images" style="margin-right:0.5rem;"></i> Galeria do Projeto
      </h3>
      <div class="gallery-images" style="display:flex; flex-wrap:wrap; gap:1rem;">
        <img src="images/portfolio/expense-tracker-1.jpg" alt="Tela de Adição de Despesas" style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
        <img src="images/portfolio/expense-tracker-2.jpg" alt="Visualização de Despesas" style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
      </div>
    </div>

    <!-- Desafios e Soluções -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-tools"></i> Desafios e Soluções:</strong>
    </p>
    <ul style="padding-left: 20px; font-family:'Poppins', sans-serif; line-height:1.6;">
      <li>
        <strong><i class="fas fa-exclamation-circle"></i> Desafio 1:</strong> Calcular e exibir o total de despesas em tempo real para o usuário.
        <br><strong><i class="fas fa-check-circle"></i> Solução:</strong> Implementação de cálculo dinâmico utilizando streams do Java para somar os valores das despesas e exibir o total na interface do usuário.
      </li>
      <li>
        <strong><i class="fas fa-exclamation-circle"></i> Desafio 2:</strong> Facilitar a adição e edição de despesas através de uma interface intuitiva.
        <br><strong><i class="fas fa-check-circle"></i> Solução:</strong> Uso do Thymeleaf para criar formulários amigáveis e simplificados que permitam interações diretas com o backend através de mapeamentos Spring MVC.
      </li>
    </ul>
    
    <!-- Resultados e Próximos Passos -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-trophy"></i> Resultados e Próximos Passos:</strong> A aplicação está funcionando conforme esperado, permitindo um controle eficaz das despesas. Os próximos passos incluem a integração de gráficos para melhor visualização dos dados financeiros e a implementação de um sistema de notificações para alertar sobre despesas recorrentes ou limites de gastos.
    </p>
  `;
}

// Detalhamento do Projeto III - A Decidir
function getProject3Content() {
  return `
    <!-- Título do Projeto -->
    <h2 style="font-family:'Poppins', sans-serif; margin-bottom:0.5rem; text-align:center;">A Decidir</h2>

    <!-- Descrição do Projeto -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-info-circle"></i> Descrição do Projeto:</strong> Informações a serem definidas.
    </p>

     <!-- Links do Projeto -->
    <div class="project-links" style="margin:1rem 0; display:flex; justify-content:center; gap:1rem;">
      <a href="#" target="_blank" style="text-decoration:none;  display:flex; align-items:center; gap:0.5rem; font-size:1rem; transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;">
        <i class="fab fa-github" style="font-size:1.2rem;"></i> GitHub
      </a>
      <a href="#" target="_blank" style="text-decoration:none;  display:flex; align-items:center; gap:0.5rem; font-size:1rem; transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;">
        <i class="fas fa-eye" style="font-size:1.2rem;"></i> Visualizar ao Vivo
      </a>
      <a href="#" target="_blank" style="text-decoration:none; display:flex; align-items:center; gap:0.5rem; font-size:1rem; transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;">
        <i class="fas fa-file-pdf" style="font-size:1.2rem;"></i> Relatório
      </a>
    </div>

    <!-- Galeria de Imagens -->
    <div class="project-gallery" style="margin-top:1rem;">
      <h3 style="font-family:'Poppins', sans-serif; font-size:1rem; margin-bottom:0.5rem;">
        <i class="fas fa-images" style="margin-right:0.5rem;"></i> Galeria do Projeto
      </h3>
      <div class="gallery-images" style="display:flex; flex-wrap:wrap; gap:1rem;">
        <img src="images/portfolio/expense-tracker-1.jpg" alt="A Decidir..." style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
        <img src="images/portfolio/expense-tracker-2.jpg" alt="A Decidir..." style="width:100%; max-width:300px; height:200px; object-fit:cover; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
      </div>
    </div>

    <!-- Desafios e Soluções -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-tools"></i> Desafios e Soluções:</strong>
    </p>
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-exclamation-circle"></i> Desafios:</strong> Informações a serem definidas.
    </p>

    <!-- Resultados e Próximos Passos -->
    <p style="font-family:'Poppins', sans-serif; line-height:1.6; margin-bottom:1rem;">
      <strong><i class="fas fa-trophy"></i> Resultados e Próximos Passos:</strong> Informações a serem definidas.
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

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.single-card-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filterValue = button.getAttribute('data-filter');
          filterProjects(filterValue);
          setActiveButton(button);
      });
  });

  function filterProjects(category) {
      projectItems.forEach(item => {
          const itemCategories = item.getAttribute('data-category').split(' ');
          if (category === 'all' || itemCategories.includes(category)) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  }

  function setActiveButton(clickedButton) {
      filterButtons.forEach(button => {
          button.classList.remove('active-filter');
      });
      clickedButton.classList.add('active-filter');
  }
});