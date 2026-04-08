"use client";

import Image from "next/image";
import { useState } from "react";

type VehicleGalleryProps = {
  title: string;
  images: string[];
};

export function VehicleGallery({ title, images }: VehicleGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = images[selectedIndex];

  if (!images.length) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-zinc-100">
        <div className="flex h-full items-center justify-center text-sm text-zinc-500">
          Sem imagem
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-100 shadow-sm">
        <Image
          src={selectedImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {images.map((image, index) => {
            const isActive = index === selectedIndex;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl border transition ${
                  isActive
                    ? "border-emerald-600 ring-2 ring-emerald-100"
                    : "border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}