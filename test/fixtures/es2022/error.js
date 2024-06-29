function readFiles() {
  try {
    // ···
  } catch (error) {
    throw new Error('mock error', { cause: error });
  }
}

readFiles();
