type Language = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
};

const spanish: Language = {
  0: '¡Hola! Soy',
  1: 'Idioma',
  2: 'Inicio',
  3: 'Proyectos',
  4: 'Visualización de Datos',
  5: 'Tableau',
  6: 'D3',
  7: 'Acerca de mí',
};

const english: Language = {
  0: "Hello everybody, I'm",
  1: 'Language',
  2: 'Home',
  3: 'Projects',
  4: 'Data Visualization',
  5: 'Tableau',
  6: 'D3',
  7: 'About me',
};

const translate = (key: keyof Language, language: string) => {
  return language == "English" ? english[key] : spanish[key];
};

export default translate;
