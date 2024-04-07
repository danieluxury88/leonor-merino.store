function getTranscription() {
    // Get all transcript segments
    const transcriptSegments = document.querySelectorAll('ytd-transcript-segment-list-renderer');

    // Initialize an empty array to hold the transcript
    let transcript = [];

    // Loop through each transcript segment
    transcriptSegments.forEach(segment => {
      // Get the text content of the segment
      let text = segment.textContent;

      // Add the text to the transcript array
      transcript.push(text);
    });

    // Join the transcript array into a single string with line breaks between segments
    transcript = transcript.join('\n');

    // Return the transcript
    return transcript;
  }



const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromURL("../youtube.html").then(dom => {
  // Now you can use dom.window.document as your document object
  const document = dom.window.document;



  let transcript = getTranscription();
  console.log(transcript);
});