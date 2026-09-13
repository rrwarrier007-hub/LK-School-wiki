function doGet(e) {
  // Check if a code parameter was sent from GitHub Pages
  if (e && e.parameter && e.parameter.code) {
    var schoolCode = e.parameter.code.trim();
    
    // Replace this function call with your actual search logic
    var targetUrl = getWikiUrl(schoolCode); 
    
    var output = JSON.stringify({ url: targetUrl });
    
    return ContentService.createTextOutput(output)
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  // Default HTML output for direct Web App access
  return HtmlService.createHtmlOutputFromFile('index');
}

// Ensure your existing search function returns the URL string or null
function getWikiUrl(code) {
  // Your Google Sheet lookup logic here
  // e.g., return "https://schoolwiki.in/..."
}
