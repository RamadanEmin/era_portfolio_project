export const introH1Anime = {
    initial: {
        y: -100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 3,
            ease: 'easeInOut'
        }
    }
};

export const introPAnime = {
    initial: {
        scale: 0,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 2
        }
    }
};

export const pageAnime = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 2 }
    }
};