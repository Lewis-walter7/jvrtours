'use client'
import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import Modal from './Modal';
import useReviewModal from '@/app/hooks/useReviewModal';
import toast from 'react-hot-toast';

interface ReviewFormData {
  reviewText: string;
  name: string;
  rating: number;
  country: string;
}

const ReviewModal: React.FC = () => {
  const reviewModal = useReviewModal();
  const [formData, setFormData] = useState<ReviewFormData>({
    reviewText: '',
    name: '',
    rating: 1,
    country: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/reviews', formData);

      toast.success('Review submitted!');
      setFormData({
        reviewText: '',
        name: '',
        rating: 1,
        country: '',
      });

      reviewModal.onClose(); 
    } catch (err) {
      toast.error('Failed to submit review.');
      console.error(err);
    }

    setLoading(false);
  };

  const body = (
    <div className="mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="reviewText" className="block text-gray-700 font-medium mb-2">
            Review
          </label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={formData.reviewText}
            onChange={handleInputChange}
            placeholder="Share your experience..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>

        <div className="mb-1">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Eg John May, UK"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-1">
          <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Star{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-1">
          <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleInputChange}
            placeholder="Eg Asian Tourist"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-all"
        >
          {loading ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );

  return (
    <Modal
      isOpen={reviewModal.isOpen}
      onClose={reviewModal.onClose}
      body={body}
      title="Add Your Review"
    />
  );
};

export default ReviewModal;
