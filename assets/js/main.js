function renderBlogPosts() {
  const list = document.getElementById("blog-post-list");
  const posts = window.siteData?.blogPosts;

  if (!list || !Array.isArray(posts)) {
    return;
  }

  list.innerHTML = posts
    .map(
      (post) => `
        <article class="post-card">
          <img src="${post.image}" alt="${post.title}" />
          <span class="post-category">${post.category}</span>
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <a href="about.html">Tìm hiểu thêm →</a>
        </article>
      `
    )
    .join("");
}

function renderResources() {
  const list = document.getElementById("resource-list");
  const resources = window.siteData?.resources;

  if (!list || !Array.isArray(resources)) {
    return;
  }

  list.innerHTML = resources
    .map(
      (resource) => `
        <article class="resource-card">
          <span class="resource-type">${resource.type}</span>
          <h3>${resource.title}</h3>
          <p>${resource.description}</p>
          <p class="resource-meta">${resource.meta}</p>
          <a href="${resource.file}" download>Tải xuống →</a>
        </article>
      `
    )
    .join("");
}

function updateCurrentYear() {
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(year);
  });
}

renderBlogPosts();
renderResources();
updateCurrentYear();
