function renderBlogPosts() {
  const list = document.getElementById("blog-post-list");
  const posts = window.siteData?.blogPosts;

  if (!list || !Array.isArray(posts)) {
    return;
  }

  const fragment = document.createDocumentFragment();
  list.replaceChildren();

  posts.forEach((post) => {
    const article = document.createElement("article");
    article.className = "post-card";

    const image = document.createElement("img");
    image.src = post.image;
    image.alt = post.title;

    const category = document.createElement("span");
    category.className = "post-category";
    category.textContent = post.category;

    const title = document.createElement("h3");
    title.textContent = post.title;

    const description = document.createElement("p");
    description.textContent = post.description;

    const link = document.createElement("a");
    link.href = "about.html";
    link.textContent = "Tìm hiểu thêm →";

    article.append(image, category, title, description, link);
    fragment.append(article);
  });

  list.append(fragment);
}

function renderResources() {
  const list = document.getElementById("resource-list");
  const resources = window.siteData?.resources;

  if (!list || !Array.isArray(resources)) {
    return;
  }

  const fragment = document.createDocumentFragment();
  list.replaceChildren();

  resources.forEach((resource) => {
    const article = document.createElement("article");
    article.className = "resource-card";

    const type = document.createElement("span");
    type.className = "resource-type";
    type.textContent = resource.type;

    const title = document.createElement("h3");
    title.textContent = resource.title;

    const description = document.createElement("p");
    description.textContent = resource.description;

    const meta = document.createElement("p");
    meta.className = "resource-meta";
    meta.textContent = resource.meta;

    const link = document.createElement("a");
    link.href = resource.file;
    link.download = "";
    link.textContent = "Tải xuống →";

    article.append(type, title, description, meta, link);
    fragment.append(article);
  });

  list.append(fragment);
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
