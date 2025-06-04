<template>
  <v-footer class="footer">
    <v-container>
      <div class="text-center">
        <p class="text-body-2 mb-0">
          © {{ new Date().getFullYear() }} Jean Bacari. Tous droits réservés.
        </p>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 25%, #1976d2 50%, #42a5f5 75%, #90caf9 100%);
  background-attachment: fixed;
  color: white;
  padding: 1rem 0;
}

@media (max-width: 600px) {
  .footer {
    padding: 0.75rem 0;
  }
}
</style>