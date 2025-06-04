<template>
  <section id="services" class="section-padding services-section">
    <v-container>
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 mb-3">Tu veux exploser sur <span class="text-primary">LinkedIn</span> ?</h2>
          <p class="text-subtitle-1">Tu as des choses à dire, mais pas le temps (ou l'envie) de les écrire ?.
            <br>
            Entre les RDV, la stratégie et la gestion… le contenu passe souvent à la trappe.
            <br>
            Et pourtant, c'est lui qui attire, engage et vend.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="(service, index) in services" :key="index" cols="12" sm="6" lg="4" class="mb-6">
          <v-card height="100%" class="service-card" elevation="2" rounded="lg">
            <v-card-item>
              <v-avatar size="52" color="primary" class="mb-4">
                <v-icon size="large" color="white">{{ service.icon }}</v-icon>
              </v-avatar>
              <v-card-title class="text-h5 font-weight-bold mb-3">{{ service.title }}</v-card-title>
              <v-card-text>
                <p class="text-body-1 mb-4">{{ service.description }}</p>
                <div class="mt-2">
                  <div v-for="(feature, i) in service.features" :key="i" class="d-flex align-center mb-2">
                    <v-icon color="success" size="small" class="mr-2">mdi-check-circle</v-icon>
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </v-card-text>
            </v-card-item>
            <v-card-actions class="px-4 pb-4">
              <v-btn variant="text" color="primary" class="text-capitalize" href="#cta" aria-label="En savoir plus">
                En savoir plus
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>

const services = [
  {
    title: 'Storytelling LinkedIn',
    icon: 'mdi-linkedin',
    description: 'Capturer votre voix, structurer vos pensées et produire des textes authentiques, percutants et fidèles à votre identité, pas de blabla inutile.',
    features: [
      'Posts qui se démarquent',
      'Contenu qui résonne',
      'Stratégie de storytelling',
      'Différenciation sur le marché'
    ]
  },
  {
    title: 'Stratégie d\'écriture',
    icon: 'mdi-chart-line',
    description: 'Discrétion, écoute active, créativité et exigence éditoriale : voila comment je bosse.',
    features: [
      'Plan de contenu personnalisé',
      'Optimisation des posts',
      'Analyse des résultats',
      'Ajustements stratégiques'
    ]
  },
  {
    title: 'Gain de Temps',
    icon: 'mdi-clock-outline',
    description: 'T\'aider à gagner en visibilité, en abonnés et en clients, avec transparence et efficacité.',
    features: [
      'Création de contenu régulier',
      'Calendrier éditorial',
      'Suivi des tendances',
      'Engagement communautaire'
    ]
  }
];
</script>

<style scoped>
.service-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  color: white;
}

.service-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.service-card .v-card-title {
  color: white !important;
}

.service-card .v-card-text {
  color: rgba(255, 255, 255, 0.9) !important;
}

.service-card .v-avatar {
  background: rgba(255, 255, 255, 0.2) !important;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.service-card .v-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white !important;
}

.service-card .v-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
}

.services-section {
  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 25%, #1976d2 50%, #42a5f5 75%, #90caf9 100%);
  background-attachment: fixed;
  color: white;
}

.v-container {
  position: relative;
  z-index: 1;
}
</style>