interface CustomFile {
  file: File | null;
  fileName: string | null;
}

class CustomFile {
  constructor(file: File | null, fileName: string | null) {
    this.file = file;
    this.fileName = fileName;
  }
}
