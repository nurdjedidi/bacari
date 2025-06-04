<template>
  <section id="testimonials" class="section-padding section-padding-testimonials">
    <v-container>
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 text-white mb-3">Ce que disent nos <span class="text-primary">Clients</span></h2>
          <p class="text-subtitle-1 text-white">Je transforme tes idées en contenu qui attire et convertit. Découvrez ce
            que les
            auteurs, les dirigeants d'entreprise et les créateurs de contenu pensent de mes services.</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-carousel :show-arrows="false" height="auto" hide-delimiter-background delimiter-icon="mdi-circle" cycle
            interval="5000" class="testimonial-carousel">
            <v-carousel-item>
              <v-row class="fill-height" align="center">
                <v-col cols="12" md="10" lg="8" class="mx-auto">
                  <v-card class="testimonial-card mx-auto" elevation="3" rounded="lg">
                    <v-card-item>
                      <div class="d-flex justify-center mb-6">
                        <div class="quote-icon">
                          <v-icon size="40" color="amber-lighten-1">mdi-format-quote-open</v-icon>
                        </div>
                      </div>
                      <div class="text-center mb-6">
                        <p class="text-h6 font-italic">{{ slide.quote }}</p>
                      </div>
                      <div class="d-flex flex-column align-center">
                        <Avatar :name="slide.name" class="avatar-large mb-3" />
                        <div class="text-center">
                          <div class="d-flex justify-center mb-1">
                            <v-icon v-for="n in 5" :key="n" color="amber-darken-2" size="small">
                              mdi-star
                            </v-icon>
                          </div>
                          <h3 class="text-h6 mb-1">{{ slide.name }}</h3>
                          <p class="text-subtitle-2 text-medium-emphasis">{{ slide.position }}</p>
                        </div>
                      </div>
                    </v-card-item>
                  </v-card>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row class="mt-16" justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card class="stats-card" rounded="lg">
            <v-container>
              <v-row>
                <v-col v-for="(stat, index) in stats" :key="index"
                  class="d-flex justify-center align-center text-center">
                  <div class="stat-item">
                    <h3 class="text-h4 font-weight-bold text-primary mb-2">{{ stat.value }}</h3>
                    <p class="text-subtitle-2">{{ stat.label }}</p>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
const stats = [
  { value: 0, label: 'Satisfied Clients' },
  { value: 1, label: 'Years Experience' },
];
</script>

<style scoped>
.section-padding-testimonials {
  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 25%, #1976d2 50%, #42a5f5 75%, #90caf9 100%);
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
}

.testimonial-carousel {
  overflow: visible !important;
}

.testimonial-carousel .v-carousel__item {
  overflow: visible !important;
}

.testimonial-card {
  max-width: 800px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  color: white;
  margin: 20px auto;
}

.testimonial-card:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(255, 255, 255, 0.15) !important;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.testimonial-card .text-h6 {
  color: rgba(255, 255, 255, 0.95) !important;
}

.testimonial-card .text-subtitle-2 {
  color: rgba(255, 255, 255, 0.8) !important;
}

.testimonial-card .v-avatar {
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.quote-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.testimonial-card:hover .quote-icon {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

.stats-card {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stats-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15) !important;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.stats-card .text-primary {
  color: white !important;
}

.stats-card .text-subtitle-2 {
  color: rgba(255, 255, 255, 0.9) !important;
}

.stat-item {
  padding: 20px 0;
}

.client-logos {
  opacity: 0.7;
}

.v-container {
  position: relative;
  z-index: 1;
}

.v-carousel-item .v-row {
  min-height: auto !important;
  padding: 30px 0;
}
</style>