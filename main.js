document.addEventListener('DOMContentLoaded', () => {
    // ===== HEADER SCROLL EFFECT =====
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ===== SCROLL REVEAL (Intersection Observer) =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => revealObserver.observe(el));

    // ===== ACTIVE NAV LINKS =====
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // ===== EMAIL COPY FEEDBACK =====
    const copyBtn = document.querySelector('.copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = "<i class='bx bx-check'></i> Copied!";
            copyBtn.style.background = "#7000ff";

            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = "";
            }, 2000);
        });
    }

    // ===== SMOOTH SCROLL FOR BUTTONS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// ===== PROJECT FILTER =====

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        // Remove active only from project filter buttons
        filterButtons.forEach(button => {
            button.classList.remove("active");
        });

        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        cards.forEach(card => {

            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

// ===== LOAD MORE PROJECTS =====

const loadMoreBtn = document.getElementById("loadMoreBtn");
const hiddenProjects = document.querySelectorAll(".project-card.hidden");

if (loadMoreBtn) {

    loadMoreBtn.addEventListener("click", () => {

        hiddenProjects.forEach(project => {
            project.style.display = "block";
        });

        loadMoreBtn.style.display = "none";

    });

}
