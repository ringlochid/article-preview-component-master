function main(){
    const share_btn = document.querySelector(".share-btn");
    const pop = document.getElementById('share-popover');

    share_btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isopen = !pop.hidden();
        pop.hidden = isOpen;
        btn.setAttribute('aria-expanded', String(!isOpen));
    });

    document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !pop.contains(e.target)) {
        pop.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
    }
    });
}

document.addEventListener('DOMContentLoaded', main);