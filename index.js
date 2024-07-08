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
    { "number": 12, "message": "생체 흡수성 재료로 폴리락타이드 (PLA)가 있는데 폴리락타이드는 수술 후 흡수되는 봉합사, 골절 고정판 등에 사용됩니다. 인체 내에서 서서히 분해되어 무해한 물질로 전환된다" },
    { "number": 13, "message": "폴리글리콜라이드 (PGA)는 봉합사, 약물 전달 시스템 등에 사용되며, PLA와 유사한 특성을 가집니다. 등 생명과 의료에 폴리머가 사용된다." },
    { "number": 14, "message": "폴리카프로락톤(PCL)는 낮은 분해속도로 장기간 유지가 필요한 스캐폴드에 사용됩니다." },
    { "number": 15, "message": "건축과 실내 인테리어에도 신소재가 들어간다. 대표적으로 에어로젤(Aerogel)이 있다. 매우 낮은 열전도율을 가진 초경량 소재로, 건물의 에너지 효율성을 극대화하는 데 사용된다" },
    { "number": 16, "message": "두 번째로는 GFRP(Glass Fiber Reinforced Polymer): 내구성과 강도가 높으며, 부식에 강해 다양한 건축 요소에 사용된다." },
    { "number": 17, "message": "마지막으로는 태양광 패널(Solar Panels)이다. 태양 에너지를 전기로 변환하여 건물의 에너지 자급률을 높이는 데 사용된다." },
    { "number": 18, "message": "화학과 관련된 신소재로는 그래핀이 있다. 특징으로는 단일 원자층으로 구성된 탄소 소재로, 뛰어난 전기 전도성과 열 전도성을 가지고 있습니다. 또한 강도가 높고 유연성이 있어 다양한 응용이 가능하다" },
    { "number": 19, "message": "다양하게 응용되는데 예시로는 전자기기의 투명 전도막, 배터리와 캐퍼시터의 전극 소재, 강화 재료 등 다양한 분야에서 사용된다" },
    { "number": 20, "message": "두번째로는 나노 입자가 있다. 특징으로는 나노미터(10^-9m) 크기의 입자로, 표면적이 크고 특수한 물리적, 화학적 성질을 가집니다. 이는 응용 분야에 따라 다양한 특성을 제공한다." },
    { "number": 21, "message": "응용으로는 의료용 나노입자는 약물 전달 시스템, 진단 장비 개발 등에 사용되며, 환경 분야에서는 오염물질 제거나 촉매로서 활용될 수 있." },
    { "number": 22, "message": "기계공학과 관련된 신소재로는 티타늄 및 티타늄 합금 (Titanium and Titanium Alloys)이 있다. 특징은 뛰어난 강도와 내식성을 가지고 있으며, 저온에서도 우수한 성능을 발휘한다. 가벼우면서도 높은 강도를 가진다는 점에서 고급 기계 부품에 적합하다." },
    { "number": 23, "message": "응용으로는 항공기 엔진 부품, 의료 장비 (인공 관절 등), 해양 장비, 스포츠용품 등 다양한 고성능 부품에 사용된다." },
    { "number": 24, "message": "이러한 신소재들은 다양한 분야에서 발전과 기능성을 높이고, 경량화 및 내구성을 개선하는 데 중요한 역할을 하고 있다." }
];
