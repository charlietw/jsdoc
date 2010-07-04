(function() {
	var jsdoc,
		doclets;
	
	JSpec.describe('@member', function() {
	
		before(function() {
			// docsets can only be created by parsers
			jsdoc = {
				tag: require('jsdoc/tag'),
				parser: require('jsdoc/parser')
			};
			jsdoc.parser.parseFiles(BASEDIR + 'test/tests/14_tag_member.js');
			doclets = jsdoc.parser.result.map(function($){ return $.toObject(); });
			
		});
		
		describe('A doclet with a method tag and a memberof tag', function() {
			it('should have an `isa` property set to "method"', function() {
				var doclet = doclets[2];
				expect(doclet).to(have_property, 'isa');
				expect(doclet.isa).to(eql, 'method');
			});
			
			it('should have a `name` property set to the given name"', function() {
				var doclet = doclets[2];
				expect(doclet).to(have_property, 'name');
				expect(doclet.name).to(eql, 'fah');
			});
			
			it('should have a `memberof` property set to the given member name', function() {
				var doclet = doclets[2];
				expect(doclet).to(have_property, 'memberof');
				expect(doclet.memberof).to(eql, 'foo#');
			});
			
			it('should have a `path` property set to the parent+member names', function() {
				var doclet = doclets[2];
				expect(doclet).to(have_property, 'path');
				expect(doclet.path).to(eql, 'foo#fah');
			});
		});
		
		describe('A doclet with a property tag and a member tag', function() {
			it('should have an `isa` property set to "property"', function() {
				var doclet = doclets[3];
				expect(doclet).to(have_property, 'isa');
				expect(doclet.isa).to(eql, 'property');
			});
			
			it('should have a `name` property set to the given name"', function() {
				var doclet = doclets[3];
				expect(doclet).to(have_property, 'name');
				expect(doclet.name).to(eql, 'bah');
			});
			
			it('should have a `memberof` property set to the given member name', function() {
				var doclet = doclets[3];
				expect(doclet).to(have_property, 'memberof');
				expect(doclet.memberof).to(eql, 'bar');
			});
			
			it('should have a `path` property set to the parent+member names', function() {
				var doclet = doclets[3];
				expect(doclet).to(have_property, 'path');
				expect(doclet.path).to(eql, 'bar.bah');
			});
		});
		
	});
})();

(function testarea() {

	/** @namespace foo */
	
	/** @constructor bar */
	
	/**
		@method fah
		@memberof foo#
	 */
	
	/**
		@property bah
		@member bar
	 */
	
})();