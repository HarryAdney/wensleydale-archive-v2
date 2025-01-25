import fs from 'fs';
import path from 'path';

const locations = `Appersett
Askrigg
Aysgarth
Bainbridge
Bellerby
Breconbar
Burtersett
Caldbergh
Carlton
Carperby
Castle Bolton
Countersett
East Witton
Finghall
Gayle
Hardraw
Harmby
Hawes
Horsehouse
Leyburn
Marsett
Melmerby
Middleham
Newbiggin
Newton-le-Willows
Preston under Scar
Redmire
Sedbusk
Simonstone
Spennithorne
Stalling Busk
Swinithwaite
Thoralby
Thornton Rust
Thornton Steward
Wensley
West Burton
West Scrafton
West Witton
Woodhall
Worton`.split('\n');

const contentDir = path.join(process.cwd(), 'src', 'content', 'locations');

// Create the locations directory if it doesn't exist
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// Create a JSON file for each location
locations.forEach(location => {
  const fileName = location.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') + '.json';
  const filePath = path.join(contentDir, fileName);
  
  const content = {
    title: location,
    description: '',
    images: []
  };

  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
});

console.log('Location files created successfully!');