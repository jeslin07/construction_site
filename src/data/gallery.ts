import { demoImages } from './projects'
export type GalleryItem = { id: string; src: string; alt: string; category: string; placeholder: boolean; type?: 'image' | 'video'; poster?: string }
export const galleryItems: GalleryItem[] = demoImages.map((src, index) => ({ id: `demo-${index + 1}`, src, alt: 'Temporary architectural stock photograph, not a WINSTAR project', category: ['Staircases', 'Structural Steel', 'Fabrication', 'Workshop'][index], placeholder: true, type: 'image' }))
// Add local video entries with type: 'video' and a poster path. Controls and lazy loading are built into the gallery.
