<template>
  <section class="cta-section" id="cta">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card class="cta-card text-center" rounded="lg">
            <v-card-text class="pa-8">
              <h2 class="text-h3 font-weight-bold mb-4">Prêt à donner vie à tes idées ?</h2>
              <p class="text-subtitle-1 mb-8">
                Tu veux investir dans un vrai process de création de contenu ?
              </p>
              <div class="d-flex flex-column flex-sm-row justify-center">
                <v-btn color="primary" size="x-large" class="px-6 py-3 text-white mb-3 mb-sm-0 mr-sm-4"
                  href="https://calendly.com/bacari-bm" target="_blank" aria-label="Je réserve un appel">
                  Je réserve un appel
                </v-btn>
              </div>
              <p class="mt-8 text-body-2">
                <span class="font-weight-bold text-primary">Sans engagement.</span> Consultation gratuite de 30 minutes
                pour
                discuter de ton projet.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 25%, #1976d2 50%, #42a5f5 75%, #90caf9 100%);
  background-attachment: fixed;
}

.cta-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  color: white;
}

.cta-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
}


@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}
</style>