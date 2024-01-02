<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=00bfbf&height=120&section=header"/>
  

- ## Convenções de nomenclatura para banco aqui usado

  - Os padrões usados nesse repositório seguem um pouco das diretrizes encontradas [aqui](https://gist.github.com/thiamsantos/654ec002f04c86d53611923a8b4c3a65);
  - Não será seguido a risca, por motivos pessoais de desenvolvedor iniciante no framework utilizado;
  - Portanto contém termos na linguagem portuguesa, diminuindo ainda mais a chance de conflito com tabelas ja gerada automaticamente pelo framework;
  - Em tabelas usaremos prefixo "tb_" outro padrão bem divulgado;

- ## Geral

  Os nomes das tabelas e colunas devem estar **minúsculas** e as palavras devem ser separadas por **underscore**, seguindo o padrão [snake case](https://en.wikipedia.org/wiki/Snake_case). E todos os termos devem estar em inglês, exceto alguns termos que não há tradução apropriada para o **inglês**. 
  Sempre prefira nomes descritivos, evitando ao máximo contrações.


- ## Tabelas

  Os nomes das tabelas devem estar no **plural**.

  Ex:
  - **Bom**: `users`, `posts`, `roles`, `room_categories`
  - **Ruim**: `user`, `post`, `grupos`, `quarto_categoria`

- ## Colunas

  Os nomes das colunas devem estar no **singular**.

  Ex:
  - **Bom**: `cpf`, `name`, `age`
  - **Ruim**: `endereco`, `posts`, `idade`


- ## Foreign keys

  Todas as foreign keys devem seguir o padrão `nome_da_tabela_no_singular_id`.

  Por exemplo, caso a tabela `users` tenha um relacionameto com a tabela `roles`, o nome da coluna foreign key da tabela `users` deve ser `role_id`.

- ## Primary keys

  A primary key de toda tabela deve ser uma coluna de inteiros com incremento automático, chamada `id`.

- ## Timestamps

  Toda tabela deve definir duas colunas para colocar os timestamps: `created_at` e `updated_at`. A coluna `created_at` recebe automaticamente o timestamp do momento que o registro for criado. A coluna `updated_at` recebe automaticamente o timestamp do momento que o registro for alterado. 

- ## Referências

  - http://guides.rubyonrails.org/active_record_basics.html#naming-conventions
  - https://laravel.com/docs/5.5/eloquent#defining-models
  - http://www.laravelbestpractices.com/#database_conventions

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=00bfbf&height=120&section=footer"/>