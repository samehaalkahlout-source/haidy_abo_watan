const availableSalads = ["حمص", "متبل", "ملفوف", "بندوره", "زيتون اخضر مشرح", "مخلل"];
const availableSauces = ["كاتشب", "ميونيز", "باربكيو", "تشيلي حلو", "تشيلي حار", "شطة سيراراتشه", "الفائيم", "تومه"];
const availableChocolates = ["فانيل", "نوتيلا", "لوتس", "بستاشيو"];
const fashafishChocolates = ["فانيل", "نوتيلا", "لوتس", "بستاشيو", "كنافة دبي", "فراولة"];
const crepeAddons = [
    { label: "شوكلاتة على زوقك (+5₪)", value: "شوكلاتة على زوقك", price: 5 },
    { label: "فراولة (+5₪)", value: "فراولة", price: 5 },
    { label: "كنافة دبي (+5₪)", value: "كنافة دبي", price: 5 }
];

// نكهات المشروبات
const blueFlavors = ["عادي", "دي", "نعنع", "بطيخ", "مارشملو", "توتي فروتي", "كرز", "دايت", "شمام وتفاح"];
const redbullFlavors = ["عادي", "بطيخ", "توت ومشمش", "خوخ", "عنب"];
const xlFlavors = ["عادي", "دايت", "مانجا اناناس", "مشمش خوخ"];
const tapuzinaFlavors = ["عنب", "توت بنانا", "برتقال", "مانجا", "جرفوت", "ليمون نعنع", "تفاح"];

