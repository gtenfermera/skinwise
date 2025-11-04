document.getElementById('currentYear').textContent = new Date().getFullYear();
const $ = s => document.querySelector(s);
$('#skin-form').addEventListener('submit', e => {
  e.preventDefault();
  $('#results').classList.remove('hidden');
});
$('#reset').addEventListener('click', () => {
  $('#skin-type').value = '';
  document.querySelectorAll('input[name="concern"]').forEach(c => c.checked=false);
  $('#results').classList.add('hidden');
});
