var searchText = "Search";
function clearSearchInput(input) {
    if (input.value === searchText) {
        input.value = "";
       

    }

}
function resetSearchInput(input) {
    if (input.value === "") {
        input.value = searchText;
    }
}
