export interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: string;
  departement: string;
  anneeEtude: number;
  emailUniversitaire: string;
  coursInscrits: number[];
}

export interface Professeur {
  id: number;
  nom: string;
  prenom: string;
  departement: string;
  specialite: string;
  bureau: string;
  emailUniversitaire: string;
  coursEnseignes: number[];
}

export interface Cours {
  id: number;
  nom: string;
  departement: string;
  professeurId: number;
  horaire: string;
  credits: number;
  salleId: number;
}

export interface Salle {
  id: number;
  nomBatiment: string;
  numeroSalle: string;
  capacite: number;
  equipements: string[];
  disponibilites: string[];
}
