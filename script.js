(() => {
  const topbar = document.querySelector(".topbar");
  const onScroll = () => {
    if (!topbar) return;
    topbar.classList.toggle("scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const revealTargets = document.querySelectorAll(
    ".project, .more, .capstone-map"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("in"));
  }

  function tryImage(figure, url) {
    const img = figure.querySelector("img");
    if (!img || !url) return;
    const probe = new Image();
    probe.onload = () => {
      img.src = url;
      img.hidden = false;
      figure.classList.add("loaded");
    };
    probe.onerror = () => {};
    probe.src = url;
  }

  function tryVideo(figure) {
    const video = figure.querySelector("video");
    const videoSrc = figure.dataset.video;
    const poster = figure.dataset.poster;
    if (!video || !videoSrc) {
      tryImage(figure, poster);
      return;
    }

    video.preload = "metadata";
    video.src = videoSrc;
    if (poster) video.poster = poster;

    const show = () => {
      video.hidden = false;
      figure.classList.add("loaded");
    };

    video.addEventListener("loadeddata", show, { once: true });
    video.addEventListener(
      "error",
      () => {
        video.removeAttribute("src");
        video.load();
        tryImage(figure, poster);
      },
      { once: true }
    );
  }

  document.querySelectorAll(".media").forEach((figure) => {
    if (figure.dataset.video) tryVideo(figure);
    else tryImage(figure, figure.dataset.src);
  });

  document.querySelectorAll(".result-panel").forEach((panel) => {
    const url = panel.dataset.src;
    const img = panel.querySelector("img");
    const viewport = panel.querySelector(".result-viewport");
    if (!url || !img || !viewport) return;

    const probe = new Image();
    probe.onload = () => {
      img.src = url;
      img.hidden = false;
      panel.classList.add("loaded");
    };
    probe.onerror = () => {};
    probe.src = url;

    const syncFade = () => {
      const atEnd =
        viewport.scrollTop + viewport.clientHeight >= viewport.scrollHeight - 8;
      panel.classList.toggle("scrolled-end", atEnd);
    };
    viewport.addEventListener("scroll", syncFade, { passive: true });
    img.addEventListener("load", syncFade);
  });
})();
