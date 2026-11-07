(() => {
  const root = document.documentElement;
  const langButton = document.getElementById('language');
  const themeButton = document.getElementById('theme');
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menu-toggle');
  const toast = document.getElementById('toast');
  let toastTimer;

  const storedTheme = localStorage.getItem('jeetk-theme');
  if (storedTheme === 'dark') root.dataset.theme = 'dark';
  const storedLanguage = localStorage.getItem('jeetk-language');
  setLanguage(storedLanguage === 'ar' ? 'ar' : 'en');

  function setLanguage(language) {
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    langButton.textContent = language === 'ar' ? 'English' : 'العربية';
    document.querySelectorAll('[data-en][data-ar]').forEach((element) => {
      element.innerHTML = element.dataset[language];
    });
    localStorage.setItem('jeetk-language', language);
  }

  langButton.addEventListener('click', () => setLanguage(root.lang === 'en' ? 'ar' : 'en'));
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('jeetk-theme', root.dataset.theme);
  });
  menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  sidebar.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => sidebar.classList.remove('open')));

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  document.getElementById('demo-save').addEventListener('click', () => showToast('Saved in this preview only.'));
  document.getElementById('demo-secondary').addEventListener('click', () => showToast('Preview is illustrative.'));
  document.getElementById('nav-demo').addEventListener('click', () => {
    const heading = document.getElementById('nav-heading');
    heading.textContent = heading.textContent.includes('good day') ? 'Your orders, at a glance.' : 'A good day starts here.';
    document.querySelectorAll('.mini-nav a').forEach((link) => link.classList.remove('current'));
    document.querySelectorAll('.mini-nav a')[heading.textContent.includes('orders') ? 1 : 0].classList.add('current');
  });

  const loadButton = document.getElementById('load-demo');
  loadButton.addEventListener('click', () => {
    const message = document.getElementById('state-message');
    loadButton.disabled = true;
    loadButton.textContent = 'Loading…';
    message.textContent = 'Processing sample operation…';
    setTimeout(() => {
      loadButton.disabled = false;
      loadButton.textContent = 'Try loading state';
      message.textContent = 'Sample operation complete. Nothing was saved.';
    }, 1200);
  });
  document.getElementById('select-demo').addEventListener('change', (event) => {
    document.getElementById('state-message').textContent = event.target.checked ? 'Summary selected.' : 'Selection cleared.';
  });

  const sampleItems = ['Coffee', 'Dates', 'Tea'];
  const search = document.getElementById('search-demo');
  search.addEventListener('input', () => {
    const matches = sampleItems.filter((item) => item.toLowerCase().includes(search.value.toLowerCase()));
    document.getElementById('search-results').textContent = matches.length ? matches.join(' · ') : 'No matching sample items.';
  });
  document.querySelectorAll('.select-list button').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('.select-list button').forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
    showToast(`${button.dataset.item} selected in this preview.`);
  }));

  document.querySelectorAll('.recipe-action').forEach((button) => button.addEventListener('click', () => {
    const recipe = button.dataset.recipe;
    if (recipe === 'auth') return showToast('Demo only: local validation, no account created.');
    if (recipe === 'crud') {
      const total = document.querySelector('.recipe-kpi b');
      total.textContent = String(Number(total.textContent) + 1);
      return showToast('A sample record was added in this page session.');
    }
    if (recipe === 'form') return showToast('Sample form validated. No data was submitted.');
    if (recipe === 'notice') return showToast('Sample notification: your order is ready.');
    if (recipe === 'permission') return showToast('Permission state preview only. No device permission was requested.');
    if (recipe === 'retry') {
      button.disabled = true;
      button.textContent = 'Retrying sample…';
      setTimeout(() => {
        button.disabled = false;
        button.textContent = 'Retry sample operation →';
        showToast('Sample recovered locally.');
      }, 900);
    }
  }));

  const docSearch = document.getElementById('docs-search');
  const family = document.getElementById('docs-family');
  const docLinks = [...document.querySelectorAll('#docs-list a')];
  function filterDocs() {
    const term = docSearch.value.toLowerCase();
    const selectedFamily = family.value;
    let count = 0;
    docLinks.forEach((link) => {
      const visible = link.textContent.toLowerCase().includes(term) && (selectedFamily === 'all' || link.dataset.family === selectedFamily);
      link.hidden = !visible;
      if (visible) count++;
    });
    document.getElementById('docs-count').textContent = `${count} ${count === 1 ? 'section' : 'sections'}`;
    document.getElementById('docs-empty').hidden = count !== 0;
  }
  docSearch.addEventListener('input', filterDocs);
  family.addEventListener('change', filterDocs);
  filterDocs();

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.side-link')];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${visible.target.id}`));
  }, {rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.1, 0.3]});
  sections.forEach((section) => observer.observe(section));
})();
