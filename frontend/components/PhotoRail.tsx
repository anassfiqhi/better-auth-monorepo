import Image from 'next/image';

const photos = [
  { src: '/photo1.jpg', alt: 'Photo 1', rotation: 'rotate-2' },
  { src: '/photo2.jpg', alt: 'Photo 2', rotation: '-rotate-1' },
  { src: '/photo3.jpg', alt: 'Photo 3', rotation: 'rotate-1' },
  { src: '/photo4.jpg', alt: 'Photo 4', rotation: '-rotate-2' },
  { src: '/photo5.jpg', alt: 'Photo 5', rotation: 'rotate-3' },
  { src: '/photo6.jpg', alt: 'Photo 6', rotation: '-rotate-1' },
];

export function PhotoRail() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative aspect-square ${photo.rotation} hover:scale-105 transition-transform duration-300`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
