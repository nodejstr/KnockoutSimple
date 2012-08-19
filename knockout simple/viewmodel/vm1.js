// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.adi= "Ertuðrul";
    this.soyadi= "Taþ";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());