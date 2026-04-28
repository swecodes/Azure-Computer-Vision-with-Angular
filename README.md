# Azure-Computer-Vision-with-Angular
This project demonstrates how to integrate Microsoft Azure Cognitive Services Computer Vision API with an Angular application for image recognition and analysis.
## Features

- Image recognition using Azure Computer Vision API
- Detect categories and objects
- Generate image descriptions
- Extract tags
- Detect colors and image type
- Face and brand detection
- Clean Angular service-based architecture
- Secure API key handling using environment files

---

## Tech Stack

- Angular
- TypeScript
- Microsoft Azure Cognitive Services
- HttpClient
- REST API

---

## How It Works

The user enters an image URL.

The Angular frontend sends the image URL to Azure Computer Vision API.

Azure processes the image and returns:

- Description
- Tags
- Categories
- Colors
- Brands
- Faces
- Image Type

The response is displayed in JSON format.

---

## API Endpoint Used

```ts
{Azure Endpoint}/vision/v3.2/analyze?visualFeatures=Categories,Description,Tags,Color,Brands,Faces,ImageType
