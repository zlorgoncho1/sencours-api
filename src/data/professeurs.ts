import { Professeur } from "../models/entities";

export const ProfesseursMock: Professeur[] = [
  {
    id: 1,
    nom: "Bar",
    prenom: "Yacine",
    departement: "Informatique",
    specialite: "Intelligence Artificielle",
    bureau: "Bâtiment B, Bureau 205",
    emailUniversitaire: "yacine.bar@unchk.edu.sn",
    coursEnseignes: [101, 103],
  },
  {
    id: 2,
    nom: "Gueye",
    prenom: "Ousmane",
    departement: "Mathématiques",
    specialite: "Algèbre",
    bureau: "Bâtiment C, Bureau 310",
    emailUniversitaire: "ousmane.gueye@unchk.edu.sn",
    coursEnseignes: [102, 104],
  },
  {
    id: 3,
    nom: "Sylla",
    prenom: "Khalifa",
    departement: "Physique",
    specialite: "Algèbre",
    bureau: "Bâtiment C, Bureau 310",
    emailUniversitaire: "khalifa.sylla@unchk.edu.sn",
    coursEnseignes: [101, 104],
  },
];
