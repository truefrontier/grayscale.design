// The alert text for a failed palette upload. A 422 carries Laravel's validation
// message (wrong type, too big); anything else gets the site's usual message
// rather than axios's "Request failed with status code …".
export function uploadErrorMessage(error) {
  if (typeof error === 'string') return error;
  const errors = (error?.response?.status === 422 && error.response.data?.errors) || {};
  const [messages] = Object.values(errors);
  return (messages && messages[0]) || 'Sorry! Please try again.';
}
