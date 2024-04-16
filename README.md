# Ma Todolist

## Présentation
Notre application s'appelle "Ma Todolist", c'est une application qui permet de stockée des List de tache a faire et de les cocher lorsqu'elle sont réalisé, l'application est composé, d'une application web développé en Nuxt et une base de données json. l'application est composé de 3 pages: 
- Une page d'accueil qui explique le concept de l'application
- Une page de connexion pour retrouver l'historique des tâches 
- Et la page de gestion des tâches.

Lors de la connexion, l'utilisateur doit renseigner son nom et son prénom, si l'utilisateur n'existe pas, un message d'erreur apparait, sinon il est redirigé vers la page de gestion des tâches.

La page de gestion des tâches permet de:
- Ajouter une tâche
- Cocher une tâche
- Supprimer une tâche

## Fonctionnement
Lors d'un push sur la branche main, la ci est déclenché et permet de build et déployer l'application sur github pages.
**GitHub pages n'accepte que des pages statique et comme notre application est développer en Nuxt, il n'est pas 100% fonctionnel. Vous pouvez tout de même retrouver notre application en ligne [sur notre serveur](https://devops-nag.tsuaa.xyz) ou le déploiement est autogérer par Coolify**


