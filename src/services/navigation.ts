function scrollTo(elementId: string) {
  const elem = document.getElementById(elementId);

  if (elem) {
    elem.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function redirect(url: string, new_page: boolean = false) {
  window.open(url, new_page ? '_blank' : '', 'noopener,noreferrer');
}

export { scrollTo, redirect }