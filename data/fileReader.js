// Script to extract metadata from photos in "public/photos"
// Launch from terminal


const fs = require("fs");
const exif = require("exif").ExifImage;
const moment = require("moment");

console.log("Before importing photoArray");
let photoArray = require("./photoArray");
console.log("After importing photoArray");

const photosDirectory = "../../public/photos";

// Function to extract metadata from a file
const extractMetadata = (filePath) => {
  return new Promise((resolve, reject) => {
    try {
      new exif({ image: filePath }, (error, exifData) => {
        if (error) {
          console.error(`Error extracting metadata for ${filePath}:`, error);
          reject(error);
        } else {
          resolve(exifData);
        }
      });
    } catch (exifError) {
      console.error("Error creating exif instance:", exifError);
      reject(exifError);
    }
  });
};

// Function to read files and extract metadata
const processFiles = async () => {
  const newData = [];

  try {
    const files = await fs.promises.readdir(photosDirectory);

    for (const file of files) {
      // console.log('Processing file:', file);
      const filePath = `${photosDirectory}/${file}`;

      // Check if the file is not a system file (e.g., .DS_Store) and is a JPEG
      if (!file.startsWith(".") && file.toLowerCase().endsWith(".jpg")) {
        const exifData = await extractMetadata(filePath);

        // Extract relevant metadata
        const DateTime = exifData.exif || {};
        const gps = exifData.gps || {};
        // console.log('Full Exif data for', file, ':', exifData); // Add this line for debugging

        if (DateTime && "DateTimeOriginal" in DateTime) {
          const { DateTimeOriginal } = DateTime;

          // Convert date using moment.js
          const formattedDate = moment(
            DateTimeOriginal,
            "YYYY:MM:DD HH:mm:ss"
          ).format("DD.MM.YYYY");
          // console.log('Formatted date:', formattedDate);

          // Check if GPS data is available
          if (gps && "GPSLatitude" in gps && "GPSLongitude" in gps) {
            const {
              GPSLatitudeRef,
              GPSLatitude,
              GPSLongitudeRef,
              GPSLongitude,
            } = gps;

            // Check if GPSLatitude and GPSLongitude values are set
            if (
              GPSLatitudeRef &&
              GPSLatitude.length === 3 &&
              GPSLongitudeRef &&
              GPSLongitude.length === 3
            ) {
              const lat =
                GPSLatitudeRef === "N"
                  ? GPSLatitude[0] + GPSLatitude[1] / 60 + GPSLatitude[2] / 3600
                  : -(
                      GPSLatitude[0] +
                      GPSLatitude[1] / 60 +
                      GPSLatitude[2] / 3600
                    );
              const lng =
                GPSLongitudeRef === "E"
                  ? GPSLongitude[0] +
                    GPSLongitude[1] / 60 +
                    GPSLongitude[2] / 3600
                  : -(
                      GPSLongitude[0] +
                      GPSLongitude[1] / 60 +
                      GPSLongitude[2] / 3600
                    );

              // Add the new metadata to the new data
              newData.push({
                lat,
                lng,
                src: `/photos/${file}`,
                date: formattedDate,
              });
            } else {
              console.warn(
                `Missing or invalid GPS data for ${filePath}. GPSLatitudeRef: ${GPSLatitudeRef}, GPSLatitude: ${GPSLatitude}, GPSLongitudeRef: ${GPSLongitudeRef}, GPSLongitude: ${GPSLongitude}`
              );
            }
          } else {
            console.warn(`Missing GPS data for ${filePath}.`);
          }
        }
      }
    }

    console.log("New data:", newData); // Add this line for debugging
    console.log("Updated photoArray:", photoArray);
  } catch (err) {
    console.error("Error processing files:", err);
  }
};

// Call main function
processFiles();
