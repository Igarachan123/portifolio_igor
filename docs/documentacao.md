# Documentação do Projeto — Portfólio Igor Souza de Almeida

## 1. Definição do projeto

**Nome do projeto:** Portfólio Igor Souza de Almeida

**Aluno:** Igor Souza de Almeida

**GU:** GU3079775

**Problema ou necessidade atendida:** criar um portfólio pessoal para uma atividade acadêmica, demonstrando perfil profissional, competências técnicas, projetos e documentação do processo de desenvolvimento orientado por requisitos.

**Objetivo principal:** apresentar Igor como desenvolvedor Java júnior na Reply, com interesse em arquitetura de software, sistemas distribuídos e backend, por meio de uma página clara, responsiva e executável em navegador.

**Público-alvo:** professor avaliador da disciplina, colegas de faculdade, recrutadores e pessoas interessadas nos projetos públicos do aluno.

**Proposta visual:** interface limpa, profissional e técnica, inspirada em diagramas de arquitetura. A proposta usa fundo claro, grid sutil, tipografia forte, foto de perfil, elementos visuais de fluxo de sistema e acentos em verde, ciano e âmbar.

**Conteúdo apresentado:**

- Identificação e apresentação pessoal.
- Experiência atual como Java Junior Developer na Reply desde jul/2026.
- Experiência anterior na Volpix Sistemas entre nov/2025 e jul/2026.
- Formação em Tecnologia em Análise e Desenvolvimento de Sistemas no IFSP e Ensino Médio Integrado a Desenvolvimento de Sistemas na ETEC de Guarulhos.
- Conhecimentos e competências em backend, Java, Spring Boot, Clean Architecture, DDD, microsserviços, cloud, mensageria, TypeScript/NestJS, C#/.NET, Linux, Docker, Kubernetes, Kafka, bancos SQL/NoSQL e documentação.
- Inglês fluente e certificações em Spring Boot, NestJS, AWS Cloud Practitioner Essentials e arquitetura orientada a eventos.
- Estudos de caso dos projetos Cloud Api Integrations, POS Updater e Micro Chat Ecosystem.
- Hobbies e lazer relacionados a plantas, natureza, música, instrumentos, horta, pomar e interior.
- Viagens realizadas para Rio Grande do Sul, Mato Grosso do Sul e Uruguai.
- Links de contato para e-mail, GitHub e LinkedIn.

**Principais funcionalidades:**

- Navegação por âncoras entre seções.
- Menu responsivo para dispositivos móveis.
- Filtro de estudos de caso por tecnologia.
- Modal de detalhes para cada projeto.
- Alternância de tema claro/escuro.
- Cópia do e-mail para a área de transferência.
- Links reais para repositórios, GitHub, LinkedIn, README e documentação.

**Tecnologias utilizadas:**

- HTML5 semântico.
- CSS3 puro.
- JavaScript puro.
- Assets locais para avatar e conceitos visuais.

## 2. Prompts utilizados

| ID | Objetivo do prompt | Texto enviado à IA | Resultado obtido | Análise crítica da resposta | Decisão tomada e ajustes |
| --- | --- | --- | --- | --- | --- |
| P01 | Entender a atividade | "Analise o PDF AC02-polished.pdf e identifique todos os requisitos obrigatórios para a entrega do portfólio." | Lista de restrições técnicas, documentação obrigatória e estrutura mínima exigida. | A resposta foi útil porque deixou claro que React, Vue e Tailwind não poderiam ser usados. | Manter o projeto apenas com HTML, CSS e JavaScript, respeitando a estrutura `portfolio/`. |
| P02 | Levantar conteúdo real dos projetos | "Leia os repositórios GitHub informados e resuma tecnologias, arquitetura e fluxo de cada projeto." | Síntese dos projetos Cloud Api Integrations, POS Updater e Micro Chat Ecosystem. | A resposta precisava ser validada com os READMEs e metadados públicos para evitar descrições inventadas. | Usar somente tecnologias e fluxos confirmados nos repositórios. |
| P03 | Criar direção visual | "Gere um conceito visual para um portfólio profissional de um desenvolvedor Java júnior com foco em arquitetura de software." | Conceito com fundo branco, grid técnico, foto de perfil e diagramas de arquitetura. | Algumas imagens geradas sugeriram textos ou links incorretos, como nomes de usuário inventados. | Aproveitar apenas a direção visual e corrigir todo o conteúdo textual no HTML. |
| P04 | Planejar implementação | "Monte a estrutura do portfólio com seções, interações JavaScript e documentação conforme o PDF." | Plano com hero, sobre, trajetória, projetos, documentação, pessoal e contato. | O plano inicial tinha risco de preencher dados pessoais não informados. | Manter apenas dados confirmados e atualizar as seções quando o currículo e as correções do aluno fossem fornecidos. |
| P05 | Verificar entrega | "Valide links, responsividade e correspondência entre documentação e implementação." | Checklist de QA com links, botões, filtros, modal, tema e navegação. | A validação precisa ser objetiva, não apenas visual. | Testar a aplicação em navegador e conferir itens do backlog. |
| P06 | Atualizar dados pessoais e profissionais | "Use meu currículo desatualizado e estas correções: saí da Volpix em julho/2026, entrei na Reply em julho/2026, GU3079775, hobbies com plantas, natureza e música, viagens para RS, MS e Uruguai." | Complementação de formação, experiência, idiomas, certificações, hobbies, viagens, e-mail e localização. | O currículo dizia Volpix como "presente", mas o aluno informou uma atualização posterior. | Priorizar a informação mais recente do aluno e usar o currículo como apoio para formação, habilidades e contatos. |

