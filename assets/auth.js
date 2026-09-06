(function(){
  const settings=JSON.parse(localStorage.getItem('hooshmand_settings')||'{}');
  document.querySelectorAll('[data-brand]').forEach(e=>e.textContent=settings.brandName||'هوشمند');
  document.querySelectorAll('[data-toggle-password]').forEach(btn=>btn.addEventListener('click',()=>{const input=document.getElementById(btn.dataset.togglePassword); if(!input)return; const visible=input.type==='password'; input.type=visible?'text':'password'; btn.classList.toggle('is-visible',visible); btn.setAttribute('aria-pressed',String(visible)); btn.setAttribute('aria-label',visible?'مخفی کردن رمز عبور':'نمایش رمز عبور');}));
  document.querySelectorAll('[data-demo-link]').forEach(a=>{a.href=a.dataset.demoLink});
  const form=document.querySelector('[data-auth-form]');
  if(form) form.addEventListener('submit',e=>{e.preventDefault();const note=document.querySelector('[data-form-note]');if(note){note.textContent='نمونه نمایشی است؛ برای اتصال به بک‌اند، رویداد ارسال فرم را به API پروژه خود متصل کنید.';note.classList.remove('hidden')}});
  document.querySelectorAll('[data-social-demo]').forEach(btn=>btn.addEventListener('click',()=>{const note=document.querySelector('[data-form-note]');if(note){note.textContent='این دکمه به‌صورت نمایشی فعال است و برای OAuth واقعی باید Client ID و مسیر callback تنظیم شود.';note.classList.remove('hidden')}}));
})();
