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

export const navTopAnime = {
    initial: {
        y: -40,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
};

export const navBottomAnime = {
    initial: {
        y: 40,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
};

export const navLeftAnime = {
    initial: {
        x: -40,
        opacity: 0,
        rotate: '270deg'
    },
    animate: {
        x: 0,
        opacity: 1,
        rotate: '270deg',
        transition: {
            duration: 3,
            ease: 'easeInOut'
        }
    }
};

export const navRightAnime = {
    initial: {
        x: 40,
        opacity: 0,
        rotate: '90deg'
    },
    animate: {
        x: 0,
        opacity: 1,
        rotate: '90deg',
        transition: {
            duration: 3,
            ease: 'easeInOut'
        }
    }
};