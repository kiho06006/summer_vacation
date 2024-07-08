// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement('div');
    modal.className = 'modal hidden';

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement('div');
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = 'Door Image';
    image.style.width = '100%';
    image.style.height = '211px';

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement('p');
    textElement.textContent = text;

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener('click', () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
    { "number": 1, "message": "고무와 자동차와 관련된 신소재  자동차가 잘 굴러가는 공기타이어의 역사는 나무와 딱딱한 타이어를 바퀴로 만들었다. 하지만 요철에 약해서 지름의 4분의 1쯤 되는 높낮이 차만 있어도 넘기기 어렵다. 또한 2분의 1이상인 높낮이 차는 원리상 넘을 수 없었다. 또, 질퍽거리는 모래가 많은 땅처럼 마찰이 적은 곳은 바퀴에 부적합하며 차에 탄 사람에게 충격이 전해져 짐과 차체에 피해가 컸다." },
    { "number": 2, "message": "이러한 문제를 해결한 사람은 스코틀랜드 출신의 수의사 존 보이드 던롭은 아들이 편리하게 세발자전거를 타고 싶다는 부탁으로 시험삼아 나무로 된 원판둘레에 공기를 넣은 고무 튜브를 리벳(금속재료를 결합하는데 사용하는 막대 모양의 부품)으로 고정한 타이어를 만들어 편하게 세발자전거를 탈 수 있게 되었다. 공기터이어가 인기가 많아지자 공기 타이어의 특허를 냈고, 회사를 성립하여 존 세계 자동차 시대로 이끌었다." },
    { "number": 3, "message": "알루미늄 합금이 가장 큰 의의를 가지는 분야는 항공분야이다. 하늘을 날려면 무엇보다 가볍고 튼튼한 재료가 필요하므로, 알루미늄의 활약분야로는 안성맞춤이다." },
    { "number": 4, "message": "실제로 라이트 형제가 최초의 비행기를 만들때 엔진에 알루미늄을 사용했다. 목재로 만든 비행기는 불에 타거나 부식될 경우가 있고 열 등으로 미세하게 변형되기만 해도 비행 성능에 커다란 영향을 끼친다. " },
    { "number": 5, "message": "금속으로 만든 비행기는 이 같은 문제가 전혀 없어 비행기뿐만 아니라 항공기, 로켓, 국제 우주 정거장등 다양하게 사용된다." },
    { "number": 6, "message": "규소는 반금속으로 분류되어 여러 성질의 반도체를 만들 수 있다.규소 반도체는 컴퓨터, 스마트폰, 태블릿, 텔레비전 등 수많은 전자 기기의 핵심 부품으로 사용된다." },
    { "number": 7, "message": "사용 예로는 집적 회로는 다수의 트랜지스터와 기타 소자를 하나의 칩에 집적한 것으로, 컴퓨터 프로세서, 메모리 칩 등 다양한 전자 기기에 사용되는 등 여러 반도체로 컴퓨터를 만들고 사용합니다." },
    { "number": 8, "message": "그러므로 컴퓨터에서 사용되는 반도체는 다양한 형태와 기능을 가지고 있으며, 각각이 컴퓨터의 성능과 효율성을 높이는 데 중요한 역할을 합니다. " },
    { "number": 9, "message": "반도체 기술의 지속적인 발전은 컴퓨터 성능의 향상과 새로운 기능의 도입을 가능하게 하며, 이는 현대 컴퓨터 환경의 혁신을 이끌고 있다." },
    { "number": 10, "message": "폴리머 플라스틱은 많은 반복 단위가 화학적으로 결합하여 형성된 고분자 화합물이다. " },
    { "number": 11, "message": "특징으로는 가볍고 튼튼하고 다양한 가공 방법으로 쉽게 제작할 수 있어 다양한 제품을 만들 수 있으며 전기적 절연성이 뛰어나 전자 기기 및 전선 피복에 널리 사용된다." },
    { "number": 12, "message": "생체 흡수성 재료로 폴리락타이드 (PLA)가 있는데 폴리락타이드는 수술 후 흡수되는 봉합사, 골절 고정판 등에 사용됩니다. 인체 내에서 서서히 분해되어 무해한 물질로 전환됩니다" },
    { "number": 13, "message": "폴리글리콜라이드 (PGA)는 봉합사, 약물 전달 시스템 등에 사용되며, PLA와 유사한 특성을 가집니다. 등 생명과 의료에 폴리머가 사용된다." },
    { "number": 14, "message": "" },
    { "number": 15, "message": "" },
    { "number": 16, "message": "." },
    { "number": 17, "message": "" },
    { "number": 18, "message": "1" },
    { "number": 19, "message": "" },
    { "number": 20, "message": "" },
    { "number": 21, "message": "" },
    { "number": 22, "message": "" },
    { "number": 23, "message": "" },
    { "number": 24, "message": "." }
];
