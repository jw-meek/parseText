
// Function to parse and display the text content as a list
function disFileHtmlList(content) {
  /* Declair lines variable to store lines Using trim to remove white space from both ends of string and split 
  and endline to put content into seperate lines of text. */
  const lines = content.trim().split('\n');

  // Declare vocabularyList variable and assign its value to the unordered list element by ID from html document
  const vocabularyList = document.getElementById('glossary-list');

  // Process each line and create list items
  lines.forEach(line => {
    // Separate term and definition
    const [term, definition] = line.split(': ');

    /* I ran into problem with list displaying undifined under each list item. I did some reserching and found 
    a way to run a check if both term and definition are defined if they are it prints them if not they are skipped*/
    if (term && definition) {
      // If true create a list item with the term emphasized and definition normal text
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${term}:</strong> ${definition}`;

      // Append the list item to the unordered list
      vocabularyList.appendChild(listItem);
    } else {
      // If false skip
      console.warn(`Skip invalid line: "${line}"`);
    }
  });
}
// Load file using the fetch method then call the function with the content of text file.
fetch('list.txt')
.then(Response => Response.text())
.then(text => disFileHtmlList(text));
