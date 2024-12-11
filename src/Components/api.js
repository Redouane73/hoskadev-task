// Base URL for the API
const BASE_URL = "https://test-api.mapiner.tech";


/**
 * Fetches the list of courses.
 * @param {AbortSignal} signal - Optional signal to abort the request.
 * @returns {Promise<Array>} List of courses.
 */
export const fetchCourses = async (signal) => {
    const response = await fetch(`${BASE_URL}/api/courses`, { signal });
    const data = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to fetch courses.");
    }
    return data.courses;
  };


  /**
 * Fetches details of a single course by ID.
 * @param {number} courseId - The ID of the course to fetch.
 * @param {AbortSignal} signal - Optional signal to abort the request.
 * @returns {Promise<Object>} Course details.
 */
export const fetchCourseDetails = async (courseId, signal) => {
    const response = await fetch(`${BASE_URL}/api/course/${courseId}`, { signal });
    const data = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to fetch course details.");
    }
    return data.course;
  };