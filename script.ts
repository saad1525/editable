document.addEventListener('DOMContentLoaded', () => {
    // Make contenteditable sections work immediately
    const editableElements = document.querySelectorAll('.editable');

    // TypeScript needs to know that these elements are HTMLElements, not just Elements
    editableElements.forEach((element: Element) => {
        const editableElement = element as HTMLElement;  // Casting to HTMLElement

        editableElement.addEventListener('input', (event) => {
            const target = event.target as HTMLElement;
            // You can log or store changes here if needed (e.g., save to a database or file)
            console.log(`${target.tagName}: ${target.innerText}`);
        });
    });
});
