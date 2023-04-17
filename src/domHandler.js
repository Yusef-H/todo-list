
const sidebarButton = document.querySelector('.sidebar-collapse-button');
const sidebar = document.querySelector('.sidebar');

sidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-show');
});