let appDatabase = {
    light_sandwiches: [
        { id: "ls0", name: "سندويش جبنة", desc: "سندويش جبنة شهية", prices: { "ثابت": 8 }, hasSalads: true, hasSauces: true },
        { id: "ls1", name: "نقانق صغير", desc: "اصبع نقانق مقطوع نصين في لحمنيوت", prices: { "لحمنيوت": 6 }, hasSalads: true, hasSauces: true },
        { id: "ls2", name: "نقانق وسط", desc: "اصبعين نقانق مقطعين في لحمنيوت", prices: { "لحمنيوت": 8 }, hasSalads: true, hasSauces: true },
        { id: "ls3", name: "نقانق كبير", desc: "بجيت نقانق", prices: { "باجيت": 15 }, hasSalads: true, hasSauces: true },
        { id: "ls4", name: "نقانق مع جبنة صغير", desc: "اصبعين نقانق مقطعين شرايح مع شرحة جبنة", prices: { "ثابت": 8 }, hasSalads: true, hasSauces: true },
        { id: "ls5", name: "نقانق مع جبنة وسط دبل", desc: "اصبعين نقانق شريحتين جبنة لحمنيوت", prices: { "لحمنيوت": 12 }, hasSalads: true, hasSauces: true },
        { id: "ls6", name: "نقانق وجبنة كبير", desc: "باجيت نقانق مع جبنة", prices: { "باجيت": 20 }, hasSalads: true, hasSauces: true },
        { id: "ls7", name: "وجبة شبس", desc: "وجبة شبس مقرمشة (اختيار الحجم)", prices: { "صغير": 5, "كبير": 10 }, hasSalads: false, hasSauces: true }
    ],
    chicken_sandwiches: [
        { id: "ch1", name: "صدر جاج صغير", desc: "لحمنيوت صدر دجاج طازج", prices: { "لحمنيوت": 15 }, hasSalads: true, hasSauces: true },
        { id: "ch2", name: "صدر جاج كبير", desc: "باجيت صدر دجاج مشوي مميز", prices: { "باجيت": 25 }, hasSalads: true, hasSauces: true },
        { id: "ch3", name: "اضافة بطاطا", desc: "إضافة بطاطا مقرمشة للساندويش", prices: { "إضافة": 5 }, hasSalads: false, hasSauces: false }
    ],
    sujuq: [
        { id: "sj1", name: "سجق حار", desc: "سجق حار مبهر داخل الخبز", prices: { "صغير (لحمنيوت)": 20, "كبير (باجيت)": 30 }, hasSalads: true, hasSauces: true },
        { id: "sj2", name: "سجق مع بيض", desc: "سجق حار مع بيض شهي", prices: { "صغير (لحمنيوت)": 25, "كبير (باجيت)": 35 }, hasSalads: true, hasSauces: true },
        { id: "sj3", name: "سجق مع جبنة", desc: "سجق حار مع جبنة ذائبة", prices: { "صغير (لحمنيوت)": 25, "كبير (باجيت)": 35 }, hasSalads: true, hasSauces: true }
    ],
    schnitzel: [
        { id: "sz1", name: "شنيتسل أمتي", desc: "شنتسل دجاج مطحون جاهز", prices: { "صغير (لحمنيوت)": 10, "كبير (باجيت)": 20 }, hasSalads: true, hasSauces: true },
        { id: "sz2", name: "شنيتسل شانجو", desc: "قطع صدر دجاج أصابع جاهز", prices: { "صغير (لحمنيوت)": 15, "كبير (باجيت)": 30 }, hasSalads: true, hasSauces: true },
        { id: "sz3", name: "اضافة جبنة", desc: "إضافة شريحة جبنة ذائبة", prices: { "إضافة": 5 }, hasSalads: false, hasSauces: false },
        { id: "sz4", name: "اضافة شيبس", desc: "إضافة شيبس مقرمش", prices: { "إضافة": 5 }, hasSalads: false, hasSauces: false }
    ],
    schnitzel_meals: [
        { id: "sm1", name: "وجبة شنيتسل أمتي مع شبس", desc: "وجبة شنيتسل أمتي كاملة مع الشبس", prices: { "وجبة": 20 }, hasSalads: true, hasSauces: true },
        { id: "sm2", name: "وجبة شنيتسل شانجو مع شبس", desc: "وجبة شنيتسل شانجو مقرمشة مع الشبس", prices: { "وجبة": 30 }, hasSalads: true, hasSauces: true }
    ],
    seafood: [
        { id: "f1", name: "وجبة جمبري 8 قطع مع شيبس", desc: "جمبري بتتبيله عالميه مميزه مقلي", prices: { "وجبة شخصية": 35 }, hasSalads: false, hasSauces: true },
        { id: "f2", name: "وجبة جمبري 10 قطع مع شيبس", desc: "جمبري بتتبيله عالميه مميزه مقلي", prices: { "وجبة شخصية": 40 }, hasSalads: false, hasSauces: true },
        { id: "f3", name: "وجبة جمبري 12 قطعه مع شيبس", desc: "جمبري بتتبيله عالميه مميزه مقلي", prices: { "وجبة شخصية": 50 }, hasSalads: false, hasSauces: true },
        { id: "f4", name: "وجبة سالمون 200 غم مع شيبس", desc: "سالمون بتتبيله خاصة مميزة مقلي تقدم مع صوص هايدي الحار", prices: { "وجبة شخصية": 45 }, hasSalads: false, hasSauces: true }
    ],
    kibbeh: [
        { id: "kb1", name: "وجبة كبة", desc: "كبة شهية ولذيذة (سعر الحبة)", prices: { "حبة": 5 }, hasSalads: false, hasSauces: false }
    ],
    sweets: [
        { id: "w1", name: "وافل بستاشيو", desc: "أصابع وافل شهية مغطاه بصوص البستاشيو", prices: { "ثابت": 7 }, hasChoco: true },
        { id: "w2", name: "وافل نوتيلا", desc: "أصابع وافل شهية ولذيذة بصوص النوتيلا", prices: { "ثابت": 5 }, hasChoco: true },
        { id: "w3", name: "وافل لوتس", desc: "أصابع وافل شهية مغطى بصوص اللوتس", prices: { "ثابت": 5 }, hasChoco: true },
        { id: "w4", name: "وافل كل الأطعمة", desc: "أصابع وافل تجمع بين الفانيل، النوتيلا، اللوتس، والبستاشيو", prices: { "ثابت": 7 }, hasChoco: true }
    ],
    fashafish: [
        { id: "ff1", name: "وجبة فشافيش للاطفال (5 قطع)", desc: "وجبة مقرمشة ولذيذة للأطفال", prices: { "وجبة": 10 }, hasFashafishChoco: true },
        { id: "ff2", name: "وجبة فشافيش شخصية (10 قطع)", desc: "وجبة شخصية مشبعة", prices: { "وجبة": 20 }, hasFashafishChoco: true },
        { id: "ff3", name: "وجبة فشافيش عائلية (25 قطعة)", desc: "وجبة عائلية كبيرة وممتازة للمشاركة", prices: { "وجبة": 50 }, hasFashafishChoco: true }
    ],
    crepe: [
        { id: "cr1", name: "كريب بستاشيو", desc: "كريب فرنسي بصوص البستاشيو", prices: { "ثابت": 10 }, hasCrepeAddons: true },
        { id: "cr2", name: "كريب نوتيلا", desc: "كريب فرنسي طازج محشو بنوتيلا", prices: { "ثابت": 10 }, hasCrepeAddons: true },
        { id: "cr3", name: "كريب لوتس", desc: "كريب فرنسي بصوص اللوتس", prices: { "ثابت": 10 }, hasCrepeAddons: true },
        { id: "cr4", name: "كريب كل الاطعمة", desc: "شامل جميع الأطعمة (فانيل، نوتيلا، لوتس، بستاشيو)", prices: { "ثابت": 20 }, hasCrepeAddons: true }
    ],
    drinks: [
        { id: "d1", name: "ايس كوفي", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d2", name: "ايس فانيل", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d3", name: "ايس موز", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d4", name: "ايس بسفلورة", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d5", name: "ايس كرز", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d6", name: "ايس اناناس", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d7", name: "ايس مانجا", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d8", name: "مكس ايس مانجا & ايس اناناس", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d9", name: "مكس ايس اناناس & كرز", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d10", name: "مكس ايس مانجا & ايس كرز", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d11", name: "مكس ايس موز & ايس فانيل", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d12", name: "مكس ايس كوفي & ايس فانيل", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d13", name: "مكس ايس كوفي & ايس موز", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d14", name: "ايس فراولة يوجرت", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d15", name: "فيوزتي خوخ", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d16", name: "مكس بسفلوره كرز", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d17", name: "بسفلوره اناناس", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d18", name: "بسفلوره مانجا", desc: "", prices: { "وسط": 6, "كبير": 10 } },
        { id: "d19", name: "ايس فراولة و موز", desc: "", prices: { "وسط": 6, "كبير": 10 } },
    ],
    inhouse_drinks: [
        { id: "ih1", name: "بلو", desc: "اختر النكهة المفضلة لديك", prices: { "علبة": 5 }, flavors: blueFlavors },
        { id: "ih2", name: "رد بول", desc: "اختر النكهة المفضلة لديك", prices: { "علبة": 7 }, flavors: redbullFlavors },
        { id: "ih3", name: "اكس ال", desc: "اختر النكهة المفضلة لديك", prices: { "علبة": 5 }, flavors: xlFlavors },
        { id: "ih4", name: "عصائر تبوزينا", desc: "اختر النكهة والحجم المناسب", prices: { "صغير": 5, "كبير": 10 }, flavors: tapuzinaFlavors },
        { id: "ih5", name: "كولا عربي", desc: "", prices: { "صغير": 4, "كبير": 5 } },
        { id: "ih6", name: "سبرايت عربي", desc: "", prices: { "صغير": 4, "كبير": 5 } },
        { id: "ih7", name: "فانتا عربي", desc: "", prices: { "صغير": 4, "كبير": 5 } },
        { id: "ih8", name: "كولا إسرائيلي", desc: "", prices: { "صغير": 5, "كبير": 10 } },
        { id: "ih9", name: "سبرايت إسرائيلي", desc: "", prices: { "صغير": 5, "كبير": 10 } },
        { id: "ih10", name: "فانتا إسرائيلي", desc: "", prices: { "صغير": 5, "كبير": 10 } },
        { id: "ih11", name: "شويبس برتقال", desc: "", prices: { "ثابت": 4 } },
        { id: "ih12", name: "شويبس اكزوتيك", desc: "", prices: { "ثابت": 4 } },
        { id: "ih13", name: "شويبس عنب", desc: "", prices: { "ثابت": 4 } },
        { id: "ih14", name: "شويبس ليمون زهري", desc: "", prices: { "ثابت": 4 } },
        { id: "ih15", name: "شويبس ليمون أصفر", desc: "", prices: { "ثابت": 4 } },
        { id: "ih16", name: "شويبس تفاح", desc: "", prices: { "ثابت": 4 } },
        { id: "ih17", name: "شويبس فراولة", desc: "", prices: { "ثابت": 4 } },
        { id: "ih18", name: "صودا", desc: "", prices: { "ثابت": 4 } },
        { id: "ih19", name: "بفاريا زجاج ساده", desc: "", prices: { "ثابت": 5 } },
        { id: "ih20", name: "بفاريا زجاج تفاح", desc: "", prices: { "ثابت": 5 } }
    ],
    snacks: [
        { id: "sn1", name: "ذرة عالبخار", desc: "ذرة طازجة وطبيعية على البخار", prices: { "حجم وسط": 7, "حجم كبير": 9, "صحن": 20 }, hasExtraSauce: true },
        { id: "sn2", name: "حامله", desc: "حاملة مسلوقة وطازجة", prices: { "كاسة": 10, "وسط": 20, "كبير": 30 } },
        { id: "sn3", name: "ادمامي", desc: "فول الصويا المقرمش والمطبوخ", prices: { "صغير": 7, "وسط": 10, "كبير": 20 } }
    ]
};

let currentCart = [];
let navbarDragState = {
    active: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false
};

function initNavbarDrag() {
    const navbar = document.getElementById('mainNavbar');
    if (!navbar) return;

    navbar.addEventListener('mousedown', (event) => {
        if (event.button !== 0 && event.button !== 1) return;

        navbarDragState.active = true;
        navbarDragState.startX = event.pageX - navbar.offsetLeft;
        navbarDragState.startScrollLeft = navbar.scrollLeft;
        navbarDragState.moved = false;
        navbar.classList.add('dragging');
        event.preventDefault();
    });

    window.addEventListener('mousemove', (event) => {
        if (!navbarDragState.active) return;

        const x = event.pageX - navbar.offsetLeft;
        const walk = x - navbarDragState.startX;
        if (Math.abs(walk) > 3) {
            navbarDragState.moved = true;
        }
        navbar.scrollLeft = navbarDragState.startScrollLeft - walk;
    });

    const stopDragging = () => {
        if (!navbarDragState.active) return;
        navbarDragState.active = false;
        navbar.classList.remove('dragging');
    };

    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mouseleave', stopDragging);

    navbar.addEventListener('click', (event) => {
        if (navbarDragState.moved) {
            event.preventDefault();
            event.stopPropagation();
            navbarDragState.moved = false;
        }
    });
}

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(t => t.classList.remove('active'));

    const tabMapping = {
        'welcome': 0, 'light_sandwiches': 1, 'chicken_sandwiches': 2, 'sujuq': 3,
        'schnitzel': 4, 'schnitzel_meals': 5, 'seafood': 6, 'kibbeh': 7, 'sweets': 8,
        'fashafish': 9, 'crepe': 10, 'drinks': 11, 'inhouse_drinks': 12, 'snacks': 13
    };
    if (tabs[tabMapping[tabName]]) {
        tabs[tabMapping[tabName]].classList.add('active');
    }

    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const targetPage = document.getElementById('page-' + tabName);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderMenuGrid(categoryKey, targetElementId) {
    const grid = document.getElementById(targetElementId);
    if (!grid) return;
    grid.innerHTML = '';

    appDatabase[categoryKey].forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'item-card';

        let priceKeys = Object.keys(item.prices);
        let priceSectionHTML = '';

        // قائمة الاختيار للحجم/السعر
        if (priceKeys.length > 1) {
            let options = '';
            priceKeys.forEach(k => {
                options += `<option value="${k}">${k} - ${item.prices[k]} ₪</option>`;
            });
            priceSectionHTML += `
                        <select class="item-select" id="select-${item.id}" onchange="updateItemPriceDisplay('${item.id}', '${categoryKey}', ${index})">
                            ${options}
                        </select>
                        <span class="item-price" id="priceDisplay-${item.id}">${item.prices[priceKeys[0]]} ₪</span>
                    `;
        } else {
            priceSectionHTML += `<span class="item-price" id="priceDisplay-${item.id}">${item.prices[priceKeys[0]]} ₪</span>`;
        }

        // قائمة الاختيار للنكهات إن وجدت
        let flavorDropdownHTML = '';
        if (item.flavors && item.flavors.length > 0) {
            let fOptions = item.flavors.map(f => `<option value="${f}">${f}</option>`).join('');
            flavorDropdownHTML = `
                        <div style="margin-top: 6px;">
                            <label style="font-size:12px; color:var(--brand-red); font-weight:bold;">النكهة: </label>
                            <select class="item-select" id="flavor-${item.id}">
                                ${fOptions}
                            </select>
                        </div>
                    `;
        }

        let customBoxHTML = '';
        let hasAddons = item.hasSalads || item.hasSauces || item.hasChoco || item.hasFashafishChoco || item.hasCrepeAddons || item.hasExtraSauce;

        if (hasAddons) {
            let addonsContent = '';

            if (item.hasSalads) {
                let saladCheckboxes = availableSalads.map(s => `
                            <label class="addon-label"><input type="checkbox" name="salad-${item.id}" value="${s}" onchange="updateItemPriceDisplay('${item.id}', '${categoryKey}', ${index})"> ${s}</label>
                        `).join('');
                addonsContent += `<div class="addon-group-title">إضافة سلطات (مجاناً):</div><div class="addon-options">${saladCheckboxes}</div>`;
            }

            if (item.hasSauces) {
                let sauceCheckboxes = availableSauces.map(s => `
                            <label class="addon-label"><input type="checkbox" name="sauce-${item.id}" value="${s}" onchange="updateItemPriceDisplay('${item.id}', '${categoryKey}', ${index})"> ${s}</label>
                        `).join('');
                addonsContent += `<div class="addon-group-title">إضافة صوصات (مجاناً):</div><div class="addon-options">${sauceCheckboxes}</div>`;
            }

            if (item.hasChoco) {
                let chocoCheckboxes = availableChocolates.map(s => `
                            <label class="addon-label"><input type="checkbox" name="choco-${item.id}" value="${s}" onchange="updateItemPriceDisplay('${item.id}', '${categoryKey}', ${index})"> ${s}</label>
                        `).join('');
                addonsContent += `<div class="addon-group-title">إضافة شوكلاتات:</div><div class="addon-options">${chocoCheckboxes}</div>`;
            }

            if (item.hasFashafishChoco) {
                let fashafishCheckboxes = fashafishChocolates.map(s => `
                            <label class="addon-label"><input type="checkbox" name="choco-${item.id}" value="${s}" onchange="updateItemPriceDisplay('${item.id}', '${categoryKey}', ${index})"> ${s}</label>
                        `).join('');
                addonsContent += `<div class="addon-group-title">اختيار الشوكلاتات / النكهات:</div><div class="addon-options">${fashafishCheckboxes}</div>`;
            }

            if (item.hasCrepeAddons) {
                let crepeCheckboxes = crepeAddons.map(addon => `
                            <label class="addon-label"><input type="checkbox" name="crepe-${item.id}" value="${addon.value}" data-price="${addon.price}" onchange="updateItemPriceDisplay('${item.id}', '${categoryKey}', ${index})"> ${addon.label}</label>
                        `).join('');
                addonsContent += `<div class="addon-group-title">إضافات للكريب:</div><div class="addon-options">${crepeCheckboxes}</div>`;
            }

            if (item.hasExtraSauce) {
                addonsContent += `
                            <div class="addon-options">
                                <label class="addon-label"><input type="checkbox" name="sauce-extra-${item.id}" value="إضافة صوص (+3₪)" data-price="3" onchange="updateItemPriceDisplay('${item.id}', '${categoryKey}', ${index})"> إضافة صوص (+3 شيكل)</label>
                            </div>
                        `;
            }

            customBoxHTML = `<div class="custom-addons-box">${addonsContent}</div>`;
        }

        card.innerHTML = `
                    <div class="item-main-row">
                        <div class="item-details">
                            <div class="item-header-row">
                                <div class="item-title">${item.name}</div>
                                <div class="price-action-area">
                                    ${priceSectionHTML}
                                </div>
                            </div>
                            ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ''}
                            ${flavorDropdownHTML}
                        </div>
                        <button class="add-item-btn" onclick="addItemToCart('${item.id}', '${categoryKey}', ${index})"><span>+</span></button>
                    </div>
                    ${customBoxHTML}
                `;
        grid.appendChild(card);
    });
}

