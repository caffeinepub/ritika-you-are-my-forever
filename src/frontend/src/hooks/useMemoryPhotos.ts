import { useState, useEffect } from 'react';

const STORAGE_KEY = 'valentine-memory-photos';

// New default photos - the uploaded memories that everyone will see
const DEFAULT_PHOTOS = [
  '/assets/wp1-1.jpeg',
  '/assets/wp2-1.jpeg',
  '/assets/wp3-1.jpeg',
  '/assets/wp4-1.jpeg',
  '/assets/wp5.jpeg',
  '/assets/wp6.jpeg',
];

// Old generated placeholders to ignore during migration
const OLD_PLACEHOLDERS = [
  '/assets/generated/memory-1.dim_800x800.png',
  '/assets/generated/memory-2.dim_800x800.png',
  '/assets/generated/memory-3.dim_800x800.png',
  '/assets/generated/memory-4.dim_800x800.png',
  '/assets/generated/memory-5.dim_800x800.png',
  '/assets/generated/memory-6.dim_800x800.png',
];

interface MemoryPhoto {
  dataUrl: string | null;
  isCustom: boolean;
}

export function useMemoryPhotos() {
  const [photos, setPhotos] = useState<MemoryPhoto[]>(() => {
    // Initialize from localStorage with migration logic
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Normalize to 6 slots and migrate old data
        const normalized = Array(6).fill(null).map((_, index) => {
          const slot = parsed[index];
          
          // If slot is missing or invalid, return empty
          if (!slot || typeof slot !== 'object') {
            return { dataUrl: null, isCustom: false };
          }
          
          // If dataUrl is one of the old placeholders, treat as empty
          if (slot.dataUrl && OLD_PLACEHOLDERS.includes(slot.dataUrl)) {
            return { dataUrl: null, isCustom: false };
          }
          
          // If dataUrl is one of the new defaults, treat as empty (not custom)
          if (slot.dataUrl && DEFAULT_PHOTOS.includes(slot.dataUrl)) {
            return { dataUrl: null, isCustom: false };
          }
          
          // If dataUrl exists and is a data URL (starts with data:), it's custom
          if (slot.dataUrl && slot.dataUrl.startsWith('data:')) {
            return { dataUrl: slot.dataUrl, isCustom: true };
          }
          
          // Otherwise treat as empty
          return { dataUrl: null, isCustom: false };
        });
        
        return normalized;
      }
    } catch (error) {
      console.error('Failed to load memory photos from storage:', error);
    }
    return Array(6).fill(null).map(() => ({ dataUrl: null, isCustom: false }));
  });

  // Persist to localStorage whenever photos change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
    } catch (error) {
      console.error('Failed to save memory photos to storage:', error);
    }
  }, [photos]);

  const getPhotoSrc = (index: number): string => {
    if (index < 0 || index >= 6) return DEFAULT_PHOTOS[0];
    const photo = photos[index];
    // If custom photo exists, use it; otherwise use the new default
    return photo?.isCustom && photo.dataUrl ? photo.dataUrl : DEFAULT_PHOTOS[index];
  };

  const isCustomPhoto = (index: number): boolean => {
    if (index < 0 || index >= 6) return false;
    return photos[index]?.isCustom || false;
  };

  const setPhoto = async (index: number, file: File) => {
    if (index < 0 || index >= 6) return;

    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setPhotos((prev) => {
          const updated = [...prev];
          updated[index] = { dataUrl, isCustom: true };
          return updated;
        });
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Failed to read photo file:', error);
    }
  };

  const clearPhoto = (index: number) => {
    if (index < 0 || index >= 6) return;
    setPhotos((prev) => {
      const updated = [...prev];
      updated[index] = { dataUrl: null, isCustom: false };
      return updated;
    });
  };

  return {
    getPhotoSrc,
    setPhoto,
    clearPhoto,
    isCustomPhoto,
  };
}
