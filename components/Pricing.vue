<template>
  <section id="pricing" class="section-padding pricing-section">
    <v-container>
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 mb-3 text-white">Tu veux investir dans ton <span class="text-primary">LinkedIn</span></h2>
          <p class="text-subtitle-1 text-grey-lighten-2">Un accompagnement sur-mesure pour faire décoller ta présence
            sur LinkedIn</p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="pricing-card glass-card" elevation="8" rounded="xl">
            <v-card-item class="text-center pa-6">
              <div class="text-h4 font-weight-bold mb-2 text-white">Formule Premium</div>
              <v-chip class="mb-2" size="small">
                <v-icon start>mdi-star</v-icon>
                -100€ dés 800€ pour les 5 premiers
              </v-chip>
              <div class="text-h3 font-weight-bold text-accent mb-4">800€<span class="text-subtitle-1">/mois</span>
              </div>

              <v-divider class="my-4 border-opacity-25"></v-divider>

              <div class="features-list">
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" class="mr-2">mdi-check-circle</v-icon>
                  <span class="text-body-1 text-white">Création de contenu personnalisé</span>
                </div>
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" class="mr-2">mdi-check-circle</v-icon>
                  <span class="text-body-1 text-white">Stratégie de storytelling</span>
                </div>
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" class="mr-2">mdi-check-circle</v-icon>
                  <span class="text-body-1 text-white">Optimisation des posts</span>
                </div>
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" class="mr-2">mdi-check-circle</v-icon>
                  <span class="text-body-1 text-white">Calendrier éditorial</span>
                </div>
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" class="mr-2">mdi-check-circle</v-icon>
                  <span class="text-body-1 text-white">Suivi des tendances</span>
                </div>
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" class="mr-2">mdi-check-circle</v-icon>
                  <span class="text-body-1 text-white">Révision gratuite si insatisfait</span>
                </div>
              </div>

              <v-divider class="my-4 border-opacity-25"></v-divider>

              <div class="support-section">
                <div class="text-h6 mb-3 text-white">Accompagnement personnalisé</div>
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" class="mr-2">mdi-phone</v-icon>
                  <span class="text-body-1 text-white">06 98 93 13 36</span>
                </div>
                <div class="d-flex align-center mb-3">
                  <v-icon color="accent" class="mr-2">mdi-calendar-check</v-icon>
                  <span class="text-body-1 text-white">Lundi - Samedi : 9h - 20h</span>
                </div>
                <div class="d-flex align-center">
                  <v-icon color="accent" class="mr-2">mdi-whatsapp</v-icon>
                  <span class="text-body-1 text-white">06 98 93 13 36</span>
                </div>
              </div>

              <v-btn color="primary" size="large" block class="mt-6" variant="elevated"
                href="https://calendly.com/bacari-bm" target="_blank">
                Je réserve un appel
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.pricing-section {
  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 25%, #1976d2 50%, #42a5f5 75%, #90caf9 100%);
  background-attachment: fixed;
}

.night-pricing::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 40% 20%, rgba(159, 168, 218, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(121, 134, 203, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 1;
}

.pricing-card {
  transition: transform 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-8px);
}

.features-list {
  text-align: left;
}

.support-section {
  text-align: left;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>