## 3. Histórias de usuário

| ID | História de usuário |
| --- | --- |
| US01 | Como visitante, quero visualizar a identificação e apresentação de Igor para entender rapidamente quem ele é e qual seu foco profissional. |
| US02 | Como visitante, quero consultar formação, experiência e competências para avaliar o repertório técnico do aluno. |
| US03 | Como visitante, quero explorar estudos de caso dos projetos para conhecer decisões arquiteturais e tecnologias utilizadas. |
| US04 | Como visitante, quero acessar contatos e perfis profissionais para continuar a conversa fora do portfólio. |
| US05 | Como professor avaliador, quero navegar pelo portfólio em desktop e mobile para verificar usabilidade, responsividade e organização visual. |
| US06 | Como visitante, quero alternar o tema da interface para escolher uma leitura confortável. |
| US07 | Como professor avaliador, quero acessar a documentação do projeto para verificar requisitos, MVP, priorização e backlog. |
| US08 | Como visitante, quero ver interesses pessoais, hobbies e viagens para conhecer também o lado humano do aluno. |

## 4. Critérios de aceitação

| História | Critérios objetivos |
| --- | --- |
| US01 | A seção inicial deve exibir nome completo, cargo, empresa, foco em arquitetura e foto de perfil. Os botões do hero devem navegar para projetos e documentação. |
| US02 | O portfólio deve conter seção sobre, competências e trajetória com IFSP, ETEC de Guarulhos, Volpix Sistemas e Reply. |
| US03 | A seção de projetos deve listar os três estudos de caso definidos pelo aluno. Cada item deve ter título, descrição, tecnologias e link funcional. O botão de detalhes deve abrir um modal com conteúdo específico. |
| US04 | A seção de contato deve conter e-mail, GitHub e LinkedIn. O botão de copiar contato deve copiar ou exibir o e-mail. |
| US05 | A navegação deve funcionar por âncoras. O menu mobile deve abrir e fechar. O layout não deve quebrar em telas menores. |
| US06 | O botão de tema deve alternar entre claro e escuro e manter a escolha no armazenamento local do navegador. |
| US07 | A seção de documentação deve conter links para `docs/documentacao.md`. O arquivo deve conter definição, prompts, histórias, critérios, MoSCoW, MVP e backlog. |
| US08 | A seção pessoal deve exibir hobbies relacionados a plantas, natureza e música, além das viagens para Rio Grande do Sul, Mato Grosso do Sul e Uruguai. |

## 5. Priorização MoSCoW

| História | Prioridade | Justificativa |
| --- | --- | --- |
| US01 | Must have | Sem identificação e apresentação, o portfólio não cumpre seu objetivo principal. |
| US02 | Should have | Formação, experiência e competências são importantes para avaliar o perfil, mas podem receber ajustes de dados depois. |
| US03 | Must have | Os estudos de caso são o principal conteúdo técnico solicitado pelo aluno. |
| US04 | Must have | Contato e perfis públicos são essenciais para um portfólio profissional. |
| US05 | Must have | Responsividade, navegação clara e funcionamento em navegadores atuais são restrições técnicas da atividade. |
| US06 | Should have | O tema melhora a experiência, mas o MVP funciona sem ele. |
| US07 | Must have | A documentação é obrigatória e será avaliada junto com a aplicação. |
| US08 | Could have | Hobbies e viagens enriquecem o perfil e tornam o portfólio mais pessoal, embora não sejam essenciais para a avaliação técnica. |

**Won't have now:**

- Formulário de contato com backend.
- Página de blog ou artigos.
- Demonstrações publicadas para todos os projetos.
- Integração dinâmica com API do GitHub em tempo real.

## 6. Descrição do MVP

O MVP do portfólio consiste em uma página estática, executável em navegador, com as seções necessárias para apresentar Igor Souza de Almeida e demonstrar a transformação dos requisitos em uma aplicação funcional.

