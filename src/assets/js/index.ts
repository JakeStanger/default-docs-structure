import { initSearch } from "./search";

declare global {

    interface Window {
        depth: string
    }
}

window.onload = () => {
    for (const el of (document.getElementsByClassName("collapsible-trigger") as unknown as Array<HTMLSpanElement>)) {
        el.onclick = () => {
            const body = el.parentElement?.getElementsByClassName("collapsible-body")[0];
            if (!body) return;
            body.classList.toggle("open");
            const arrow = el.getElementsByClassName("collapsible-arrow")[0];
            if (arrow) arrow.classList.toggle("open");
        }
    }

    for (const tooltip of (document.getElementsByClassName("c-tooltip") as unknown as Array<HTMLSpanElement>)) {
        let timeout: any;
        const tooltipContent = tooltip.getElementsByClassName("c-tooltip-content")[0];
        if (!tooltipContent || tooltipContent.classList.contains("open")) return;
        tooltip.onmouseover = () => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                tooltipContent.classList.add("open");
            }, 600);
        }
        tooltip.onmouseleave = () => {
            clearTimeout(timeout);
            tooltipContent.classList.remove("open");
        }
    }

    initSearch();
}

