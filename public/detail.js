const detailContainer = document.getElementById("detail-container");

async function getTipDetails() {
  try {
    const pathParts = window.location.pathname.split("/");
    const tipId = pathParts[pathParts.length - 1];

    const response = await fetch(`/api/tips/${tipId}`);

    if (!response.ok) {
      window.location.href = "/404.html";
      return;
    }

    const tip = await response.json();

    detailContainer.innerHTML = `
      <article class="detail-card">
        <img src="${tip.image}" alt="${tip.title}" />
        <h1>${tip.title}</h1>
        <p><strong>Category:</strong> ${tip.category}</p>
        <p><strong>Recommended Time:</strong> ${tip.time}</p>
        <p><strong>Short Description:</strong> ${tip.description}</p>
        <p><strong>Full Description:</strong> ${tip.fullDescription}</p>
        <p><strong>Why It Helps:</strong> ${tip.benefit}</p>
      </article>
    `;
  } catch (error) {
    detailContainer.innerHTML = "<p>Sorry, this tip could not be loaded.</p>";
    console.error(error);
  }
}

getTipDetails();
