
describe('Simple Test', function () {

    it('True to be true', function(){
        expect(true).toBe(true);
        expect(true).toBeTruthy();
    });

    it('False to be false', function(){
        expect(false).toBe(false);
        expect(false).toBeFalsy();
    });

});
