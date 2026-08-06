// utils/eventBus.js
export const toggleClassEvent = (targetId, className) => {
  window.dispatchEvent(
    new CustomEvent("UPDATE_DOM_CLASS", {
      detail: { targetId, className },
    })
  );
};