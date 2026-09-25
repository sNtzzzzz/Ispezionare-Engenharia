(() => {
    // Fotografias associadas pelo guia do acervo; referências internas e imagens de drone não são publicadas.
    const projects = [
        {
            id: 'umidade-residencial',
            title: 'Inspeção Especializada de Umidade',
            type: 'Edificação residencial',
            category: 'umidade',
            involvement: 'own',
            summary: 'Investigação técnica de manifestações relacionadas à umidade em edificação residencial.',
            scope: 'Inspeção especializada de umidade, com documentação de campo e consolidação das constatações em laudo técnico.',
            documentation: ['Registros técnicos de campo', 'Laudo técnico de inspeção especializada de umidade'],
            cover: { src: '../images/images-projects/umidade-residencial/cover.webp',
                    alt: 'Ambiente de academia com abertura de inspeção no forro e marcas na base da parede.', width: 1800, height: 1350 },
            gallery: [
                { src: '../images/images-projects/umidade-residencial/gallery-01.webp',
                    alt: 'Tubulações aparentes sob a laje e acima da alvenaria durante a inspeção.', width: 1600, height: 1200 },
                { src: '../images/images-projects/umidade-residencial/gallery-02.webp',
                    alt: 'Abertura no forro junto à parede, com escada de acesso à área inspecionada.', width: 1600, height: 1200 },
                { src: '../images/images-projects/umidade-residencial/gallery-03.webp',
                    alt: 'Tubulações junto à face inferior da laje, com manchas escuras na superfície.', width: 1600, height: 1200 },
                { src: '../images/images-projects/umidade-residencial/gallery-04.webp',
                    alt: 'Detalhe das conexões e suportes das tubulações sob a laje.', width: 1600, height: 1200 },
                { src: '../images/images-projects/umidade-residencial/gallery-05.webp',
                    alt: 'Câmera termográfica utilizada no levantamento das condições junto às tubulações.', width: 1600, height: 1200 }
            ]
        },
        {
            id: 'vistoria-vizinhanca',
            title: 'Vistoria Cautelar de Vizinhança',
            type: 'Entorno de empreendimento em implantação',
            category: 'vizinhanca',
            involvement: 'own',
            summary: 'Registro das condições do entorno de um empreendimento em implantação.',
            scope: 'Vistoria cautelar com registros organizados de imóveis vizinhos, sistema viário e terreno da obra.',
            documentation: ['Registros fotográficos do entorno', 'Registros técnicos das condições verificadas'],
            cover: { src: '../images/images-projects/vistoria-vizinhanca/cover.webp',
                    alt: 'Vista do pavimento, das calçadas e das fachadas no entorno vistoriado.', width: 1800, height: 1350 },
            gallery: [
                { src: '../images/images-projects/vistoria-vizinhanca/gallery-01.webp',
                    alt: 'Registro das condições do pavimento junto ao meio-fio e às calçadas.', width: 1600, height: 1200 },
                { src: '../images/images-projects/vistoria-vizinhanca/gallery-02.webp',
                    alt: 'Detalhe da borda da calçada e do pavimento asfáltico durante a vistoria.', width: 1600, height: 1200 },
                { src: '../images/images-projects/vistoria-vizinhanca/gallery-03.webp',
                    alt: 'Vista de muro e fachada junto à calçada, com vegetação na base.', width: 1600, height: 1200 }
            ]
        },
        {
            id: 'vicios-residencia',
            title: 'Inspeção de Vícios Construtivos',
            type: 'Residência unifamiliar',
            category: 'vicios',
            involvement: 'own',
            summary: 'Inspeção de vícios construtivos em residência unifamiliar.',
            scope: 'Inspeção e documentação técnica das condições construtivas, com registros de campo e laudo.',
            documentation: ['Registros fotográficos', 'Laudo de inspeção de vícios construtivos'],
            cover: { src: '../images/images-projects/vicios-residencia/cover.webp',
                    alt: 'Terraço residencial com piso cerâmico, mureta e guarda-corpo metálico.', width: 1800, height: 1350 },
            gallery: [
                { src: '../images/images-projects/vicios-residencia/gallery-01.webp',
                    alt: 'Detalhe de ralo, piso cerâmico e alterações no revestimento junto ao rodapé.', width: 1600, height: 1200 },
                { src: '../images/images-projects/vicios-residencia/gallery-02.webp',
                    alt: 'Vista de parede externa e beiral de madeira junto ao terraço.', width: 1600, height: 1200 },
                { src: '../images/images-projects/vicios-residencia/gallery-03.webp',
                    alt: 'Cobertura de telhas cerâmicas e encontro com a parede da edificação.', width: 1600, height: 1200 },
                { src: '../images/images-projects/vicios-residencia/gallery-04.webp',
                    alt: 'Fissuras no revestimento da parede junto ao encontro com a cobertura.', width: 1600, height: 1200 },
                { src: '../images/images-projects/vicios-residencia/gallery-05.webp',
                    alt: 'Detalhe de ralo aberto e fissura na peça cerâmica ao redor.', width: 1600, height: 1200 }
            ]
        },
        {
            id: 'recuperacao-estrutural',
            title: 'Acompanhamento de Recuperação Estrutural',
            type: 'Estrutura de concreto',
            category: 'estruturas',
            involvement: 'own',
            summary: 'Acompanhamento técnico relacionado à recuperação de elemento estrutural.',
            scope: 'Documentação da intervenção e emissão dos registros técnicos correspondentes ao acompanhamento.',
            documentation: ['Relatório de acompanhamento de recuperação de estrutura', 'Memorial descritivo de recuperação de estrutura', 'Registros fotográficos'],
            cover: { src: '../images/images-projects/recuperacao-estrutural/cover.webp',
                    alt: 'Piso com faixa de intervenção e material removido durante o acompanhamento técnico.', width: 1800, height: 1350 },
            gallery: [
                { src: '../images/images-projects/recuperacao-estrutural/gallery-01.webp',
                    alt: 'Ambiente interno em obra, com intervenções no teto e materiais no local.', width: 1600, height: 1200 },
                { src: '../images/images-projects/recuperacao-estrutural/gallery-02.webp',
                    alt: 'Banheiro em obra com superfícies expostas e materiais de construção.', width: 1600, height: 1200 },
                { src: '../images/images-projects/recuperacao-estrutural/gallery-03.webp',
                    alt: 'Piso da varanda durante a execução do revestimento cerâmico.', width: 1600, height: 1200 },
                { src: '../images/images-projects/recuperacao-estrutural/gallery-04.webp',
                    alt: 'Detalhe do encontro entre piso e parede com material removido.', width: 1600, height: 1200 }
            ]
        },
        {
            id: 'estrutura-existente',
            title: 'Inspeção Especializada de Estrutura',
            type: 'Edificação existente',
            category: 'estruturas',
            involvement: 'own',
            summary: 'Inspeção especializada de estrutura em edificação existente.',
            scope: 'Inspeção técnica e registro das condições observadas em elementos estruturais.',
            documentation: ['Registros fotográficos', 'Parecer e laudo', 'Desenho técnico'],
            cover: { src: '../images/images-projects/estrutura-existente/cover.webp',
                    alt: 'Escoramentos metálicos junto a elementos de concreto e alvenaria exposta.', width: 1800, height: 1350 },
            gallery: [
                { src: '../images/images-projects/estrutura-existente/gallery-01.webp',
                    alt: 'Armaduras armazenadas junto à alvenaria e às superfícies sem revestimento.', width: 1600, height: 1200 },
                { src: '../images/images-projects/estrutura-existente/gallery-02.webp',
                    alt: 'Vista dos escoramentos e das superfícies internas da edificação inspecionada.', width: 1600, height: 1200 },
                { src: '../images/images-projects/estrutura-existente/gallery-03.webp',
                    alt: 'Detalhe de elemento vertical entre escoras e travessas de madeira.', width: 1600, height: 1200 },
                { src: '../images/images-projects/estrutura-existente/gallery-04.webp',
                    alt: 'Tubulação aparente junto a superfícies de concreto e alvenaria.', width: 1600, height: 1200 },
                { src: '../images/images-projects/estrutura-existente/gallery-05.webp',
                    alt: 'Vista inferior da laje com escoramentos e formas de madeira.', width: 1600, height: 1200 }
            ]
        },
        {
            id: 'recebimento-chaves',
            title: 'Vistoria de Recebimento de Chaves',
            type: 'Unidade residencial',
            category: 'recebimento',
            involvement: 'own',
            summary: 'Vistoria de unidade residencial no contexto do recebimento de chaves.',
            scope: 'Verificação e documentação das condições da unidade durante a vistoria de recebimento.',
            documentation: ['Relatório de vistoria', 'Memorial descritivo', 'Registros fotográficos'],
            cover: { src: '../images/images-projects/recebimento-chaves/cover.webp',
                    alt: 'Ambiente residencial vazio com janela, paredes pintadas e contrapiso aparente.', width: 1800, height: 1350 },
            gallery: [
                { src: '../images/images-projects/recebimento-chaves/gallery-01.webp',
                    alt: 'Vista do contrapiso e das paredes junto à janela durante a vistoria de recebimento.', width: 1600, height: 1200 },
                { src: '../images/images-projects/recebimento-chaves/gallery-02.webp',
                    alt: 'Vista do teto, das paredes e da janela do ambiente vistoriado.', width: 1600, height: 1200 },
                { src: '../images/images-projects/recebimento-chaves/gallery-03.webp',
                    alt: 'Detalhe do acabamento da parede iluminado durante a inspeção.', width: 1600, height: 1200 },
                { src: '../images/images-projects/recebimento-chaves/gallery-04.webp',
                    alt: 'Detalhe da maçaneta e da fechadura sob iluminação de inspeção.', width: 1600, height: 1200 },
                { src: '../images/images-projects/recebimento-chaves/gallery-05.webp',
                    alt: 'Registro aproximado da superfície pintada da parede.', width: 1600, height: 1200 }
            ]
        },
        {
            id: 'parceria-vicios',
            title: 'Inspeção de Vícios Construtivos',
            type: 'Condomínio residencial',
            category: 'vicios',
            involvement: 'partner',
            summary: 'Participação técnica em inspeção de vícios construtivos de condomínio residencial.',
            scope: 'Atuação em parceria técnica na inspeção e documentação de manifestações construtivas.',
            documentation: ['Laudo técnico de vícios construtivos', 'Questionário de análise de ocorrências de fachada', 'Registros fotográficos'],
            cover: { src: '../images/images-projects/parceria-vicios/cover.webp',
                    alt: 'Vista da cobertura com fissuras no piso e instalações aparentes.', width: 1800, height: 1350 },
            gallery: [
                { src: '../images/images-projects/parceria-vicios/gallery-01.webp',
                    alt: 'Fissuras no piso ao redor de um ponto de fixação de cabo metálico.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-vicios/gallery-02.webp',
                    alt: 'Detalhe do esticador e da fixação do cabo junto às fissuras no piso.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-vicios/gallery-03.webp',
                    alt: 'Registro aproximado da base de fixação e das fissuras ao redor.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-vicios/gallery-04.webp',
                    alt: 'Tampas de acesso e tubulações aparentes sobre o piso da cobertura.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-vicios/gallery-05.webp',
                    alt: 'Encontro do piso com mureta revestida por peças cerâmicas.', width: 1600, height: 1200 }
            ]
        },
        {
            id: 'parceria-fachadas',
            title: 'Inspeção de Fachadas',
            type: 'Condomínio residencial',
            category: 'fachadas',
            involvement: 'partner',
            summary: 'Participação técnica em inspeção de fachadas de condomínio residencial.',
            scope: 'Atuação em parceria técnica relacionada às condições dos sistemas de fachada.',
            documentation: ['Laudo de fachada', 'Planilha de constatações', 'Plano de manutenção', 'Registros fotográficos'],
            cover: { src: '../images/images-projects/parceria-fachadas/cover.webp',
                    alt: 'Vista da fachada de edifício residencial a partir do nível térreo.', width: 1800, height: 1350 },
            gallery: [
                { src: '../images/images-projects/parceria-fachadas/gallery-01.webp',
                    alt: 'Vista vertical dos revestimentos e das janelas da fachada.', width: 1200, height: 1600 },
                { src: '../images/images-projects/parceria-fachadas/gallery-02.webp',
                    alt: 'Panos da fachada com janelas e elementos de revestimento.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-fachadas/gallery-03.webp',
                    alt: 'Profissional em acesso por corda junto à superfície externa da fachada.', width: 1200, height: 1600 },
                { src: '../images/images-projects/parceria-fachadas/gallery-04.webp',
                    alt: 'Inspeção da fachada por profissional suspenso em cordas.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-fachadas/gallery-05.webp',
                    alt: 'Detalhe de abertura na base de uma parede externa, com vegetação.', width: 1600, height: 1200 }
            ]
        },
        {
            id: 'parceria-umidade',
            title: 'Inspeção Especializada de Umidade',
            type: 'Unidade comercial',
            category: 'umidade',
            involvement: 'partner',
            summary: 'Participação técnica em inspeção especializada de umidade em unidade comercial.',
            scope: 'Atuação em parceria técnica na investigação e documentação de manifestações relacionadas à umidade.',
            documentation: ['Laudo técnico', 'Parecer técnico', 'Desenho técnico', 'Registros fotográficos'],
            cover: { src: '../images/images-projects/parceria-umidade/cover.webp',
                    alt: 'Dutos e tubulações aparentes na área técnica de uma unidade comercial.', width: 1800, height: 1350 },
            gallery: [
                { src: '../images/images-projects/parceria-umidade/gallery-01.webp',
                    alt: 'Detalhe do encontro entre piso, parede e equipamento na área inspecionada.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-umidade/gallery-02.webp',
                    alt: 'Registro aproximado da base da parede e do revestimento do piso.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-umidade/gallery-03.webp',
                    alt: 'Bancada, cuba e torneira na área interna da unidade comercial.', width: 1600, height: 901 },
                { src: '../images/images-projects/parceria-umidade/gallery-04.webp',
                    alt: 'Duto com isolamento e perfil metálico de suporte na área técnica.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-umidade/gallery-05.webp',
                    alt: 'Superfície com manchas e material deteriorado junto à área inspecionada.', width: 1600, height: 1200 }
            ]
        },
        {
            id: 'parceria-estrutura',
            title: 'Inspeção Especializada de Estrutura',
            type: 'Edificação residencial',
            category: 'estruturas',
            involvement: 'partner',
            summary: 'Participação técnica em inspeção de estrutura em edificação residencial.',
            scope: 'Atuação em parceria técnica na inspeção especializada de estrutura, com documentação das condições observadas.',
            documentation: ['Laudo de inspeção de estrutura', 'Croqui técnico', 'Registros fotográficos'],
            cover: { src: '../images/images-projects/parceria-estrutura/cover.webp',
                    alt: 'Fissura diagonal em parede abaixo de um aparelho de ar-condicionado.', width: 1800, height: 1350 },
            gallery: [
                { src: '../images/images-projects/parceria-estrutura/gallery-01.webp',
                    alt: 'Acesso ao salão de festas onde foi realizado o levantamento técnico.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-estrutura/gallery-02.webp',
                    alt: 'Vista da parede e do aparelho de ar-condicionado junto à região inspecionada.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-estrutura/gallery-03.webp',
                    alt: 'Fissurômetro posicionado sobre a fissura para medição de sua abertura.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-estrutura/gallery-04.webp',
                    alt: 'Registro aproximado do traçado da fissura no revestimento da parede.', width: 1600, height: 1200 },
                { src: '../images/images-projects/parceria-estrutura/gallery-05.webp',
                    alt: 'Detalhe da medição da abertura da fissura com fissurômetro.', width: 1600, height: 1200 }
            ]
        }
    ];

    const categories = {
        umidade: 'Umidade',
        estruturas: 'Estruturas',
        vicios: 'Vícios construtivos',
        vizinhanca: 'Vizinhança',
        recebimento: 'Recebimento',
        fachadas: 'Fachadas'
    };
    const involvementLabels = { own: 'Atuação Ispezionare', partner: 'Parceria técnica' };
    const dialog = document.querySelector('#project-dialog');
    const closeButton = dialog.querySelector('.dialogClose');
    const filterButtons = [...document.querySelectorAll('.projectsFilters button')];
    let lastTrigger;

    function element(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text) node.textContent = text;
        return node;
    }

    function projectImage(photo, eager = false) {
        const image = element('img');
        image.src = photo.src;
        image.alt = photo.alt;
        image.width = photo.width;
        image.height = photo.height;
        image.loading = eager ? 'eager' : 'lazy';
        image.decoding = 'async';
        if (photo.srcset) {
            image.srcset = photo.srcset;
            image.sizes = '(max-width: 760px) 100vw, 60vw';
        }
        return image;
    }

    function projectCard(project) {
        const article = element('article', 'projectCard');
        article.dataset.category = project.category;
        if (project.cover) {
            const media = element('div', 'projectMedia');
            media.append(projectImage(project.cover));
            article.append(media);
        }
        article.append(element('p', 'projectCategory', `${categories[project.category]} · ${involvementLabels[project.involvement]}`));
        article.append(element('h4', '', project.title));
        article.append(element('p', 'projectType', project.type));
        article.append(element('p', 'projectSummary', project.summary));
        const button = element('button', 'projectOpen projectsTextLink', 'Ver projeto ↗');
        button.type = 'button';
        button.dataset.project = project.id;
        button.setAttribute('aria-label', `Ver projeto: ${project.title} — ${project.type}, ${involvementLabels[project.involvement]}`);
        button.setAttribute('aria-haspopup', 'dialog');
        article.append(button);
        return article;
    }

    function renderProjects(category) {
        const selection = projects.filter(project => category === 'todos' || project.category === category);
        for (const involvement of ['own', 'partner']) {
            const group = selection.filter(project => project.involvement === involvement);
            document.querySelector(`#${involvement}-projects`).replaceChildren(...group.map(projectCard));
            document.querySelector(`#${involvement}-section`).hidden = group.length === 0;
        }
        for (const button of filterButtons) {
            button.setAttribute('aria-pressed', String(button.dataset.category === category));
        }
        const count = selection.length;
        const ownCount = selection.filter(project => project.involvement === 'own').length;
        const partnerCount = selection.filter(project => project.involvement === 'partner').length;
        const breakdown = [];
        if (ownCount) breakdown.push(`${ownCount} de atuação Ispezionare`);
        if (partnerCount) breakdown.push(`${partnerCount} de parceria técnica`);
        document.querySelector('#project-count').textContent = `${count} ${count === 1 ? 'trabalho nesta seleção' : 'trabalhos nesta seleção'}${category === 'todos' ? '' : ` · ${categories[category]}`}${breakdown.length ? ` — ${breakdown.join(' e ')}` : ''}`;
        document.querySelector('#projects-empty').hidden = count !== 0;
    }

    function openProject(id, trigger) {
        const project = projects.find(item => item.id === id);
        if (!project) return;
        lastTrigger = trigger;
        document.querySelector('#dialog-title').textContent = project.title;
        document.querySelector('#dialog-type').textContent = project.type;
        document.querySelector('#dialog-category').textContent = `${involvementLabels[project.involvement]} · ${categories[project.category]}`;
        document.querySelector('#dialog-summary').textContent = project.summary;
        document.querySelector('#dialog-scope').textContent = project.scope;
        document.querySelector('#dialog-documentation').replaceChildren(...project.documentation.map(text => element('li', '', text)));
        const cover = document.querySelector('#dialog-cover');
        cover.replaceChildren(...(project.cover ? [projectImage(project.cover, true)] : []));
        cover.hidden = !project.cover;
        document.querySelector('#dialog-gallery').replaceChildren(...project.gallery.map(photo => {
            const figure = element('figure');
            figure.append(projectImage(photo));
            return figure;
        }));
        document.querySelector('#dialog-gallery-section').hidden = project.gallery.length === 0;
        dialog.showModal();
        document.body.classList.add('projectModalOpen');
        dialog.scrollTop = 0;
        closeButton.focus({ preventScroll: true });
    }

    document.querySelector('main').addEventListener('click', event => {
        const trigger = event.target.closest('[data-project]');
        if (trigger) openProject(trigger.dataset.project, trigger);
    });
    for (const [index, button] of filterButtons.entries()) {
        button.addEventListener('click', () => renderProjects(button.dataset.category));
        button.addEventListener('keydown', event => {
            const keys = { ArrowRight: (index + 1) % filterButtons.length, ArrowLeft: (index - 1 + filterButtons.length) % filterButtons.length, Home: 0, End: filterButtons.length - 1 };
            if (!(event.key in keys)) return;
            event.preventDefault();
            filterButtons[keys[event.key]].focus();
        });
    }
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
        document.body.classList.remove('projectModalOpen');
        if (lastTrigger?.isConnected) lastTrigger.focus({ preventScroll: true });
    });
    dialog.addEventListener('click', event => {
        const rect = dialog.getBoundingClientRect();
        if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) {
            dialog.close();
        }
    });

    renderProjects('todos');
    document.querySelector('.projectsFilters').hidden = false;

    const requestedProject = new URLSearchParams(window.location.search).get('projeto');
    const requestedTrigger = [...document.querySelectorAll('[data-project]')]
        .find(button => button.dataset.project === requestedProject);
    if (requestedTrigger) {
        openProject(requestedProject, requestedTrigger);
    }
})();
