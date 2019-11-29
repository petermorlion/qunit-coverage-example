// You could perform an AJAX call to get 
// the data here
var data = ["John", "Faiza", "Stan"];
setTitle(data);

function setTitle(names) {
    var title = '';
    if (names.length === 1) {
        title = names[0];
    } else if (names.length > 1) {
        var last = names.pop();
        var title = `${names.join(", ")} and ${last}`;
    }
    
    document.getElementById('pageTitle').innerText = title;
}
