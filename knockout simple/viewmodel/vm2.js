// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.adi= "Ertu�rul";
    this.soyadi= "Ta�";
    this.adi= ko.observable("Ertu�rul");
    this.soyadi= ko.observable("Ta�");
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());