# Materiais para concluir a parte fotográfica

A revisão utiliza as imagens já presentes no projeto. Não há acesso aos arquivos vinculados à outra conta de SharePoint/OneDrive.

## Fotos dos projetos

Enviar uma capa e, se possível, 2 a 5 fotos adicionais de cada trabalho. Identificar a qual item pertencem e confirmar a autorização para publicação. Não incluir rostos, placas, endereços completos, nomes de clientes ou dados de processos sem autorização.

| Identificador em `scripts/projects.js` | Trabalho | Participação |
| --- | --- | --- |
| `umidade-residencial` | Inspeção especializada de umidade em edificação residencial | Própria |
| `vistoria-vizinhanca` | Vistoria cautelar de vizinhança | Própria |
| `vicios-residencia` | Inspeção de vícios construtivos em residência unifamiliar | Própria |
| `recuperacao-estrutural` | Acompanhamento de recuperação estrutural | Própria |
| `estrutura-existente` | Inspeção especializada de estrutura em edificação existente | Própria |
| `recebimento-chaves` | Vistoria de recebimento de chaves | Própria |
| `parceria-vicios` | Inspeção de vícios construtivos em condomínio | Parceria |
| `parceria-fachadas` | Inspeção de fachadas em condomínio | Parceria |
| `parceria-umidade` | Inspeção de umidade em unidade comercial | Parceria |
| `parceria-estrutura` | Inspeção de estrutura em edificação residencial | Parceria |

Os campos `cover` e `gallery` já aceitam objetos com `src`, `alt`, `width` e `height` (e `srcset`, opcional). Os caminhos partem de `pages/projects.html`. Uma foto de capa aparece no card e no modal; a galeria aparece nos detalhes.

Na Home, os três destaques correspondem a `estrutura-existente`, `umidade-residencial` e `recebimento-chaves`. A estrutura `.homeProject` aceita uma imagem antes da categoria, com proporção 4:3. Atualizar esses destaques junto com as capas do portfólio.

As imagens gerais de fissurômetro, termografia e interior de imóvel não foram atribuídas a um desses casos sem confirmação. Por isso, o portfólio e os destaques da Home ainda são textuais. Cidade ou região só deve entrar quando informada e autorizada.

## Sobre e serviços

- Retrato profissional da Eng. Civil Adriana Santiago, para a apresentação da responsável técnica. A fotografia atual desse bloco é um registro de campo, não um retrato.
- Foto de atividade de perícia ou análise documental, sem informações confidenciais, para substituir a imagem genérica da lupa sobre documentos.
- Novos registros de campo autorizados permitem reduzir a repetição das três fotos técnicas disponíveis entre Home, Sobre e Serviços.

## Acervo revisado

- `firstService.jpg`, `secondService.jpg` e `thirdService.jpg`: registros de medição de trinca, termografia e interior residencial, usados como imagens gerais de serviços e atuação.
- `infiltration.png`, `fissure.png`, `facade.png` e `tile.png`: exemplos de manifestações, sem associação a clientes ou projetos específicos.
- `squareOne_img.png`, `squareTwo_img.png`, `squareThree_img.png` e `inspetor.png`: imagens institucionais genéricas; apenas a imagem documental continua nos serviços.
- `background.png` e `backgroundServices.png`: fundos institucionais preservados.
- `base.png`: referência visual antiga de página, preservada fora da interface.
- Demais imagens: logotipos, favicon e ícones. Os ícones que deixaram de ser usados foram preservados no acervo.
