## Scripts TypeORM

| Script                        | Description |
|--------------------------------|---------------------------------------------------------------|
| `typeorm`                     | Exécute la CLI TypeORM avec `ts-node` et la configuration `datasource` |
| `typeorm:migration:generate`  | Génère automatiquement une migration en détectant les changements des entités |
| `typeorm:migration:create`    | Crée une migration vide pour écrire manuellement des requêtes SQL |
| `typeorm:migration:run`       | Exécute toutes les migrations en attente |
| `typeorm:migration:show`      | Affiche la liste des migrations appliquées et celles en attente |

# INSTALL PACKAGES
1. `npm install bcrypt`
2. `npm install --save-dev @types/bcrypt`
3. `npm i @nestjs/config`
4. `npm i @nestjs/jwt`
5. `npm i class-transformer`
6. `npm i class-validator`

#### With passport, we don't need to create our own guard, we'll use strategy from passport-jwt
1. `npm i @nestjs/passport passport passport-jwt`
2. `npm i @types/passport-jwt`

# Get the process.env 
1. `npm i @nestjs/config`

# JwtGuard && AuthGuard('jwt')
it's the same result, but I created the first one from scratch, and customized the second one from passport-jwt