function updateItemPriceDisplay(itemId, categoryKey, itemIndex) {
    const priceDisplay = document.getElementById('priceDisplay-' + itemId);
    const item = appDatabase[categoryKey][itemIndex];
    if (!priceDisplay || !item) return;

    const select = document.getElementById('select-' + itemId);
    const chosenSize = select ? select.value : Object.keys(item.prices)[0];
    const basePrice = parseFloat(item.prices[chosenSize] || Object.values(item.prices)[0]);

    let addonPrice = 0;
    const card = priceDisplay.closest('.item-card');
    if (card) {
        card.querySelectorAll('input[type="checkbox"]:checked').forEach(node => {
            addonPrice += parseFloat(node.dataset.price || 0);
        });
    }

    priceDisplay.innerText = (basePrice + addonPrice) + ' ₪';
}

function addItemToCart(itemId, categoryKey, itemIndex) {
    const item = appDatabase[categoryKey][itemIndex];
    const select = document.getElementById('select-' + itemId);
    const flavorSelect = document.getElementById('flavor-' + itemId);

    let chosenSize = "ثابت";
    let price = Object.values(item.prices)[0];
    let chosenFlavor = flavorSelect ? flavorSelect.value : null;

    if (select) {
        chosenSize = select.value;
        price = item.prices[chosenSize];
    } else {
        chosenSize = Object.keys(item.prices)[0];
    }

    let selectedSalads = [];
    let selectedSauces = [];
    let selectedChocos = [];
    let selectedCrepeAddons = [];
    let extraPrice = 0;

    if (item.hasSalads) {
        document.querySelectorAll(`input[name="salad-${item.id}"]:checked`).forEach(node => selectedSalads.push(node.value));
    }
    if (item.hasSauces) {
        document.querySelectorAll(`input[name="sauce-${item.id}"]:checked`).forEach(node => selectedSauces.push(node.value));
    }
    if (item.hasChoco || item.hasFashafishChoco) {
        document.querySelectorAll(`input[name="choco-${item.id}"]:checked`).forEach(node => selectedChocos.push(node.value));
    }
    if (item.hasCrepeAddons) {
        document.querySelectorAll(`input[name="crepe-${item.id}"]:checked`).forEach(node => {
            selectedCrepeAddons.push(node.value);
            extraPrice += parseFloat(node.dataset.price || 0);
        });
    }
    if (item.hasExtraSauce) {
        const sauceExtraNode = document.querySelector(`input[name="sauce-extra-${item.id}"]:checked`);
        if (sauceExtraNode) {
            selectedSauces.push(sauceExtraNode.value);
            extraPrice += 3;
        }
    }

    const unitPrice = parseFloat(price) + extraPrice;
    const entrySignature = JSON.stringify({
        categoryKey,
        itemId: item.id,
        size: chosenSize,
        flavor: chosenFlavor,
        salads: [...selectedSalads].sort(),
        sauces: [...selectedSauces].sort(),
        chocos: [...selectedChocos].sort(),
        crepeAddons: [...selectedCrepeAddons].sort()
    });

    const existingEntry = currentCart.find(cartItem => cartItem.signature === entrySignature);

    if (existingEntry) {
        existingEntry.qty += 1;
    } else {
        currentCart.push({
            signature: entrySignature,
            itemId: item.id,
            categoryKey: categoryKey,
            name: item.name,
            size: chosenSize,
            flavor: chosenFlavor,
            unitPrice: unitPrice,
            qty: 1,
            salads: selectedSalads,
            sauces: selectedSauces,
            chocos: selectedChocos,
            crepeAddons: selectedCrepeAddons
        });
    }

    updateFloatingCartUI();
    if (document.getElementById('cartModal').classList.contains('active')) {
        openCartModal();
    }
}

