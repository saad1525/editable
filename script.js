document.addEventListener('DOMContentLoaded', function () {
    // Make contenteditable sections work immediately
    var editableElements = document.querySelectorAll('.editable');
    // TypeScript needs to know that these elements are HTMLElements, not just Elements
    editableElements.forEach(function (element) {
        var editableElement = element; // Casting to HTMLElement
        editableElement.addEventListener('input', function (event) {
            var target = event.target;
            // You can log or store changes here if needed (e.g., save to a database or file)
            console.log("".concat(target.tagName, ": ").concat(target.innerText));
        });
    });
});
