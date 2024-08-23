//Recursos Dinâmicos
(function(g){new WOW().init();var f=g("#main-nav");var c=g(".toggle");var b={disableAt:false,customToggle:c,levelSpacing:10,navTitle:"Niwax Menu",levelTitles:true,levelTitles:true,labelClose:false,levelTitleAsBack:true,levelOpen:"expand",closeOnClick:true,insertClose:true,closeActiveLevel:true,insertBack:true};var e=f.hcOffcanvasNav(b);function h(){if(g(window).scrollTop()>=80){g(".navfix").addClass("sticky")}else{g(".navfix").removeClass("sticky")}}g(function(){g(window).scroll(h);h()});var a=g("li.sbmenu");a.hover(function(){g(this).addClass("hover")},function(){g(this).removeClass("hover")});g(".video-link").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,});var d=g(".service-card-prb");d.owlCarousel({items:4,loop:true,autoplay:true,margin:20,nav:false,dots:false,autoplayTimeout:3500,autoplayHoverPause:true,smartSpeed:2000,responsive:{0:{items:1},520:{items:2},768:{items:3},1200:{items:3},1400:{items:3},1600:{items:3},}});var d=g(".testimonial-card-a");d.owlCarousel({items:1,loop:true,autoplay:true,autoplayTimeout:6000,autoplayHoverPause:true,smartSpeed:500,responsive:{0:{items:1},768:{items:1},1024:{items:1},1400:{items:1}}});var d=g(".video-testimonials");d.owlCarousel({items:2,nav:false,dots:false,autoplay:false,autoplayTimeout:3500,smartSpeed:1500,margin:20,responsive:{0:{items:1},768:{items:2},1024:{items:2},1400:{items:2}}});var d=g(".project-screens");d.owlCarousel({items:4,loop:true,autoplay:true,margin:20,nav:false,dots:false,autoplayTimeout:3500,autoplayHoverPause:true,smartSpeed:2000,responsive:{0:{items:1},520:{items:2},768:{items:3},1200:{items:3},1400:{items:3},1600:{items:3},}});var d=g(".porto-slide");d.owlCarousel({items:1,loop:true,autoplay:true,margin:10,nav:false,dots:true,stagePadding:50,autoplayTimeout:350000,autoplayHoverPause:true,smartSpeed:2000,responsive:{0:{items:1,stagePadding:0},520:{items:1,stagePadding:0},768:{items:1,stagePadding:0},1200:{items:1},1400:{items:1},1600:{items:1},}});var d=g(".single-slide");d.owlCarousel({items:1,loop:true,autoplay:true,margin:10,nav:false,dots:true,stagePadding:100,autoplayTimeout:3500,autoplayHoverPause:true,smartSpeed:2000,responsive:{0:{items:1,stagePadding:0},520:{items:1,stagePadding:0},768:{items:1,stagePadding:0},1200:{items:1},1400:{items:1},1600:{items:1},}});var d=g(".bages-slider");d.owlCarousel({items:4,loop:true,autoplay:true,centre:true,margin:20,nav:false,dots:false,autoplayTimeout:4000,autoplayHoverPause:true,smartSpeed:2000,responsive:{0:{items:2},520:{items:3},768:{items:3},1200:{items:3},1400:{items:4},1600:{items:4},}});var d=g(".logo-weworkfor");d.owlCarousel({items:4,loop:true,autoplay:true,margin:10,nav:false,dots:false,autoplayTimeout:1800,autoplayHoverPause:false,smartSpeed:2000,responsive:{0:{items:3},520:{items:3},768:{items:4},1200:{items:4},1400:{items:5},1600:{items:6},}});var d=g(".testimonial-card-b");d.owlCarousel({items:1,loop:true,autoplay:true,autoplayTimeout:3000,autoplayHoverPause:true,dots:true,dotsContainer:"#testimonials-avatar",smartSpeed:500,responsive:{0:{items:1},768:{items:1},1024:{items:1},1400:{items:1}}});var d=g(".zoomowl");d.owlCarousel({stagePadding:200,loop:true,margin:10,nav:false,items:1,lazyLoad:true,responsive:{0:{items:1,stagePadding:60},600:{items:1,stagePadding:100},1000:{items:1,stagePadding:200},1200:{items:1,stagePadding:250},1400:{items:1,stagePadding:300},1600:{items:1,stagePadding:350},1800:{items:1,stagePadding:400}}});g(".counter").counterUp({delay:10,time:2500,});g.scrollUp({animation:"fade",scrollImg:{active:true,type:"background"}});g(".card-list").imagesLoaded(function(){var i=g(".card-list").isotope({itemSelector:".single-card-item",percentPosition:true,masonry:{columnWidth:".grid-sizer"}});g(".filter-menu").on("click","li",function(){var j=g(this).attr("data-filter");i.isotope({filter:j})})});g(".filter-menu li").on("click",function(i){g(this).siblings(".is-checked").removeClass("is-checked");g(this).addClass("is-checked");i.preventDefault()});g("[data-background]").each(function(){g(this).css("background-image","url("+g(this).attr("data-background")+")")})})(jQuery);
//Digitação Automática
document.addEventListener("DOMContentLoaded", function() { var typingEffect = new Typed(".typedText", { strings: [ "Desenvolvedor de Software"], loop: false, typeSpeed: 100, backSpeed: 70, backDelay: 2500 }); });
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

