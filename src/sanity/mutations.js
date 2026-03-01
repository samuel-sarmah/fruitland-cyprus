/**
 * Sanity CMS Mutations Utility
 * 
 * This file provides helper functions for Create, Read, Update, and Delete operations
 * with the Sanity API. Always ensure you have SANITY_API_WRITE_TOKEN set for mutations.
 * 
 * Usage:
 * - Import: import { createProduct, updateProduct, deleteProduct } from '@/sanity/mutations';
 * - Call: const result = await createProduct({ name: 'My Product' });
 */

import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion } from './env';

// Create a client with write permissions (requires SANITY_API_WRITE_TOKEN)
const writableClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false, // Mutations cannot use CDN
});

// ==================== HELPER FUNCTIONS ====================

/**
 * Validates that write client is properly configured
 */
function validateWriteClient() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    throw new Error(
      'SANITY_API_WRITE_TOKEN is not set. Please add it to .env.local'
    );
  }
  if (!projectId) {
    throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is not set');
  }
  return true;
}

/**
 * Creates a reference-type object for linking documents
 * Usage: createRef('DOCUMENT_ID')
 */
function createRef(docId) {
  return {
    _type: 'reference',
    _ref: docId,
  };
}

// ==================== PRODUCT MUTATIONS ====================

/**
 * Create a new product
 * 
 * @param {Object} productData - Product information
 * @param {number} productData.productId - Unique numeric ID
 * @param {string} productData.name - Product name (required)
 * @param {string} productData.categoryId - Reference to product category (required)
 * @param {string} productData.description - Product description
 * @param {Array<string>} productData.characteristics - Array of characteristics
 * @param {string} productData.season - Season availability
 * @param {string} productData.origin - Origin/source
 * @param {Object} productData.image - Image object (optional, for advanced use)
 * @returns {Promise<Object>} Created product document
 */
export async function createProduct(productData) {
  try {
    validateWriteClient();

    const doc = {
      _type: 'productItem',
      productId: productData.productId,
      name: productData.name,
      category: createRef(productData.categoryId),
      description: productData.description || '',
      characteristics: productData.characteristics || [],
      season: productData.season || '',
      origin: productData.origin || '',
      order: productData.order || 0,
      ...(productData.image && { image: productData.image }),
    };

    const result = await writableClient.create(doc);
    return {
      success: true,
      id: result._id,
      message: `Product "${result.name}" created successfully`,
      data: result,
    };
  } catch (error) {
    console.error('Error creating product:', error);
    return {
      success: false,
      message: error.message,
      error: error,
    };
  }
}

/**
 * Update an existing product
 * 
 * @param {string} productId - Document ID of product to update
 * @param {Object} updates - Fields to update (any field from createProduct can be updated)
 * @returns {Promise<Object>} Updated product document
 */
export async function updateProduct(productId, updates) {
  try {
    validateWriteClient();

    const updateData = {};

    // Only include provided fields
    if (updates.name !== undefined) updateData.name = updates.name;
    if (updates.description !== undefined) updateData.description = updates.description;
    if (updates.characteristics !== undefined) updateData.characteristics = updates.characteristics;
    if (updates.season !== undefined) updateData.season = updates.season;
    if (updates.origin !== undefined) updateData.origin = updates.origin;
    if (updates.productId !== undefined) updateData.productId = updates.productId;
    if (updates.order !== undefined) updateData.order = updates.order;
    if (updates.categoryId !== undefined) updateData.category = createRef(updates.categoryId);
    if (updates.image !== undefined) updateData.image = updates.image;

    const result = await writableClient
      .patch(productId)
      .set(updateData)
      .commit();

    return {
      success: true,
      id: result._id,
      message: `Product "${result.name}" updated successfully`,
      data: result,
    };
  } catch (error) {
    console.error('Error updating product:', error);
    return {
      success: false,
      message: error.message,
      error: error,
    };
  }
}

/**
 * Delete a product
 * 
 * @param {string} productId - Document ID of product to delete
 * @returns {Promise<Object>} Deletion result
 */
export async function deleteProduct(productId) {
  try {
    validateWriteClient();

    const result = await writableClient.delete(productId);

    return {
      success: true,
      id: result._id,
      message: `Product deleted successfully`,
      data: result,
    };
  } catch (error) {
    console.error('Error deleting product:', error);
    return {
      success: false,
      message: error.message,
      error: error,
    };
  }
}

// ==================== PRODUCT CATEGORY MUTATIONS ====================

/**
 * Create a new product category
 * 
 * @param {Object} categoryData - Category information
 * @param {string} categoryData.key - Unique key identifier
 * @param {string} categoryData.name - Category name
 * @param {string} categoryData.description - Category description
 * @param {number} categoryData.order - Display order
 * @returns {Promise<Object>} Created category document
 */
export async function createProductCategory(categoryData) {
  try {
    validateWriteClient();

    const doc = {
      _type: 'productCategory',
      key: categoryData.key,
      name: categoryData.name,
      description: categoryData.description || '',
      order: categoryData.order || 0,
    };

    const result = await writableClient.create(doc);
    return {
      success: true,
      id: result._id,
      message: `Category "${result.name}" created successfully`,
      data: result,
    };
  } catch (error) {
    console.error('Error creating category:', error);
    return {
      success: false,
      message: error.message,
      error: error,
    };
  }
}

