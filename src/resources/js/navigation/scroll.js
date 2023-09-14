export const scrollToTop = (selector) =>
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}

export const scrollToElement = (selector) =>
{
    document.querySelector(selector).scrollIntoView({
        behavior: 'smooth'
    });
}
