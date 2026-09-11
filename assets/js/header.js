(function renderSharedHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const page = (document.body?.dataset?.page || "").toLowerCase();
  const active = { home: "", blog: "", resources: "" };

  if (page === "post") {
    active.blog = "is-active";
  } else if (Object.prototype.hasOwnProperty.call(active, page)) {
    active[page] = "is-active";
  }

  header.innerHTML = `
    <div class="container nav">
      <a class="brand" href="/index.html">Kuro Hitsuji</a>
      <nav class="menu" aria-label="Main navigation">
        <a class="${active.home}" href="/index.html">Home</a>
        <a class="${active.blog}" href="/blog.html">Blog</a>
        <a class="${active.resources}" href="/resources.html">Resources</a>
        <a class="${active.revit}" href="/revit.html">Revit Tool</a>
      </nav>
    </div>
  `;
})();