document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


var randomWizardNames = new Array(4);
for (var i = 0; i < 4; i++) {
    if (randomIndex >= wizardNames.length / 2) {
        randomWizardNames[i] = wizardNames[randomIndex] + ' ' + wizardSurnames[Math.floor(Math.random() * wizardSurnames.length)];
    }
    else {
        randomWizardNames[i] = wizardSurnames[Math.floor(Math.random() * wizardSurnames.length)] + ' ' + wizardNames[randomIndex];
    }
}

var randomCoatColor = new Array(4);
for (var i = 0; i < 4; i++) {
    randomCoatColor[i] = wizardCoatColor[Math.floor(Math.random() * wizardCoatColor.length)];
}

var randomEyes = new Array(4);
for (var i = 0; i < 4; i++) {
    randomEyes[i] = wizardEyes[Math.floor(Math.random() * wizardEyes.length)];
}

var wizards = [
    {
        name: randomWizardNames[0],
        coatColor: randomCoatColor[0],
        eyes: randomEyes[0]
    },
    {
        name: randomWizardNames[1],
        coatColor: randomCoatColor[1],
        eyes: randomEyes[1]
    },
    {
        name: randomWizardNames[2],
        coatColor: randomCoatColor[2],
        eyes: randomEyes[2]
    },
    {
        name: randomWizardNames[3],
        coatColor: randomCoatColor[3],
        eyes: randomEyes[3]
    }
];

var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;

    return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);