const inner = document.querySelector(".inner");
const inputUrl = document.querySelector("#input");
const inputRes = document.querySelector("#size");
const inputFormat = document.querySelector("#format");
const inputColor = document.querySelector("#color");
const bgColor = document.querySelector("#bg-color");
const btn = document.querySelector("button");
const img = document.querySelector("img");
const link = document.querySelector("a");

btn.addEventListener("click", () => {
    let finalUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${inputUrl.value}&size=${inputRes.value}&format=${inputFormat.value}&margin=100&qzone=1&color=${inputColor.value.replaceAll("#", "")}&bgcolor=${bgColor.value.replaceAll("#", "")}`;
    console.log(finalUrl)
    img.setAttribute("src", finalUrl);
    img.setAttribute("alt", `${inputUrl.value}`);
    img.style.display = "block";
    document.querySelector(".label").style.display = "block";

    fetch(finalUrl)
        .then(res => res.blob())
        .then(blob => {
            const objectURL = URL.createObjectURL(blob);
            link.href = objectURL;
            link.download = `QR-CODE.${inputFormat.value}`;
        })
        .catch(() => alert("Failed to generate QR code."));
});
