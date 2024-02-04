((d) => {
  const $textAreaHeightAuto = d.querySelector(".textarea"),
  $textArea = d.querySelector(".textarea");

  $textAreaHeightAuto.addEventListener("keyup", e => {
    $textAreaHeightAuto.style.height = "auto";

    let textAreaHeight = e.target.scrollHeight;

    $textAreaHeightAuto.style.height = `${textAreaHeight}px`;
  })
})(document);

function getTextEncrypt() {
  const $text = document.querySelector(".textarea"),
  $showTextEncrypt = document.querySelector(".show-text-encrypt"),
  $btn = document.createElement("button");
  let value = $text.value,
  textEncrypt = "";

  if (value != "") {
    $showTextEncrypt.removeChild($showTextEncrypt.firstElementChild);
    $showTextEncrypt.removeChild($showTextEncrypt.children[1]);
    $showTextEncrypt.removeChild($showTextEncrypt.lastElementChild);

    for (let index = 0; index < value.length; index++) {
      console.log(value[index]);

      switch (value[index]) {
        case 'a':
          textEncrypt += "ai";
          break;

        case 'e':
          textEncrypt += "enter";
          break;

        case 'i':
          textEncrypt += "imes";
          break;

        case 'o':
          textEncrypt += "ober";
          break;

        case 'u':
          textEncrypt += "ufat";
          break;

        default:
          textEncrypt += value[index];
          break;
      }
    }

    $showTextEncrypt.style.display = "flex";

    $showTextEncrypt.style.flexDirection = "column";

    $showTextEncrypt.style.justifyContent = "space-between";

    $showTextEncrypt.style.textAlign = "start";

    $showTextEncrypt.innerHTML =
    `<p>
      ${textEncrypt}
    </P>
    <button class="btn"
    style="--bg-button-color: var(--white-color); --text-button-color: var(--dark-blue-color); --hover-bg-color: var(--dark-blue-color); --hover-text-color: var(--white-color); --border-color: var(--dark-blue-color); flex-grow: 0">
      Copy
    </button>`;

    $showTextEncrypt.firstChild.style.marginTop = "0";

    $showTextEncrypt.firstChild.style.fontSize = "1.5rem";

    $showTextEncrypt.firstChild.style.letterSpacing = "0.0625rem";

    $showTextEncrypt.firstChild.style.lineHeight = "150%";

    console.log(textEncrypt);
  }
}

function getTextDecrypt() {
  let text = document.querySelector(".textarea"),
  value = text.value;

  console.log(value);
}