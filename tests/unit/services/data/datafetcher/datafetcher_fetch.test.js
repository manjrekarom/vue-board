import credentials from '../../../../resources/global/apikeys'
import { isSubset } from 'lodash';
import {DataFetcher, Datasource, Format, Type} from '../../../../../src/services/Data';

test('Fetching an array of json using get no auth', () => {
    let ds = new Datasource(
        "json placeholder",
        "https://jsonplaceholder.typicode.com/posts",
        {
            options: {
                method: "get",
                timeout: 2000,
                headers: {
                    "Accept": "application/json"
                }
            },
            // TODO: Possibly identify the format yourself
            // May be required if the data is coming from a file but not http request
            format: Format.JSON,
            type: Type.ONCE
        }
    );

    let df = new DataFetcher(ds);
    // expect(df.datasource).toEqual(ds);
    // console.log(df.httpRequest.defaults);
    return df.fetch().then(response => {
        // console.log(data);
        expect(response.status).toBe(200);
        // console.log(response.data);
        expect(response.data).toBeInstanceOf(Array);
        expect(response.data.length).toBe(100);
    });
});

test('Fetching github user info with Api Key', () => {
    let githubUserInfo = new Datasource(
        "Weather API",
        `https://api.github.com/user`,
        {
            options: {
                "method": "get",
                "headers": {
                    "Authorization": `token ${credentials['githubOAuthToken']}`
                }
            }
        }
    );

    let df = new DataFetcher(githubUserInfo);
    // expect(df.datasource).toEqual(ds);
    // console.log(df.httpRequest.defaults);
    return df.fetch().then(response => {
        // console.log(data);
        expect(response.status).toBe(200);
        // console.log(response.data);
        expect(response.data.login).toBeTruthy();
        expect(response.data.id).toBeTruthy();
    });
});

test('Posting to a POST endpoint', () => {
    let jsonData = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };

    let jsonPostPlaceholder = new Datasource(
        "JSON Placeholder Create POSTS API",
        "https://jsonplaceholder.typicode.com/posts",
        {
            options: {
                "method": "POST",
                "data": jsonData,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
        }
    );

    let df = new DataFetcher(jsonPostPlaceholder);
    // expect(df.datasource).toEqual(ds);
    // console.log(df.httpRequest.defaults);
    return df.fetch().then(response => {
        // console.log(data);
        expect(response.status).toBe(201);
        // console.log(response.data);
        expect(() => isSubset(response.data, jsonData)).toBeTruthy();
    });
});
