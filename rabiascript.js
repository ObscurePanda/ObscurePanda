window.addEventListener('DOMContentLoaded', (event) => {
  const characterSheet = document.getElementById('characterSheet');

  // Generate character sheet content
  const characterAttributes = {
    'Strength': 'XXXXXXOO',
    'Charisma': 'XXXXOOOO',
    'Perception': 'XXXXXOOO',
    // ... Add other attributes
  };

  const characterSheetSections = [
    {
      title: 'Attributes',
      content: characterAttributes
    },
    // ... Add other sections with their content
  ];

  // Populate character sheet
  characterSheetSections.forEach((section) => {
    const sectionContainer = document.createElement('div');
    sectionContainer.classList.add('characterSheetSection');

    const sectionTitle = document.createElement('div');
    sectionTitle.classList.add('characterSheetSectionTitle');
    sectionTitle.textContent = section.title;

    sectionContainer.appendChild(sectionTitle);

    const sectionContent = document.createElement('div');
    sectionContent.classList.add('characterSheetSectionContent');

    Object.entries(section.content).forEach(([attribute, rating]) => {
      const attributeContainer = document.createElement('div');
      attributeContainer.classList.add('characterSheetSectionContentItem');

      const attributeTitle = document.createElement('span');
      attributeTitle.classList.add('characterAttribute', 'characterAttributeTitle');
      attributeTitle.textContent = attribute + ': ';

      const attributeRating = document.createElement('span');
      attributeRating.classList.add('characterAttribute', 'characterAttributeRatings');
      attributeRating.textContent = rating;

      attributeContainer.appendChild(attributeTitle);
      attributeContainer.appendChild(attributeRating);

      sectionContent.appendChild(attributeContainer);
    });

    sectionContainer.appendChild(sectionContent);

    characterSheet.appendChild(sectionContainer);
  });

  // Tab functionality
  function openTab(tabName) {
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    }

    var tabButtons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove('active');
    }

    document.getElementById(tabName).style.display = 'block';
    document.getElementById(tabName + '-button').classList.add('active');
  }

  // Set the initial active tab
  openTab('personality');

  // Add event listeners to tab buttons
  const tabButtons = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function () {
      const tabName = this.getAttribute('data-tab');
      openTab(tabName);
    });
  }
});
