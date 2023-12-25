export function youtube_parser(url) {
  // Remove everything starting from ?si= in the URL
  url = url.replace(/\?si=.*/, '');

  // Check if it's a YouTube Music URL and extract the video ID
  var musicUrlRegExp = /^.*((music\.youtube\.com\/)|(youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var musicMatch = url.match(musicUrlRegExp);

  // If it's a YouTube Music URL, return the video ID
  if (musicMatch && musicMatch[8]?.length === 11) {
    return musicMatch[8];
  }

  // Use the existing regular expression to extract the video ID for standard YouTube URLs
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);

  return (match && match[7]?.length === 11) ? match[7] : false;
}
