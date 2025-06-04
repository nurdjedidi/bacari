# Ghostwriter - Service de Ghostwriting LinkedIn

## Structure du Projet

```
project/
├── components/                 # Composants Vue.js réutilisables
│   ├── AppFooter.vue          # Footer simple en position absolue
│   ├── ClientProof.vue        # Section témoignages clients
│   ├── Cta.vue               # Section appel à l'action
│   ├── Hero.vue              # Section d'accueil avec message principal
│   ├── Pricing.vue           # Tarification avec formule unique
│   └── Services.vue          # Présentation des services de ghostwriting
│
├── assets/                    # Ressources statiques
├── plugins/                   # Plugins Nuxt.js
├── public/                    # Fichiers publics statiques
├── server/                    # API et routes serveur
├── .nuxt/                     # Fichiers générés par Nuxt
├── app.vue                    # Composant racine de l'application
├── nuxt.config.ts            # Configuration Nuxt
└── tsconfig.json             # Configuration TypeScript
```

## Déploiement sur Netlify

### Prérequis
- Un compte Netlify

### Étapes de déploiement

Note: avoir vs code et node pour modifiez le projet est nécéssaire (ou un autre editeur)

### Installation de Node.js et npm

1. **Téléchargement**
   - Allez sur [nodejs.org](https://nodejs.org/)
   - Téléchargez la version LTS (Long Term Support)
   - Exécutez l'installateur

2. **Vérification de l'installation**
   ```bash
   node --version
   npm --version

3. **Initialisation de npm**
   ```bash
   npm init -y

4. **Build du projet**
   ```bash
   npm install
   npm run build
   ```

5. **Déploiement par drag & drop**
   - Allez sur [Netlify](https://app.netlify.com/)
   - Connectez-vous à votre compte
   - Glissez-déposez le dossier `.output/public` dans la zone de déploiement
   - Votre site sera en ligne en quelques secondes !

### Commandes utiles

```bash
# Développement local
npm run dev

# Build pour production
npm run generate
```

## 🛠 Technologies utilisées

- Nuxt.js 3
- Vue.js 3
- TypeScript
- Netlify (hébergement)

## 📝 Notes de développement

- Le projet utilise Nuxt.js pour le SSR et le routing
- Les composants sont organisés de manière modulaire
- Le design est responsive et optimisé pour mobile
- Le footer est en position absolue pour un design minimaliste

Si besoin de modification, d'une aide ou autre, je suis disponible sur linkedin et par mail : djedidinur@gmail.com
