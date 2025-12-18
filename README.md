# 🚀 Portfolio Isomòrfic - Leonardo de Castro Ferreira

## 📋 Descripció

Portfolio personal desenvolupat com a **aplicació isomòrfica** utilitzant **Node.js + Express + EJS**.

L'aplicació utilitza **Server-Side Rendering (SSR)** per millorar el SEO i el rendiment, i **Client-Side Hydration** per la interactivitat.

## ✨ Característiques Isomòrfiques

- ✅ **SSR (Server-Side Rendering)**: El servidor genera l'HTML complet
- ✅ **Hidratació del client**: JavaScript del navegador afegeix interactivitat
- ✅ **SEO optimitzat**: Els motors de cerca veuen el contingut complet
- ✅ **Rendiment millorat**: Càrrega inicial més ràpida
- ✅ **Compressió GZIP**: Reducció de l'ample de banda
- ✅ **Seguretat**: Helmet.js per headers de seguretat

## 🛠️ Tecnologies

- **Backend**: Node.js + Express.js
- **Template Engine**: EJS (renderització al servidor)
- **Frontend**: JavaScript vanilla (hidratació)
- **Estils**: CSS3 personalitzat (tema Black & Gold)
- **Deployment**: Railway / Render / VPS

## 📦 Instal·lació

```bash
# Instal·lar dependències
npm install

# Executar en mode desenvolupament (amb nodemon)
npm run dev

# Executar en producció
npm start
```

## 🚀 Desplegament

### Opció 1: Railway

```bash
# Instal·lar Railway CLI
npm install -g @railway/cli

# Login
railway login

# Inicialitzar projecte
railway init

# Desplegar
railway up
```

### Opció 2: Render

1. Connecta el teu repositori GitHub
2. Configura:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
3. Desplega!

### Opció 3: VPS (Ubuntu)

```bash
# Instal·lar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clonar repositori
git clone [URL_DEL_TEU_REPO]
cd avaluableaea3

# Instal·lar dependències
npm install

# Instal·lar PM2 per gestionar el procés
sudo npm install -g pm2

# Executar amb PM2
pm2 start server.js --name portfolio
pm2 save
pm2 startup
```

## 📁 Estructura del Projecte

```
avaluableaea3/
├── server.js              # Servidor Express isomòrfic
├── package.json           # Configuració del projecte
├── views/                 # Plantilles EJS (SSR)
│   ├── index.ejs         # Pàgina principal
│   └── 404.ejs           # Pàgina d'error
├── public/                # Fitxers estàtics
│   ├── css/
│   │   └── projecte.css  # Estils
│   └── js/
│       └── projecte.js   # JavaScript client
├── imatges/               # Imatges del portfolio
├── logo/                  # Logos de tecnologies
└── so/                    # Efectes de so
```

## 🎯 Avantatges de l'Arquitectura Isomòrfica

1. **SEO Millorat**: Els buscadors indexen el contingut complet
2. **Rendiment**: Primera càrrega més ràpida (HTML pre-renderitzat)
3. **Experiència d'usuari**: Transicions suaus després de la càrrega
4. **Mantenibilitat**: Mateix codi al servidor i client
5. **Accessibilitat**: Funciona fins i tot sense JavaScript

## 📊 Fluxe de Renderització

```
Petició → Servidor Express → Renderitza EJS → HTML complet
                                    ↓
                            Envia al navegador
                                    ↓
                      JavaScript "hidrata" la pàgina
                                    ↓
                            Interactivitat activa
```

## 🔗 Enllaços

- **Portfolio**: [URL després del desplegament]
- **GitHub**: https://github.com/leonardocastro05
- **LinkedIn**: https://linkedin.com/in/leonardo-de-castro-ferreira

## 👨‍💻 Autor

**Leonardo de Castro Ferreira**  
Estudiant de DAW - Institut Baix Camp

---

**AEA3 - Aplicacions Isomòrfiques**  
*Desembre 2025*
