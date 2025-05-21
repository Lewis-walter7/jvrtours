import { create } from 'zustand';
import { Place } from '../models/place';

interface PlaceState {
  selectedPlace: Place | null;
  setSelectedPlace: (place: Place) => void;
  clearSelectedPlace: () => void;
}

export const usePlaceStore = create<PlaceState>((set) => ({
  selectedPlace: null,
  setSelectedPlace: (place) => set({ selectedPlace: place }),
  clearSelectedPlace: () => set({ selectedPlace: null }),
}));
