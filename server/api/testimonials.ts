import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

const TESTIMONIALS_FILE = join(process.cwd(), '.data', 'testimonials.json');

function initializeTestimonialsFile() {
  try {
    const dataDir = dirname(TESTIMONIALS_FILE);
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true });
    }

    if (!existsSync(TESTIMONIALS_FILE)) {
      writeFileSync(TESTIMONIALS_FILE, JSON.stringify([]));
    }
  } catch (error) {
    console.error('Erreur lors de l\'initialisation du fichier témoignages:', error);
  }
}

export default defineEventHandler(async (event) => {
  initializeTestimonialsFile();

  const method = getMethod(event);

  if (method === 'GET') {
    try {
      const testimonials = JSON.parse(readFileSync(TESTIMONIALS_FILE, 'utf-8'));
      return testimonials;
    } catch (error) {
      console.error('Erreur lors de la lecture des témoignages:', error);
      throw createError({
        statusCode: 500,
        message: 'Erreur lors de la récupération des témoignages'
      });
    }
  }

  if (method === 'POST') {
    try {
      const body = await readBody(event);

      if (!body || typeof body !== 'object') {
        throw createError({
          statusCode: 400,
          message: 'Données invalides'
        });
      }

      const { name, position, email, quote, rating } = body;

      if (!name || !position || !email || !quote || !rating) {
        throw createError({
          statusCode: 400,
          message: 'Tous les champs sont requis'
        });
      }

      const testimonials = JSON.parse(readFileSync(TESTIMONIALS_FILE, 'utf-8'));

      const newTestimonial = {
        id: Date.now().toString(),
        name,
        position,
        email,
        quote,
        rating: Number(rating),
        avatar: null,
        createdAt: new Date().toISOString(),
        approved: false
      };

      testimonials.push(newTestimonial);

      writeFileSync(TESTIMONIALS_FILE, JSON.stringify(testimonials, null, 2));

      return newTestimonial;
    } catch (error) {
      console.error('Erreur lors de l\'ajout du témoignage:', error);
      throw createError({
        statusCode: 500,
        message: 'Erreur lors de l\'ajout du témoignage'
      });
    }
  }

  throw createError({
    statusCode: 405,
    message: 'Méthode non autorisée'
  });
}); 