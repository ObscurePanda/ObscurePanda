const tabs = document.querySelectorAll('input[name="tab"]');
const tabContents = document.querySelectorAll('.tab-content');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('change', () => {
    // Hide all tab contents
    for (let j = 0; j < tabContents.length; j++) {
      tabContents[j].classList.remove('show');
    }

    // Show the selected tab content
    tabContents[i].classList.add('show');
  });
}
