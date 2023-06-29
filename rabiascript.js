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

        if (section.subtitle) {
            const sectionSubtitle = document.createElement('div');
            sectionSubtitle.classList.add('characterSheetSectionSubtitle');
            sectionSubtitle.textContent = section.subtitle;

            sectionContainer.appendChild(sectionSubtitle);
        }

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
});
