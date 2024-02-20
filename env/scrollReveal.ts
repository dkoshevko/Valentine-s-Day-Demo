// Show or hide elements on scroll

export function checkForVisibility(className: string) {
  let elements = document.querySelectorAll(`.${className}`);
  elements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add(`${className}-visible`);
    } else {
      element.classList.remove(`${className}-visible`);
    }
  });
}

function isElementInViewport(el: any) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
