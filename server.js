// SERVIDOR ISOMÒRFIC - PORTFOLIO LEONARDO

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import helmet from 'helmet';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES DE SEGURETAT I OPTIMITZACIÓ
app.use(helmet({
  contentSecurityPolicy: false, // Desactivat per permetre Font Awesome CDN
}));
app.use(compression()); // Compressió GZIP

// CONFIGURACIÓ DEL MOTOR DE PLANTILLES

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// ARXIUS ESTÀTICS

app.use(express.static(path.join(__dirname, 'public')));
app.use('/imatges', express.static(path.join(__dirname, 'imatges')));
app.use('/logo', express.static(path.join(__dirname, 'logo')));
app.use('/so', express.static(path.join(__dirname, 'so')));


// DADES DEL PORTFOLIO (SIMULANT UNA API/BD)

const portfolioData = {
  nom: 'Leonardo de Castro Ferreira',
  titol: 'Desenvolupador Web - DAW',
  descripcio: `Bones, sóc el Leonardo de Castro Ferreira, sóc un estudiant de segon any de DAW, 
    al Institut Baix Camp, estic aprenent a crear noves webs combinant l'aprenentatge teòric amb els 
    projectes pràctics, durant el meu portafoli mostraré uns 6 projectes que he fet durant la meva 
    carrera com desenvolupador web, on 4 són projectes que he desarrollat a l'empresa, tan al mitjà 
    com en el superior i els 2 DevChallenge que són projectes fets a classe`,
  
  targetes: [
    {
      icona: 'fa-graduation-cap',
      titol: 'Formació',
      descripcio: 'Estudiant de DAW a l\'Institut Baix Camp. Amb una base en programació orientada a objectes i desenvolupament web modern.'
    },
    {
      icona: 'fa-briefcase',
      titol: 'Experiència',
      descripcio: 'He participat en projectes reals com Pizza Taura Reus i Comercial Jodis, treballant amb WordPress, PrestaShop i desenvolupament personalitzat amb el plugin Elementor i WooCommerce.'
    },
    {
      icona: 'fa-rocket',
      titol: 'Objectius',
      descripcio: 'Especialitzar-me en desenvolupament web de diferents sectors, com Laravel, JavaScript i WordPress.'
    },
    {
      icona: 'fa-heart',
      titol: 'Passions',
      descripcio: 'M\'agrada aprendre a fer servir diferents idiomes de programació, aprendre noves tecnologies i veure com les meves aplicacions ajuden a usuaris reals.'
    }
  ],
  
  xarxesSocials: {
    github: 'https://github.com/leonardodc',
    linkedin: 'https://linkedin.com/in/leonardo-de-castro',
    email: 'leonardo@example.com'
  }
};

// ============================================
// RUTES - RENDERITZACIÓ AL SERVIDOR (SSR)
// ============================================

// Pàgina principal - renderitza al servidor
app.get('/', (req, res) => {
  res.render('index', {
    data: portfolioData,
    // Dades meta per SEO
    meta: {
      title: 'Leonardo de Castro Ferreira - Portfolio',
      description: 'Portfolio de desenvolupador web DAW',
      url: req.protocol + '://' + req.get('host') + req.originalUrl
    }
  });
});

// API per obtenir dades (per hidratació client-side)
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// Ruta de health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// ============================================
// GESTIÓ D'ERRORS 404
// ============================================
app.use((req, res) => {
  res.status(404).render('404', {
    meta: {
      title: '404 - Pàgina no trobada',
      description: 'La pàgina que busques no existeix'
    }
  });
});

// ============================================
// INICIAR EL SERVIDOR
// ============================================
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════╗
║   🚀 SERVIDOR ISOMÒRFIC EN FUNCIONAMENT      ║
╠═══════════════════════════════════════════════╣
║   URL: http://localhost:${PORT}                  ║
║   Entorn: ${process.env.NODE_ENV || 'development'}                   ║
║   SSR: ✅ Activat                            ║
╚═══════════════════════════════════════════════╝
  `);
});

export default app;
