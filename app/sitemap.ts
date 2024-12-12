export default function sitemap() {
  const baseUrl = "https://www.webcreatis.re";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString(),
      changeFrequency:'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date().toISOString(),
      changeFrequency:'yearly',
      priority: 0.8,
    },
  ];
}
