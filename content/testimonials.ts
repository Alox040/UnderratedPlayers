export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Strukturiert, seriös, fußballnah — genau das, was wir gesucht haben.",
    author: "Sportlicher Leiter",
    context: "Regionalliga",
  },
  {
    id: "t2",
    quote: "Schnelle Rückmeldung und klare Einschätzung unserer Talente.",
    author: "Nachwuchskoordinator",
    context: "Jugendakademie",
  },
];
