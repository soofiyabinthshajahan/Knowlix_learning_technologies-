export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Technology' | 'Languages' | 'Science' | 'Creative' | 'Religious';
  rating: number;
  audience?: string;
  duration?: string;
  students: number;
  instructor: string;
  price: number;
  lessons: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  features: string[];
  curriculum: {
    module: string;
    lessons: string[];
  }[];
}