// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.adi= "Ertu�rul";
    this.soyadi= "Ta�";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());