// Funções auxiliares para retornar o conteúdo detalhado de cada projeto
function getProject1Content() {
  return `
      <img src="images/portfolio/img-0.jpg" alt="Sistema de Gestão de Usuários">
      <h2>Sistema de Gestão de Usuários</h2>
      <p><strong>Descrição:</strong> Esta aplicação foi desenvolvida para facilitar o gerenciamento de usuários em uma organização. Permite o cadastro, edição, exclusão e visualização de perfis de usuários, com diferentes níveis de acesso conforme o papel do usuário (admin, usuário comum, etc.).</p>
      
      <p><strong>Tecnologias Utilizadas:</strong></p>
      <ul>
          <li><strong>Java:</strong> Linguagem principal para o desenvolvimento da aplicação.</li>
          <li><strong>Spring Boot:</strong> Utilizado para a criação do backend e gerenciamento das dependências.</li>
          <li><strong>API REST:</strong> Implementada para permitir a integração com outras aplicações e serviços.</li>
          <li><strong>JPA (Java Persistence API):</strong> Utilizado para o mapeamento objeto-relacional e para facilitar a manipulação dos dados no banco de dados.</li>
          <li><strong>H2 Database:</strong> Banco de dados em memória utilizado durante o desenvolvimento e testes.</li>
      </ul>
      
      <p><strong>Funcionalidades Principais:</strong></p>
      <ul>
          <li>Cadastro de novos usuários com validação de dados.</li>
          <li>Edição e atualização de perfis existentes.</li>
          <li>Exclusão de usuários com confirmação de ação.</li>
          <li>Autenticação e autorização com controle de acesso baseado em roles.</li>
          <li>Integração com serviços de email para notificações automáticas.</li>
      </ul>
      
      <p><strong>Desafios:</strong> Implementar um sistema de autenticação robusto que permita a integração com múltiplos provedores de identidade (como OAuth). Também foi desafiador garantir a segurança dos dados sensíveis, como senhas, utilizando criptografia forte.</p>
      
      <p><strong>Resultados:</strong> A aplicação foi implementada com sucesso, oferecendo uma interface amigável e segura para a gestão de usuários. O uso de Spring Boot e JPA permitiu um desenvolvimento rápido e eficiente, com alto desempenho e fácil manutenção.</p>
      
     <div style="display: flex; gap: 10px;">
          <p><strong>Repositório:</strong> <a href="https://github.com/usuario/sistema-gestao-usuarios" target="_blank"><i class="fab fa-github"></i> GitHub</a></p>
          <p><strong>Live Demo:</strong> <a href="https://live-demo.com/projeto1" target="_blank"><i class="fas fa-external-link-alt"></i> Visualizar ao Vivo</a></p>
      </div>
  `;
}

