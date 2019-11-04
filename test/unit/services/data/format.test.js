import {Format} from '../../../../src/services/Data';

test('Validating static getters from Format class', () => {
    expect(Format.FORMATS).toBeInstanceOf(Array);
    expect(Format.CSV).toBe('CSV');
    expect(Format.JSON).toBe('JSON');
    expect(Format.YAML).toBe('YAML');
    expect(Format.XML).toBe('XML');
});
