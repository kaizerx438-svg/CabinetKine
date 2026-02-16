# CabinetKine
Site vitrine pour kiné avec réservation en ligne et confirmation SMS

## Description

Le projet a pour objectif de digitaliser la prise de rendez-vous pour un cabinet de kinésithérapie. Il se compose de deux espaces distincts :

- **Espace public** : permet aux patients de consulter les informations sur le kiné, les prestations et de prendre rendez-vous.
- **Espace administrateur** : permet au kiné de gérer les rendez-vous, les horaires, les patients et d’envoyer des confirmations ou rappels SMS.

Le projet est pensé pour évoluer vers une application mobile à l'avenir.

---

## Fonctionnalités principales

### Espace public
- Présentation du kiné et du cabinet
- Liste des prestations avec description, durée et tarif
- Formulaire de prise de rendez-vous
- Envoi automatique de confirmation et rappel par SMS

### Espace administrateur
- Gestion des rendez-vous (création, modification, annulation)
- Gestion des horaires et créneaux disponibles
- Gestion des prestations
- Gestion des patients et de leur historique
- Suivi des rendez-vous non honorés

---

## Technologies utilisées

- **Frontend & Backend** : [Next.js](https://nextjs.org/) (React + API Routes)
- **Base de données** : PostgreSQL
- **Envoi SMS** : Twilio (ou autre service SMS)
- **Déploiement** : Vercel
- **Sécurité & RGPD** : HTTPS, consentement utilisateur, suppression des données

---

## Installation

1. Cloner le projet
```bash
git clone <URL_DU_REPO>
