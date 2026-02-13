import { useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { useMemoryPhotos } from '../hooks/useMemoryPhotos';

export default function MemoriesSection() {
  const { getPhotoSrc, setPhoto, clearPhoto, isCustomPhoto } = useMemoryPhotos();
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleFileSelect = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setPhoto(index, file);
    }
  };

  const handleUploadClick = (index: number) => {
    fileInputRefs.current[index]?.click();
  };

  const handleClearPhoto = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    clearPhoto(index);
    // Reset the file input
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]!.value = '';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-romantic-primary glow-text">
          Our Beautiful Memories 📸
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: 6 }).map((_, index) => {
            const photoSrc = getPhotoSrc(index);
            const isCustom = isCustomPhoto(index);

            return (
              <div
                key={index}
                className="heart-frame fade-in-up relative group cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => handleUploadClick(index)}
              >
                <img
                  src={photoSrc}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Upload overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[inherit]">
                  <Upload className="w-8 h-8 text-white" />
                </div>

                {/* Clear button for custom photos only */}
                {isCustom && (
                  <button
                    onClick={(e) => handleClearPhoto(index, e)}
                    className="absolute top-2 right-2 bg-romantic-destructive text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-romantic-destructive/90 z-10"
                    aria-label="Remove photo"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                {/* Hidden file input */}
                <input
                  ref={(el) => {
                    fileInputRefs.current[index] = el;
                  }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileSelect(index, e)}
                  className="hidden"
                  aria-label={`Upload photo for memory ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
        <p className="text-center mt-8 text-romantic-secondary text-sm">
          Click on any photo to upload your own memory ✨
        </p>
      </div>
    </section>
  );
}
