<template>
  <section class="hero-section">
    <v-container>
      <v-row class="text-center mb-8">
        <v-col cols="12" md="8" lg="6" class="mx-auto">
          <h1 class="text-h2 font-weight-bold mb-4">
            Vous parlez, j'écris. <span class="text-primary">Ensemble, on attire, on engage, on convertit.</span>
          </h1>
          <p class="text-subtitle-1 mb-8">
            Vous êtes CEO, Entrepreneur, Coach ou une entreprise ? Je vous aide à créer du contenu qui attire,
            engage et fidélise votre audience
          </p>
          <div class="d-flex justify-center mb-8">
            <v-btn color="#5355aa" size="large" class="px-6 py-3 text-white" href="https://calendly.com/bacari-bm"
              target="_blank" aria-label="Je réserve un appel">
              Je réserve un appel
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <v-col cols="12" md="10" lg="8" class="mx-auto">
          <v-img src="/images/graph.jpg" class="hero-image mx-auto" cover max-width="800" max-height="500"
            loading="eager" />
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <v-col cols="12" md="6" lg="4" class="mx-auto">
          <div class="d-flex justify-center align-center">
            <div class="me-6">
              <div class="d-flex">
                <v-icon color="amber-darken-3" v-for="i in 5" :key="i">mdi-star</v-icon>
              </div>
              <div class="text-body-2 mt-1">Noté ?/5 sur ? clients</div>
            </div>
            <v-divider vertical class="mx-3"></v-divider>
            <div>
              <div class="text-h6 font-weight-bold">100%</div>
              <div class="text-body-2">Satisfaction garantie</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 90vh;
  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 25%, #1976d2 50%, #42a5f5 75%, #90caf9 100%);
  background-attachment: fixed;
  color: white;
  padding: 4rem 0;
}

.hero-content {
  animation: fadeIn 1s ease-out;
  position: relative;
  z-index: 1;
}

.hero-image {
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.graph-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1.2s ease-out;
}

.growth-graph {
  width: 100%;
  height: auto;
}

.growth-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 2s ease-out forwards;
}

.growth-point {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 2s;
}

.growth-area {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 2.5s;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>