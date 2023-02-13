function notify(message) {
  const notice = document.getElementById('notification');
  notice.textContent = message;
  notice.style.display = 'block';
  notice.addEventListener('click', () => {
    notice.style.display = 'none';
  });
}