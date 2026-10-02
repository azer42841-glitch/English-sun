export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin' | 'content_supervisor' | 'support_supervisor';
  avatar?: string;
  isLoggedIn: boolean;
}

export interface StudentProfile {
  id: string;
  userId: string;
  currentLevel: CEFRLevel;
  progressPercent: number;
  completedLessons: string[]; // lesson IDs
  unlockedLevels: CEFRLevel[]; // e.g. ['A1'] or ['A1', 'A2', 'B1']
  placementTestCompleted: boolean;
  placementResult?: {
    recommendedLevel: CEFRLevel;
    scores: { reading: number; listening: number; writing: number; speaking: number };
    date: string;
  };
  xpPoints: number;
  badges: string[];
}

export interface VocabularyItem {
  id: string;
  word: string;
  ipa: string;
  arabicMeaning: string;
  audioUrl?: string;
  exampleSentence?: string;
  exampleArabic?: string;
}

export interface Exercise {
  id: string;
  type: 'mcq' | 'fill_blank' | 'order' | 'matching' | 'short_writing' | 'audio_listening' | 'voice_recording';
  question: string;
  options?: string[];
  correctAnswer?: string | string[];
  audioPrompt?: string;
  hint?: string;
  explanation?: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  level: CEFRLevel;
  title: string;
  titleAr: string;
  descriptionAr: string;
  durationMinutes: number;
  objectives: string[];
  vocabulary: VocabularyItem[];
  grammarExplanationAr: string;
  readingText: {
    english: string;
    arabic: string;
  };
  dialogue?: { speaker: string; text: string; textAr: string }[];
  exercises: Exercise[];
  summaryAr: string;
  bookPageStart: number;
  bookPageEnd: number;
}

export interface Unit {
  id: string;
  level: CEFRLevel;
  unitNumber: number;
  title: string;
  titleAr: string;
  descriptionAr: string;
  lessonsCount: number;
}

export interface LevelInfo {
  level: CEFRLevel;
  titleEn: string;
  titleAr: string;
  descriptionAr: string;
  isFree: boolean;
  priceUSD: number;
  bookTitle: string;
  bookPdfUrl: string;
  unitsCount: number;
  lessonsCount: number;
}

export interface VideoItem {
  id: string;
  title: string;
  titleAr: string;
  level: CEFRLevel;
  skill: 'reading' | 'writing' | 'listening' | 'speaking' | 'grammar' | 'vocabulary';
  videoUrl: string; // mp4 or embed youtube
  isYoutubeEmbed: boolean;
  duration: string;
  descriptionAr: string;
  unitId?: string;
  rightsConfirmed: boolean;
}

export interface LevelAccessRecord {
  id: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  level: CEFRLevel;
  grantedBy: string;
  grantedAt: string;
  expiresAt?: string;
  amountUSD: number;
  notes: string;
  status: 'active' | 'expired' | 'revoked';
}

export interface PlacementQuestion {
  id: string;
  skill: 'reading' | 'listening' | 'writing' | 'speaking';
  level: CEFRLevel;
  question: string;
  options?: string[];
  correctAnswer?: string;
  audioUrl?: string;
  rubricNote?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'new' | 'replied' | 'archived';
}

export interface PaymentRecord {
  id: string;
  studentName: string;
  studentEmail: string;
  level: CEFRLevel;
  amountUSD: number;
  date: string;
  paymentMethod: 'bank_transfer' | 'cash' | 'wallet' | 'other';
  status: 'completed' | 'pending';
  receiptNumber: string;
}

export interface AuditLogItem {
  id: string;
  adminName: string;
  action: string;
  target: string;
  timestamp: string;
  details: string;
}

export interface Certificate {
  id: string;
  studentName: string;
  level: CEFRLevel;
  issueDate: string;
  certificateCode: string;
}
