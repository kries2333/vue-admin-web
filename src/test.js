import CryptoJS from "crypto-js";

export function Decrypt(word) {

    let key = '密钥要后后台一致';
    let iv = '偏移量要个后台一致';

    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);

    let base64 = CryptoJS.enc.Base64.parse(word);
    
    let src = CryptoJS.enc.Base64.stringify(base64);

    // 解密模式为CBC，补码方式为PKCS5Padding（也就是PKCS7）
    let decrypt = CryptoJS.AES.decrypt(src, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
    });

    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();

}

var v = '"ziMJtxpbMvqo3uj97QyIB8x+HlHaVHez1XdMBAv1V/dVCU/6Ix+bCAB7yqjyhbaE634an6OFo2Ywzp7L//HmgIk/2BeNxDMvD0nDplCzQBV2E0WHw3DdUeQS6DQ6n5STlQt6Hr/6Du1BjdwU55ultiqMaHziAJHrMC3Uz1NXz0EblTnqeKo8dc0inLSlrAnB7N0BOaBd04Vq5t4KAIL/rdOL/z1vuz653baB7+t8Ky2EpNrTJT/lekDOw8R1FEfYldygWenLgS5/Xr3AKxcsdHoeiNOnbaXmVQmWOx3cSZfvoIUf1CFFdh05FGrQGw+faWmSxNEVaHajOA7YIhFrSmZ7pjFIuGbfgqoS8Dp4jrPi4Gon1e3Zyz0Dxt2eJLc2TyIQ9TPs2xOb5TZvv7OxxJysxdIMP/gGDgpavxl9I3zaklFRndI6rsMlgjJGuIGFFz8H3arHPecLlPZ9a7LpQBlqZJJ5Dhu8UIUe9TLq17cpoTiJOX1sn4HHva97ozp5dvhnM8iU8r8znLuIkeEDO8F6BntzxvTanzWXwwcK7OroNXHxLRzRRn8EidMm29jD5LPQ1B55Kle74KbZJAsP5h4L2tdOBhJSSWXnHbTdsyWK2BJZRC/tKUx4O4Dy0oURPJrx+DNjK0DPKn891+AH81GmP8AXMgyG7XDauOhBqM7wkm9OXm84fFilor2TPj2IhryexTADrXkifilsylX015vrUuLjSZX2J1+LnEiQdVmVx6BjZWUciJTelHpvlKy8IJnO3kMCDjDXnMkh8lD4k3nSvYVydN5NAUa3/YYNszJHLS3XDPYB1qIKHGrRNyVA5ZMYIhp8yQhd3dxnYfGiCAgZpXxO27QTlf1l1XnXGmhVX1rfyrKl/N+XdJt2dFwuUVeaMA4BORqtpBe3017ZnXbobCvKm4QtB/en9PXkDjfRiJPBxTURN7lReF+WopzsFck2smOdzCaRmjSwaLb1I6u/nSKnYmvW+s7wsooXBpy+G81EVhzbWp8tbRfVWkLYfwMinIMFB9PKci2TTqXQ+qcRmpcd/QZVA3/MsU5Hr0Lkbo8U+//H+c4Mp7nYV7xYVTl4auher/Rpy0ZAjvyhmVCRDgpusWz82iX5hq9EBHq6A+2eI5e6R5m0i8dWIdOe5Abd56iBT39I/UaGOAFJnOiw+YUPOQTeGd203YbKzcF0NlHfLlz/QhWgddL9tvid/2ef+Z/1iD6xv7PqS1t9fpUhaXAmckf20GDFUhn0JMwW5404IdjAv0LoH8WERDx0teOJRQlOzuU1lvfJLuDjDoVGFv7MnzaknLaZ6Llv5jhL3+v7n6PX+AiAAyiBWjZ+F+LW83IKlZfIlNEYgfSMlwh4wy3qkvJ0MYP24vt9u+ir1VOV+HP9sKGIghWSzsjc6Q/H63vQ3r+tVoPWSbw40EK0ShkYj6rIyK8WnAWPI3S/PEDOd2I2L/pWSy/iEBYI0KJvMkzRa/XqMWG08XU8GwoMfrcfPmiWahc3BI+gh2unWIhMLw2HgoXLJbc3/geK9Wdq+UqiJOkE1Z/hhPVoP8mfnc0AGyBv97jl9xVFDGZRBv/XudsjW2tw7jXTU3MNLKe5mrVvRcvmi6MKltx53+k8sMkZa/q9MtvVlh4wAbmu02qTu0Ag/+J0ZL4pMWY030yRuZgOvVaJFfjaYXrzvM6d7cCb1iUUwfGUg/khzNiK/jNIyVbFVAtXZf9THMMHUqOWhr6IwEOU6kKiXja/DeK4DoBsTg/jWGGInDrKR935LfVxq0pCXNAneO1ZfTv5WI1RY24gQ5DLoSKCzq+snfygoRUd+REDNH/bgTty8g+ZIwUaXmQsOqHf43IDB006Sbd8Ju1NxZoRpEX/excnDQ=="'

ss = Decrypt(v)
console.log("jiemi: " + ss)