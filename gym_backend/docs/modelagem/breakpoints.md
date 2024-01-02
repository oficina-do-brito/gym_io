## Recursos

-   Auth

    - [x] login

    ```http
        POST /auth/login
    ```

-   Noticias

    - [x] 1 admin cadastra noticia -> noticia/id admin

    ```http
      POST /noticias/id
    ```

    - [x] Ver todas as noticias

    ```http
      GET /noticias
    ```

    - [x] Ver 1 noticia especifica -> noticias / id da noticia

    ```http
      GET /noticias/id
    ```

    - [x] Atualizar 1 noticia especifica -> noticias/ id da noticia

    ```http
      PUT /noticias/id
    ```

    - [x] Deletar 1 noticia -> noticias/ id da noticia

    ```http
      DELETE /noticias/id
    ```

-   Usuarios

    - [x] Criar 1 usuario

    ```http
      POST /usuarios
    ```

    - [x] Ver todas as noticias de 1 admin especifico -> admin/ id do admin/ noticias

    ```http
      GET /usuarios/id/noticias
    ```

    - [x] Ver todos os usuarios

    ```http
      GET /usuarios
    ```

    -  [x] Ver 1 usuario -> usuarios/ id do usurario

    ```http
      GET /usuarios/id
    ```

    -   Editar, Atualizar 1 usuario -> usuarios/ id do usurario

    ```http
      PUT /usuarios/id
    ```

    - [x] deletar 1 usuario -> usuarios/ id do usurario

    ```http
      DELETE /usuarios/id
    ```

    - [x] Pegar usuario por email -> body -> com email do usuario

    ```http
      POST /usuarios/find-for-email
    ```

-   Murais

    - [x] Pegar todos os murais -> body -> com email do usuario

    ```http
      GET /murais
    ```
    - [x] Criar 1 mural

    ```http
      POST /murais
    ```
    - [x] acrescentar  1 um horario em 1 mural especififo

    ```http
      POST /murais/horarios ta assim por enquanto porém o correto seria em:
      POST /murais/id/horarios
    ```
    - [x] Pegar 1 mural especifico

    ```http
      GET /murais/id
    ```
    - [x] Atualizar 1 mural especifico

    ```http
      PUT /murais/id
    ```
    - [x] Apagar 1 mural especifico

    ```http
      DELETE /murais/id
    ```

-   Horarios

    - [x] Pegar todos os horarios

    ```http
      GET /horarrios
    ```
    
    - [x] Criar 1 horario

    ```http
      POST /horarrios
    ```

    - [x] Ler 1 horario

    ```http
      GET /horarrios/id
    ```
    - [x] Atualizar 1 horario

    ```http
      PUT /horarrios/id
    ```

    - [x] Deletar 1 horario

    ```http
      DELETE /horarrios/id
    ```