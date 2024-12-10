
    document.addEventListener("DOMContentLoaded", () => {
        const modal = document.getElementById("modal");
        const modalTitle = document.getElementById("modal-title");
        const modalDescription = document.getElementById("modal-description");
        const closeModal = document.querySelector(".modal-close");

        const serviceDetails = {
            "room-service": {
                title: "Servicio a la Habitación",
                description: "Nuestro Servicio a la Habitación está diseñado para maximizar tu comodidad. Ofrecemos una amplia selección de alimentos y bebidas, desde platos gourmet hasta opciones rápidas como snacks y bebidas refrescantes. También puedes solicitar artículos esenciales, como kits de aseo personal o accesorios adicionales. El servicio está disponible las 24 horas del día, asegurando que tus necesidades sean atendidas sin importar la hora. Todo esto será entregado directamente a tu puerta con rapidez y profesionalismo."
            },
            "spa": {
                title: "Spa",
                description: "Disfruta de una experiencia de relajación inigualable en nuestro spa. Ofrecemos una variedad de servicios, como masajes terapéuticos, tratamientos faciales revitalizantes, exfoliaciones corporales y baños de aromaterapia. Cada tratamiento es realizado por expertos altamente capacitados en un ambiente tranquilo y lujoso. Contamos con paquetes personalizados para parejas, días de spa completos y opciones de bienestar enfocadas en tus necesidades específicas, asegurando una experiencia inolvidable."
            },
            "meeting": {
                title: "Reuniones y Banquetes",
                description: "Nuestros espacios para reuniones y banquetes están completamente equipados para eventos de cualquier tipo. Ofrecemos tecnología de última generación, incluyendo proyectores, pantallas, sistemas de sonido y conexión Wi-Fi de alta velocidad. Los espacios son adaptables y pueden configurarse para reuniones corporativas, conferencias, talleres y más. Además, contamos con un equipo de catering que proporciona menús personalizados para satisfacer las necesidades de cada evento, asegurando una experiencia profesional y memorable."
            },
            "events": {
                title: "Salón de Eventos",
                description: "Celebra momentos únicos en nuestro elegante Salón de Eventos. Este espacio es ideal para bodas, aniversarios, cumpleaños y otras celebraciones especiales. El salón cuenta con una capacidad para grandes grupos, iluminación ajustable, sistema de sonido y decoración personalizable para adaptarse a tus preferencias. Nuestro equipo de organización de eventos estará a tu disposición para coordinar cada detalle, desde la planificación inicial hasta la ejecución final, asegurando que tu evento sea inolvidable."
            }
        };
        

        document.querySelectorAll(".leer-mas").forEach(button => {
            button.addEventListener("click", (event) => {
                event.preventDefault();
                const service = event.target.getAttribute("data-service");
                modalTitle.textContent = serviceDetails[service].title;
                modalDescription.textContent = serviceDetails[service].description;
                modal.style.display = "flex";
            });
        });

        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

