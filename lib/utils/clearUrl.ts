const clearUrl = (url: string): string => {
  const { origin, pathname } = new URL(url);
  return `${origin}${pathname}`;
};

export default clearUrl;
