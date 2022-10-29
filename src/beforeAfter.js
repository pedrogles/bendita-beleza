import cliente1 from './assets/services/beforeafter/cliente1.png';
import cliente11 from './assets/services/beforeafter/cliente1.1.png';
import cliente2 from './assets/services/beforeafter/cliente2.png';
import cliente22 from './assets/services/beforeafter/cliente2.1.png';
import cliente3 from './assets/services/beforeafter/cliente3.png';
import cliente33 from './assets/services/beforeafter/cliente3.1.png';
import cliente4 from './assets/services/beforeafter/cliente4.jpg';
import cliente44 from './assets/services/beforeafter/cliente4.1.png';

export const images = [cliente1, cliente11, cliente2, cliente22, cliente3, cliente33, cliente4, cliente44];

export const before1 = () => {
    const after = document.querySelector('.image1');
    if (after) {
        after.setAttribute("src", images[1]);
    }
}
export const after1 = () => {
    const before = document.querySelector('.image1');
    if (before) {
        before.setAttribute("src", images[0]);
    }
}
export const before2 = () => {
    const after = document.querySelector('.image2');
    if (after) {
        after.setAttribute("src", images[3]);
    }
}
export const after2 = () => {
    const before = document.querySelector('.image2');
    if (before) {
        before.setAttribute("src", images[2]);
    }
}
export const before3 = () => {
    const after = document.querySelector('.image3');
    if (after) {
        after.setAttribute("src", images[5]);
    }
}
export const after3 = () => {
    const before = document.querySelector('.image3');
    if (before) {
        before.setAttribute("src", images[4]);
    }
}
export const before4 = () => {
    const after = document.querySelector('.image4');
    if (after) {
        after.setAttribute("src", images[7]);
    }
}
export const after4 = () => {
    const before = document.querySelector('.image4');
    if (before) {
        before.setAttribute("src", images[6]);
    }
}