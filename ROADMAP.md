# 🧪 Fullstack Technical Test Roadmap (Backend first)

## ✅ Etapa 1 – Setup del Proyecto

- [x] Inicializar monorepo con Turborepo
- [x] Crear `apps/server` y `apps/client`
- [ ] Crear `packages/shared` para tipos comunes
- [ ] Setup de Git + README base + repo en GitHub

---

## ✅ Etapa 2 – Backend: Setup Inicial

- [ ] Setup de `Nest`JS
- [ ] Crear estructura de carpetas (controllers, services, models, etc.)
- [ ] Conectar a `MongoDB` con `Mongoose`
- [ ] Crear `.env` con `MONGO_URI`, `PORT`, etc.
- [ ] Dockerfile básico para backend
- [ ] Crear `docker-compose.yml` con servicio de `mongo`

---

## ✅ Etapa 3 – Backend: Ingesta de datos REE

- [ ] Crear cliente para la API de REE con fetch (con fallback elegante)
- [ ] Crear tipado de datos según la API
- [ ] Parsear y transformar datos a tu modelo
- [ ] Guardar en MongoDB (validaciones incluidas)
- [ ] Crear servicio/cron para ingesta periódica (ej. node-cron)

---

## ✅ Etapa 4 – Backend: GraphQL API

- [ ] Crear schema GraphQL con query de rango de fechas
- [ ] Resolver que lea de Mongo por fechas
- [ ] Validación de input (fechas, rangos, etc.)
- [ ] Testing de resolvers (unit e integración con DB mock)

---

## ✅ Etapa 5 – Backend: Docker y Test

- [ ] Backend funcionando 100% con `docker-compose up`
- [ ] Test unitarios para fetcher + parser
- [ ] Test integración MongoDB
- [ ] Test resolvers con Apollo Server
- [ ] Coverage mínimo 80%

---

## ✅ Etapa 6 – Frontend: Setup

- [ ] Crear React app con Vite + TypeScript
- [ ] Setup de Apollo Client
- [ ] Dockerfile para frontend
- [ ] Servicio de frontend en `docker-compose.yml`

---

## ✅ Etapa 7 – Frontend: Funcionalidad

- [ ] Query de balance por rango de fechas
- [ ] Componente de fecha inicio/fin con validación
- [ ] Gráfico interactivo (`recharts`, `chart.js` o similar)
- [ ] Loading / error / retry states
- [ ] Componentes desacoplados y reutilizables

---

## ✅ Etapa 8 – Frontend: Testing

- [ ] Test unitarios de componentes
- [ ] Test de integración con Apollo Client mock
- [ ] Coverage mínimo 80%

---

## ✅ Etapa 9 – Documentación & Deploy

- [ ] README con estructura del proyecto
- [ ] Descripción del flujo de datos
- [ ] Cómo correr backend / frontend
- [ ] Ejemplos de queries GraphQL
- [ ] Capturas o gifs del frontend
- [ ] Dockerfile final y optimizado para ambos entornos