**Necessidades atendidas no MVP:**

- Apresentar identidade, cargo, foco técnico e proposta profissional.
- Exibir competências e trajetória.
- Exibir formação, idiomas, experiência recente, hobbies e viagens.
- Mostrar os três estudos de caso escolhidos.
- Permitir filtragem e abertura de detalhes dos projetos.
- Disponibilizar links de contato e documentação.
- Funcionar em desktop e mobile.

**Seções disponíveis:**

- Início.
- Sobre.
- Formação e experiência.
- Projetos.
- Documentação.
- Hobbies, lazer e repertório.
- Contato.

**Interações implementadas:**

- Menu mobile.
- Filtro de estudos de caso.
- Modal de detalhes.
- Alternância de tema.
- Cópia de e-mail.
- Navegação por âncoras.

**Histórias incluídas no MVP:** US01, US02, US03, US04, US05, US06, US07 e US08.

**Fora desta primeira versão:** formulário de contato com envio real, publicação online, blog/artigos e demonstrações publicadas para todos os projetos.

**Condição de conclusão do MVP:** todos os links e botões visíveis devem funcionar, as histórias Must have devem estar implementadas, a documentação deve corresponder à aplicação entregue e a página deve permanecer legível em telas móveis.

## 7. Backlog acionável

| ID | Item do backlog | História relacionada | Prioridade MoSCoW | Critérios de aceitação | Status |
| --- | --- | --- | --- | --- | --- |
| BL01 | Criar estrutura de pastas `portfolio/` | US05, US07 | Must have | Estrutura contém `index.html`, `css/style.css`, `js/script.js`, `assets/`, `docs/documentacao.md` e `README.md`. | Concluído |
| BL02 | Implementar cabeçalho e navegação | US05 | Must have | Links de navegação levam às seções corretas e menu mobile abre/fecha. | Concluído |
| BL03 | Criar seção inicial de apresentação | US01 | Must have | Nome, cargo, empresa, foco técnico, foto e CTAs aparecem corretamente. | Concluído |
| BL04 | Criar seção sobre e competências | US02 | Should have | Conteúdo apresenta GU, perfil técnico, idiomas e competências confirmadas. | Concluído |
| BL05 | Criar trajetória acadêmica/profissional | US02 | Should have | Experiências na Reply e Volpix, formação no IFSP e ETEC são exibidas com períodos. | Concluído |
| BL06 | Implementar listagem de estudos de caso | US03 | Must have | Três projetos aparecem com descrição, tecnologias e links reais. | Concluído |
| BL07 | Implementar filtros de projetos | US03 | Must have | Botões filtram corretamente por tecnologia e atualizam contagem exibida. | Concluído |
| BL08 | Implementar modal de detalhes | US03 | Must have | Cada botão "Detalhes" abre conteúdo específico do projeto e permite fechar. | Concluído |
| BL09 | Criar seção de documentação | US07 | Must have | Links para documentação abrem o arquivo Markdown do projeto. | Concluído |
| BL10 | Criar seção de contato | US04 | Must have | E-mail, GitHub e LinkedIn aparecem; botão copia/exibe o e-mail. | Concluído |
| BL11 | Implementar alternância de tema | US06 | Should have | Tema claro/escuro alterna e preferência fica salva no navegador. | Concluído |
| BL12 | Criar seção pessoal | US08 | Could have | Hobbies com plantas, natureza e música aparecem; viagens para RS, MS e Uruguai são exibidas. | Concluído |
| BL13 | Escrever README | US07 | Must have | README contém nome, aluno, tecnologias, execução, funcionalidades e publicação. | Concluído |
| BL14 | Validar responsividade e interações | US05 | Must have | Página é testada em desktop/mobile, sem botões visíveis inoperantes. | Concluído |

## 8. Fontes consultadas

- Enunciado da atividade: `AC02-polished.pdf`.
- Currículo fornecido pelo aluno: `igor-souza-software-engineer.pdf`.
- Correções fornecidas pelo aluno em 23/08/2026: saída da Volpix em jul/2026, entrada na Reply em jul/2026, GU, hobbies e viagens.
- Perfil GitHub: <https://github.com/igordevnet>
- LinkedIn informado pelo aluno: <https://www.linkedin.com/in/igor-souza-de-almeida-1857b02b8/?locale=en>
- Repositório Cloud Api Integrations: <https://github.com/igordevnet/Cloud-Api-Integrations>
- Repositório POS Updater Server: <https://github.com/igordevnet/pos-updater-server>
- Repositório POS Updater Client: <https://github.com/igordevnet/pos-updater-client>
- Repositório Micro Chat Ecosystem: <https://github.com/igordevnet/micro-chat-ecosystem>


