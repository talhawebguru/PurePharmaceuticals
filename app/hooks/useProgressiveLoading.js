import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for progressive loading with skeleton states
 * @param {Function} fetchFunction - Function to fetch data
 * @param {Array} dependencies - Dependencies to trigger refetch
 * @param {Object} options - Configuration options
 */
export const useProgressiveLoading = (
  fetchFunction,
  dependencies = [],
  options = {}
) => {
  const {
    initialLoading = true,
    minimumDelay = 300, // Minimum loading time for better UX
    retryAttempts = 3,
    retryDelay = 1000
  } = options;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = useCallback(async () => {
    if (!fetchFunction) return;

    setLoading(true);
    setError(null);
    const startTime = Date.now();

    try {
      const result = await fetchFunction();
      
      // Ensure minimum loading time for smooth UX
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumDelay - elapsedTime);
      
      setTimeout(() => {
        setData(result);
        setLoading(false);
        setRetryCount(0);
      }, remainingTime);

    } catch (err) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumDelay - elapsedTime);
      
      setTimeout(() => {
        if (retryCount < retryAttempts) {
          setRetryCount(prev => prev + 1);
          setTimeout(() => fetchData(), retryDelay);
        } else {
          setError(err);
          setLoading(false);
        }
      }, remainingTime);
    }
  }, [fetchFunction, minimumDelay, retryAttempts, retryDelay, retryCount]);

  useEffect(() => {
    fetchData();
  }, dependencies);

  const refetch = useCallback(() => {
    setRetryCount(0);
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch,
    retryCount
  };
};

/**
 * Hook for paginated progressive loading
 * @param {Function} fetchFunction - Function to fetch paginated data
 * @param {Object} options - Configuration options
 */
export const usePaginatedLoading = (fetchFunction, options = {}) => {
  const {
    pageSize = 20,
    initialPage = 1,
    minimumDelay = 300
  } = options;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  const loadPage = useCallback(async (page, isLoadMore = false) => {
    if (!fetchFunction) return;

    if (isLoadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }
    
    setError(null);
    const startTime = Date.now();

    try {
      const result = await fetchFunction({ page, pageSize });
      
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumDelay - elapsedTime);
      
      setTimeout(() => {
        if (isLoadMore) {
          setData(prevData => [...prevData, ...result.data]);
          setLoadingMore(false);
        } else {
          setData(result.data);
          setLoading(false);
        }
        
        setHasMore(result.data.length === pageSize);
        setCurrentPage(page);
      }, remainingTime);

    } catch (err) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumDelay - elapsedTime);
      
      setTimeout(() => {
        setError(err);
        if (isLoadMore) {
          setLoadingMore(false);
        } else {
          setLoading(false);
        }
      }, remainingTime);
    }
  }, [fetchFunction, pageSize, minimumDelay]);

  const loadMore = useCallback(() => {
    if (!loadingMore && !loading && hasMore) {
      loadPage(currentPage + 1, true);
    }
  }, [loadPage, currentPage, loadingMore, loading, hasMore]);

  const refresh = useCallback(() => {
    setCurrentPage(initialPage);
    setHasMore(true);
    loadPage(initialPage, false);
  }, [loadPage, initialPage]);

  useEffect(() => {
    loadPage(initialPage, false);
  }, []);

  return {
    data,
    loading,
    loadingMore,
    error,
    hasMore,
    loadMore,
    refresh,
    currentPage
  };
};

/**
 * Hook for handling form submission with loading states
 * @param {Function} submitFunction - Function to submit form data
 * @param {Object} options - Configuration options
 */
export const useFormSubmission = (submitFunction, options = {}) => {
  const {
    onSuccess,
    onError,
    minimumDelay = 500 // Minimum time to show loading for better UX
  } = options;

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submit = useCallback(async (formData) => {
    if (!submitFunction || submitting) return;

    setSubmitting(true);
    setSuccess(false);
    setError(null);
    const startTime = Date.now();

    try {
      const result = await submitFunction(formData);
      
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumDelay - elapsedTime);
      
      setTimeout(() => {
        setSubmitting(false);
        setSuccess(true);
        if (onSuccess) onSuccess(result);
      }, remainingTime);

    } catch (err) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumDelay - elapsedTime);
      
      setTimeout(() => {
        setSubmitting(false);
        setError(err);
        if (onError) onError(err);
      }, remainingTime);
    }
  }, [submitFunction, submitting, minimumDelay, onSuccess, onError]);

  const reset = useCallback(() => {
    setSuccess(false);
    setError(null);
  }, []);

  return {
    submit,
    submitting,
    success,
    error,
    reset
  };
};

/**
 * Hook for intersection observer-based progressive loading
 * @param {Object} options - Intersection observer options
 */
export const useIntersectionLoading = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '100px',
    triggerOnce = true
  } = options;

  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (!hasTriggered) {
            setHasTriggered(true);
          }
          if (triggerOnce) {
            observer.unobserve(ref);
          }
        } else {
          if (!triggerOnce) {
            setIsIntersecting(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, triggerOnce, hasTriggered]);

  return {
    ref: setRef,
    isIntersecting,
    hasTriggered
  };
};
