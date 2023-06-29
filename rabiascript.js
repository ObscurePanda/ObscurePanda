window.addEventListener('DOMContentLoaded', (event) => {
  const characterSheet = document.getElementById('characterSheet');

  // Generate character sheet content
const characterAttributes = {
  'Physical': {
    'Strength': 'XXXXXXOO',
    'Dexterity': 'XXXXOOOO',
    'Stamina': 'XXXXXXXX'
  },
  'Social': {
    'Charisma': 'XXXXOOOO',
    'Manipulation': 'XXXXXXXXO',
    'Appearance': 'XXXXXXXXO'
  },
  'Mental': {
    'Perception': 'XXXXXOOO',
    'Intelligence': 'XXXXXXXX',
    'Wits': 'XXXXOOOO'
  }
};
const characterAbilities = {
  'Talents': {
    'Alertness': 'XXXXO',
    'Athletics': 'XXXXXX',
    'Brawl': 'XXXXO',
    'Empathy': 'OOOOO',
    'Expression': 'OOOOO',
    'Intimidation': 'XXXXO',
    'Leadership': 'XXOOO',
    'Streetwise': 'OOOOO',
    'Subterfuge': 'XOOOO'
  },
  'Skills': {
    'Animal Ken': 'OOOOO',
    'Drive': 'OOOOO',
    'Etiquette': 'XXOOO',
    'Crafts': 'OOOOO',
    'Firearms': 'OOOOO',
    'Melee': 'XXXXO',
    'Performance': 'OOOOO',
    'Security': 'XXOOO',
    'Stealth': 'XXXXXX',
    'Survival': 'XXXXO'
  },
  'Knowledges': {
    'Academics': 'XXXXXXXX',
    'Computer': 'OOOOO',
    'Finance': 'OOOOO',
    'Investigation': 'XXXOO',
    'Law': 'OOOOO',
    'Medicine': 'XXXXXXXX',
    'Occult': 'XXXXXXXX',
    'Politics': 'OOOOO',
    'Science': 'XXXOO',
    'Thanatology': 'XXXXXX',
    'Theology': 'XXXXO',
    'Cappadocian Lore': 'XXXXXX (Lived Through It)',
    'Kindred Lore': 'XXXXO',
    'Noddist Lore': 'XXXOO',
    'Biology': 'XXXXX'
  }
};
const characterDisciplines = {
  'Auspex': 'XXXXXXXX (6: Celestial Harmony)',
  'Fortitude': 'XXXXXXXX\n                X (Repair the Undead Flesh)',
  'Dominate': 'XXOOOOOO',
  'Celerity': 'XXXXOOOO',
  'Potence': 'XXXXXOOO',
  'Valeren': 'XOOOOOOO',
  'Serpentis': 'XXXXXXOO',
  'Protean': 'XXXOOOOO',
  'Obtenebration': 'XXXXOOOO',
  'Obfuscate': 'XXOOOOOO',
  'Paths - Necromancy': {
    'Corpse in the Monster': 'XXXXX',
    'Grave’s Decay': 'XXXXX',
    'Path of Ash': 'XXXXX',
    'Sepulcher Path': 'XXXXX',
    'Bone Path': 'XXXXX',
    'Cenotaph Path': 'XXXX'
  }
};

  const characterSheetSections = [
    {
      title: 'Attributes',
      content: characterAttributes
    },
    {
      title: 'Abilities',
      content: characterAbilities
    },
    {
      title: 'Disciplines',
      content: characterDisciplines
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

    if (typeof section.content === 'object') {
      if (section.title === 'Abilities') {
        Object.entries(section.content).forEach(([abilityType, abilities]) => {
          const abilityTypeContainer = document.createElement('div');
          abilityTypeContainer.classList.add('characterSheetAbilityType');

          const abilityTypeTitle = document.createElement('div');
          abilityTypeTitle.classList.add('characterSheetAbilityTypeTitle');
          abilityTypeTitle.textContent = abilityType;

          abilityTypeContainer.appendChild(abilityTypeTitle);

          const abilityList = document.createElement('ul');
          abilityList.classList.add('characterSheetAbilityList');

          Object.entries(abilities).forEach(([ability, rating]) => {
            const abilityItem = document.createElement('li');
            abilityItem.classList.add('characterSheetAbilityItem');

            const abilityName = document.createElement('span');
            abilityName.classList.add('characterSheetAbilityName');
            abilityName.textContent = ability + ': ';

            const abilityRating = document.createElement('span');
            abilityRating.classList.add('characterSheetAbilityRating');
            abilityRating.textContent = rating;

            abilityItem.appendChild(abilityName);
            abilityItem.appendChild(abilityRating);

            abilityList.appendChild(abilityItem);
          });

          abilityTypeContainer.appendChild(abilityList);
          sectionContent.appendChild(abilityTypeContainer);
        });
      } else {
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
      }
    }

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
