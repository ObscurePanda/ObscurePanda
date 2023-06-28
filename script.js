// JavaScript code for Temple of Lilith website

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('input[name="tab"]');
  const tabContents = document.querySelectorAll('.tab-content');
  const noTabSelected = document.querySelector('.no-tab-selected');

  tabs.forEach((tab) => {
    tab.addEventListener('change', function () {
      if (this.checked) {
        const selectedTabContent = document.querySelector(
          `.tab-content#${this.id}`
        );

        tabContents.forEach((content) => {
          if (content !== selectedTabContent) {
            content.style.display = 'none';
          }
        });

        if (selectedTabContent.style.display === 'none') {
          selectedTabContent.style.display = 'block';
        } else {
          selectedTabContent.style.display = 'none';
        }
      }
    });
  });

  // Show the Invocation of Lilith when no tab is selected
  noTabSelected.style.display = 'block';

  // Uncheck all tabs initially
  tabs.forEach((tab) => {
    tab.checked = false;
  });
});

