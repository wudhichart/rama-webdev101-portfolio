const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-bs-theme', newTheme);

    // แก้ไขข้อความที่แสดงบนปุ่มเมื่ออยู่ในแต่ละโหมดได้ที่นี่
    themeToggleBtn.textContent = newTheme === 'dark' ? 'โหมดสว่าง' : 'โหมดมืด';
  });
}
