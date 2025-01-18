# BlogExpress

**BlogExpress** é uma aplicação de blog administrável construída com Node.js e Express. O projeto oferece funcionalidades para gestão de posts, autenticação de usuários e upload de imagens. Com uma interface simples e intuitiva, permite a criação, edição e exclusão de posts com facilidade.

## Funcionalidades

- **Autenticação de Usuário**: Permite o login e registro de usuários com senha segura.
- **Gestão de Posts**: Administra a criação, edição e exclusão de posts no blog.
- **Upload de Imagens**: Permite o envio de imagens associadas aos posts.
- **Interface Responsiva**: Utiliza o EJS para renderizar as páginas de forma dinâmica e responsiva.
- **Alertas**: Integração com o SweetAlert2 para exibir mensagens de sucesso e erro.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução JavaScript do lado do servidor.
- **Express**: Framework minimalista para construção de APIs e servidores.
- **Sequelize**: ORM para interagir com bancos de dados SQL (MySQL).
- **MySQL**: Banco de dados relacional utilizado para armazenar posts e dados dos usuários.
- **EJS**: Motor de templates para renderização de páginas HTML dinâmicas.
- **Multer**: Middleware para lidar com upload de arquivos (imagens).
- **SweetAlert2**: Biblioteca para exibir alertas bonitos e interativos.
- **Slugify**: Biblioteca para gerar slugs amigáveis de URLs a partir de títulos.


## Estrutura do Projeto

blogexpress/
│
├── articles                            # Modelos de dados do Sequelize
│   ├── Article.js                      # Modelo de dados Article
│   └── ArticlesController.js           # Definição de rotas para Article
├── categories                          # Modelos de dados do Sequelize
│   ├── category.js                     # Modelo de dados Category
│   └── CategoriesController.js         # Definição de rotas para Category
├── database                            # Configurações do Sequelize e banco de dados
├── node_modules                        # Pacotes npm
├── public/                             # Arquivos estáticos (CSS, JS, Imagens)
├── views/                              # Páginas EJS
├── .gitignore                          # Arquivo .gitignore
├── index.js                            # Arquivo principal da aplicação
├── package.json                        # Dependências do projeto e scripts
├── package-lock.json                   # Dependências do projeto e scripts
└── README.md                           # Documentação do projeto


