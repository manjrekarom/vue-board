import {DataFetcher, Datasource, Format, Type} from '../../../../../src/services/Data';
import { isSubset } from 'lodash';

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

test('Datafetcher instantiation', () => {
    let df = new DataFetcher(ds);
    expect(df.datasource).toEqual(ds);
    // console.log(df.httpRequest.defaults);
    expect(() => {
        return isSubset(df.httpRequest.defaults, df.datasource.options);
    }).toBeTruthy();
});
