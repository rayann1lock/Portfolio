// Données des projets
const projectsData = {
    eftw: {
        icon: "🏗️",
        title: "Infrastructure e-FTW",
        type: "🎓 Projet École (ETNA)",
        objectif: `Conception et déploiement d'une infrastructure IT complète et sécurisée pour la startup e-FTW. 
        Le projet consistait à créer un environnement de travail stable pour une équipe de développeurs avec des services réseau automatisés, 
        un système de versioning et une supervision proactive.`,
        realisations: [
            "Mise en place d'un serveur passerelle (GW01) avec routage NAT et pare-feu iptables",
            "Configuration d'un serveur de gestion (MG01) avec DNS Bind9 et DHCP pour l'automatisation réseau",
            "Déploiement de GitLab Community Edition pour le versioning du code source",
            "Installation de Centreon pour la supervision des services",
            "Sécurisation SSH avec authentification par clés RSA",
            "Configuration de Fail2Ban pour la protection contre les intrusions",
            "Génération de certificats SSL auto-signés (PKI)",
            "Segmentation réseau avec plan d'adressage IP optimisé"
        ],
        technologies: ["Debian 11", "Bind9", "ISC-DHCP", "GitLab CE", "Centreon", "Iptables", "Fail2Ban", "OpenSSH", "Apache2", "SSL/TLS"],
        resultat: `Infrastructure opérationnelle avec haute disponibilité, services automatisés et sécurité renforcée. 
        Les développeurs disposent d'un environnement Plug & Play avec connectivité automatique et accès centralisé au code via GitLab.`
    },
    cisco: {
        icon: "🌐",
        title: "Réseau Cisco Sécurisé",
        type: "🎓 Projet École (ETNA)",
        objectif: `Optimisation et sécurisation d'une architecture réseau d'entreprise existante. 
        Le projet visait à segmenter le réseau en VLANs pour séparer les flux métiers, mettre en place un routage dynamique, 
        et appliquer des politiques de sécurité strictes.`,
        realisations: [
            "Découpage du réseau en VLANs (VLAN 10 Commerciaux, VLAN 20 Techniciens)",
            "Configuration du routage inter-VLAN (Router-on-a-Stick)",
            "Déploiement du protocole OSPFv2 pour le routage dynamique multi-sites",
            "Configuration des ACL étendues pour filtrer les accès (restriction PC2 vers serveur S1)",
            "Activation de Port Security sur les switchs (protection MAC)",
            "Mise en place d'un serveur TFTP pour la sauvegarde des configurations",
            "Sécurisation des accès administratifs (enable secret, service password-encryption)",
            "Configuration de bannières MOTD sur tous les équipements"
        ],
        technologies: ["Cisco IOS", "VLAN 802.1Q", "OSPFv2", "ACL", "Port Security", "TFTP", "Packet Tracer"],
        resultat: `Réseau segmenté, performant et sécurisé. Communication fluide inter-VLANs avec contrôle d'accès granulaire. 
        Protection contre les connexions non autorisées et sauvegarde automatisée des configurations.`
    },
    monitoring: {
        icon: "📊",
        title: "Stack Monitoring Docker",
        type: "🎓 Projet École (ETNA)",
        objectif: `Déploiement d'une infrastructure de monitoring moderne et scalable pour surveiller une application WordPress critique. 
        L'objectif était de garantir la haute disponibilité du site en détectant proactivement les anomalies système et applicatives.`,
        realisations: [
            "Architecture conteneurisée avec Docker Compose (isolation et portabilité)",
            "Déploiement de Prometheus pour la collecte de métriques système",
            "Installation de Node Exporter sur VM1 et VM2 (métriques CPU, RAM, Disque, Réseau)",
            "Configuration de Blackbox Exporter pour les tests de disponibilité HTTP/ICMP",
            "Création de dashboards Grafana personnalisés pour la visualisation temps réel",
            "Configuration de la persistance des données (volumes Docker)",
            "Intégration des targets dans prometheus.yml",
            "Mise en place de dashboards préconçus (Node Exporter Full)"
        ],
        technologies: ["Docker", "Docker Compose", "Prometheus", "Grafana", "Node Exporter", "Blackbox Exporter", "Debian"],
        resultat: `Solution de monitoring opérationnelle avec visibilité complète sur les métriques système des deux VMs. 
        Dashboards Grafana permettant une analyse temps réel des performances et détection rapide des anomalies.`
    },
    mco: {
        icon: "🛡️",
        title: "MCO & Sécurisation Multi-Clients",
        type: "🏢 Projet Entreprise (TERSEDIA)",
        objectif: `Assurer la maintenance en condition opérationnelle et la sécurisation des infrastructures de multiples clients 
        (PME, ETI, Secteur Public) dans un contexte de services managés. L'objectif est de garantir la disponibilité, 
        la performance et la sécurité des systèmes d'information tout en respectant les SLA contractuels.`,
        realisations: [
            "Supervision proactive de +50 équipements avec PRTG Network Monitor",
            "Administration hybride Active Directory on-premise et Azure AD cloud",
            "Gestion complète Microsoft 365 (Exchange Online, SharePoint, Teams)",
            "Support infrastructure niveaux 2 et 3 avec résolution d'incidents complexes",
            "Hardening système (Windows Server, Linux) selon les best practices CIS",
            "Déploiement de politiques de sécurité (MFA, Conditional Access)",
            "Gestion des sauvegardes et tests de restauration",
            "Documentation technique et rapports d'activité mensuels",
            "Gestion des demandes utilisateurs via ticketing (GLPI)"
        ],
        technologies: ["PRTG", "Azure AD", "Active Directory", "Microsoft 365", "Exchange Online", "SharePoint", "PowerShell", "GLPI", "Windows Server", "Linux", "Veeam Backup"],
        resultat: `Infrastructures clients disponibles 24/7 avec taux de disponibilité >99%. 
        Réduction significative des incidents de sécurité grâce aux politiques de durcissement. 
        Satisfaction client élevée avec respect des SLA et support réactif.`
    }
};

// Gestion des clics sur les cartes
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-modal');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        const project = projectsData[projectId];

        if (project) {
            modalBody.innerHTML = `
                <div class="modal-header">
                    <div class="project-icon">${project.icon}</div>
                    <h2>${project.title}</h2>
                    <p class="project-type">${project.type}</p>
                </div>

                <div class="modal-section">
                    <h3>🎯 Objectif du projet</h3>
                    <p>${project.objectif}</p>
                </div>

                <div class="modal-section">
                    <h3>✅ Réalisations techniques</h3>
                    <ul>
                        ${project.realisations.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-section">
                    <h3>🛠️ Technologies utilisées</h3>
                    <div class="tech-grid">
                        ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                </div>

                <div class="modal-section">
                    <h3>🎊 Résultat</h3>
                    <p>${project.resultat}</p>
                </div>
            `;

            modal.classList.add('show');
        }
    });
});

// Fermeture du modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Fermeture avec Echap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
});
