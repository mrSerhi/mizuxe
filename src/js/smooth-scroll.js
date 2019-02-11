export default function smoothScroll(nodeId) {
  try {
    document
      .querySelector(`#${nodeId}`)
      .addEventListener("click", function(event) {
        event.preventDefault();
        let offset = 0,
          y = 0,
          dy,
          call = setInterval(function() {
            if (Math.abs((dy = offset - y)) > 1) {
              y += dy / 8;
            } else {
              clearInterval(call);
              y = offset;
            }
            document.documentElement.scrollTop = y;
          }, 10);
        offset = document.getElementById(event.srcElement.dataset.scroll)
          .offsetTop;
        y = document.documentElement.scrollTop;
      });
  } catch (e) {
    console.error("Something wrong into smoothScroll", e);
  }
}
