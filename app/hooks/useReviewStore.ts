
import { create } from 'zustand';
import { Testimonial } from '@/app/types/testimonial'; 

interface ReviewStoreState {
  reviews: Testimonial[];
  loading: boolean;
  error: string | null;
  fetchReviews: () => Promise<void>;
}

const useReviewStore = create<ReviewStoreState>((set) => ({
  reviews: [],
  loading: true,
  error: null,
  fetchReviews: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('/api/reviews'); // Your API endpoint for fetching reviews
      if (!res.ok) throw new Error(`Failed to fetch reviews: ${res.statusText}`);
      const data = await res.json();
      set({ reviews: data, loading: false });
    } catch (err) {
      set({ error: err instanceof Error ? err.message : 'An unknown error occurred', loading: false, reviews: [] });
      console.error("Error fetching reviews:", err);
    }
  },
}));

export default useReviewStore;