function updateFloatingCartUI() {
    const cartWrapper = document.getElementById('cartWrapper');
    const cartCountBadge = document.getElementById('cartCountBadge');
    const cartTotalSum = document.getElementById('cartTotalSum');

    if (currentCart.length > 0) {
        cartWrapper.style.display = 'flex';
        const totalQty = currentCart.reduce((total, i) => total + i.qty, 0);
        cartCountBadge.innerText = totalQty;
        let sum = currentCart.reduce((total, i) => total + (i.unitPrice * i.qty), 0);
        cartTotalSum.innerText = sum + ' ₪';
    } else {
        cartWrapper.style.display = 'none';
        closeCartModal();
    }
}

function openCartModal() {
    const modal = document.getElementById('cartModal');
    const listContainer = document.getElementById('modalItemsList');
    const summaryContainer = document.getElementById('cartModalSummary');
    listContainer.innerHTML = '';

    currentCart.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'cart-modal-item';

        let addonsText = '';
        if (item.flavor) {
            addonsText += `<br><small style="color:#ffb74d">🍹 نكهة: ${item.flavor}</small>`;
        }
        if (item.salads && item.salads.length > 0) {
            addonsText += `<br><small style="color:var(--text-muted)">🥗 سلطات: ${item.salads.join(', ')}</small>`;
        }
        if (item.sauces && item.sauces.length > 0) {
            addonsText += `<br><small style="color:var(--text-muted)">🥫 صوصات: ${item.sauces.join(', ')}</small>`;
        }
        if (item.chocos && item.chocos.length > 0) {
            addonsText += `<br><small style="color:var(--text-muted)">🍫 شوكلاتات: ${item.chocos.join(', ')}</small>`;
        }
        if (item.crepeAddons && item.crepeAddons.length > 0) {
            addonsText += `<br><small style="color:var(--text-muted)">🥞 إضافات: ${item.crepeAddons.join(', ')}</small>`;
        }

        const itemTotal = item.unitPrice * item.qty;

        row.innerHTML = `
                    <div class="cart-item-main">
                        <div class="cart-item-title-row">
                            <div class="cart-item-name">${item.name}</div>
                        </div>
                        <div class="cart-item-meta">
                            <span class="cart-item-size">${item.size}</span>
                            <span class="cart-item-unit-price">${item.unitPrice} ₪ / قطعة</span>
                        </div>
                        ${addonsText ? `<div class="cart-item-addons">${addonsText}</div>` : ''}
                    </div>
                    <div class="cart-qty-column">
                        <div class="cart-qty-pill">${item.qty}</div>
                    </div>
                    <div class="cart-item-total">${itemTotal} ₪</div>
                    <button class="remove-item-btn" onclick="removeItemFromCart(${index})">حذف</button>
                `;
        listContainer.appendChild(row);
    });

    const totalQty = currentCart.reduce((sum, item) => sum + item.qty, 0);
    const totalAmount = currentCart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
    summaryContainer.innerHTML = `
        <div class="cart-summary-card">
            <div class="cart-summary-row">
                <span>الكمية الكلية</span>
                <strong>${totalQty}</strong>
            </div>
            <div class="cart-summary-row">
                <span>الإجمالي</span>
                <strong>${totalAmount} ₪</strong>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closeCartModal() {
    document.getElementById('cartModal').classList.remove('active');
}

function removeItemFromCart(index) {
    if (currentCart[index].qty > 1) {
        currentCart[index].qty -= 1;
    } else {
        currentCart.splice(index, 1);
    }

    updateFloatingCartUI();
    if (currentCart.length > 0) {
        openCartModal();
    }
}

function triggerOrder() {
    if (currentCart.length === 0) return;

    let message = "*طلب جديد من منيو هايدي الإلكتروني 🤩*\n\n";
    currentCart.forEach((item, i) => {
        const itemTotal = item.unitPrice * item.qty;
        message += (i + 1) + ") *" + item.name + "* (" + item.size + ") × " + item.qty + " - " + itemTotal + " ₪\n";
        if (item.flavor) {
            message += "   🍹 نكهة: " + item.flavor + "\n";
        }
        if (item.salads && item.salads.length > 0) {
            message += "   🥗 سلطات: " + item.salads.join(', ') + "\n";
        }
        if (item.sauces && item.sauces.length > 0) {
            message += "   🥫 صوصات: " + item.sauces.join(', ') + "\n";
        }
        if (item.chocos && item.chocos.length > 0) {
            message += "   🍫 شوكلاتات: " + item.chocos.join(', ') + "\n";
        }
        if (item.crepeAddons && item.crepeAddons.length > 0) {
            message += "   🥞 إضافات: " + item.crepeAddons.join(', ') + "\n";
        }
    });

    let total = currentCart.reduce((sum, i) => sum + (i.unitPrice * i.qty), 0);
    message += "\n*اجمالي الحساب:* " + total + " ₪\n\n_أهلاً وسهلاً بك في بسطة أبو وطن_ 🔥";

    let encodedText = encodeURIComponent(message);
    window.open('https://wa.me/972546299242?text=' + encodedText, '_blank');
}

function initAllGrids() {
    renderMenuGrid('light_sandwiches', 'grid-light_sandwiches');
    renderMenuGrid('chicken_sandwiches', 'grid-chicken_sandwiches');
    renderMenuGrid('sujuq', 'grid-sujuq');
    renderMenuGrid('schnitzel', 'grid-schnitzel');
    renderMenuGrid('schnitzel_meals', 'grid-schnitzel_meals');
    renderMenuGrid('seafood', 'grid-seafood');
    renderMenuGrid('kibbeh', 'grid-kibbeh');
    renderMenuGrid('sweets', 'grid-sweets');
    renderMenuGrid('fashafish', 'grid-fashafish');
    renderMenuGrid('crepe', 'grid-crepe');
    renderMenuGrid('drinks', 'grid-drinks');
    renderMenuGrid('inhouse_drinks', 'grid-inhouse_drinks');
    renderMenuGrid('snacks', 'grid-snacks');
}

window.onload = function () {
    initAllGrids();
    initNavbarDrag();
};
