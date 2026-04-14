'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // Handle both cases: if DOMContentLoaded already fired or will fire
    const initializeScripts = function() {

      // ===== PRELOADER =====
      var preloaderBar = document.getElementById('preloader-bar');
      var preloaderPercent = document.getElementById('preloader-percent');
      var preloader = document.getElementById('preloader');
      var progress = 0;
      var preloaderInterval = setInterval(function() {
        progress += Math.random() * 15 + 5;
        if (progress > 100) progress = 100;
        preloaderBar.style.width = progress + '%';
        preloaderPercent.textContent = Math.round(progress) + '%';
        if (progress >= 100) {
          clearInterval(preloaderInterval);
          setTimeout(function() {
            preloader.classList.add('hidden');
            setTimeout(initAnimations, 200);
          }, 400);
        }
      }, 120);

      // ===== CUSTOM CURSOR =====
      var cursorDot = document.getElementById('cursor-dot');
      var cursorRing = document.getElementById('cursor-ring');
      var mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

      document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX; mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px'; cursorDot.style.top = mouseY + 'px';
      });

      function animateRing() {
        ringX += (mouseX - ringX) * 0.15; ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.left = ringX + 'px'; cursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
      }
      animateRing();

      document.querySelectorAll('a, button, .product-card, .gallery-item, .filter-btn, input, select, textarea').forEach(function(el) {
        el.addEventListener('mouseenter', function() { cursorDot.classList.add('hovering'); cursorRing.classList.add('hovering'); });
        el.addEventListener('mouseleave', function() { cursorDot.classList.remove('hovering'); cursorRing.classList.remove('hovering'); });
      });

      // ===== HEADER SCROLL =====
      var header = document.getElementById('header');
      window.addEventListener('scroll', function() {
        if (window.scrollY > 80) { header.classList.add('scrolled'); } else { header.classList.remove('scrolled'); }
        var scrollTopBtn = document.getElementById('scroll-top');
        if (window.scrollY > 600) { scrollTopBtn.classList.add('visible'); } else { scrollTopBtn.classList.remove('visible'); }
      });

      document.getElementById('scroll-top').addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });

      // ===== MOBILE MENU =====
      var hamburger = document.getElementById('hamburger');
      var mobileMenu = document.getElementById('mobile-menu');
      var mobileClose = document.getElementById('mobile-close');

      function openMobile() { mobileMenu.classList.add('active'); hamburger.classList.add('active'); document.body.style.overflow = 'hidden'; }
      function closeMobile() { mobileMenu.classList.remove('active'); hamburger.classList.remove('active'); document.body.style.overflow = ''; }

      hamburger.addEventListener('click', openMobile);
      mobileClose.addEventListener('click', closeMobile);
      mobileMenu.querySelectorAll('a').forEach(function(link) { link.addEventListener('click', closeMobile); });

      document.querySelectorAll('.mobile-dropdown-toggle').forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
          e.preventDefault();
          var submenu = toggle.nextElementSibling; var icon = toggle.querySelector('i');
          submenu.classList.toggle('open');
          icon.style.transform = submenu.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
      });

      // ===== PRODUCT FILTERS =====
      var filterBtns = document.querySelectorAll('.filter-btn');
      var productCards = document.querySelectorAll('.product-card');

      filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          filterBtns.forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          var filter = btn.dataset.filter;
          productCards.forEach(function(card, index) {
            var category = card.dataset.category;
            if (filter === 'all' || category === filter) {
              card.style.display = ''; card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
              setTimeout(function() { card.style.transition = 'all 0.5s ease'; card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, index * 80);
            } else {
              card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
              setTimeout(function() { card.style.display = 'none'; }, 300);
            }
          });
        });
      });

      // ===== TESTIMONIALS SLIDER =====
      var testimonialTrack = document.getElementById('testimonial-track');
      var testDots = document.querySelectorAll('.testimonial-dot');
      var testPrev = document.getElementById('test-prev');
      var testNext = document.getElementById('test-next');
      var currentSlide = 0; var totalSlides = 3; var autoSlideInterval;

      function goToSlide(index) {
        currentSlide = index;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        if (currentSlide >= totalSlides) currentSlide = 0;
        testimonialTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        testDots.forEach(function(dot, i) { dot.classList.toggle('active', i === currentSlide); });
      }

      testPrev.addEventListener('click', function() { goToSlide(currentSlide - 1); resetAutoSlide(); });
      testNext.addEventListener('click', function() { goToSlide(currentSlide + 1); resetAutoSlide(); });
      testDots.forEach(function(dot) { dot.addEventListener('click', function() { goToSlide(parseInt(dot.dataset.index)); resetAutoSlide(); }); });

      function startAutoSlide() { autoSlideInterval = setInterval(function() { goToSlide(currentSlide + 1); }, 5000); }
      function resetAutoSlide() { clearInterval(autoSlideInterval); startAutoSlide(); }
      startAutoSlide();

      // ===== GALLERY LIGHTBOX =====
      var galleryImages = [
        'https://eurekaindia.com/wp-content/uploads/2020/02/1.jpg', 'https://eurekaindia.com/wp-content/uploads/2020/02/2.jpg',
        'https://eurekaindia.com/wp-content/uploads/2020/02/3.jpg', 'https://eurekaindia.com/wp-content/uploads/2020/02/4.jpg',
        'https://eurekaindia.com/wp-content/uploads/2020/02/5.jpg', 'https://eurekaindia.com/wp-content/uploads/2020/02/6.jpg',
        'https://eurekaindia.com/wp-content/uploads/2020/02/7.jpg', 'https://eurekaindia.com/wp-content/uploads/2020/02/8.jpg',
        'https://eurekaindia.com/wp-content/uploads/2020/02/9.jpg', 'https://eurekaindia.com/wp-content/uploads/2020/02/10.jpg',
        'https://eurekaindia.com/wp-content/uploads/2020/02/11.jpg', 'https://eurekaindia.com/wp-content/uploads/2020/02/12.jpg'
      ];
      var lightbox = document.getElementById('lightbox'); var lightboxImg = document.getElementById('lightbox-img'); var currentLightbox = 0;

      document.querySelectorAll('.gallery-item').forEach(function(item) {
        item.addEventListener('click', function() {
          currentLightbox = parseInt(item.dataset.index); lightboxImg.src = galleryImages[currentLightbox];
          lightbox.classList.add('active'); document.body.style.overflow = 'hidden';
        });
      });

      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.closest('.lightbox-close')) { lightbox.classList.remove('active'); document.body.style.overflow = ''; }
      });

      document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') { lightbox.classList.remove('active'); document.body.style.overflow = ''; }
        if (e.key === 'ArrowLeft') { currentLightbox = (currentLightbox - 1 + galleryImages.length) % galleryImages.length; lightboxImg.src = galleryImages[currentLightbox]; }
        if (e.key === 'ArrowRight') { currentLightbox = (currentLightbox + 1) % galleryImages.length; lightboxImg.src = galleryImages[currentLightbox]; }
      });

      // ===== QUOTE FORM =====
      var quoteSubmit = document.getElementById('quote-submit'); var quoteForm = document.getElementById('quote-form'); var quoteSuccess = document.getElementById('quote-success');

      quoteSubmit.addEventListener('click', function() {
        var valid = true; var name = document.getElementById('q-name'); var phone = document.getElementById('q-phone'); var email = document.getElementById('q-email');
        [name, phone, email].forEach(function(input) { input.classList.remove('error'); });
        document.querySelectorAll('.form-error').forEach(function(err) { err.classList.remove('visible'); });
        if (!name.value.trim()) { name.classList.add('error'); document.getElementById('q-name-error').classList.add('visible'); valid = false; }
        if (!phone.value.trim() || phone.value.replace(/\D/g, '').length < 10) { phone.classList.add('error'); document.getElementById('q-phone-error').classList.add('visible'); valid = false; }
        if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.classList.add('error'); document.getElementById('q-email-error').classList.add('visible'); valid = false; }
        if (valid) {
          quoteSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...'; quoteSubmit.disabled = true;
          setTimeout(function() { quoteForm.style.display = 'none'; quoteSuccess.classList.add('visible'); showToast('Quote request submitted successfully!'); }, 1500);
        }
      });

      function showToast(message) {
        var toast = document.getElementById('toast'); document.getElementById('toast-message').textContent = message; toast.classList.add('show');
        setTimeout(function() { toast.classList.remove('show'); }, 4000);
      }

      document.querySelectorAll('.form-input, .form-select').forEach(function(input) {
        input.addEventListener('focus', function() { input.classList.remove('error'); var errorEl = input.parentElement.querySelector('.form-error'); if (errorEl) errorEl.classList.remove('visible'); });
      });

      // ===== GSAP ANIMATIONS =====
      function initAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') { setTimeout(initAnimations, 100); return; }
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        ScrollTrigger.refresh();

        function animateCounter(el) {
          var target = parseInt(el.dataset.target); var duration = 2000; var start = performance.now();
          function update(now) { var elapsed = now - start; var progress = Math.min(elapsed / duration, 1); var eased = 1 - Math.pow(1 - progress, 3); el.textContent = Math.round(eased * target).toLocaleString('en-IN'); if (progress < 1) requestAnimationFrame(update); }
          requestAnimationFrame(update);
        }

        document.querySelectorAll('.hero-stat .counter').forEach(function(counter) { var triggered = false; ScrollTrigger.create({ trigger: counter, start: 'top 90%', onEnter: function() { if (!triggered) { triggered = true; animateCounter(counter); } } }); });
        document.querySelectorAll('.stat-number .counter').forEach(function(counter) { var triggered = false; ScrollTrigger.create({ trigger: counter, start: 'top 90%', onEnter: function() { if (!triggered) { triggered = true; animateCounter(counter); } } }); });

        function setupReveal(el, fromProps) {
          var rect = el.getBoundingClientRect(); var inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
          if (inView) { gsap.to(el, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.8, ease: 'power2.out' }); }
          else { gsap.fromTo(el, { opacity: 0, x: (fromProps.x || 0), y: (fromProps.y || 0), scale: (fromProps.scale || 1) }, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } }); }
        }

        document.querySelectorAll('.reveal').forEach(function(el) { setupReveal(el, { y: 40 }); });
        document.querySelectorAll('.reveal-left').forEach(function(el) { setupReveal(el, { x: -40 }); });
        document.querySelectorAll('.reveal-right').forEach(function(el) { setupReveal(el, { x: 40 }); });
        document.querySelectorAll('.reveal-scale').forEach(function(el) { setupReveal(el, { scale: 0.95 }); });

        ScrollTrigger.create({ trigger: '.features-grid', start: 'top 85%', onEnter: function() { gsap.fromTo('.feature-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }); }, once: true });
        ScrollTrigger.create({ trigger: '.products-grid', start: 'top 85%', onEnter: function() { gsap.fromTo('.product-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }); }, once: true });
        ScrollTrigger.create({ trigger: '.gallery-grid', start: 'top 85%', onEnter: function() { gsap.fromTo('.gallery-item', { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' }); }, once: true });

        var heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        heroTl.to('.hero-label', { opacity: 1, y: 0, duration: 0.8 }, 0.2)
          .fromTo('.hero-title .line-inner', 
            { y: 100, filter: 'blur(8px)' }, 
            { y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.12 }, 
            0.4)
          .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, 0.9)
          .to('.hero-actions', { opacity: 1, y: 0, duration: 0.8 }, 1.1)
          .to('.hero-stats', { opacity: 1, y: 0, duration: 0.8 }, 1.3);

        gsap.to('.hero-bg img', { y: '20%', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 } });
        gsap.to('.about-image-wrap img', { y: -20, scrollTrigger: { trigger: '.about-image-wrap', start: 'top bottom', end: 'bottom top', scrub: 1 } });
        gsap.to('.cta-bg-pattern', { y: -30, scrollTrigger: { trigger: '#cta-section', start: 'top bottom', end: 'bottom top', scrub: 1 } });

        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
          anchor.addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) { e.preventDefault(); gsap.to(window, { scrollTo: { y: target, offsetY: 80 }, duration: 1, ease: 'power2.inOut' }); }
          });
        });

        setTimeout(function() { ScrollTrigger.refresh(); }, 500);
      }
    };

    // Check if DOM is already loaded, otherwise wait for it
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeScripts);
    } else {
      initializeScripts();
    }

    // Cleanup function
    return () => {
      document.removeEventListener('DOMContentLoaded', initializeScripts);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return null; // This component renders no UI, just attaches scripts
}
