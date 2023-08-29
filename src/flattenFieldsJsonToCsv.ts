import json2csv from 'json2csv';

// Sample JSON data with nested objects and arrays
const jsonData = [
  {
    name: 'John',
    age: 30,
    test: { detail: { abc: 12 } },
    test1: { detail: { abc1: 2 } },
    enternal: [{ key: 'test', value: 0 }, { key: 'test1', value: 1 }],
    addresses: [
      { city: 'New York', zip: '10001' },
      { city: 'Los Angeles', zip: '90001' },
    ],
  },
  {
    name: 'Jane',
    age: 25,
    test: { detail: { abc: 2 } },
    test1: { detail: { abc1: 2 } },
    enternal: [{ key: 'test', value: 0 }, { key: 'test1', value: 1 }],
    addresses: [{ city: 'San Francisco', zip: '94105' }],
  },
];

// Function to flatten nested fields with a custom delimiter
function flattenFields(data: any, parentKey = '', delimiter = '/'): Record<string, any> {
  let flatData: Record<string, any> = {};
  for (const key in data) {
    const fieldKey = parentKey ? `${parentKey}${delimiter}${key}` : key;
    if (Array.isArray(data[key])) {
      data[key].forEach((item: any, index: number) => {
        flatData = { ...flatData, ...flattenFields(item, `${fieldKey}${index}`) };
      });
    } else if (typeof data[key] === 'object' && data[key] !== null) {
      if (data[key].detail) {
        flatData[`${fieldKey}${delimiter}name`] = Object.keys(data[key].detail)[0];
        flatData[`${fieldKey}${delimiter}value`] = data[key].detail[Object.keys(data[key].detail)[0]];
      } else {
        flatData = { ...flatData, ...flattenFields(data[key], fieldKey) };
      }
    } else {
      flatData[fieldKey] = data[key];
    }
  }
  return flatData;
}

// Convert JSON to flat CSV
async function convertToCsv(): Promise<void> {
  try {
    const flatCSVData = jsonData.map((item) => flattenFields(item));
    const flatFields = Object.keys(flatCSVData[0]);

    const csv = json2csv.parse(flatCSVData, { fields: flatFields });

    console.log(csv)
    console.log('CSV file created successfully');
  } catch (error) {
    console.error('Error converting JSON to CSV:', error);
  }
}

// Run the CSV conversion function
convertToCsv();
