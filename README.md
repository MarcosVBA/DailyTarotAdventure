# Daily Tarot Adventure


<img src="assets/icons/icon-192.png" alt="Ícone do Daily Tarot Adventure: cartas de tarot com lua e estrela sobre fundo verde" width="96" height="96">

Uma mesa virtual de tarot em português para explorar cartas, registrar leituras e criar histórias de RPG. No celular, oferece leitura organizada, controles de toque e consulta contextual. No PC, mantém a mesa livre e os atalhos. Funciona no navegador e pode ser instalada na tela inicial do celular.

**HTML, CSS e JavaScript puros · 100% estático · Compatível com GitHub Pages · Sem backend ou etapa de build**

## Conteúdo

- [Recursos](#recursos)
- [Começar a usar](#começar-a-usar)
- [Controles](#controles)
- [Coleções de arte](#coleções-de-arte)
- [Carregamento das imagens](#carregamento-das-imagens)
- [Instalar no celular](#instalar-no-celular)
- [Uso sem conexão e dados locais](#uso-sem-conexão-e-dados-locais)
- [Publicar no GitHub Pages](#publicar-no-github-pages)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Manutenção e atualizações](#manutenção-e-atualizações)
- [Créditos e ícone](#créditos-e-ícone)

## Recursos

- **Mesa interativa:** revele, selecione, arraste, inverta e amplie cartas com mouse, toque ou teclado.
- **78 ou 22 cartas:** escolha o baralho completo ou somente os arcanos maiores.
- **10 coleções de arte:** troque as ilustrações preservando as cartas, as posições e a orientação da leitura.
- **Aparência personalizável:** oito paletas, seis desenhos de verso e ajustes individuais de cores.
- **Distribuição configurável:** cartas espalhadas ou em arco (*ribbon spread*), com ajustes de dispersão e rotação.
- **Diário em Markdown:** registros com data, hora e as cartas abertas no momento da anotação; no celular, escrita e histórico têm telas separadas. Inclui prévia opcional e salvamento automático do rascunho.
- **Guia de tarot:** significados em pé e invertidos, busca por palavras e filtros por naipe.
- **Oráculo de RPG:** sugestões de narrativa, NPC, objeto, local e monstro, além de um guia de probabilidades para perguntas de sim ou não.
- **App instalável:** ícone próprio, janela independente e cache offline das cartas carregadas.

O guia mantém as 78 cartas disponíveis para consulta, mesmo quando a mesa usa apenas os arcanos maiores.

## Começar a usar

1. Baixe o projeto completo, preservando a estrutura de pastas.
2. Abra [`index.html`](index.html) no navegador.
3. Clique ou toque em uma carta para iniciar a leitura.
4. No celular, use **Retirar carta** e a barra inferior; **Mais** reúne configurações e nova leitura. No PC, use a engrenagem, **Diário** e a aba lateral do guia.

Não é necessário executar `npm install`, compilar arquivos ou iniciar um backend. Para abrir o arquivo sem internet, mantenha também toda a pasta `assets/` no computador.

A instalação como app e o cache offline da PWA são ativados na versão publicada por HTTPS. Abrir o arquivo local permite usar a mesa, mas não ativa esses recursos de instalação.

## Controles

### Celular

A mesa começa no modo **organizado**: as cartas abertas ficam em uma grade rolável, sem sobreposição. Use **Retirar carta** ou toque no baralho. Ao selecionar uma carta, a barra inferior oferece **Inverter**, **Ampliar** e **Consultar**. Toque no espaço vazio para encerrar a seleção.

**Usar mesa livre**, disponível ao lado do baralho e no menu **Mais**, permite espalhar e arrastar as cartas. **Organizar leitura** volta à grade. A escolha é lembrada neste navegador e não altera a leitura nem os dados do diário.

**Consultar** abre um painel inferior com o significado da carta na orientação atual. É possível expandi-lo, escolher RPG, buscar outra carta na biblioteca ou acessar **Sim ou não**. Em paisagem, a consulta usa a altura disponível da tela.

### Mouse e toque

| Ação | Como usar |
| --- | --- |
| Revelar uma carta fechada | Clique ou toque na carta |
| Selecionar uma carta aberta | Clique ou toque na carta |
| Mover uma carta | Arraste pela mesa livre; na leitura organizada do celular, role a grade |
| Ampliar a arte | Duplo clique ou duplo toque em uma carta aberta |
| Fechar a ampliação | Botão ×, clique fora do modal ou duplo clique/toque na imagem |
| Tentar carregar uma imagem novamente | Clique ou toque na carta que mostra a mensagem de falha |

Enquanto a ampliação está aberta, a mesa ao fundo não recebe interações. Na interface mobile, o rodapé e as instruções de teclado ficam ocultos. Os créditos continuam acessíveis nos detalhes da carta e em Sobre, nas configurações.

### Teclado

| Tecla | Ação |
| --- | --- |
| `F` | Alterna a carta selecionada entre em pé e invertida; funciona também na ampliação |
| `Espaço` | Abre a ampliação da carta selecionada ou fecha a ampliação aberta |
| `J` | Abre o diário |
| `R` | Embaralha e reinicia a mesa |
| `Shift` + `R` | Alterna entre 78 e 22 cartas e reinicia a mesa |
| `Esc` | Fecha o modal ativo ou o guia lateral |
| `Ctrl` / `⌘` + `Enter` | Salva o registro enquanto escreve no diário |

Os atalhos da mesa não interferem na digitação dos campos de texto. O reset coloca todas as cartas com o verso para cima; ele não apaga os registros do diário.

## Coleções de arte

| Coleção | Cartas e particularidades |
| --- | --- |
| Rider–Waite–Smith | 78 cartas |
| CBD Tarot de Marseille | 78 cartas |
| Besançon · Lequart | 78 cartas |
| Tarot de Viéville | 78 cartas |
| Visconti–Sforza | 78 cartas, incluindo quatro reconstruções modernas com IA |
| Oswald Wirth · 1889 | 22 arcanos maiores; os menores usam Rider–Waite–Smith quando necessários |
| Sola Busca | 78 cartas |
| Tarot Nouveau · Grimaud | 78 cartas |
| Soimoi · Mike Koz | 78 cartas com arte criada com IA |
| The Keeper’s Arcana | 78 cartas com arte de fantasia élfica criada com IA |

A coleção pode ser escolhida em **Configurações → Jogo**; a galeria fica em **Explorar coleções e contexto**. A escolha da coleção altera as ilustrações. Os nomes, significados e textos de RPG continuam sendo os do aplicativo; algumas coleções históricas possuem correspondências adaptadas, explicadas nas configurações.

## Carregamento das imagens

O loading de tela cheia aparece **somente na abertura**. Em seguida, as imagens do baralho selecionado são baixadas e decodificadas em segundo plano. Uma carta só vira depois que sua imagem estiver pronta; se o preparo ainda não terminou, um indicador aparece sobre o verso, sem bloquear o restante da mesa.

- A preparação começa após a abertura da mesa, com até quatro downloads de fundo simultâneos.
- São preparadas as 22 ou 78 cartas em uso, sempre da coleção selecionada.
- Uma carta escolhida tem prioridade e reaproveita qualquer download já em andamento.
- Trocar a coleção interrompe os downloads anteriores que deixaram de ser necessários e prepara o novo baralho.
- A galeria mostra versos como espaço reservado e reaproveita uma imagem já carregada para a prévia da coleção selecionada.
- Coleções não utilizadas não são carregadas antecipadamente.
- No Oswald Wirth com 78 cartas, os 56 menores Rider–Waite–Smith são necessários para completar o baralho e também são preparados. No modo de 22 cartas, somente as imagens de Wirth são carregadas.
- Falhas permitem uma nova tentativa na própria carta, sem bloquear a mesa.
- Resets e trocas de coleção ignoram resultados atrasados de carregamentos anteriores.

As imagens ficam em arquivos separados do HTML, na pasta [`assets/decks/`](assets/decks/).

## Instalar no celular

Publique primeiro o projeto por HTTPS, por exemplo no GitHub Pages. A instalação é feita pelo navegador, sem necessidade de uma loja de aplicativos.

### Android

1. Abra o endereço publicado no navegador.
2. Acesse **Mais → Configurações → Aplicativo → Instalar aplicativo** dentro da mesa.
3. Quando o navegador disponibilizar a instalação, use o botão **Instalar aplicativo**.

Também é possível usar **Instalar app** ou **Adicionar à tela inicial** no menu do navegador. O nome da opção e a disponibilidade do botão variam conforme o navegador.

### iPhone e iPad

1. Abra o endereço publicado no Safari.
2. Toque em **Compartilhar → Adicionar à Tela de Início**.
3. Mantenha a opção de abrir como app ativada, se ela aparecer, e confirme.

O ícone passa a abrir a mesa em uma janela própria. A seção de instalação fica oculta quando o aplicativo está aberto nesse modo.

Referências: [instalação de PWAs — MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) e [adicionar um app à tela inicial — Apple](https://support.apple.com/guide/iphone/iphea86e5236/ios).

## Uso sem conexão e dados locais

Depois de uma primeira visita com conexão e da ativação do service worker, o app pode reabrir sua interface, consultar o guia e registrar anotações sem internet. As imagens do baralho selecionado são guardadas conforme o preparo em segundo plano avança. Para usar todas as cartas sem conexão, aguarde esse preparo durante uma visita com internet; outras coleções não são baixadas antecipadamente.

Uma carta cuja imagem ainda não esteja no cache precisa de conexão. Se o carregamento falhar, a mesa continua disponível e a carta permite tentar novamente.

| Informação | Onde fica | Comportamento |
| --- | --- | --- |
| Diário e rascunho | `localStorage` | Permanecem entre visitas, quando o armazenamento está disponível |
| Preferências da mesa | `localStorage` | São reaplicadas ao abrir o app |
| Posições e leitura em andamento | Memória da página | São reiniciadas ao recarregar |
| Interface e imagens carregadas | Cache do navegador, gerenciado pelo service worker | Permitem reuso offline após serem armazenadas |

Os dados ficam no navegador e no endereço em que o app foi utilizado, sem sincronização entre dispositivos. A disponibilidade e a permanência do armazenamento dependem do navegador e do espaço no aparelho. Limpar os dados do site também pode remover o diário e as preferências.

## Publicar no GitHub Pages

1. Envie os arquivos do projeto para o repositório, incluindo os arquivos de instalação e toda a pasta `assets/`.
2. Na configuração do GitHub Pages, selecione a branch e a pasta que contêm `index.html` como origem da publicação.
3. Acesse o endereço HTTPS publicado e confira a abertura da mesa.

Os caminhos são relativos: a mesma estrutura atende tanto à raiz de um domínio quanto a um endereço como `https://usuario.github.io/repositorio/`.

Não há comando de build. A pasta publicada deve conter:

```text
.
├── .nojekyll
├── index.html
├── manifest.webmanifest
├── pwa.js
├── ui.css
├── sw.js
└── assets/
    ├── decks/
    └── icons/
```

Publicar apenas `index.html` não inclui as imagens nem os recursos de instalação. Mantenha esses arquivos juntos também nas atualizações.

## Estrutura do projeto

| Caminho | Responsabilidade |
| --- | --- |
| [`index.html`](index.html) | Interface, estilos, mesa, diário, configurações e conteúdo dos guias |
| [`ui.css`](ui.css) | Apresentação mobile, barra contextual, guia expansível e ajustes de leitura |
| [`pwa.js`](pwa.js) | Interface de instalação e registro do service worker |
| [`manifest.webmanifest`](manifest.webmanifest) | Nome, ícones, escopo e modo de abertura do app |
| [`sw.js`](sw.js) | Cache da interface, cache sob demanda das cartas e acesso offline |
| [`.nojekyll`](.nojekyll) | Mantém a publicação estática sem processamento pelo Jekyll |
| [`assets/decks/`](assets/decks/) | Imagens organizadas por coleção |
| [`assets/decks/sources.json`](assets/decks/sources.json) | Fontes e mapeamentos das imagens |
| [`assets/icons/`](assets/icons/) | Ícone original, tamanhos para os navegadores e prompt de criação |

## Manutenção e atualizações

Ao alterar a interface, o manifesto, os scripts ou os ícones:

1. Incremente a versão de `SHELL_CACHE` em `sw.js`, por exemplo de `shell-v4` para `shell-v5`.
2. Publique o conjunto atualizado de arquivos.
3. Reabra o app com conexão para que o navegador verifique a nova versão.

A ativação remove caches antigos da interface desse projeto e preserva o cache de cartas. Os nomes dos caches incluem o escopo do app para separá-los de outros projetos no mesmo domínio.

As imagens usam cache persistente pelo endereço. Se substituir o conteúdo de uma imagem mantendo o mesmo caminho, incremente também a versão de `CARD_CACHE` ou altere o endereço do arquivo para que a nova imagem seja solicitada.

## Créditos e ícone

Os créditos, fontes e licenças das coleções podem ser consultados em **Configurações → Sobre → Créditos e licenças das ilustrações**. Os dados de origem também estão em [`assets/decks/sources.json`](assets/decks/sources.json). As licenças variam por coleção.

O ícone do aplicativo foi criado com o gerador integrado de imagens. A arte original está em [`assets/icons/icon-source.png`](assets/icons/icon-source.png), com versões de 512, 192, 180 e 48 pixels para instalação, iOS e favicon. O [prompt completo](assets/icons/PROMPT.md) está registrado no projeto.
