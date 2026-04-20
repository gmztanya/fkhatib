import EmblaCarousel from 'embla-carousel';

function initEmbla() {

    const emblaNode = document.querySelector('.embla');

    if (emblaNode) {
        const embla = EmblaCarousel(emblaNode, {
            align: 'center',
            containScroll: 'trimSnaps',
            startIndex: 1,
        });

        const slides = emblaNode.querySelectorAll('.embla-slide');

        function updateSlides() {
            const selectedIndex = embla.selectedScrollSnap();

            slides.forEach((slide, index) => {
                if (index === selectedIndex) {
                    slide.classList.add('is-selected');
                } else {
                    slide.classList.remove('is-selected');
                }
            });
        }

        embla.on('select', updateSlides);
        updateSlides();

        // Carousel controls
        document.getElementById('prevBtn')?.addEventListener('click', () => {
            embla.scrollPrev();
        });

        document.getElementById('nextBtn')?.addEventListener('click', () => {
            embla.scrollNext();
        });
    }
}

// run immediately
initEmbla();