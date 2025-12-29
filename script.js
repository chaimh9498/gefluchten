// Simple example: show a message when clicking nav links
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    console.log("Navigated to " + link.textContent);
  });
});
