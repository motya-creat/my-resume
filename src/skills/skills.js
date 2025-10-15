const iconsUrl = '../src/images/icons/skills/'

const skillsData = [
    { name: 'HTML5', category: 'frontend', type: 'html', url: `${iconsUrl}html5.svg` },
    { name: 'CSS', category: 'frontend', type: 'css', url: `${iconsUrl}css.svg` },
    { name: 'JavaScript', category: 'frontend', type: 'js', url: `${iconsUrl}js.svg` },
    { name: 'GitHub', category: 'tools', type: 'github', url: `${iconsUrl}github.svg` },
    { name: 'React', category: 'frontend', type: 'react', url: `${iconsUrl}react.svg` },
    { name: 'Sass', category: 'frontend', type: 'sass', url: `${iconsUrl}sass.svg` },
    { name: 'VS Code', category: 'tools', type: 'vsc', url: `${iconsUrl}vsc.svg` },
    { name: 'npm', category: 'tools', type: 'npm', url: `${iconsUrl}npm.svg` },
    { name: 'Git', category: 'tools', type: 'git', url: `${iconsUrl}git.svg` },
    { name: 'Node.js', category: 'tools', type: 'node', url: `${iconsUrl}node.svg` },
    { name: 'Terminal', category: 'tools', type: 'terminal', url: `${iconsUrl}terminal.svg` },
    { name: 'Figma', category: 'tools', type: 'figma', url: `${iconsUrl}figma.svg` },
];

const container = document.querySelector('.skills__items');
const nav = document.querySelector('.skills__navigation');
const buttons = nav.querySelectorAll('.skill-btn');

function renderSkills(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' ? skillsData : skillsData.filter(s => s.category === filter);

    filtered.forEach(skill => {
        const item = document.createElement('div');
        item.className = `skill-item skill-${skill.category} ${skill.type}`;
        item.innerHTML = `
      <img src="${skill.url}" class="skill-img"> ${skill.name}
    `;
        container.appendChild(item);
    });
}

function setActiveButton(filter) {
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
}

nav.addEventListener('click', (e) => {
    const btn = e.target.closest('.skill-btn');
    if (!btn) return;
    const filter = btn.dataset.filter;
    renderSkills(filter);
    setActiveButton(filter);
    btn.focus();
});

renderSkills('all');
setActiveButton('all');