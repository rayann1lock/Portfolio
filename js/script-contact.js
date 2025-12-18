// Gestion du formulaire de contact
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const btnSubmit = document.querySelector('.btn-submit');
const btnText = document.querySelector('.btn-text');
const btnLoader = document.querySelector('.btn-loader');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Récupération des données du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }

    // État de chargement
    btnSubmit.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';
    formMessage.style.display = 'none';

    // Construction du mailto
    const subject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const body = encodeURIComponent(
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Téléphone: ${formData.phone || 'Non renseigné'}\n\n` +
        `Sujet: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
    );

    // Remplace 'votre.email@example.com' par ton vrai email
    const mailtoLink = `mailto:rayann.def2@gmail.com?subject=${subject}&body=${body}`;

    // Simulation d'envoi (avec délai pour UX)
    setTimeout(() => {
        // Ouvre le client mail
        window.location.href = mailtoLink;

        // Reset du formulaire
        contactForm.reset();

        // Message de succès
        showMessage('✅ Votre client mail va s\'ouvrir. Merci pour votre message !', 'success');

        // Reset du bouton
        btnSubmit.disabled = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
    }, 1000);
});

// Fonction pour afficher les messages
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Masquer le message après 5 secondes
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Validation en temps réel de l'email
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value && !emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = '#e74c3c';
    } else {
        emailInput.style.borderColor = '#e8e8e8';
    }
});
