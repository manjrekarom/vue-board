import {DataFetcher, Datasource, Format, Type} from '../../../../src/services/Data';

let ds = new Datasource(
    "json placeholder",
    "https://jsonplaceholder.typicode.com/posts",
    {
        format: Format.JSON,
        type: Type.ONCE
    }
);

test('Datafetcher default instantiation', async () => {
    let df = new DataFetcher(ds);
    expect(df.datasource).toEqual(ds);
    expect(df.httpClient).toEqual(df);
});
