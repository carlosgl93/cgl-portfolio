type Language = {
  0: string;
  1: string;
};

const spanish: Language = {
  0: "¡Hola! Soy",
  1: "Idioma",
};

const english: Language = {
  0: "Hello everybody, I'm",
  1: "Language",
};

const translate = (key: keyof Language, language: string) => {
  return language == "English" ? english[key] : spanish[key];
};

export default translate;