function getProject2Content() {
  return `
      <img src="images/portfolio/img-1.jpg" alt="Sistema de E-commerce">
      <h2>Sistema de E-commerce</h2>
      <p><strong>Descrição:</strong> Um sistema básico de e-commerce com funcionalidades de gerenciamento de produtos, carrinho de compras, pagamento e histórico de pedidos. A arquitetura do sistema foi baseada em microserviços para escalabilidade e flexibilidade.</p>
      
      <p><strong>Tecnologias Utilizadas:</strong></p>
      <ul>
          <li><strong>Java:</strong> Linguagem principal para o desenvolvimento do backend.</li>
          <li><strong>Spring Boot:</strong> Framework utilizado para criar os microserviços e gerenciamento das dependências.</li>
          <li><strong>Microservices:</strong> Arquitetura baseada em microserviços para separação de responsabilidades.</li>
          <li><strong>RabbitMQ:</strong> Utilizado para a comunicação entre os microserviços através de mensagens.</li>
          <li><strong>MySQL:</strong> Banco de dados utilizado para armazenar as informações de produtos, usuários e pedidos.</li>
      </ul>
      
      <p><strong>Funcionalidades Principais:</strong></p>
      <ul>
          <li>Gerenciamento de produtos com categorias e atributos personalizados.</li>
          <li>Sistema de carrinho de compras e finalização de pedidos.</li>
          <li>Integração com gateways de pagamento.</li>
          <li>Histórico de pedidos e acompanhamento de status.</li>
          <li>Administração e controle de estoque.</li>
      </ul>
      
      <p><strong>Desafios:</strong> Garantir a comunicação eficiente entre os microserviços e a consistência dos dados em um ambiente distribuído. Foi necessário lidar com problemas de sincronização e garantir que o sistema pudesse escalar sem perda de performance.</p>
      
      <p><strong>Resultados:</strong> O sistema foi bem-sucedido em fornecer uma plataforma estável e escalável para o comércio eletrônico. A arquitetura de microserviços facilitou a manutenção e a adição de novas funcionalidades.</p>
      
     <div style="display: flex; gap: 10px;">
          <p><strong>Repositório:</strong> <a href="https://github.com/usuario/sistema-gestao-usuarios" target="_blank"><i class="fab fa-github"></i> GitHub</a></p>
          <p><strong>Live Demo:</strong> <a href="https://live-demo.com/projeto1" target="_blank"><i class="fas fa-external-link-alt"></i> Visualizar ao Vivo</a></p>
      </div>
  `;
}

function getProject3Content() {
  return `
      <img src="images/portfolio/img-2.jpg" alt="Painter AR">
      <h2>Painter AR</h2>
      <p><strong>Descrição:</strong> Painter AR é uma plataforma digital que conecta compradores e artistas, permitindo que os compradores aluguem pinturas de acordo com suas necessidades e gostos pessoais. Utilizando realidade aumentada (AR), os usuários podem visualizar as obras de arte em seus próprios espaços antes de alugar.</p>
      
      <p><strong>Papel no Projeto:</strong> Product Designer e AR Designer</p>
      
      <p><strong>Projeto:</strong> Iniciativa própria</p>
      
      <p><strong>Timeline:</strong> 2 semanas (2022)</p>
      
      <p><strong>Tecnologias Utilizadas:</strong></p>
      <ul>
          <li><strong>Figma:</strong> Para design de interface e prototipagem.</li>
          <li><strong>Substance Painter:</strong> Para criação de texturas e materiais 3D.</li>
          <li><strong>Maya:</strong> Para modelagem 3D.</li>
          <li><strong>Unity 3D:</strong> Para desenvolvimento da aplicação de AR.</li>
          <li><strong>Illustrator:</strong> Para criação de ilustrações e elementos visuais.</li>
      </ul>
      
      <p><strong>Desafios:</strong> Um dos maiores desafios foi integrar design de produto com tecnologia de AR, necessitando conhecimento de C# e Unity 3D. Também houve desafios em criar uma identidade visual coesa e intuitiva para usuários de diferentes perfis, como artistas e compradores.</p>
      
      <p><strong>Resultados:</strong> A plataforma permite que os usuários descubram obras de arte, aprendam mais sobre os artistas e visualizem pinturas em seus próprios espaços usando AR. O projeto destacou a importância de uma experiência de usuário personalizada e a necessidade de um design visual claro e diferenciado.</p>
      
     <div style="display: flex; gap: 10px;">
          <p><strong>Repositório:</strong> <a href="https://github.com/usuario/sistema-gestao-usuarios" target="_blank"><i class="fab fa-github"></i> GitHub</a></p>
          <p><strong>Live Demo:</strong> <a href="https://live-demo.com/projeto1" target="_blank"><i class="fas fa-external-link-alt"></i> Visualizar ao Vivo</a></p>
      </div>
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
