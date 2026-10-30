export type Project = { id: string; title: string; category: string; location: string; description: string; coverImage: string; images: string[]; videos: string[]; placeholder: boolean }
// Deliberately empty: no project photography or verified project details were supplied.
export const projects: Project[] = []
export const demoImages = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
]
