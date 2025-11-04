export type Course = {
  slug: string;
  title: string;
  level: string;
  duration: string;
  highlights: string[];
  image: string;
};

export const courses: Course[] = [
  {
    slug: 'professional-hair-styling',
    title: 'Professional Hair Styling',
    level: 'Beginner to Intermediate',
    duration: '6 Weeks',
    highlights: [
      'Cutting fundamentals',
      'Blow-dry & finishing',
      'Basic color theory',
      'Client consultation'
    ],
    image:
      'https://placehold.co/1200x700/0e0e0e/FFFFFF?text=Professional+Hair+Styling'
  },
  {
    slug: 'advanced-color-balayage',
    title: 'Advanced Color & Balayage',
    level: 'Intermediate to Advanced',
    duration: '4 Weeks',
    highlights: [
      'Advanced color techniques',
      'Balayage & foiling',
      'Color correction',
      'Product chemistry'
    ],
    image:
      'https://placehold.co/1200x700/0e0e0e/FFFFFF?text=Advanced+Color+%26+Balayage'
  },
  {
    slug: 'bridal-makeup-mastery',
    title: 'Bridal Makeup Mastery',
    level: 'All Levels',
    duration: '3 Weeks',
    highlights: [
      'HD bridal looks',
      'Skin prep & longevity',
      'Photography-friendly makeup',
      'Client management'
    ],
    image:
      'https://placehold.co/1200x700/0e0e0e/FFFFFF?text=Bridal+Makeup+Mastery'
  }
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}
