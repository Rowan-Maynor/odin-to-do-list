export default function createNewProjectOverlay() {
    const overlayContainer = document.createElement("div");
    overlayContainer.id = "overlay-container";
    overlayContainer.classList = "flex-container";
    document.body.append(overlayContainer);
}