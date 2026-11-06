document.fonts.ready.then(() => {
    document.querySelectorAll(".particle-text").forEach((element) => {
        const text = element.dataset.text;
        const fontSize = 16;
        const fontFamily = '"Bricolage Grotesque", sans-serif';

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        ctx.font = `${fontSize}px ${fontFamily}`;

        const textWidth = Math.ceil(ctx.measureText(text).width);
        const textHeight = Math.ceil(fontSize * 1.8);
        const dpr = window.devicePixelRatio || 1;

        canvas.width = textWidth * dpr;
        canvas.height = textHeight * dpr;
        canvas.style.width = `${textWidth}px`;
        canvas.style.height = `${textHeight}px`;

        ctx.scale(dpr, dpr);
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(text, 0, textHeight / 2);

        const image = ctx.getImageData(
            0, 0, canvas.width, canvas.height
        );

        // Simpan posisi piksel teks
        const points = [];

        for (let y = 0; y < canvas.height; y += 2) {
            for (let x = 0; x < canvas.width; x += 2) {
                const index = (y * canvas.width + x) * 4;

                if (image.data[index + 3] > 100) {
                    points.push({
                        x: x / dpr,
                        y: y / dpr
                    });
                }
            }
        }

        // Bersihkan teks asli
        ctx.clearRect(0, 0, textWidth, textHeight);

        // Sebarkan piksel menjadi partikel
        points.forEach((point) => {
            const spreadX = (Math.random() - 0.5) * 5;
            const spreadY = (Math.random() - 0.5) * 5;
            const radius = Math.random() * 0.9 + 0.3;
            const opacity = Math.random() * 0.65 + 0.35;

            ctx.beginPath();
            ctx.arc(
                point.x + spreadX,
                point.y + spreadY,
                radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = `rgba(255,255,255,${opacity})`;
            ctx.fill();
        });

        element.replaceChildren(canvas);
    });
});