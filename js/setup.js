var randomIndex = Math.floor(Math.random() * wizardNames.length);

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var userNameInput = setup.querySelector('.setup-user-name');

var setupWizard = setup.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');

shuffle(wizardCoatColor);
shuffle(wizardEyes);
shuffle(fireballs);


var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
    }
};

var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
    setup.classList.add('hidden');
};

var indexes = { eye: 0, coat: 0, fireball: 0 };
var setWizardCoatColor = function (coatColors) {
    setupWizardCoat.style.fill = coatColors[indexes.coat];
    indexes.coat = incrementIndex(wizardCoatColor, indexes.coat);
};

var setWizardEyesColor = function (eyeColors) {
    setupWizardEyes.style.fill = eyeColors[indexes.eye];
    indexes.eye = incrementIndex(wizardEyes, indexes.eye);
};

var setFireballColor = function (fireballColors) {
    setupFireball.style.background = fireballColors[indexes.fireball];
    indexes.fireball = incrementIndex(fireballs, indexes.fireball);
};

function incrementIndex(array, currentValue) {
    if (currentValue < array.length) {
        return currentValue + 1;
    } else {
        return 0;
    }
}


setupOpen.addEventListener('click', function () {
    openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        openPopup();
    }
});

setupClose.addEventListener('click', function () {
    closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        closePopup();
    }
});


userNameInput.addEventListener('invalid', function (evt) {
    if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Обязательное поле');
    } else {
        userNameInput.setCustomValidity('');
    }
});

userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
        target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
        target.setCustomValidity('');
    }
});

setupWizardCoat.addEventListener('click', function () {
    setWizardCoatColor(wizardCoatColor);
});
setupWizardCoat.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        setWizardCoatColor(wizardCoatColor);
    }
});

setupWizardEyes.addEventListener('click', function () {
    setWizardEyesColor(wizardEyes);
});
setupWizardEyes.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        setWizardEyesColor(wizardEyes);
    }
});

setupFireball.addEventListener('click', function () {
    setFireballColor(fireballs);
});


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}