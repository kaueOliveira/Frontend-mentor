
  const formElements = [
    document.getElementById("input-first-name"),
    document.getElementById("input-last-name"),
    document.getElementById("input-email"),
    document.getElementById("query-general"),
    document.getElementById("query-support"),
    document.getElementById("message-area"),
    document.getElementById("consent"),
    document.getElementById("button")
  ];

  formElements.forEach((element, index) => {
    element.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = (index + 1) % formElements.length;
        formElements[nextIndex].focus();
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        const prevIndex = (index - 1 + formElements.length) % formElements.length;
        formElements[prevIndex].focus();
      }

      if (event.key === "Enter" && element.tagName !== "TEXTAREA" && element.type !== "checkbox") {
        event.preventDefault();
        const nextIndex = (index + 1) % formElements.length;
        formElements[nextIndex].focus();
      }
    });
  });
