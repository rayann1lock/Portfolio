// Gestion des clics sur les points
const points = document.querySelectorAll('.timeline-point');
const cards = document.querySelectorAll('.detail-card');

points.forEach(point => {
    point.addEventListener('click', () => {
        const eventType = point.dataset.event;

        // Retirer la classe active de tous les points
        points.forEach(p => p.classList.remove('active'));

        // Ajouter la classe active au point cliqué
        point.classList.add('active');

        // Cacher toutes les cards
        cards.forEach(card => card.classList.remove('active'));

        // Afficher la card correspondante avec slide
        const targetCard = document.getElementById(`card-${eventType}`);
        if (targetCard) {
            setTimeout(() => {
                targetCard.classList.add('active');
            }, 100);
        }
    });
});