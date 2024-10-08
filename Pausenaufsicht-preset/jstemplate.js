// Orte für Pausenaufsicht und benötigte Aufsichtspersonen
const ORTE = [
   { name: 'Schulhof', teachersNeeded: 2 },
   { name: 'Mensa', teachersNeeded: 1 },
   { name: 'Sportplatz', teachersNeeded: 3 }
];

// Anzahl Pausen die pro Wochentag beaufsichtigt werden müssen
const WEEKDAYS = [
   { name: 'Mo', pauses: 3 },
   { name: 'Di', pauses: 3 },
   { name: 'Mi', pauses: 3 },
   { name: 'Do', pauses: 3 },
   { name: 'Fr', pauses: 3 }
];


// ----- DON'T TOUCH CODE BELOW! ----- //

// Define the maximum number of pauses across all days
const MAX_PAUSES = Math.max(...WEEKDAYS.map(day => day.pauses));



// replaces the "edit pencil" with custom edit button and svg pencil
        document.addEventListener("DOMContentLoaded", function () {
            // Select all <td> elements with the class "kcm_functions"
            const functionCells = document.querySelectorAll("div.szy_functions");

            functionCells.forEach(cell => {
                // Find and replace the edit icon within <span class="edit">
                const editSpan = cell.querySelector("span.edit i");
                if (editSpan) {
                    editSpan.outerHTML = `
                    <span class="sticker-button-edit" title="Bearbeiten">
                        <svg width="70px" height="70px" viewBox="0 0 128 128" title="Bearbeiten" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto"
                            preserveAspectRatio="xMidYMid meet" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M123.87 118.8l-6.18-16.49l-4.25-11.35c-.96-2.93-1.14-4.14-2.77-5.77L98.85 73.37L73.39 98.83l11.83 11.83c.97.97 2.83 1.8 5.76 2.76l11.35 4.25l16.49 6.18c3.11 1.01 6.06-1.94 5.05-5.05z"
                                    fill="#ffecb3"> </path>
                                <g fill="none">
                                    <path d="M85.65 106.83l-.03-.03l.03.03z"> </path>
                                    <path d="M106.8 85.6l.21.21c-.07-.07-.12-.16-.19-.23l-.02.02z"> </path>
                                </g>
                                <path
                                    d="M118.82 123.85l-13.66-5.12s5.64-.32 9.45-4.13c3.81-3.81 4.14-9.46 4.14-9.46l5.12 13.66c1.01 3.11-1.94 6.06-5.05 5.05z"
                                    fill="#616161"> </path>
                                <path
                                    d="M43.18 17.71L37.77 37l-20.04 6.16L6.41 31.85c-3.12-3.12-4.6-9.34 3.67-17.61l4.99-4.99c7.15-7.15 13.68-5.98 16.8-2.86l11.31 11.32z"
                                    fill="#ef5350"> </path>
                                <path d="M34.27 44.64l10.37-10.37l60.23 60.23s1.23 5.12-1.9 8.25s-8.47 2.12-8.47 2.12L34.27 44.64z"
                                    fill="#ffc107"> </path>
                                <path d="M26.73 52.18l58.58 58.58c9.46 2.06 9.05-6.03 9.05-6.03L34.27 44.64l-7.54 7.54z" fill="#ffa000">
                                </path>
                                <path d="M44.65 34.26l60.09 60.09s10.82 0 5.87-9.21L52.19 26.72l-7.54 7.54z" fill="#fdd835"> </path>
                                <path fill="#d1762c" d="M94.27 106.04L33.66 45.43l1.41-1.41l61 61l-1.57-.16z"> </path>
                                <path fill="#f19534" d="M105.11 96.15L40.15 31.19l1.42-1.41l64.47 64.47l-1.17.24z"> </path>
                                <path
                                    d="M52.19 26.72s-5.47 8.09-10 12.67c-8.67 8.74-15.46 12.79-15.46 12.79l1.75 1.75c2.49-.97 8.86-3.88 15.22-10.23c6.4-6.4 9.42-12.65 10.43-15.04l-1.94-1.94z"
                                    opacity=".2" fill="#4e342e"> </path>
                                <path
                                    d="M23.49 51.9c.56.56 1.35.81 2.13.68c0 0 8.19-2.5 16.33-10.64s10.83-16.07 10.83-16.07c.13-.78-.12-1.58-.68-2.14l-8.58-8.58c-.36-.36-.86-.55-1.36-.49c-.17.02-.34.04-.52.07c-.68.1-1.22.6-1.41 1.26c0 0-3.92 7.6-10.38 14.05S15.51 40.25 15.51 40.25c-.66.18-1.17.71-1.27 1.39v.02c-.08.54.1 1.08.48 1.46l8.77 8.78z"
                                    fill="#94d1e0"> </path>
                                <ellipse transform="rotate(-45.001 15.053 15.045)" cx="15.05" cy="15.04" rx="15.03" ry="4.45"
                                    fill="#ff8383">
                                </ellipse>
                                <path
                                    d="M41.61 21.74c-3.29 6.3-8.7 11.47-15.14 14.46c-.42.19-1.01.33-1.26-.05c-.19-.3-.02-.68.17-.98c.84-1.3 2-2.35 3.12-3.42c2.92-2.8 5.6-5.84 8.01-9.08c1.23-1.65 2.38-3.35 3.46-5.1c.6-.96 1.67-2.99 3.04-1.56c1.19 1.23-.77 4.52-1.4 5.73z"
                                    fill="#b9e4ea"> </path>
                                <path
                                    d="M37.88 33.47c-.26.27-.53.54-.66.89s-.08.8.22 1.02c.25.19.59.17.9.12c1.73-.27 3.26-1.25 4.61-2.35c2.95-2.39 5.45-5.71 5.69-9.5c.03-.45.02-.92-.18-1.32c-1.27-2.51-3.96 3.1-4.49 3.89c-1.77 2.63-3.88 4.99-6.09 7.25z"
                                    fill="#b9e4ea"> </path>
                            </g>
                        </svg>
                    </span>`;
                }

                // Find and replace the delete icon within <span class="delete">
                const deleteSpan = cell.querySelector("span.delete i");
                if (deleteSpan) {
                    deleteSpan.outerHTML = `
                    <span class="sticker-button-delete" title="Löschen">
                        <svg  width="60px" height="60px" title="Löschen" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
                            <defs></defs>
                            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                <path d="M 76.777 2.881 H 57.333 V 2.412 C 57.333 1.08 56.253 0 54.921 0 H 35.079 c -1.332 0 -2.412 1.08 -2.412 2.412 v 0.469 H 13.223 c -1.332 0 -2.412 1.08 -2.412 2.412 v 9.526 c 0 1.332 1.08 2.412 2.412 2.412 h 63.554 c 1.332 0 2.412 -1.08 2.412 -2.412 V 5.293 C 79.189 3.961 78.109 2.881 76.777 2.881 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round" />
                                <path d="M 73.153 22.119 H 16.847 c -1.332 0 -2.412 1.08 -2.412 2.412 v 63.057 c 0 1.332 1.08 2.412 2.412 2.412 h 56.306 c 1.332 0 2.412 -1.08 2.412 -2.412 V 24.531 C 75.565 23.199 74.485 22.119 73.153 22.119 z M 33.543 81.32 c 0 1.332 -1.08 2.412 -2.412 2.412 h -2.245 c -1.332 0 -2.412 -1.08 -2.412 -2.412 V 30.799 c 0 -1.332 1.08 -2.412 2.412 -2.412 h 2.245 c 1.332 0 2.412 1.08 2.412 2.412 V 81.32 z M 48.535 81.32 c 0 1.332 -1.08 2.412 -2.412 2.412 h -2.245 c -1.332 0 -2.412 -1.08 -2.412 -2.412 V 30.799 c 0 -1.332 1.08 -2.412 2.412 -2.412 h 2.245 c 1.332 0 2.412 1.08 2.412 2.412 V 81.32 z M 63.526 81.32 c 0 1.332 -1.08 2.412 -2.412 2.412 h -2.245 c -1.332 0 -2.412 -1.08 -2.412 -2.412 V 30.799 c 0 -1.332 1.08 -2.412 2.412 -2.412 h 2.245 c 1.332 0 2.412 1.08 2.412 2.412 V 81.32 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round" />
                            </g>
                        </svg>
                    </span>`;
                }
            });
        });