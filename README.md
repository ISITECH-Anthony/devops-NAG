# Ma Todolist
 
## Vue d'ensemble
 
"Ma Todolist" est une application web développée avec Nuxt JS, conçue pour aider les utilisateurs à gérer leurs tâches quotidiennes efficacement. Elle offre une interface utilisateur intuitive pour ajouter, cocher, et supprimer des tâches, et est soutenue par une base de données JSON pour stocker les informations de manière persistante.
PS: on utilise un JSON mais en vrai faut pas x)
 
## Fonctionnalités
 
- **Page d'accueil** : Présente le concept de l'application et guide les nouveaux utilisateurs.
- **Page de connexion** : Permet aux utilisateurs de se connecter pour accéder et restaurer leur historique de tâches.
- **Page de gestion des tâches** : Où les utilisateurs peuvent gérer leurs tâches (ajout, marquage comme complété, suppression).
 
## Workflow de développement
 
### 1. Gestion des branches et releases
 
Pour maintenir une organisation claire du code et faciliter le suivi des développements, nous avons adopté une stratégie de branches simple et efficace :
 
- **main** : La branche principale contient toujours la version stable de l'application, prête pour la production.
- **dev** : Branche de développement où toutes les nouvelles fonctionnalités et corrections sont d'abord intégrées et testées.
- **feat/** ou **fix/** : Branches dédiées à des fonctionnalités spécifiques ou à des corrections. Elles sont créées à partir de la branche `dev` et y sont fusionnées après validation.
 
### 2. Releases
 
Lorsque nous jugeons que la branche `dev` a atteint un état stable et que toutes les fonctionnalités planifiées pour une release sont testées et prêtes, nous effectuons une release de `dev` à `main`. Ce processus est formalisé par une Pull Request, qui doit être revue et approuvée par l'équipe. Cette approche nous permet de s'assurer que la branche `main` reste toujours stable et prête pour la production.
 
Chaque release est accompagnée d'une version taguée, permettant une traçabilité facile et la possibilité de revenir à des versions antérieures si nécessaire.
 
### 3. Commits
 
Nos commits sont structurés pour offrir une clarté maximale sur les changements apportés. Chaque commit débute par un gitmoji pour donner un aperçu visuel du type de modification. Après le gitmoji, nous ajoutons un titre décrivant la modification principale et chaque commit contient également une description détaillée qui explique plus en profondeur les raisons des changements et les impacts sur le projet.
 
Exemple de commit :
```
🔧 Refactor code structure and API calls
- Updated variable references in the template
- Implemented fetching tasks on component mount
- Added error handling for fetch requests
- Modified task checkbox behavior and deletion functionality
```
 
### 4. CI/CD
 
Nous avons implémenté des workflows GitHub Actions pour automatiser les tests et le déploiement. La configuration CI/CD garantit que chaque push dans les branches `dev` ou `main` déclenche automatiquement le déploiement sur une page GitHub Pages, après avoir passé tous les tests et vérifications.
Nous avons aussi créé d'autres Github Actions avec des projets fait en React JS et Next JS qui cette fois-ci déployait sur Vercel.
Étant donnée que nous avons un projet en Nuxt et que Nuxt ne peut être un projet statique le projet ne fonctionne pas correctement sur Github Pages, nous l'avons donc aussi [déployé sur notre VPS grâce à Coolify](https://devops-nag.tsuaa.xyz/);

## Infrastructure Réseau

### **Coolify : Une Plateforme Tout-en-Un**
Notre système Coolify révolutionne la gestion de nos services. En automatisant l'intégralité du cycle de vie de nos applications, Coolify est au cœur de notre stratégie DevOps. Voici comment il fonctionne :
1. **Intégration Continue** : Coolify se connecte directement à GitHub via une Deploy Key pour récupérer les dernières mises à jour de code. Il compile ensuite le projet et le déploie automatiquement.
2. **Gestion des Certificats SSL** : En partenariat avec Let's Encrypt, Coolify gère la sécurisation de nos communications via SSL, assurant une connexion sécurisée pour tous nos utilisateurs.
3. **Réseau Intelligent avec Traefik** : Utilisant Traefik comme reverse proxy, Coolify optimise la gestion du trafic et l'équilibrage de charge, offrant une expérience utilisateur fluide et rapide.
4. **Déploiements Simplifiés avec Wildcard DNS** : Notre domaine utilise un système DNS wildcard, éliminant le besoin de configurer chaque nouvelle sous-domaine. Toutes les URLs générées pointent instantanément vers notre serveur, simplifiant considérablement le processus de déploiement.
> Résilience et Sécurité : Pour garantir la sécurité et la haute disponibilité, nos conteneurs sont isolés des instances principales. Même en cas de défaillance de Coolify, les conteneurs Traefik et les services restent pleinement opérationnels, assurant une continuité de service sans interruption.

### **GitHub Pages : Notre Solution pour le Déploiement Statique**
Pour compléter notre infrastructure de déploiement dynamique avec Coolify, nous utilisons également **GitHub Pages** pour le déploiement de versions statiques de nos projets. Cela nous permet de bénéficier d'une intégration continue efficace, même dans un environnement où certaines fonctionnalités serveur ne sont pas disponibles. Voici comment cela enrichit notre workflow :
1. **Déploiement Continu** : Chaque push sur notre dépôt GitHub déclenche automatiquement un build qui est ensuite déployé sur GitHub Pages. Cela nous assure que la dernière version de notre code est toujours accessible pour des démonstrations ou des revues de code.
2. **Visualisation Instantanée** : Même si GitHub Pages ne supporte pas l'exécution de code côté serveur, cette plateforme s'avère idéale pour le déploiement rapide de prototypes statiques, permettant à notre équipe et aux parties prenantes de visualiser les changements immédiatement.
> Flexibilité et Accessibilité : Utiliser GitHub Pages nous offre une flexibilité dans la gestion des versions statiques de nos applications et assure que nous avons toujours une solution de déploiement rapide à disposition, renforçant ainsi notre capacité à répondre rapidement aux exigences de projet et à tester de nouvelles idées.

## Alerts de sécurité

Pour assurer la robustesse et la réactivité de notre infrastructure, nous avons mis en place un système avancé de surveillance et de gestion des alertes pour nos conteneurs. Voici comment cela fonctionne :
1. **Surveillance en Temps Réel** : Nous utilisons un système de health checks pour monitorer continuellement l'état de nos conteneurs. Toutes les 5 secondes, un système automatique vérifie si chaque conteneur répond correctement. En cas d'anomalie, des actions correctives sont immédiatement déclenchées pour garantir une disponibilité constante.
2. **Gestion Dynamique des Performances** : Un système dédié surveille les performances de chaque conteneur. Si un conteneur dépasse un seuil prédéfini de ressources, nous lançons automatiquement une instance supplémentaire. Le trafic est alors réparti entre l'ancienne et la nouvelle instance, ce qui permet d'équilibrer la charge sans interruption de service. À chaque déclenchement de ce processus, une "soft alerte" est émise. Celle-ci nous informe de la situation sans envoyer de notification immédiate. Toutefois, si le problème persiste et se répète plus de 5 fois sur une courte période, le système maintient cette duplication de service et nous envoie une "alerte d'urgence". Cette dernière nous permet d'intervenir rapidement pour résoudre définitivement le problème.

## Gestion des Logs avec Loki
Pour une surveillance efficace et un débogage rapide, nous avons intégré Loki à notre infrastructure. Loki est une solution de gestion de logs horizontalement scalable, conçue pour une recherche et un stockage efficaces des logs à grande échelle. Voici comment Loki améliore notre système :

### Intégration et Fonctionnement
Loki est étroitement intégré avec Grafana, ce qui permet une visualisation en temps réel et une analyse approfondie des logs collectés. En utilisant un modèle similaire à Prometheus, mais pour les logs, Loki indexe les informations en se basant sur un ensemble de labels, plutôt que de l'ensemble du log, rendant les opérations de recherche beaucoup plus rapides et moins coûteuses en termes de stockage.

### Avantages Clés de Loki
1. **Performance Optimisée** : Loki offre une performance exceptionnelle en termes de temps de réponse lors des requêtes, grâce à son architecture légère qui minimise les coûts de stockage tout en maximisant la rapidité de récupération des données.
2. **Simplicité de Maintenance** : Avec son système basé sur des labels, la gestion des logs devient plus intuitive et moins susceptible aux erreurs, ce qui facilite la maintenance et le suivi des logs à travers de multiples services et instances.
3. **Intégration avec les Outils Existant** : Loki se marie parfaitement avec les outils que nous utilisons déjà comme Grafana pour la visualisation, permettant de tirer parti de tableaux de bord configurables pour une meilleure compréhension et réaction aux incidents.

## Monitoring avec Grafana
 
Nous n'avons pu utilisé Grafana sur ce projet, mais nous l'avons tout de même utilisé sur notre BDD PostgreSQL de fin d'année.
Nous avons pu créer plusieurs panel :
* **Nombre de Comptes (Total)** : Affiche le nombre total de comptes enregistrés dans la base de données.
* **Création de Comptes (par Jour)** : Montre le nombre de nouveaux comptes créés chaque jour, permettant de suivre la croissance et l'adoption utilisateur.
* **Statut des Comptes (Pourcentage Actif/Supprimé)** : Fournit un aperçu en pourcentage des comptes actifs par rapport à ceux qui ont été supprimés.
 
### Explication de Grafana
 
Grafana est un outil de visualisation et d'analyse de données (open-source),
Il est principalement utilisé pour surveiller les performances en temps réel de systèmes informatiques et de données. Il permet de créer des tableaux de bord dynamiques qui affichent des graphiques, des jauges, des histogrammes, etc., en se connectant à diverses sources de données comme Prometheus, ou à une BDD PostgreSQL comme dans notre cas, et bien d'autres.
Pour faire simple, Grafana aide à visualiser les données de manière claire et interactive pour faciliter la détection de problèmes ou l'optimisation des performances.
