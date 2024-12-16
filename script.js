const texts = ["Hello!,", " I'm Web Developer", "Front-End Developer", "Back-End Developer", "Hire me"];
            let index = 0;
            function changeText() {
                const textElement = document.getElementById("text");
                textElement.classList.add("fade-out");
                setTimeout(() => {
                    index = (index + 1) % texts.length;
                    textElement.innerText = texts[index];
                    textElement.classList.remove("fade-out");
                }, 1000); 
            }
            setInterval(changeText, 3000);