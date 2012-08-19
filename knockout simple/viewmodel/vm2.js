// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.adi= "Ertuðrul";
    this.soyadi= "Taþ";
    this.adi= ko.observable("Ertuðrul");
    this.soyadi= ko.observable("Taþ");
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());