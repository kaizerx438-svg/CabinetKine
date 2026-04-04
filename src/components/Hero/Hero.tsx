"use client";

import React from "react";
import Image from "next/image";
import {
  Heart,
  Activity,
  Zap,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Heart,
    title: "Rééducation fonctionnelle",
    description:
      "Un accompagnement ciblé pour retrouver mobilité, autonomie et confort au quotidien.",
  },
  {
    icon: Activity,
    title: "Kinésithérapie du sport",
    description:
      "Prévention, récupération et reprise d'activité après blessure ou surcharge physique.",
  },
  {
    icon: Zap,
    title: "Rééducation post-opératoire",
    description:
      "Un suivi progressif et personnalisé après une intervention chirurgicale.",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description:
      "Des soins adaptés à votre âge, votre rythme et vos objectifs de santé.",
  },
];

const testimonials = [
  {
    name: "Marie D.",
    text: "Une prise en charge très professionnelle, dans un cadre rassurant et agréable.",
    rating: 5,
  },
  {
    name: "Julien R.",
    text: "Très à l'écoute, avec de vrais résultats après quelques séances.",
    rating: 5,
  },
  {
    name: "Sophie L.",
    text: "Cabinet moderne, accueil chaleureux et soins de grande qualité.",
    rating: 5,
  },
];

export default function Hero() {
  return (
    <>
      <section className="pt-32 pb-24 px-6 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light text-[#2D3436] mb-6 leading-tight">
              Prenez soin
              <br />
              de votre corps
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              Un accompagnement personnalisé pour retrouver votre bien-être
              et votre mobilité en toute sérénité.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#7C9885] hover:bg-[#6B8574] text-white rounded-full px-8 py-4 text-base transition-colors">
                Réserver une consultation
              </button>
              <button className="border border-[#7C9885] text-[#7C9885] hover:bg-[#7C9885] hover:text-white rounded-full px-8 py-4 transition-colors">
                Nous découvrir
              </button>
            </div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
                alt="Kinésithérapie"
                fill
                className="object-cover grayscale-[30%]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#E8E0D5] rounded-2xl p-6 shadow-lg">
              <p className="text-3xl font-light text-[#2D3436]">15+</p>
              <p className="text-sm text-gray-600">Années d'expérience</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-light text-[#2D3436] mb-4">
              Nos spécialités
            </h3>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Des soins adaptés à chaque besoin, dans un environnement calme et
              professionnel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-[#FAFAF8] group cursor-pointer h-full rounded-2xl"
                >
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#7C9885]/10 flex items-center justify-center mb-6 group-hover:bg-[#7C9885] transition-colors duration-500">
                      <Icon className="w-7 h-7 text-[#7C9885] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h4 className="text-xl font-light text-[#2D3436] mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cabinet" className="py-24 px-6 bg-[#E8E0D5]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-light text-[#2D3436] mb-6">
                Un espace pensé pour votre bien-être
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                Notre cabinet moderne et chaleureux dispose d&apos;équipements
                de pointe pour vous offrir les meilleurs soins possibles dans un
                cadre apaisant.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7C9885] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 font-light">
                    Salles de soins climatisées et équipées
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7C9885] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 font-light">
                    Plateau technique avec matériel dernière génération
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7C9885] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 font-light">
                    Accessibilité PMR et parking gratuit
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500"
                  alt="Cabinet"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden mt-8 relative">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500"
                  alt="Équipement"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="temoignages" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-light text-[#2D3436] mb-4">
              Ce que disent nos patients
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-none shadow-sm bg-[#FAFAF8] h-full rounded-2xl"
              >
                <div className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#7C9885] text-[#7C9885]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 font-light italic leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="text-sm font-medium text-[#2D3436]">
                    {testimonial.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-[#7C9885]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 text-white">
            <div>
              <h3 className="text-4xl font-light mb-8">Contactez-nous</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Adresse</p>
                    <p className="font-light opacity-90">
                      12 Avenue de la Santé
                      <br />
                      75013 Paris
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Téléphone</p>
                    <p className="font-light opacity-90">01 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="font-light opacity-90">
                      contact@cabinet-kine.fr
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Horaires</p>
                    <p className="font-light opacity-90">
                      Lun - Ven : 8h - 20h
                      <br />
                      Sam : 9h - 13h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h4 className="text-2xl font-light mb-6">
                Demande de rendez-vous
              </h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom et prénom"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <textarea
                  placeholder="Votre message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-[#7C9885] hover:bg-white/90 rounded-xl py-4 text-base transition-colors">
                  Envoyer la demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}