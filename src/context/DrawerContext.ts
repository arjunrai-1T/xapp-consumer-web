import { createContext, useContext } from "react";

// Define the state type
interface DrawerState {
  isDrawerOpen: boolean;
}

// Define action types
type DrawerAction = { type: 'TOGGLE_DRAWER' };

// Initial state
export const initialState: DrawerState = { isDrawerOpen: false };

// Reducer function
export const drawerReducer = (state: DrawerState, action: DrawerAction): DrawerState => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return { isDrawerOpen: !state.isDrawerOpen };
    default:
      return state;
  }
};

// Create context
export const DrawerContext = createContext<{ state: DrawerState; dispatch: React.Dispatch<DrawerAction> } | undefined>(undefined);

// Custom hook for accessing drawer state
export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within DrawerContext.Provider');
  }
  return context;
};
