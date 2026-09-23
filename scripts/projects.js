(() => {
    // Fotos só entram após confirmação da origem: { src, alt, width, height, srcset? }.
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
            cover: null,
            gallery: []
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
            cover: null,
            gallery: []
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
            cover: null,
            gallery: []
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
            cover: null,
            gallery: []
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
            cover: null,
            gallery: []
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
            cover: null,
            gallery: []
        },
        {
            id: 'parceria-vicios',
            title: 'Inspeção de Vícios Construtivos',
            type: 'Condomínio residencial',
            category: 'vicios',
            involvement: 'partner',
            summary: 'Participação técnica em inspeção de vícios construtivos de condomínio residencial.',
            scope: 'Atuação em parceria técnica na inspeção e documentação de manifestações construtivas.',
            documentation: ['Laudo técnico de vícios construtivos', 'Questionário de análise de ocorrências de fachada', 'Registros fotográficos e de drone'],
            cover: null,
            gallery: []
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
            cover: null,
            gallery: []
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
            cover: null,
            gallery: []
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
            cover: null,
            gallery: []
        }
    ];

    const categories = {
        umidade: 'Umidade',
        estruturas: 'Estruturas',
        vicios: 'Vícios construtivos',
        vizinhanca: 'Vizinhança',
        recebimento: 'Recebimento',
        fachadas: 'Fachadas',
        reformas: 'Reformas'
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
        article.append(element('p', 'projectCategory', categories[project.category]));
        article.append(element('h4', '', project.title));
        article.append(element('p', 'projectType', project.type));
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
        document.querySelector('#dialog-category').textContent = categories[project.category];
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
