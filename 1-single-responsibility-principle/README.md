# Single Responsibility Principle

The application reads a textual file from a specified location and converts the text into HTML by wrapping each paragraph in P tags. The output is then written into a new HTML file.

Single responsibility principle is adhered to by having file processing and text processing logic performed by separate classes. FileProcessor is responsible for reading files and creating new files. TextProcessor is responsible for processing text.