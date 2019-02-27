import {
  HANDLE_SIDEBAR_DRAG,
  SET_DOCUMENT,
  TOGGLE_SETTINGS,
  TOGGLE_SIDEBAR,
  INCREASE_FONT_SIZE,
  DECREASE_FONT_SIZE,
  SET_SELECTED_FONT,
  SET_SELECTED_BACKGROUND,
  INCREASE_LINE_HEIGHT,
  DECREASE_LINE_HEIGHT,
  SET_SELECTED_ALIGN
} from "./actions";

const initialState = {
  document: null,
  fontSize: 18,
  initialSidebarX: null,
  selectedFont: "bookerly",
  selectedBackground: "White",
  lineHeight: 1.5,
  selectedAlign: "justify",
  showMenu: false,
  showRead: false,
  showSearch: false,
  showSettings: false,
  showSidebar: false,
  sidebarX: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_SIDEBAR_DRAG: {
      let initialSidebarX = state.initialSidebarX;
      let sidebarX = state.sidebarX;
      let showSidebar = state.showSidebar;

      if (state.initialSidebarX === null) {
        initialSidebarX = payload.sidebarX;
      }
      
      if (payload.isRelease) {
        if (payload.sidebarX - initialSidebarX < 0) {
          showSidebar = false;
        } else if (
          payload.isOverlay &&
          payload.sidebarX - initialSidebarX <= 0
        ) {
          showSidebar = false;
        }

        initialSidebarX = null;
      }

      if (initialSidebarX) {
        sidebarX =
          payload.sidebarX - initialSidebarX < 0
            ? payload.sidebarX - initialSidebarX
            : 0;
      }

      return {
        ...state,
        initialSidebarX,
        sidebarX,
        showSidebar
      };
    }
    case SET_DOCUMENT:
      return {
        ...state,
        document: payload.document,
        showSidebar: false
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        showSettings: payload.showSettings
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: payload.showSidebar
      };
    case INCREASE_FONT_SIZE:
      return {
        ...state,
        fontSize: state.fontSize + 1
      };
    case DECREASE_FONT_SIZE:
      return {
        ...state,
        fontSize: state.fontSize - 1 >= 1 ? state.fontSize - 1 : 1
      };
    case SET_SELECTED_FONT:
      return {
        ...state,
        selectedFont: payload.selectedFont
      };
    case SET_SELECTED_BACKGROUND:
      return {
        ...state,
        selectedBackground: payload.selectedBackground
      };
    case INCREASE_LINE_HEIGHT:
      return {
        ...state,
        lineHeight: state.lineHeight + 0.1
      };
    case DECREASE_LINE_HEIGHT:
      return {
        ...state,
        lineHeight: state.lineHeight - 0.1 >= 1 ? state.lineHeight - 0.1 : 1
      };
    case SET_SELECTED_ALIGN:
      return {
        ...state,
        selectedAlign: payload.selectedAlign
      };
    default:
      return state;
  }
};
