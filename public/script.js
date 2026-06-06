const tipsContainer = document.getElementById("tips-container");

async function getTips() {
  try {
    const response = await fetch("/api/tips");
    const tips = await response.json();

    tips.forEach((tip) => {
      const card = document.createElement("article");
      card.classList.add("tip-card");

      card.innerHTML = `
        <img src="${tip.image}" alt="${tip.title}" />
        <h2>${tip.title}</h2>
        <p><strong>Category:</strong> ${tip.category}</p>
        <p>${tip.description}</p>
        <p><strong>Recommended Time:</strong> ${tip.time}</p>
        <a href="/tips/${tip.id}" role="button">View Details</a>
      `;

      tipsContainer.appendChild(card);
    });
  } catch (error) {
    tipsContainer.innerHTML = "<p>Sorry, something went wrong loading the tips.</p>";
    console.error(error);
  }
}

getTips();
