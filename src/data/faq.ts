export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'Czy AI zastąpi terapeutę?',
    answer:
      'Absolutnie nie. Narzędzie służy wyłącznie do wsparcia administracyjnego i strukturyzowania notatek. Decyzje kliniczne zawsze należą do człowieka.',
  },
  {
    question: 'Czy moje dane i dane pacjentów są bezpieczne?',
    answer:
      'Tak. Stosujemy szyfrowanie End-to-End, dane są anonimizowane lokalnie, a cała infrastruktura jest zgodna z RODO i AI Act. Nie mamy dostępu do treści Twoich notatek.',
  },
  {
    question: 'Ile czasu mogę zaoszczędzić?',
    answer:
      'Nasi użytkownicy oszczędzają średnio 10-15 godzin miesięcznie na dokumentacji. To czas, który możesz przeznaczyć na pacjentów lub dla siebie.',
  },
];
