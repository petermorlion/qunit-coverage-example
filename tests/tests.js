QUnit.test('Set title for John, Faiza and Stan', function(assert) {
    setTitle(['John', 'Faiza', 'Stan']);
    var title = document.getElementById('pageTitle').innerText;
    assert.equal(title, 'John, Faiza and Stan');
});

QUnit.test('Set title for John and Faiza', function(assert) {
    setTitle(['John', 'Faiza']);
    var title = document.getElementById('pageTitle').innerText;
    assert.equal(title, 'John and Faiza');
});

QUnit.test('Set title for John', function(assert) {
    setTitle(['John']);
    var title = document.getElementById('pageTitle').innerText;
    assert.equal(title, 'John');
});
