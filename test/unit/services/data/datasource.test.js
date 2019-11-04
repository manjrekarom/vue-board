import {Datasource, Type, Format, InvalidFormatException, InvalidTypeException, InvalidIsDeviceShadowException} from '../../../../src/services/Data';

test('Datasource default instantiation', () => {
    let name = "test-ds";
    let uri = "some/url/to/fetch/data";
    let ds = new Datasource(
        name,
        uri,
    );

    expect(ds.name).toBe(name);
    expect(ds.uri).toBe(uri);
    expect(ds.options).toEqual({});
    expect(ds.format).toBe(Format.JSON);
    expect(ds.type).toBe(Type.INTERVAL);
    expect(ds.isDeviceShadow).toBeTruthy();
});

test('Datasource custom instantiation', () => {
    let name = "test-ds";
    let uri = "some/url/to/fetch/data";
    let options = {"a": 1, "b": 2};
    let format = Format.YAML;
    let type = Type.INTERVAL;
    let isDeviceShadow = false;

    let ds = new Datasource(
        name,
        uri,
        {
            options,
            format: format,
            type: type,
            isDeviceShadow: isDeviceShadow
        }
    );

    expect(ds.name).toBe(name);
    expect(ds.uri).toBe(uri);
    expect(ds.options).toEqual(options);
    expect(ds.format).toBe(format);
    expect(ds.type).toBe(type);
    expect(ds.isDeviceShadow).toBeFalsy();
});

test('Invalid format exception on wrong Format', () => {
    let name = "test-ds";
    let uri = "some/url/to/fetch/data";
    let format = "def";

    expect(() => new Datasource(
        name,
        uri, 
        {
            format: format
        }
    )).toThrow(new InvalidFormatException());
});

test('Invalid type error on wrong Type', () => {
    let name = "test-ds";
    let uri = "some/url/to/fetch/data";
    let type = "5";

    expect(() => new Datasource(
        name,
        uri,
        {
            type: type
        },
    )).toThrow(new InvalidTypeException());
});

test('Boolean isDeviceShadow', () => {
    let name = "test-ds";
    let uri = "some/url/to/fetch/data";
    let type = "5";

    expect(() => new Datasource(
        name,
        uri,
        {
            isDeviceShadow: "abc"
        },
    )).toThrow(new TypeError('isDeviceShadow should be boolean'));
});
