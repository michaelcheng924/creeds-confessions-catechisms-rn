export const HANDLE_SIDEBAR_DRAG = "HANDLE_SIDEBAR_DRAG";
export const SET_DOCUMENT = "SET_DOCUMENT";
export const TOGGLE_SETTINGS = "TOGGLE_SETTINGS";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const INCREASE_FONT_SIZE = "INCREASE_FONT_SIZE";
export const DECREASE_FONT_SIZE = "DECREASE_FONT_SIZE";
export const SET_SELECTED_FONT = "SET_SELECTED_FONT";
export const SET_SELECTED_BACKGROUND = "SET_SELECTED_BACKGROUND";
export const INCREASE_LINE_HEIGHT = "INCREASE_LINE_HEIGHT";
export const DECREASE_LINE_HEIGHT = "DECREASE_LINE_HEIGHT";
export const SET_SELECTED_ALIGN = "SET_SELECTED_ALIGN";

export function setDocument(document) {
  return {
    type: SET_DOCUMENT,
    payload: {
      document
    }
  };
}

export function toggleSettings(showSettings) {
  return {
    type: TOGGLE_SETTINGS,
    payload: {
      showSettings
    }
  };
}

export function toggleSidebar(showSidebar) {
  return {
    type: TOGGLE_SIDEBAR,
    payload: {
      showSidebar
    }
  };
}

export function handleSidebarDrag(sidebarX, isRelease, isOverlay) {
  return {
    type: HANDLE_SIDEBAR_DRAG,
    payload: {
      sidebarX,
      isRelease,
      isOverlay
    }
  };
}

export function increaseFontSize() {
  return {
    type: INCREASE_FONT_SIZE
  };
}

export function decreaseFontSize() {
  return {
    type: DECREASE_FONT_SIZE
  };
}

export function setSelectedFont(selectedFont) {
  return {
    type: SET_SELECTED_FONT,
    payload: {
      selectedFont
    }
  };
}

export function setSelectedBackground(selectedBackground) {
  return {
    type: SET_SELECTED_BACKGROUND,
    payload: {
      selectedBackground
    }
  };
}

export function increaseLineHeight() {
  return {
    type: INCREASE_LINE_HEIGHT
  };
}

export function decreaseLineHeight() {
  return {
    type: DECREASE_LINE_HEIGHT
  };
}

export function setSelectedAlign(selectedAlign) {
  return {
    type: SET_SELECTED_ALIGN,
    payload: {
      selectedAlign
    }
  };
}
