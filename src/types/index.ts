export interface CourseModule {
  title: string;
  duration: string;
  topics: string[];
}

export interface SyllabusSection {
  unit: string;
  title: string;
  topics: string[];
}

export interface Instructor {
  name: string;
  designation: string;
  experience: string;
}

export type CourseCategory =
  | 'basic'
  | 'excel'
  | 'web'
  | 'programming'
  | 'data'
  | 'tally'
  | 'design'
  | 'skill'
  | 'university'
  | 'diploma'
  | 'certification'
  | 'vocational'
  | 'short-term';

export type CourseMode = 'online' | 'offline' | 'hybrid';
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  category: CourseCategory;
  type: string;
  mode: CourseMode;
  level: CourseLevel;
  duration: string;
  price: number;
  originalPrice?: number;
  certification: string;
  university?: string;
  eligibility: string;
  badge?: string;
  rating: number;
  students: number;
  startDate?: string;
  modules: CourseModule[];
  syllabus: SyllabusSection[];
  instructor: Instructor;
  careerOpportunities: string[];
}
