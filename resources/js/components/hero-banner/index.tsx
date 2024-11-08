import { Banners } from '@/types/banners';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

interface HeroBannerProps {
  banners: Banners[];
}

function HeroBanner({ banners }: HeroBannerProps) {
  return (
    <>
      {banners.length > 0 && (
        <section className="hidden md:block">
          <Carousel
            plugins={[
              Autoplay({
                delay: 7000,
              }),
            ]}
            opts={{
              loop: true,
              align: 'start',
            }}
            className="relative"
          >
            <CarouselContent>
              {banners.map(
                (banner) =>
                  banner?.image?.trim() && (
                    <CarouselItem key={banner.id}>
                      <a
                        href={banner.link ?? '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full"
                      >
                        <img
                          src={banner.image}
                          alt={banner.description}
                          className="w-full"
                        />
                      </a>
                    </CarouselItem>
                  ),
              )}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-blue-primary font-bold text-white hover:border-blue-primary hover:text-blue-primary" />
            <CarouselNext className="right-4 bg-blue-primary font-bold text-white hover:border-blue-primary hover:text-blue-primary" />
          </Carousel>
        </section>
      )}
    </>
  );
}

export { HeroBanner };
