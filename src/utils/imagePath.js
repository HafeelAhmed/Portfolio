// src/utils/imagePath.js

/**
 * Helper function to get correct image path for both local and GitHub Pages
 * Automatically prepends PUBLIC_URL in production
 */
export const getImagePath = (imagePath) => {
  return `${process.env.PUBLIC_URL}/${imagePath}`;
};
