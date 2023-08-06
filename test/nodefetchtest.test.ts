import { jest } from "@jest/globals";
import { add } from "../dist/esModule";

describe("utils", () => {
  // Clear the mock cache before each test case
  beforeEach(() => {
    jest.resetModules();
  });

  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("subtract", async () => {
    // Mock the subtract function from utils module
    jest.unstable_mockModule("../dist/esModule", () => ({
      subtract: jest.fn().mockReturnValue(0).mockReturnValueOnce(-1),
    }));

    // Load the mocked module dynamically
    const { subtract } = await import("../dist/esModule");
    expect(subtract(1, 2)).toBe(-1); // First mock value
    expect(subtract(3, 4)).toBe(0); // Second mock value
    expect(subtract).toHaveBeenCalledTimes(2); // Check mock calls
  });
  test("testing", async () => {
    // Mock the subtract function from utils module
    jest.unstable_mockModule("../dist/nodefetchtest", () => ({
      getResponse: jest.fn(() => {
        return { result: "success" };
      }),
    }));
    const { getResponse } = await import("../dist/nodefetchtest");
    let data = await getResponse();
    console.log("DATA::::", data);
    expect(data);
  });
});

// jest.mock('../dist/esModule', () => ({
//   __esModule: true,
//   default: 'mockedDefaultExport',
//   namedExport: jest.fn(),
// }));
// import { jest } from '@jest/globals'
// import defaultExport, { namedExport } from '../dist/esModule';

//   it('calls the dependency with double the input', () => {
//     //myModule(2);
//     console.log(defaultExport); // 'mockedDefaultExport'
//     console.log(namedExport); // mock function
//     expect(defaultExport);
//     //console.log(myModule(2)) // 40
//   });

// jest.unstable_mockModule('../src/index', () => ({
//   getResponse: 'sdfdfsd'
// }));
// import { describe, expect, it, jest } from '@jest/globals';
// import  getResponse from '../src/index';

// describe('myModule', () => {
//   it('calls the dependency with double the input', async () => {
//     const data = await getResponse()
//     console.log('DATA:::'+data)
//     expect(data)
//   });
// });

// jest.mock('../src/index');
// import getResponse from '../src/index';
// import { jest } from '@jest/globals'

// describe('myModule', () => {
//   it('calls the dependency with double the input', () => {
//     //myModule(2);

//     expect(getResponse).toHaveBeenCalledWith(4);
//     //console.log(myModule(2)) // 40
//   });
// });
// test('createUser calls fetch with the right args and returns the user id', async () => {
//  // mockfetch.mockReturnValue(Promise.resolve(new Response('4')));
//  getResponse.mockImplementation(async () =>  {
//   return {}
//  });

//   const userId = await getResponse();

//   // expect(fetch).toHaveBeenCalledTimes(1);
//   // expect(fetch).toHaveBeenCalledWith('https://website.com/users', {
//   //   method: 'POST',
//   // });
//   expect(userId).toBe(true);
// });

// import fetchMock from 'fetch-mock';

// // Set up the mock
// //fetchMock.enable();
// fetchMock.mock('https://myapi.com/test', {
//   status: 200,
//   body: {
//     data: 'This is the mocked response',
//   },
// });

// // Make a request to the mocked API
// const response = await fetch('https://myapi.com/test');

// // Assert that the response is as expected
// expect(response.status).toBe(200);
// expect(response.body).toEqual({
//   data: 'This is the mocked response',
// });

// Tear down the mock
//fetchMock.disable();

// import fetch, { Response } from 'node-fetch';
// import { jest } from '@jest/globals'
// import { getResponse } from '../src/index';
// import * as config from 'node-fetch';

// // jest.mock('node-fetch', () =>({
// //   __esModule: true,
// //   default: null
// // }));
// const fetchmock = config.default as jest.Mock;

// // jest.mock('../src/index.js', () => ({
// //   __esModule: true, // this property makes it work
// //   getResponse: jest.fn(),
// //   //getResponse:  ()=> 'mockedDefaultExport'//jest.fn(),
// // }));
// // jest.mock('../src/index.js', () => ({
// //   __esModule: true, // this property makes it work
// //   getResponse: jest.fn(),
// //   //getResponse:  ()=> 'mockedDefaultExport'//jest.fn(),
// // }));
// // jest.mock('../src/index', () => ({
// //   __esModule: true, // this property makes it work
// //   default: 'mockedDefaultExport',
// //   getResponse:  ()=> 'mockedDefaultExport'//jest.fn(),
// // }));

// describe('getPeople test', () => {
//   test('getPeople should fetch a person', async () => {
//     // getPeople uses the mock implementation for fetch:
//      //const expectedResponse = { test: 'TEST' };
//      //const response: Object = expectedResponse;
//     // (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(response);
//     //(getResponse as jest.MockedFunction<typeof getResponse>).mockReturnValue(response);
//     fetchmock.mockReturnValue({ test: 'TEST' });
//     const person = await getResponse();
//     console.log("person::"+person)
//     expect(person)
//   });
// });
