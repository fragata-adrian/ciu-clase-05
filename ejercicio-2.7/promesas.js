function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}

async function getProcessedData(url) {
  try {
    const download = await downloadData(url).catch(await downloadFallbackData(url));
    const processData = await processDataInWorker(download);
    return processData;
  } catch(e) {
    console.error(e.message);
  }
}
  