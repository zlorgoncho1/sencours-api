import { Etudiant } from "./../models/entities";

export const EtudiantsMock: Etudiant[] = [
  {
    id: 1,
    nom: "Ramos",
    prenom: "Fabrice Jordan",
    dateNaissance: "2000-04-15",
    departement: "Informatique",
    anneeEtude: 2,
    emailUniversitaire: "fabricejordan.ramos@unchk.edu.sn",
    coursInscrits: [101, 102],
  },
  {
    id: 2,
    nom: "Diop",
    prenom: "Papa Matar",
    dateNaissance: "1999-11-08",
    departement: "Mathématiques",
    anneeEtude: 3,
    emailUniversitaire: "papamatar.diop@unchk.edu.sn",
    coursInscrits: [103, 104],
  },
  {
    id: 3,
    nom: "Sow",
    prenom: "Ousmane",
    dateNaissance: "2001-07-31",
    departement: "Physique",
    anneeEtude: 3,
    emailUniversitaire: "ousmane.sow@unchk.edu.sn",
    coursInscrits: [102, 103],
  },
];