/**
 * Update an existing product category
 * 
 * @param {string} categoryId - Document ID of category to update
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object>} Updated category document
 */
export async function updateProductCategory(categoryId, updates) {
  try {
    validateWriteClient();

    const updateData = {};
    if (updates.key !== undefined) updateData.key = updates.key;
    if (updates.name !== undefined) updateData.name = updates.name;
    if (updates.description !== undefined) updateData.description = updates.description;
    if (updates.order !== undefined) updateData.order = updates.order;

    const result = await writableClient
      .patch(categoryId)
      .set(updateData)
      .commit();

    return {
      success: true,
      id: result._id,
      message: `Category "${result.name}" updated successfully`,
      data: result,
    };
  } catch (error) {
    console.error('Error updating category:', error);
    return {
      success: false,
      message: error.message,
      error: error,
    };
  }
}

/**
 * Delete a product category
 * 
 * @param {string} categoryId - Document ID of category to delete
 * @returns {Promise<Object>} Deletion result
 */
export async function deleteProductCategory(categoryId) {
  try {
    validateWriteClient();

    const result = await writableClient.delete(categoryId);

    return {
      success: true,
      id: result._id,
      message: `Category deleted successfully`,
      data: result,
    };
  } catch (error) {
    console.error('Error deleting category:', error);
    return {
      success: false,
      message: error.message,
      error: error,
    };
  }
}

// ==================== HERO SLIDE MUTATIONS ====================

/**
 * Create a new hero slide
 * 
 * @param {Object} slideData - Hero slide information
 * @param {string} slideData.title - Slide title
 * @param {string} slideData.subtitle - Slide subtitle
 * @param {string} slideData.ctaText - Call-to-action button text
 * @param {string} slideData.ctaLink - Call-to-action button link
 * @param {number} slideData.order - Display order
 * @param {Object} slideData.backgroundImage - Image object (optional)
 * @returns {Promise<Object>} Created slide document
 */
export async function createHeroSlide(slideData) {
  try {
    validateWriteClient();

    const doc = {
      _type: 'heroSlide',
      title: slideData.title,
      subtitle: slideData.subtitle || '',
      ctaText: slideData.ctaText || '',
      ctaLink: slideData.ctaLink || '',
      order: slideData.order || 0,
      ...(slideData.backgroundImage && { backgroundImage: slideData.backgroundImage }),
    };

    const result = await writableClient.create(doc);
    return {
      success: true,
      id: result._id,
      message: `Hero slide created successfully`,
      data: result,
    };
  } catch (error) {
    console.error('Error creating hero slide:', error);
    return {
      success: false,
      message: error.message,
      error: error,
    };
  }
}

/**
 * Update an existing hero slide
 * 
 * @param {string} slideId - Document ID of slide to update
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object>} Updated slide document
 */
export async function updateHeroSlide(slideId, updates) {
  try {
    validateWriteClient();

    const updateData = {};
    if (updates.title !== undefined) updateData.title = updates.title;
    if (updates.subtitle !== undefined) updateData.subtitle = updates.subtitle;
    if (updates.ctaText !== undefined) updateData.ctaText = updates.ctaText;
    if (updates.ctaLink !== undefined) updateData.ctaLink = updates.ctaLink;
    if (updates.order !== undefined) updateData.order = updates.order;
    if (updates.backgroundImage !== undefined) updateData.backgroundImage = updates.backgroundImage;

    const result = await writableClient
      .patch(slideId)
      .set(updateData)
      .commit();

    return {
      success: true,
      id: result._id,
      message: `Hero slide updated successfully`,
      data: result,
    };
  } catch (error) {
    console.error('Error updating hero slide:', error);
    return {
      success: false,
      message: error.message,
      error: error,
    };
  }
}

/**
 * Delete a hero slide
 * 
 * @param {string} slideId - Document ID of slide to delete
 * @returns {Promise<Object>} Deletion result
 */
export async function deleteHeroSlide(slideId) {
  try {
    validateWriteClient();

    const result = await writableClient.delete(slideId);

    return {
      success: true,
      id: result._id,
      message: `Hero slide deleted successfully`,
      data: result,
    };
  } catch (error) {
    console.error('Error deleting hero slide:', error);
    return {
      success: false,
      message: error.message,
      error: error,
    };
  }
}

// ==================== GENERIC MUTATIONS ====================

/**
 * Generic update for singleton documents (About Page, Contact Page, etc.)
 * 
 * @param {string} documentId - Document ID (usually same as document type name)
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object>} Updated document
 */
export async function updateSingletonPage(documentId, updates) {
  try {
    validateWriteClient();

    const result = await writableClient
      .patch(documentId)
      .set(updates)
      .commit();

    return {
      success: true,
      id: result._id,
      message: `Page updated successfully`,
      data: result,
    };
  } catch (error) {
    console.error('Error updating page:', error);
    return {
      success: false,
      message: error.message,
      error: error,
    };
  }
}

/**
 * Generic delete for any document
 * 
 * @param {string} documentId - Document ID to delete
 * @returns {Promise<Object>} Deletion result
 */
export async function deleteDocument(documentId) {
  try {
    validateWriteClient();

    const result = await writableClient.delete(documentId);

    return {
      success: true,
      id: result._id,
      message: `Document deleted successfully`,
      data: result,
    };
  } catch (error) {
    console.error('Error deleting document:', error);
    return {
      success: false,
      message: error.message,
      error: error,
    };
  }
}
