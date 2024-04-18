[10:08] Anthony VALLENET
# Ma Todolist
 
## Vue d'ensemble
 
"Ma Todolist" est une application web développée avec Nuxt JS, conçue pour aider les utilisateurs à gérer leurs tâches quotidiennes efficacement. Elle offre une interface utilisateur intuitive pour ajouter, cocher, et supprimer des tâches, et est soutenue par une base de données JSON pour stocker les informations de manière persistante.
PS: on utilise un JSON mais en vrai faut pas x)
 
## Fonctionnalités
 
- **Page d'accueil** : Présente le concept de l'application et guide les nouveaux utilisateurs.
- **Page de connexion** : Permet aux utilisateurs de se connecter pour accéder et restaurer leur historique de tâches.
- **Page de gestion des tâches** : Où les utilisateurs peuvent gérer leurs tâches (ajout, marquage comme complété, suppression).
 
## Workflow de développement
 
### Gestion des branches et releases
 
Pour maintenir une organisation claire du code et faciliter le suivi des développements, nous avons adopté une stratégie de branches simple et efficace :
 
- **main** : La branche principale contient toujours la version stable de l'application, prête pour la production.
- **dev** : Branche de développement où toutes les nouvelles fonctionnalités et corrections sont d'abord intégrées et testées.
- **feat/** ou **fix/** : Branches dédiées à des fonctionnalités spécifiques ou à des corrections. Elles sont créées à partir de la branche `dev` et y sont fusionnées après validation.
 
#### Releases
 
Lorsque nous jugeons que la branche `dev` a atteint un état stable et que toutes les fonctionnalités planifiées pour une release sont testées et prêtes, nous effectuons une release de `dev` à `main`. Ce processus est formalisé par une Pull Request, qui doit être revue et approuvée par l'équipe. Cette approche nous permet de s'assurer que la branche `main` reste toujours stable et prête pour la production.
 
Chaque release est accompagnée d'une version taguée, permettant une traçabilité facile et la possibilité de revenir à des versions antérieures si nécessaire.
 
### Commits
 
Nos commits sont structurés pour offrir une clarté maximale sur les changements apportés. Chaque commit débute par un gitmoji pour donner un aperçu visuel du type de modification. Après le gitmoji, nous ajoutons un titre décrivant la modification principale et chaque commit contient également une description détaillée qui explique plus en profondeur les raisons des changements et les impacts sur le projet.
 
Exemple de commit :
```
🔧 Refactor code structure and API calls
- Updated variable references in the template
- Implemented fetching tasks on component mount
- Added error handling for fetch requests
- Modified task checkbox behavior and deletion functionality
```
 
### CI/CD
 
Nous avons implémenté des workflows GitHub Actions pour automatiser les tests et le déploiement. La configuration CI/CD garantit que chaque push dans les branches `dev` ou `main` déclenche automatiquement le déploiement sur une page GitHub Pages, après avoir passé tous les tests et vérifications.
Nous avons aussi créé d'autres Github Actions avec des projets fait en React JS et Next JS qui cette fois-ci déployait sur Vercel.
Étant donnée que nous avons un projet en Nuxt et que Nuxt ne peut être un projet statique le projet ne fonctionne pas correctement sur Github Pages, nous l'avons donc aussi [déployé sur notre VPS grâce à Coolify](https://devops-nag.tsuaa.xyz/);
 
## Monitoring avec Grafana
 
Nous n'avons pu utilisé Grafana sur ce projet, mais nous l'avons tout de même utilisé sur notre BDD PostgreSQL de fin d'année.
Nous avons pu créer plusieurs panel :
- Nombre de comptes (Total)
- Création de comptes (par jour)
- Status des comptes (pourcentage de compte actif/supprimé)
 
### Explication de Grafana
 
Grafana est un outil de visualisation et d'analyse de données (open-source),
Il est principalement utilisé pour surveiller les performances en temps réel de systèmes informatiques et de données. Il permet de créer des tableaux de bord dynamiques qui affichent des graphiques, des jauges, des histogrammes, etc., en se connectant à diverses sources de données comme Prometheus, ou à une BDD PostgreSQL comme dans notre cas, et bien d'autres.
Pour faire simple, Grafana aide à visualiser les données de manière claire et interactive pour faciliter la détection de problèmes ou l'optimisation des performances.