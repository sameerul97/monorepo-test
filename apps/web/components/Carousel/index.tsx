import { forwardRef, useRef, RefObject } from 'react';
import { Swiper, SwiperRef, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel() {
  const swiperElRef = useRef<SwiperRef>(null);
  const handlePrevRef = useRef<HTMLElement>(null);
  const handleNextRef = useRef<HTMLElement>(null);

  return (
    <section className="bg-gray-100 overflow-hidden rounded-lg">
      <div className="mx-auto max-w-[1340px] px-4 md:px-6 lg:px-8 xl:px-8 py-6 xs:py-16 ">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <CarouselPrevButton ref={handlePrevRef} />
            <CarouselNextButton ref={handleNextRef} />
          </div>
        </div>

        <div className="mt-8 lg:col-span-2 lg:mx-0">
          <Swiper
            // loop
            ref={swiperElRef}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.75,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.15,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2.75,
                spaceBetween: 20,
              },
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = handlePrevRef.current;
              swiper.params.navigation.nextEl = handleNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {[...Array(3)].map((x, i) => (
              <SwiperSlide key={i}>
                <a href="#">
                  <blockquote className="rounded flex h-full flex-col justify-between bg-white p-6 md:p-12">
                    <div>
                      <div className="flex gap-0.5 text-white">
                        <span className="bg-green-500 p-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span className="bg-green-500 p-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span className="bg-green-500 p-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span className="bg-green-500 p-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span className="bg-green-500 p-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                      </div>

                      <div className="mt-4">
                        <h3 className="text-2xl font-bold text-pink-600 sm:text-3xl">
                          Lorem ipsum dolor sit amet.
                        </h3>

                        <p className="mt-4 text-lg text-gray-600">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam cumque recusandae dolorum porro, quasi
                          sunt necessitatibus dolorem ab laudantium vel.
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-gray-500">
                      - Eddie Murphy
                    </footer>
                  </blockquote>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

interface RefHandler {
  ref: RefObject<HTMLElement>;
}

const CarouselPrevButton = forwardRef<RefHandler>((_, ref) => {
  return (
    <button
      ref={ref}
      className="prev-button rounded-full border border-pink-600 p-3 text-pink-600 aria-disabled:opacity-25 enabled:hover:bg-pink-600  enabled:hover:text-white"
    >
      <span className="sr-only">Previous Slide</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-5 w-5 rtl:rotate-180"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
});

const CarouselNextButton = forwardRef((_, ref) => {
  return (
    <button
      ref={ref}
      className="next-button rounded-full border border-pink-600 p-3 text-pink-600 aria-disabled:opacity-25 enabled:hover:bg-pink-600  enabled:hover:text-white"
    >
      <span className="sr-only">Next Slide</span>
      <svg
        className="h-5 w-5 rtl:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5l7 7-7 7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </button>
  );
});
