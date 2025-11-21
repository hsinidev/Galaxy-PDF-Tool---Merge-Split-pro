
/**
 * Simulates the downloading of a file by creating a temporary link and clicking it.
 * This is a placeholder for actual client-side file generation.
 *
 * @param {string} filename - The name of the file to be "downloaded".
 * @param {string} content - The text content of the file.
 */
export const simulateDownload = (filename: string, content: string): void => {
  // Create a Blob from the content
  const blob = new Blob([content], { type: 'text/plain' });

  // Create a temporary URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a temporary anchor element
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;

  // Append to the body, click, and then remove
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Revoke the Blob URL to free up resources
  URL.revokeObjectURL(url);

  console.log(`Simulating download of ${filename}`);
};
