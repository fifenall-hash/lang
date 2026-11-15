/**
 * dialogue_data.js
 * 주제별(6개) / 언어별(5개) 20개씩의 실전 여행 회화 데이터 구조
 * - 카페(cafe) 1번, 2번, 3번 예문 5개 국어 완비
 */

const TOPICS_META = [
  { id: 'airport', name: '공항', icon: '✈️', desc: '체크인, 수하물, 입국심사, 탑승구 안내' },
  { id: 'cafe', name: '카페', icon: '☕', desc: '음료/디저트 주문, 얼음·사이즈 조절, 결제' },
  { id: 'restaurant', name: '식당', icon: '🍽️', desc: '테이블 배정, 메뉴 추천, 추가 주문, 계산' },
  { id: 'hotel', name: '호텔', icon: '🏨', desc: '체크인/아웃, 조식 문의, 룸서비스, 짐 보관' },
  { id: 'pharmacy', name: '약국', icon: '💊', desc: '증상 설명, 상비약 구매, 복용법 및 주의사항' },
  { id: 'convenience', name: '편의점', icon: '🏪', desc: '간식 구매, 도시락 데우기, 교통카드 충전' }
];

const LANGUAGES_META = [
  { id: 'en', name: '영어 (English)', langCode: 'en', dir: 'ltr', sampleText: 'Hello! Have a great trip.' },
  { id: 'ja', name: '일본어 (日本語)', langCode: 'ja', dir: 'ltr', sampleText: 'こんにちは。良いご旅行を。' },
  { id: 'zh', name: '중국어 (中文)', langCode: 'zh', dir: 'ltr', sampleText: '您好！祝您旅途愉快。' },
  { id: 'vi', name: '베트남어 (Tiếng Việt)', langCode: 'vi', dir: 'ltr', sampleText: 'Xin chào! Chúc bạn có một chuyến đi vui vẻ.' },
  { id: 'ar', name: '아랍어 (العربية)', langCode: 'ar', dir: 'rtl', sampleText: 'مرحباً! أتمنى لك رحلة سعيدة.' }
];

// 상세 예문 데이터베이스
const RAW_DIALOGUES = {
  cafe: {
    // ==========================================
    // 1. 영어 (English) - 카페 1~3번
    // ==========================================
    en: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "Hi there! Welcome in. What can I get started for you today?",
            translation: "안녕하세요! 어서 오세요. 오늘 어떤 메뉴로 준비해 드릴까요?",
            expressions: [
              { phrase: "What can I get started for you?", meaning: "어떤 메뉴로 준비해 드릴까요? (카페나 식당 직원이 주문을 받을 때 자주 쓰는 표현)" }
            ],
            vocabulary: [
              { word: "welcome in", meaning: "어서 오세요 (매장에 들어오는 손님을 반길 때)" },
              { word: "get started", meaning: "(주문·준비를) 시작하다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Hi! Could I get an iced Americano and a blueberry muffin, please?",
            translation: "안녕하세요! 아이스 아메리카노 한 잔이랑 블루베리 머핀 하나 주시겠어요?",
            expressions: [
              { phrase: "Could I get ~, please?", meaning: "~을 주시겠어요? (가장 자연스럽고 정중한 주문 표현)" }
            ],
            vocabulary: [
              { word: "iced Americano", meaning: "아이스 아메리카노 ('ice'가 아닌 'iced'로 발음 및 표기)" },
              { word: "blueberry muffin", meaning: "블루베리 머핀" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Sure thing. What size would you like for the iced Americano?",
            translation: "물론이죠. 아이스 아메리카노는 어떤 사이즈로 드릴까요?",
            expressions: [
              { phrase: "Sure thing.", meaning: "물론이죠, 문제없습니다. ('Sure'보다 친근하고 흔히 쓰이는 응답)" },
              { phrase: "What size would you like for ~?", meaning: "~은 어떤 사이즈로 하시겠어요?" }
            ],
            vocabulary: [
              { word: "size", meaning: "크기, 컵 사이즈" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Medium, please. Oh, and could you go light on the ice?",
            translation: "미디엄 사이즈로 주세요. 아, 그리고 얼음은 조금만 넣어 주시겠어요?",
            expressions: [
              { phrase: "go light on the ice", meaning: "얼음을 적게 넣다 (반대로 얼음을 많이 달라고 할 때는 extra ice 사용)" }
            ],
            vocabulary: [
              { word: "medium", meaning: "중간 사이즈" },
              { word: "light on ~", meaning: "(양이나 재료를) 적게 넣은" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "No problem at all. Will that be for here or to go?",
            translation: "네, 문제없습니다. 매장에서 드시나요, 아니면 가져가시나요?",
            expressions: [
              { phrase: "for here or to go", meaning: "매장에서 먹고 갈지 포장해 갈지 묻는 표현 (영국·호주에서는 Eat in or takeaway 주로 사용)" }
            ],
            vocabulary: [
              { word: "no problem at all", meaning: "전혀 문제없습니다, 기꺼이 해드리겠습니다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "For here, please.",
            translation: "매장에서 먹고 갈게요.",
            expressions: [
              { phrase: "For here, please.", meaning: "매장에서 먹고 갈게요. (포장할 때는 'To go, please.')" }
            ],
            vocabulary: [
              { word: "for here", meaning: "매장 내 취식" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Great, your total comes to $7.50. You can tap your card right here, and your order will be ready at the pickup counter shortly!",
            translation: "좋습니다, 총 7달러 50센트입니다. 여기에 카드를 태그해 주시면 되고, 주문하신 메뉴는 곧 픽업대에서 준비될 예정입니다!",
            expressions: [
              { phrase: "Your total comes to ~", meaning: "총 결제 금액은 ~입니다" },
              { phrase: "tap your card", meaning: "카드를 단말기에 찍다(비접촉 태그하다)" }
            ],
            vocabulary: [
              { word: "total", meaning: "총액, 합계" },
              { word: "pickup counter", meaning: "음료 수령대 (픽업대)" },
              { word: "shortly", meaning: "곧, 잠시 후에" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "디카페인 원두 및 우유 변경하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "Good morning! What can I make for you today?",
            translation: "좋은 아침입니다! 오늘 어떤 음료를 만들어 드릴까요?",
            expressions: [
              { phrase: "What can I make for you?", meaning: "어떤 메뉴를 만들어 드릴까요? (바리스타가 자주 쓰는 인사)" }
            ],
            vocabulary: [
              { word: "good morning", meaning: "좋은 아침입니다" },
              { word: "make", meaning: "(음료·음식을) 만들다, 제조하다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Hi! Can I get a medium hot vanilla latte, and could you make it decaf?",
            translation: "안녕하세요! 따뜻한 바닐라 라떼 미디엄 사이즈로 주시고, 디카페인으로 해 주실 수 있나요?",
            expressions: [
              { phrase: "Could you make it decaf?", meaning: "디카페인으로 만들어 주실 수 있나요?" }
            ],
            vocabulary: [
              { word: "hot vanilla latte", meaning: "따뜻한 바닐라 라떼" },
              { word: "decaf", meaning: "디카페인 (decaffeinated의 줄임말)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Absolutely, we can do decaf espresso. Would you like regular whole milk with that?",
            translation: "물론이죠, 디카페인 에스프레소로 가능합니다. 우유는 일반 우유로 넣어 드릴까요?",
            expressions: [
              { phrase: "We can do ~", meaning: "~으로 해 드릴 수 있습니다 (주문이 가능할 때 쓰는 표현)" }
            ],
            vocabulary: [
              { word: "absolutely", meaning: "물론이죠, 당연하죠" },
              { word: "regular whole milk", meaning: "일반(전지) 우유" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Actually, could I swap the regular milk for oat milk, please?",
            translation: "아, 일반 우유 대신 오트 밀크(귀리 우유)로 변경해 주실 수 있을까요?",
            expressions: [
              { phrase: "swap A for B", meaning: "A를 B로 바꾸다(교체하다)" }
            ],
            vocabulary: [
              { word: "actually", meaning: "실은, 아 참 (정정하거나 추가 요청할 때)" },
              { word: "oat milk", meaning: "귀리 우유 (오트 밀크)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Sure! Just so you know, there's an extra charge of 80 cents for oat milk. Is that okay?",
            translation: "물론입니다! 참고로 오트 밀크 변경 시 80센트의 추가 요금이 있는데 괜찮으신가요?",
            expressions: [
              { phrase: "Just so you know", meaning: "참고로 말씀드리자면 (안내 사항을 덧붙일 때)" },
              { phrase: "extra charge of ~", meaning: "~의 추가 요금" }
            ],
            vocabulary: [
              { word: "extra", meaning: "추가의, 별도의" },
              { word: "charge", meaning: "요금, 비용" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Yes, that works for me. I'll pay with Apple Pay.",
            translation: "네, 괜찮습니다. 애플 페이로 결제할게요.",
            expressions: [
              { phrase: "That works for me.", meaning: "네, 저는 좋습니다 / 괜찮습니다." },
              { phrase: "pay with ~", meaning: "~(결제 수단)으로 결제하다" }
            ],
            vocabulary: [
              { word: "work", meaning: "(조건·상황이) 괜찮다, 문제없다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "All set! We'll call out your drink at the end of the bar when it's ready.",
            translation: "결제 완료되었습니다! 음료가 준비되면 바 끝쪽에서 메뉴 이름을 불러 드리겠습니다.",
            expressions: [
              { phrase: "All set!", meaning: "다 됐습니다! / 모든 처리가 완료되었습니다!" },
              { phrase: "call out ~", meaning: "(이름이나 메뉴를) 크게 부르다" }
            ],
            vocabulary: [
              { word: "bar", meaning: "카페의 음료 제조 카운터" },
              { word: "ready", meaning: "준비된" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "시럽 양 조절 및 휘핑크림 빼기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "Hi! Welcome in. What can I get for you today?",
            translation: "안녕하세요! 어서 오세요. 오늘 어떤 메뉴로 드릴까요?",
            expressions: [
              { phrase: "What can I get for you?", meaning: "무엇을 준비해 드릴까요?" }
            ],
            vocabulary: [
              { word: "today", meaning: "오늘" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Hi! I'm thinking of getting an iced mocha. Does it come with whipped cream on top?",
            translation: "안녕하세요! 아이스 카페모카를 마시려고 하는데요. 위에 휘핑크림이 올라가나요?",
            expressions: [
              { phrase: "I'm thinking of getting ~", meaning: "~을 주문할까 생각 중인데요" },
              { phrase: "Does it come with ~?", meaning: "그 메뉴에 ~이 기본으로 포함되어 나오나요?" }
            ],
            vocabulary: [
              { word: "iced mocha", meaning: "아이스 카페모카" },
              { word: "whipped cream", meaning: "휘핑크림 ('whip cream'이 아닌 'whipped cream')" },
              { word: "on top", meaning: "맨 위에" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Yes, it comes with whipped cream and chocolate drizzle by default.",
            translation: "네, 기본적으로 휘핑크림과 초콜릿 드리즐이 올라갑니다.",
            expressions: [
              { phrase: "by default", meaning: "기본 설정으로, 기본적으로" }
            ],
            vocabulary: [
              { word: "chocolate drizzle", meaning: "초콜릿 드리즐 (가늘게 뿌린 시럽/소스)" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Got it. Could you please hold the whipped cream and do only half the syrup so it's less sweet?",
            translation: "알겠습니다. 휘핑크림은 빼 주시고, 덜 달게 시럽은 절반만 넣어 주시겠어요?",
            expressions: [
              { phrase: "hold the whipped cream", meaning: "휘핑크림을 빼다 ('no whipped cream'과 같은 뜻)" },
              { phrase: "do only half the syrup", meaning: "시럽을 절반만 넣다" }
            ],
            vocabulary: [
              { word: "hold", meaning: "(재료 등을 넣지 않고) 빼다, 보류하다" },
              { word: "syrup", meaning: "시럽" },
              { word: "less sweet", meaning: "덜 단, 당도를 낮춘" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Sure thing! So that's an iced mocha, half sweet, no whip. What size would you like?",
            translation: "물론이죠! 아이스 모카 당도 절반에 휘핑크림 빼고 말이죠. 사이즈는 어떻게 하시겠어요?",
            expressions: [
              { phrase: "half sweet, no whip", meaning: "당도 절반, 휘핑크림 없음 (바리스타들이 주문을 축약해 부르는 표현)" }
            ],
            vocabulary: [
              { word: "no whip", meaning: "휘핑크림 빼기 (no whipped cream의 구어적 축약)" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Large, please. And that'll be all for me, to go.",
            translation: "라지 사이즈로 주세요. 주문은 그게 전부이고, 포장해 갈게요.",
            expressions: [
              { phrase: "That'll be all for me.", meaning: "제 주문은 그게 전부입니다." }
            ],
            vocabulary: [
              { word: "large", meaning: "큰 사이즈 (라지)" },
              { word: "to go", meaning: "포장, 테이크아웃" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Perfect! That'll be $5.75 whenever you're ready.",
            translation: "좋습니다! 총 5달러 75센트입니다. 편하실 때 결제해 주세요.",
            expressions: [
              { phrase: "whenever you're ready", meaning: "손님이 준비되셨을 때 언제든 (재촉하지 않고 결제를 안내하는 정중한 표현)" }
            ],
            vocabulary: [
              { word: "perfect", meaning: "완벽한, 좋습니다" },
              { word: "whenever", meaning: "언제든지" }
            ]
          }
        ]
      }
    ],

    // ==========================================
    // 2. 일본어 (日本語) - 카페 1~3번
    // (원문은 후리가나 없이 깔끔하게 유지, 단어 정리에 한자 후리가나 표기)
    // ==========================================
    ja: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "いらっしゃいませ。ご注文はお決まりですか？",
            translation: "어서 오세요. 주문은 결정하셨나요?",
            expressions: [
              { phrase: "ご注文はお決まりですか？", meaning: "주문하실 메뉴를 정하셨나요? (카페·식당 직원의 기본 응대 표현)" }
            ],
            vocabulary: [
              { word: "注文(ちゅうもん)", meaning: "주문" },
              { word: "決まり(きまり)", meaning: "결정됨, 정해짐" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "アイスアメリカーノ1つと、ブルーベリーマフィンを1つお願いします。",
            translation: "아이스 아메리카노 한 잔과 블루베리 머핀 하나 부탁합니다.",
            expressions: [
              { phrase: "〜を1つお願いします", meaning: "~을 하나 부탁합니다" }
            ],
            vocabulary: [
              { word: "1つ(ひとつ)", meaning: "한 개, 하나" },
              { word: "お願い(おねがい)します", meaning: "부탁합니다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "かしこまりました。アイスアメリカーノのサイズはどうなさいますか？",
            translation: "알겠습니다. 아이스 아메리카노 사이즈는 어떻게 하시겠습니까?",
            expressions: [
              { phrase: "どうなさいますか？", meaning: "어떻게 하시겠습니까? ('どうしますか'의 높임 표현)" }
            ],
            vocabulary: [
              { word: "かしこまりました", meaning: "알겠습니다 (정중한 표현)" },
              { word: "サイズ", meaning: "사이즈, 크기" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Mサイズでお願いします。あと、氷を少なめにしてもらえますか？",
            translation: "M 사이즈로 부탁합니다. 그리고 얼음을 조금만 넣어 주실 수 있나요?",
            expressions: [
              { phrase: "氷を少なめにしてもらえますか？", meaning: "얼음을 적게 해 주실 수 있나요?" }
            ],
            vocabulary: [
              { word: "氷(こおり)", meaning: "얼음" },
              { word: "少なめ(すくなめ)", meaning: "조금 적게, 소량" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "承知いたしました。店内でお召し上がりですか？それともお持ち帰りですか？",
            translation: "알겠습니다. 매장에서 드시나요? 아니면 포장해 가시나요?",
            expressions: [
              { phrase: "店内でお召し上がりですか？", meaning: "매장에서 드시고 가시나요?" },
              { phrase: "お持ち帰りですか？", meaning: "포장(테이크아웃)이신가요?" }
            ],
            vocabulary: [
              { word: "承知(しょうち)いたしました", meaning: "알겠습니다 (정중한 승낙)" },
              { word: "店内(てんない)", meaning: "매장 내" },
              { word: "召し上がり(めしあがり)", meaning: "드심 (먹다·마시다의 높임말 명사형)" },
              { word: "持ち帰り(もちかえり)", meaning: "포장, 테이크아웃" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "店内でお願いします。",
            translation: "매장에서 먹고 갈게요.",
            expressions: [
              { phrase: "店内でお願いします", meaning: "매장 이용으로 부탁드립니다" }
            ],
            vocabulary: [
              { word: "店内(てんない)", meaning: "가게 안, 매장 내부" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "合計で750円になります。こちらにカードをタッチしてください。商品はあちらのカウンターでお渡しします。",
            translation: "총 750엔입니다. 여기에 카드를 터치해 주세요. 상품은 저쪽 카운터에서 전달해 드리겠습니다.",
            expressions: [
              { phrase: "合計で〜円になります", meaning: "총 ~엔입니다" },
              { phrase: "カードをタッチしてください", meaning: "카드를 태그(터치)해 주세요" }
            ],
            vocabulary: [
              { word: "合計(ごうけい)", meaning: "합계, 총액" },
              { word: "円(えん)", meaning: "엔 (일본 화폐 단위)" },
              { word: "商品(しょうひん)", meaning: "상품, 주문 메뉴" },
              { word: "お渡し(おわたし)します", meaning: "건네드리다, 전달해 드리다" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "디카페인 원두 및 우유 변경하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "おはようございます。本日のお飲み物は何になさいますか？",
            translation: "좋은 아침입니다. 오늘 음료는 어떤 것으로 하시겠습니까?",
            expressions: [
              { phrase: "何になさいますか？", meaning: "무엇으로 하시겠습니까? ('何にしますか'의 존경어 표현)" }
            ],
            vocabulary: [
              { word: "本日(ほんじつ)", meaning: "오늘, 금일" },
              { word: "飲み物(のみもの)", meaning: "음료, 마실 것" },
              { word: "何(なに)", meaning: "무엇" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "ホットのバニララテをMサイズでお願いします。ディカフェに変更することはできますか？",
            translation: "따뜻한 바닐라 라떼 M 사이즈로 부탁합니다. 디카페인으로 변경할 수 있나요?",
            expressions: [
              { phrase: "〜に変更することはできますか？", meaning: "~으로 변경하는 것이 가능한가요?" }
            ],
            vocabulary: [
              { word: "ディカフェ", meaning: "디카페인 (일본에서는 カフェインレス라고도 자주 표현함)" },
              { word: "変更(へんこう)する", meaning: "변경하다, 바꾸다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "はい、プラス50円でディカフェに変更可能です。ミルクは通常の牛乳でよろしいですか？",
            translation: "네, 50엔 추가로 디카페인 변경이 가능합니다. 우유는 일반 우유로 해 드리면 될까요?",
            expressions: [
              { phrase: "プラス〜円で変更可能です", meaning: "~엔 추가로 변경 가능합니다" },
              { phrase: "〜でよろしいですか？", meaning: "~으로 괜찮으시겠습니까?" }
            ],
            vocabulary: [
              { word: "円(えん)", meaning: "엔 (화폐 단위)" },
              { word: "可能(かのう)", meaning: "가능" },
              { word: "通常(つうじょう)", meaning: "통상, 일반(기본)" },
              { word: "牛乳(ぎゅうにゅう)", meaning: "우유" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "牛乳ではなく、オーツミルクに変えていただけますか？",
            translation: "일반 우유 말고, 오트 밀크(귀리 우유)로 바꿔 주실 수 있나요?",
            expressions: [
              { phrase: "〜に変えていただけますか？", meaning: "~으로 바꿔 주실 수 있으신가요?" }
            ],
            vocabulary: [
              { word: "牛乳(ぎゅうにゅう)", meaning: "우유" },
              { word: "オーツミルク", meaning: "오트 밀크 (귀리 우유, 두유는 豆乳(とうにゅう))" },
              { word: "変える(かえる)", meaning: "바꾸다, 변경하다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "かしこまりました。オーツミルクへの変更もプラス50円になりますが、よろしいでしょうか？",
            translation: "알겠습니다. 오트 밀크로 변경하는 것도 50엔이 추가되는데 괜찮으신가요?",
            expressions: [
              { phrase: "〜になりますが、よろしいでしょうか？", meaning: "~이 되는데 괜찮으시겠습니까?" }
            ],
            vocabulary: [
              { word: "変更(へんこう)", meaning: "변경" },
              { word: "円(えん)", meaning: "엔" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "はい、大丈夫です。支払いはクレジットカードでお願いします。",
            translation: "네, 괜찮습니다. 결제는 신용카드로 부탁합니다.",
            expressions: [
              { phrase: "支払いは〜でお願いします", meaning: "결제는 ~(수단)으로 부탁합니다" }
            ],
            vocabulary: [
              { word: "大丈夫(だいじょうぶ)", meaning: "괜찮음, 문제없음" },
              { word: "支払い(しはらい)", meaning: "지불, 결제" },
              { word: "クレジットカード", meaning: "신용카드" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "ありがとうございます。レシートの番号でお呼びしますので、少々お待ちください。",
            translation: "감사합니다. 영수증 번호로 불러 드릴 테니 잠시만 기다려 주세요.",
            expressions: [
              { phrase: "番号でお呼びします", meaning: "번호로 호명해 드리겠습니다" },
              { phrase: "少々お待ちください", meaning: "잠시만 기다려 주십시오" }
            ],
            vocabulary: [
              { word: "番号(ばんごう)", meaning: "번호" },
              { word: "呼ぶ(よぶ)", meaning: "부르다, 호명하다" },
              { word: "少々(しょうしょう)", meaning: "잠시, 조금" },
              { word: "待つ(まつ)", meaning: "기다리다" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "시럽 양 조절 및 휘핑크림 빼기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "こんにちは！ご注文をお伺いいたします。",
            translation: "안녕하세요! 주문을 도와드리겠습니다.",
            expressions: [
              { phrase: "ご注文をお伺いいたします", meaning: "주문을 여쭙겠습니다 (점원이 주문을 받을 때 쓰는 정중한 겸양 표현)" }
            ],
            vocabulary: [
              { word: "注文(ちゅうもん)", meaning: "주문" },
              { word: "伺う(うかがう)", meaning: "여쭙다, 듣다 (겸양어)" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "アイスのカフェモカをお願いします。上にホイップクリームは乗っていますか？",
            translation: "아이스 카페모카 부탁합니다. 위에 휘핑크림이 올라가 있나요?",
            expressions: [
              { phrase: "上に〜は乗っていますか？", meaning: "위에 ~이 올라가(토핑되어) 있나요?" }
            ],
            vocabulary: [
              { word: "上(うえ)", meaning: "위" },
              { word: "ホイップクリーム", meaning: "휘핑크림" },
              { word: "乗る(のる)", meaning: "올라가다, 얹어지다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "はい、通常はホイップクリームとチョコレートソースが乗っております。",
            translation: "네, 기본적으로는 휘핑크림과 초콜릿 소스가 올라갑니다.",
            expressions: [
              { phrase: "通常は〜が乗っております", meaning: "기본적으로는 ~이 올라가 있습니다" }
            ],
            vocabulary: [
              { word: "通常(つうじょう)", meaning: "통상, 보통(기본)" },
              { word: "乗る(のる)", meaning: "(토핑 등이) 얹히다, 올라가다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "では、ホイップクリームは抜きでお願いします。あと、シロップも半分に減らせますか？",
            translation: "그럼 휘핑크림은 빼 주세요. 그리고 시럽도 절반으로 줄일 수 있나요?",
            expressions: [
              { phrase: "〜は抜きでお願いします", meaning: "~은 빼고 주세요 (고수, 와사비, 크림 등을 뺄 때 필수 표현)" },
              { phrase: "半分に減らせますか？", meaning: "절반으로 줄일 수 있나요?" }
            ],
            vocabulary: [
              { word: "抜き(ぬき)", meaning: "뺌, 제외함" },
              { word: "半分(はんぶん)", meaning: "절반, 반" },
              { word: "減らす(へらす)", meaning: "(양을) 줄이다, 덜다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "承知いたしました。ホイップ抜き、シロップ少なめですね。サイズはいかがなさいますか？",
            translation: "알겠습니다. 휘핑크림 빼고 시럽 적게 말씀이시죠. 사이즈는 어떻게 하시겠습니까?",
            expressions: [
              { phrase: "サイズはいかがなさいますか？", meaning: "사이즈는 어떻게 하시겠습니까?" }
            ],
            vocabulary: [
              { word: "承知(しょうち)いたしました", meaning: "알겠습니다" },
              { word: "抜き(ぬき)", meaning: "제외, 뺌" },
              { word: "少なめ(すくなめ)", meaning: "적게, 소량" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Lサイズで、持ち帰りでお願いします。注文は以上です。",
            translation: "L 사이즈로 하고, 포장으로 부탁합니다. 주문은 이상입니다.",
            expressions: [
              { phrase: "注文は以上です", meaning: "주문은 이상(여기까지)입니다" }
            ],
            vocabulary: [
              { word: "持ち帰り(もちかえり)", meaning: "포장, 테이크아웃" },
              { word: "注文(ちゅうもん)", meaning: "주문" },
              { word: "以上(いじょう)", meaning: "이상, 끝" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "かしこまりました。お会計は620円になります。すぐにお作りいたしますね。",
            translation: "알겠습니다. 결제 금액은 620엔입니다. 바로 만들어 드리겠습니다.",
            expressions: [
              { phrase: "お会計は〜円になります", meaning: "계산(결제 금액)은 ~엔입니다" },
              { phrase: "すぐにお作りいたします", meaning: "바로 만들어 드리겠습니다" }
            ],
            vocabulary: [
              { word: "会計(かいけい)", meaning: "계산, 회계" },
              { word: "円(えん)", meaning: "엔" },
              { word: "作る(つくる)", meaning: "만들다, 제조하다" }
            ]
          }
        ]
      }
    ],

    // ==========================================
    // 3. 중국어 (中文) - 카페 1~3번
    // ==========================================
    zh: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "您好！欢迎光临。请问今天想喝点什么？",
            translation: "안녕하세요! 어서 오세요. 오늘 어떤 음료를 드시겠어요?",
            expressions: [
              { phrase: "请问今天想喝点什么？", meaning: "오늘 무엇을 마시고 싶으신가요?" }
            ],
            vocabulary: [
              { word: "欢迎光临 (huānyíng guānglín)", meaning: "어서 오세요" },
              { word: "喝 (hē)", meaning: "마시다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "您好！请给我一杯冰美式和一个蓝莓马芬。",
            translation: "안녕하세요! 아이스 아메리카노 한 잔과 블루베리 머핀 하나 주세요.",
            expressions: [
              { phrase: "请给我 ~", meaning: "저에게 ~을 주세요" }
            ],
            vocabulary: [
              { word: "冰美式 (bīng měishì)", meaning: "아이스 아메리카노" },
              { word: "蓝莓马芬 (lánméi mǎfēn)", meaning: "블루베리 머핀" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "好的。请问冰美式需要中杯还是大杯？",
            translation: "네. 아이스 아메리카노는 미디엄 사이즈로 드릴까요, 라지 사이즈로 드릴까요?",
            expressions: [
              { phrase: "需要 A 还是 B？", meaning: "A로 하시겠어요, 아니면 B로 하시겠어요?" }
            ],
            vocabulary: [
              { word: "中杯 (zhōngbēi)", meaning: "미디엄(중간) 사이즈" },
              { word: "大杯 (dàbēi)", meaning: "라지(큰) 사이즈" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "要中杯，谢谢。另外，可以做成少冰吗？",
            translation: "미디엄 사이즈로 할게요, 감사합니다. 그리고 얼음을 적게 해 주실 수 있나요?",
            expressions: [
              { phrase: "可以做成少冰吗？", meaning: "얼음을 적게 만들어 주실 수 있나요?" }
            ],
            vocabulary: [
              { word: "另外 (lìngwài)", meaning: "그 밖에, 추가로" },
              { word: "少冰 (shǎobīng)", meaning: "얼음 적게 (아예 빼는 것은 去冰 qùbīng)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "没问题。请问是在这里用还是打包带走？",
            translation: "문제없습니다. 매장에서 드시나요, 아니면 포장해 가시나요?",
            expressions: [
              { phrase: "在这里用还是打包带走？", meaning: "여기서 드시나요, 포장해 가시나요?" }
            ],
            vocabulary: [
              { word: "打包 (dǎbāo)", meaning: "포장하다" },
              { word: "带走 (dàizǒu)", meaning: "가지고 가다 (테이크아웃)" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "在这里用。",
            translation: "매장에서 먹고 갈게요.",
            expressions: [
              { phrase: "在这里用", meaning: "여기서 먹고 가다 (매장 이용)" }
            ],
            vocabulary: [
              { word: "这里 (zhèlǐ)", meaning: "여기, 이곳" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "好的，一共是三十五元。您可以在这里刷卡，稍后请在取餐台取餐！",
            translation: "좋습니다, 총 35위안입니다. 여기에 카드를 찍어 주시면 되고, 잠시 후 픽업대에서 메뉴를 수령해 주세요!",
            expressions: [
              { phrase: "一共是 ~ 元", meaning: "모두 합쳐서 ~위안입니다" }
            ],
            vocabulary: [
              { word: "刷卡 (shuākǎ)", meaning: "카드를 긁다/찍다" },
              { word: "取餐台 (qǔcāntái)", meaning: "픽업대, 음식 수령대" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "디카페인 원두 및 우유 변경하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "早上好！请问今天想喝点什么？",
            translation: "좋은 아침입니다! 오늘 어떤 음료를 드시겠어요?",
            expressions: [
              { phrase: "早上好！", meaning: "좋은 아침입니다!" }
            ],
            vocabulary: [
              { word: "早上 (zǎoshang)", meaning: "아침" },
              { word: "请问 (qǐngwèn)", meaning: "실례지만 여쭙겠습니다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "您好！我想要一杯中杯的热香草拿铁，可以换成低因咖啡吗？",
            translation: "안녕하세요! 따뜻한 바닐라 라떼 미디엄 사이즈 한 잔 주시고, 디카페인 커피로 바꿀 수 있나요?",
            expressions: [
              { phrase: "可以换成 ~ 吗？", meaning: "~으로 변경할 수 있나요?" }
            ],
            vocabulary: [
              { word: "热香草拿铁 (rè xiāngcǎo nátiě)", meaning: "따뜻한 바닐라 라떼" },
              { word: "低因咖啡 (dīyīn kāfēi)", meaning: "디카페인 커피" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "当然可以，我们可以做低因浓缩。牛奶需要用普通全脂牛奶吗？",
            translation: "물론이죠, 디카페인 에스프레소로 가능합니다. 우유는 일반 전지우유로 해 드릴까요?",
            expressions: [
              { phrase: "当然可以", meaning: "당연히 가능합니다, 물론이죠" }
            ],
            vocabulary: [
              { word: "浓缩 (nóngsuō)", meaning: "에스프레소 (浓缩咖啡의 줄임말)" },
              { word: "全脂牛奶 (quánzhī niúnǎi)", meaning: "일반(전지) 우유" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "可以把普通牛奶换成燕麦奶吗？",
            translation: "일반 우유를 오트 밀크(귀리 우유)로 바꿔 주실 수 있나요?",
            expressions: [
              { phrase: "把 A 换成 B", meaning: "A를 B로 바꾸다(변경하다)" }
            ],
            vocabulary: [
              { word: "燕麦奶 (yànmàinǎi)", meaning: "오트 밀크 (귀리 우유, 두유는 豆奶 dòunǎi)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "好的！跟您说明一下，换燕麦奶需要额外加收五元，可以吗？",
            translation: "네! 안내 말씀드리자면, 오트 밀크로 변경 시 5위안이 추가되는데 괜찮으신가요?",
            expressions: [
              { phrase: "跟您说明一下", meaning: "잠깐 안내(설명) 말씀드리겠습니다" },
              { phrase: "额外加收 ~ 元", meaning: "추가로 ~위안의 요금을 받다" }
            ],
            vocabulary: [
              { word: "额外 (éwài)", meaning: "추가의, 별도의" },
              { word: "加收 (jiāshōu)", meaning: "추가 징수하다, 더 받다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "没问题，我扫二维码支付。",
            translation: "문제없습니다, QR 코드를 스캔해서 결제할게요.",
            expressions: [
              { phrase: "扫二维码支付", meaning: "QR 코드를 스캔하여 결제하다" }
            ],
            vocabulary: [
              { word: "二维码 (èrwéimǎ)", meaning: "QR 코드" },
              { word: "支付 (zhīfù)", meaning: "지불하다, 결제하다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "支付成功！做好后会叫您的取餐号，请稍等。",
            translation: "결제 완료되었습니다! 음료가 완성되면 픽업 번호를 불러 드릴 테니 잠시만 기다려 주세요.",
            expressions: [
              { phrase: "做好后会叫您的取餐号", meaning: "다 만들어지면 픽업 번호를 불러 드리겠습니다" }
            ],
            vocabulary: [
              { word: "取餐号 (qǔcānhào)", meaning: "픽업 번호, 대기 번호" },
              { word: "稍等 (shāoděng)", meaning: "잠시 기다리다" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "시럽 양 조절 및 휘핑크림 빼기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "您好！欢迎光临，请问需要点什么？",
            translation: "안녕하세요! 어서 오세요, 어떤 메뉴를 주문하시겠어요?",
            expressions: [
              { phrase: "请问需要点什么？", meaning: "무엇을 주문하시겠습니까?" }
            ],
            vocabulary: [
              { word: "点 (diǎn)", meaning: "(메뉴를) 주문하다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "您好！我想点一杯冰摩卡。请问上面会有奶油吗？",
            translation: "안녕하세요! 아이스 카페모카 한 잔 주문하려는데요. 위에 휘핑크림이 올라가나요?",
            expressions: [
              { phrase: "上面会有 ~ 吗？", meaning: "위에 ~이 올라가나요(있나요)?" }
            ],
            vocabulary: [
              { word: "冰摩卡 (bīng mókǎ)", meaning: "아이스 카페모카" },
              { word: "奶油 (nǎiyóu)", meaning: "크림, 휘핑크림" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "是的，默认会加上奶油和巧克力酱。",
            translation: "네, 기본적으로 휘핑크림과 초콜릿 소스가 올라갑니다.",
            expressions: [
              { phrase: "默认会加上 ~", meaning: "기본 설정으로 ~이 추가됩니다" }
            ],
            vocabulary: [
              { word: "默认 (mòrèn)", meaning: "기본 설정, 디폴트" },
              { word: "巧克力酱 (qiǎokèlì jiàng)", meaning: "초콜릿 소스/드리즐" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "好的，那请帮我去掉奶油。另外，糖浆可以减半吗？我不想喝太甜。",
            translation: "네, 그럼 휘핑크림은 빼 주세요. 그리고 시럽은 절반으로 줄여 주실 수 있나요? 너무 달게 마시고 싶지 않아서요.",
            expressions: [
              { phrase: "帮我去掉奶油", meaning: "휘핑크림을 빼 주세요 ('不要奶油'라고 해도 됨)" },
              { phrase: "糖浆可以减半吗？", meaning: "시럽을 절반으로 줄일 수 있나요? (반당은 半糖 bàntáng)" }
            ],
            vocabulary: [
              { word: "去掉 (qùdiào)", meaning: "빼다, 제거하다" },
              { word: "糖浆 (tángjiāng)", meaning: "시럽" },
              { word: "减半 (jiǎnbàn)", meaning: "절반으로 줄이다" },
              { word: "甜 (tián)", meaning: "달다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "没问题！冰摩卡去奶油、半糖。请问需要什么杯型？",
            translation: "문제없습니다! 아이스 모카 휘핑크림 빼고 당도 절반이요. 컵 사이즈는 어떻게 하시겠어요?",
            expressions: [
              { phrase: "去奶油、半糖", meaning: "크림 빼고, 당도 절반" },
              { phrase: "需要什么杯型？", meaning: "어떤 컵 사이즈로 하시겠어요?" }
            ],
            vocabulary: [
              { word: "半糖 (bàntáng)", meaning: "당도 50% (절반 당도)" },
              { word: "杯型 (bēixíng)", meaning: "컵 사이즈" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "要大杯，打包带走。就这些，谢谢。",
            translation: "라지 사이즈로 주시고, 포장해 갈게요. 주문은 이게 전부입니다, 감사합니다.",
            expressions: [
              { phrase: "就这些", meaning: "이게 전부입니다 / 여기까지입니다" }
            ],
            vocabulary: [
              { word: "大杯 (dàbēi)", meaning: "라지 사이즈" },
              { word: "打包带走 (dǎbāo dàizǒu)", meaning: "포장해 가다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "好的，一共是三十二元。马上为您制作！",
            translation: "네, 총 32위안입니다. 바로 만들어 드리겠습니다!",
            expressions: [
              { phrase: "马上为您制作", meaning: "즉시 제조해 드리겠습니다" }
            ],
            vocabulary: [
              { word: "制作 (zhìzuò)", meaning: "만들다, 제조하다" }
            ]
          }
        ]
      }
    ],

    // ==========================================
    // 4. 베트남어 (Tiếng Việt) - 카페 1~3번
    // ==========================================
    vi: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "Xin chào! Chào mừng quý khách. Hôm nay quý khách muốn dùng gì ạ?",
            translation: "안녕하세요! 어서 오세요. 오늘 어떤 메뉴를 드시겠어요?",
            expressions: [
              { phrase: "Quý khách muốn dùng gì ạ?", meaning: "손님, 무엇을 드시겠습니까?" }
            ],
            vocabulary: [
              { word: "quý khách", meaning: "손님, 고객님" },
              { word: "dùng", meaning: "(음식·음료를) 드시다, 사용하다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Xin chào! Cho tôi một ly Americano đá và một bánh muffin việt quất nhé.",
            translation: "안녕하세요! 아이스 아메리카노 한 잔과 블루베리 머핀 하나 주세요.",
            expressions: [
              { phrase: "Cho tôi ~ nhé", meaning: "저에게 ~을 주세요" }
            ],
            vocabulary: [
              { word: "đá", meaning: "얼음 (아이스)" },
              { word: "việt quất", meaning: "블루베리" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ vâng. Quý khách muốn chọn cỡ nào cho ly Americano đá ạ?",
            translation: "네, 알겠습니다. 아이스 아메리카노는 어떤 사이즈로 하시겠어요?",
            expressions: [
              { phrase: "chọn cỡ nào", meaning: "어떤 사이즈를 선택하다" }
            ],
            vocabulary: [
              { word: "cỡ", meaning: "사이즈, 크기" },
              { word: "ly", meaning: "잔, 컵" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Cho tôi cỡ vừa nhé. À, bạn cho ít đá giúp tôi được không?",
            translation: "미디엄 사이즈로 주세요. 아, 얼음은 조금만 넣어 주실 수 있나요?",
            expressions: [
              { phrase: "cho ít đá giúp tôi", meaning: "얼음을 적게 넣어 주세요" }
            ],
            vocabulary: [
              { word: "cỡ vừa", meaning: "중간(미디엄) 사이즈" },
              { word: "ít đá", meaning: "얼음 적게" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ được ạ. Quý khách dùng tại quán hay mang đi ạ?",
            translation: "네, 가능합니다. 매장에서 드시나요, 아니면 가져가시나요?",
            expressions: [
              { phrase: "dùng tại quán hay mang đi", meaning: "매장에서 드실지 포장해 가실지 묻는 표현" }
            ],
            vocabulary: [
              { word: "tại quán", meaning: "매장에서" },
              { word: "mang đi", meaning: "가지고 가다 (테이크아웃)" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Tôi dùng tại quán nhé.",
            translation: "매장에서 먹고 갈게요.",
            expressions: [
              { phrase: "Tôi dùng tại quán", meaning: "매장에서 먹고 가겠습니다" }
            ],
            vocabulary: [
              { word: "quán", meaning: "가게, 매장" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ, tổng cộng của quý khách là 95.000 đồng. Quý khách có thể chạm thẻ ở đây và nhận đồ tại quầy nhé!",
            translation: "네, 총 95,000동입니다. 여기에 카드를 태그해 주시고 픽업대에서 메뉴를 수령해 주세요!",
            expressions: [
              { phrase: "chạm thẻ ở đây", meaning: "여기에 카드를 태그하다" }
            ],
            vocabulary: [
              { word: "tổng cộng", meaning: "총액, 합계" },
              { word: "chạm thẻ", meaning: "카드를 터치(태그)하다" },
              { word: "quầy", meaning: "카운터, 픽업대" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "디카페인 원두 및 우유 변경하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "Chào buổi sáng! Hôm nay quý khách muốn uống gì ạ?",
            translation: "좋은 아침입니다! 오늘 어떤 음료를 마시고 싶으신가요?",
            expressions: [
              { phrase: "Chào buổi sáng!", meaning: "좋은 아침입니다!" }
            ],
            vocabulary: [
              { word: "buổi sáng", meaning: "아침, 오전" },
              { word: "uống", meaning: "마시다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Xin chào! Cho tôi một ly latte ваni nóng cỡ vừa, và đổi sang cà phê không caffein được không?",
            translation: "안녕하세요! 따뜻한 바닐라 라떼 미디엄 사이즈 한 잔 주시고, 디카페인 커피로 바꿀 수 있나요?",
            expressions: [
              { phrase: "đổi sang ~ được không?", meaning: "~으로 변경할 수 있나요?" }
            ],
            vocabulary: [
              { word: "nóng", meaning: "따뜻한, 뜨거운" },
              { word: "cà phê không caffein", meaning: "디카페인 커피 (decaf)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ được chứ ạ. Quý khách có muốn dùng sữa tươi thông thường không ạ?",
            translation: "네, 물론 가능합니다. 우유는 일반 우유로 넣어 드릴까요?",
            expressions: [
              { phrase: "Dạ được chứ ạ", meaning: "네, 물론 가능합니다 (공손한 긍정)" }
            ],
            vocabulary: [
              { word: "sữa tươi", meaning: "신선한 우유, 일반 우유" },
              { word: "thông thường", meaning: "일반적인, 보통의" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "À, bạn có thể đổi sữa tươi sang sữa yến mạch giúp tôi được không?",
            translation: "아, 일반 우유를 오트 밀크(귀리 우유)로 바꿔 주실 수 있나요?",
            expressions: [
              { phrase: "đổi A sang B giúp tôi", meaning: "저를 위해 A를 B로 바꿔 주다" }
            ],
            vocabulary: [
              { word: "sữa yến mạch", meaning: "오트 밀크, 귀리 우유 (두유는 sữa đậu nành)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ vâng! Xin báo trước với quý khách là đổi sang sữa yến mạch sẽ phụ thu thêm 15.000 đồng nhé ạ.",
            translation: "네! 미리 안내해 드리자면 오트 밀크로 변경 시 15,000동의 추가 요금이 있습니다.",
            expressions: [
              { phrase: "phụ thu thêm ~", meaning: "~의 추가 요금이 붙다" }
            ],
            vocabulary: [
              { word: "báo trước", meaning: "미리 알리다, 사전 안내하다" },
              { word: "phụ thu", meaning: "추가 요금" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Vâng, không sao đâu. Tôi sẽ thanh toán bằng thẻ nhé.",
            translation: "네, 괜찮습니다. 카드로 결제할게요.",
            expressions: [
              { phrase: "thanh toán bằng thẻ", meaning: "카드로 결제하다" }
            ],
            vocabulary: [
              { word: "không sao đâu", meaning: "괜찮습니다, 문제없습니다" },
              { word: "thanh toán", meaning: "결제하다, 계산하다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Cảm ơn quý khách! Khi nào đồ uống xong, chúng tôi sẽ gọi theo số trên hóa đơn ạ.",
            translation: "감사합니다! 음료가 준비되면 영수증에 적힌 번호로 불러 드리겠습니다.",
            expressions: [
              { phrase: "gọi theo số trên hóa đơn", meaning: "영수증의 번호대로 부르다" }
            ],
            vocabulary: [
              { word: "đồ uống", meaning: "음료" },
              { word: "hóa đơn", meaning: "영수증, 계산서" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "시럽 양 조절 및 휘핑크림 빼기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "Xin chào! Quý khách muốn gọi món gì hôm nay ạ?",
            translation: "안녕하세요! 오늘 어떤 메뉴를 주문하시겠어요?",
            expressions: [
              { phrase: "Quý khách muốn gọi món gì?", meaning: "어떤 메뉴를 주문하시겠습니까?" }
            ],
            vocabulary: [
              { word: "gọi món", meaning: "메뉴를 주문하다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Chào bạn! Tôi định gọi một ly mocha đá. Món này có kem tươi ở trên không?",
            translation: "안녕하세요! 아이스 카페모카를 주문하려는데요. 이 메뉴는 위에 휘핑크림이 올라가나요?",
            expressions: [
              { phrase: "Món này có ~ ở trên không?", meaning: "이 메뉴는 위에 ~이 올라가나요?" }
            ],
            vocabulary: [
              { word: "mocha đá", meaning: "아이스 카페모카" },
              { word: "kem tươi", meaning: "휘핑크림, 생크림" },
              { word: "ở trên", meaning: "위에" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ có ạ, theo mặc định sẽ có kem tươi và sốt sô-cô-la ở trên.",
            translation: "네, 기본적으로 위에 휘핑크림과 초콜릿 소스가 올라갑니다.",
            expressions: [
              { phrase: "theo mặc định", meaning: "기본적으로, 기본 레시피에 따라" }
            ],
            vocabulary: [
              { word: "mặc định", meaning: "기본값, 기본 설정" },
              { word: "sốt sô-cô-la", meaning: "초콜릿 소스" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Vậy bạn đừng bỏ kem tươi nhé. Và cho tôi giảm một nửa lượng si-rô để đỡ ngọt hơn được không?",
            translation: "그럼 휘핑크림은 넣지 말아 주세요. 그리고 덜 달게 시럽 양을 절반으로 줄여 주실 수 있나요?",
            expressions: [
              { phrase: "đừng bỏ kem tươi", meaning: "휘핑크림을 넣지 마세요 ('không lấy kem tươi'라고도 표현)" },
              { phrase: "giảm một nửa lượng si-rô", meaning: "시럽 양을 절반으로 줄이다" }
            ],
            vocabulary: [
              { word: "một nửa", meaning: "절반 (50%)" },
              { word: "si-rô", meaning: "시럽" },
              { word: "đỡ ngọt", meaning: "덜 달다 (적게 달다는 ít ngọt)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ được ạ! Một mocha đá không kem tươi, giảm nửa đường. Quý khách chọn cỡ nào ạ?",
            translation: "네, 알겠습니다! 아이스 모카 휘핑크림 빼고 당도 절반이요. 사이즈는 어떻게 하시겠어요?",
            expressions: [
              { phrase: "không kem tươi, giảm nửa đường", meaning: "휘핑크림 빼고, 당도 절반" }
            ],
            vocabulary: [
              { word: "đường", meaning: "설탕, 당도" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Cho tôi cỡ lớn, mang đi nhé. Của tôi hết rồi.",
            translation: "라지 사이즈로 주시고, 포장해 갈게요. 제 주문은 이게 전부입니다.",
            expressions: [
              { phrase: "Của tôi hết rồi.", meaning: "제 주문은 끝났습니다(전부입니다)." }
            ],
            vocabulary: [
              { word: "cỡ lớn", meaning: "큰 사이즈 (라지)" },
              { word: "mang đi", meaning: "포장, 테이크아웃" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ vâng, tổng cộng là 65.000 đồng. Chúng tôi sẽ làm ngay cho quý khách!",
            translation: "네, 총 65,000동입니다. 바로 만들어 드리겠습니다!",
            expressions: [
              { phrase: "sẽ làm ngay", meaning: "바로 만들어 드리겠습니다" }
            ],
            vocabulary: [
              { word: "làm ngay", meaning: "즉시 만들다" }
            ]
          }
        ]
      }
    ],

    // ==========================================
    // 5. 아랍어 (العربية) - 카페 1~3번
    // ==========================================
    ar: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "مرحباً بك! أهلاً وسهلاً. ماذا تحب أن تطلب اليوم؟",
            translation: "안녕하세요! 어서 오세요. 오늘 어떤 메뉴를 주문하시겠어요?",
            expressions: [
              { phrase: "ماذا تحب أن تطلب اليوم؟", meaning: "오늘 무엇을 주문하고 싶으신가요?" }
            ],
            vocabulary: [
              { word: "أهلاً وسهلاً (ahlan wa sahlan)", meaning: "환영합니다, 어서 오세요" },
              { word: "تطلب (tatlub)", meaning: "(당신이) 주문하다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "مرحباً! هل يمكنني الحصول على أمريكانو مثلج ومافن بالتوت الأزرق، من فضلك؟",
            translation: "안녕하세요! 아이스 아메리카노 한 잔과 블루베리 머핀 하나 주시겠어요?",
            expressions: [
              { phrase: "هل يمكنني الحصول على ~ من فضلك؟", meaning: "~을 주시겠어요? (정중한 주문 표현)" }
            ],
            vocabulary: [
              { word: "مثلج (muthallaj)", meaning: "차가운, 얼음이 든 (아이스)" },
              { word: "التوت الأزرق (at-tūt al-azraq)", meaning: "블루베리" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "بالتأكيد. أي حجم تفضل للأمريكانو المثلج؟",
            translation: "물론이죠. 아이스 아메리카노는 어떤 사이즈로 드릴까요?",
            expressions: [
              { phrase: "أي حجم تفضل؟", meaning: "어떤 사이즈를 선호하시나요?" }
            ],
            vocabulary: [
              { word: "بالتأكيد (bit-ta'kīd)", meaning: "물론이죠, 확실히" },
              { word: "حجم (hajm)", meaning: "사이즈, 크기" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "الحجم المتوسط، من فضلك. وهل يمكنك تقليل الثلج؟",
            translation: "미디엄 사이즈로 주세요. 그리고 얼음을 조금만 넣어 주시겠어요?",
            expressions: [
              { phrase: "هل يمكنك تقليل الثلج؟", meaning: "얼음을 줄여 주실 수 있나요?" }
            ],
            vocabulary: [
              { word: "المتوسط (al-mutawassit)", meaning: "중간 (미디엄)" },
              { word: "تقليل (taqlīl)", meaning: "줄이기, 적게 함" },
              { word: "الثلج (ath-thalj)", meaning: "얼음" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "لا مشكلة على الإطلاق. هل الطلب هنا أم سفري؟",
            translation: "전혀 문제없습니다. 매장에서 드시나요, 아니면 포장해 가시나요?",
            expressions: [
              { phrase: "هنا أم سفري؟", meaning: "매장 식사인가요, 포장(테이크아웃)인가요?" }
            ],
            vocabulary: [
              { word: "هنا (hunā)", meaning: "여기서 (매장 내)" },
              { word: "سفري (safarī)", meaning: "테이크아웃, 포장용" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "هنا، من فضلك.",
            translation: "매장에서 먹고 갈게요.",
            expressions: [
              { phrase: "هنا، من فضلك", meaning: "여기서 먹고 갈게요" }
            ],
            vocabulary: [
              { word: "من فضلك (min fadlik)", meaning: "부탁합니다 (Please)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "ممتاز، المجموع هو 28 ريالاً. يمكنك تمرير بطاقتك هنا، وسيكون طلبك جاهزاً عند مكتب الاستلام قريباً!",
            translation: "좋습니다, 총 28리얄입니다. 여기에 카드를 태그해 주시면 되고, 주문하신 메뉴는 곧 픽업대에서 준비됩니다!",
            expressions: [
              { phrase: "المجموع هو ~", meaning: "총 금액은 ~입니다" },
              { phrase: "تمرير بطاقتك", meaning: "카드를 단말기에 태그하다" }
            ],
            vocabulary: [
              { word: "المجموع (al-majmū')", meaning: "총계, 합계" },
              { word: "بطاقتك (bitāqatak)", meaning: "당신의 카드" },
              { word: "مكتب الاستلام (maktab al-istilām)", meaning: "수령대, 픽업 카운터" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "디카페인 원두 및 우유 변경하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "صباح الخير! ماذا تحب أن تشرب اليوم؟",
            translation: "좋은 아침입니다! 오늘 어떤 음료를 마시고 싶으신가요?",
            expressions: [
              { phrase: "صباح الخير!", meaning: "좋은 아침입니다! (Sabāh al-khayr)" }
            ],
            vocabulary: [
              { word: "صباح (sabāh)", meaning: "아침" },
              { word: "تشرب (tashrab)", meaning: "마시다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "مرحباً! أريد لاتيه فانيليا ساخن بحجم متوسط، وهل يمكن جعله بدون كافيين؟",
            translation: "안녕하세요! 따뜻한 바닐라 라떼 미디엄 사이즈로 주시고, 디카페인으로 해 주실 수 있나요?",
            expressions: [
              { phrase: "هل يمكن جعله بدون كافيين؟", meaning: "디카페인으로 만들어 주실 수 있나요?" }
            ],
            vocabulary: [
              { word: "ساخن (sākhin)", meaning: "따뜻한, 뜨거운" },
              { word: "بدون كافيين (bidūn kāfiyīn)", meaning: "디카페인 (카페인 없음)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "بالتأكيد، لدينا إسبريسو بدون كافيين. هل تفضل الحليب العادي؟",
            translation: "물론이죠, 디카페인 에스프레소가 준비되어 있습니다. 일반 우유로 넣어 드릴까요?",
            expressions: [
              { phrase: "هل تفضل الحليب العادي؟", meaning: "일반 우유를 선호하시나요?" }
            ],
            vocabulary: [
              { word: "لدينا (ladaynā)", meaning: "저희에게 ~이 있습니다" },
              { word: "الحليب العادي (al-halīb al-'ādī)", meaning: "일반 우유" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "في الواقع، هل يمكنك استبدال الحليب العادي بحليب الشوفان، من فضلك؟",
            translation: "아, 일반 우유 대신 오트 밀크(귀리 우유)로 변경해 주실 수 있을까요?",
            expressions: [
              { phrase: "استبدال A بـ B", meaning: "A를 B로 대체하다(변경하다)" }
            ],
            vocabulary: [
              { word: "في الواقع (fī al-wāqi')", meaning: "실은, 사실은" },
              { word: "حليب الشوفان (halīb ash-shūfān)", meaning: "오트 밀크 (귀리 우유)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "طبعاً! للعلم فقط، هناك رسوم إضافية بقيمة 3 ريالات لحليب الشوفان. هل هذا مناسب؟",
            translation: "물론입니다! 참고로 오트 밀크 변경 시 3리얄의 추가 요금이 있는데 괜찮으신가요?",
            expressions: [
              { phrase: "للعلم فقط", meaning: "참고로 말씀드리자면" },
              { phrase: "رسوم إضافية", meaning: "추가 요금" }
            ],
            vocabulary: [
              { word: "رسوم (rusūm)", meaning: "요금, 수수료" },
              { word: "مناسب (munāsib)", meaning: "적절한, 괜찮은" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "نعم، لا بأس. سأدفع بالبطاقة.",
            translation: "네, 괜찮습니다. 카드로 결제할게요.",
            expressions: [
              { phrase: "سأدفع بالبطاقة", meaning: "카드로 결제하겠습니다" }
            ],
            vocabulary: [
              { word: "لا بأس (lā ba's)", meaning: "괜찮습니다, 문제없습니다" },
              { word: "سأدفع (sa-adfa')", meaning: "제가 지불하겠습니다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "شكراً لك! سننادي برقم الفاتورة عندما يكون مشروبك جاهزاً.",
            translation: "감사합니다! 음료가 준비되면 영수증 번호로 불러 드리겠습니다.",
            expressions: [
              { phrase: "سننادي برقم الفاتورة", meaning: "영수증 번호로 호명하겠습니다" }
            ],
            vocabulary: [
              { word: "رقم الفاتورة (raqm al-fātūra)", meaning: "영수증 번호" },
              { word: "مشروبك (mashrūbak)", meaning: "당신의 음료" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "시럽 양 조절 및 휘핑크림 빼기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "أهلاً بك! ماذا تحب أن تطلب اليوم؟",
            translation: "환영합니다! 오늘 어떤 메뉴를 주문하시겠어요?",
            expressions: [
              { phrase: "أهلاً بك!", meaning: "환영합니다! / 어서 오세요!" }
            ],
            vocabulary: [
              { word: "اليوم (al-yawm)", meaning: "오늘" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "مرحباً! أفكر في طلب موكا مثلجة. هل تأتي مع كريمة مخفوقة في الأعلى؟",
            translation: "안녕하세요! 아이스 카페모카를 주문하려는데요. 위에 휘핑크림이 올라가나요?",
            expressions: [
              { phrase: "هل تأتي مع ~؟", meaning: "~이 함께 포함되어 나오나요?" }
            ],
            vocabulary: [
              { word: "موكا مثلجة (mūkā muthallaja)", meaning: "아이스 모카" },
              { word: "كريمة مخفوقة (karīma makhfūqa)", meaning: "휘핑크림" },
              { word: "في الأعلى (fī al-a'lā)", meaning: "맨 위에" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "نعم، تأتي بشكل أساسي مع كريمة مخفوقة وصوص الشوكولاتة.",
            translation: "네, 기본적으로 휘핑크림과 초콜릿 소스가 함께 올라갑니다.",
            expressions: [
              { phrase: "بشكل أساسي", meaning: "기본적으로" }
            ],
            vocabulary: [
              { word: "أساسي (asāsī)", meaning: "기본적인" },
              { word: "صوص الشوكولاتة (sūs ash-shūkūlāta)", meaning: "초콜릿 소스" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "حسناً، هل يمكنك تحضيرها بدون كريمة مخفوقة، ووضع نصف كمية الشراب فقط لتكون أقل حلاوة؟",
            translation: "알겠습니다, 휘핑크림은 빼 주시고 덜 달게 시럽은 절반만 넣어 주시겠어요?",
            expressions: [
              { phrase: "بدون كريمة مخفوقة", meaning: "휘핑크림 없이 (빼고)" },
              { phrase: "نصف كمية الشراب", meaning: "시럽 양의 절반" }
            ],
            vocabulary: [
              { word: "بدون (bidūn)", meaning: "~ 없이" },
              { word: "نصف (nisf)", meaning: "절반 (1/2)" },
              { word: "الشراب (ash-sharāb)", meaning: "시럽" },
              { word: "أقل حلاوة (aqall halāwa)", meaning: "덜 단, 당도가 낮은" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "بكل سرور! موكا مثلجة بدون كريمة وبنصف حلاوة. أي حجم تريد؟",
            translation: "기꺼이 해 드리겠습니다! 아이스 모카 휘핑크림 빼고 당도 절반이요. 어떤 사이즈로 드릴까요?",
            expressions: [
              { phrase: "بدون كريمة وبنصف حلاوة", meaning: "크림 빼고 절반 당도로" }
            ],
            vocabulary: [
              { word: "بكل سرور (bi-kulli surūr)", meaning: "기꺼이, 즐거이" },
              { word: "حلاوة (halāwa)", meaning: "단맛, 당도" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "الحجم الكبير، وسفري من فضلك. هذا كل شيء.",
            translation: "라지 사이즈로 주시고, 포장으로 부탁합니다. 주문은 이게 전부입니다.",
            expressions: [
              { phrase: "هذا كل شيء", meaning: "이것이 전부입니다" }
            ],
            vocabulary: [
              { word: "الحجم الكبير (al-hajm al-kabīr)", meaning: "큰 사이즈 (라지)" },
              { word: "سفري (safarī)", meaning: "포장, 테이크아웃" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "ممتاز! المجموع هو 22 ريالاً. سنحضر طلبك فوراً.",
            translation: "좋습니다! 총 22리얄입니다. 바로 준비해 드리겠습니다.",
            expressions: [
              { phrase: "سنحضر طلبك فوراً", meaning: "주문을 즉시 준비해 드리겠습니다" }
            ],
            vocabulary: [
              { word: "نحضر (nuhaddir)", meaning: "(우리가) 준비하다, 만들다" },
              { word: "فوراً (fawran)", meaning: "즉시, 바로" }
            ]
          }
        ]
      }
    ]
  }
};

// 주제별 20개 시나리오 제목 목록
const TOPIC_SCENARIO_TITLES = {
  airport: [
    "체크인 및 좌석 배정 요청하기", "위탁 수하물 무게 초과 문의하기", "기내 반입 금지 물품 확인하기", "보안 검색대 통과 및 안내받기", "탑승구 위치 및 이동 시간 묻기",
    "항공편 지연 및 게이트 변경 확인", "면세점 구매 한도 및 탑승권 제시", "라운지 위치 및 이용 가능 여부 확인", "기내 좌석 변경 정중히 요청하기", "기내식 메뉴 선택 및 음료 요청",
    "기내 면세품 구매 및 입국신고서 요청", "환승 게이트 및 연결편 시간 문의", "입국 심사대에서 방문 목적 답하기", "체류 기간 및 숙소 주소 설명하기", "수하물 수취대 번호 확인하기",
    "분실 수하물 신고 및 특징 설명하기", "세관 신고서 제출 및 물품 검사", "공항 유심(SIM) 및 와이파이 수령", "공항 철도 및 리무진 버스 매표", "택시 승강장 위치 및 시내 요금 문의"
  ],
  cafe: [
    "아이스 아메리카노와 머핀 주문하기", "디카페인 원두 및 우유 변경하기", "시럽 양 조절 및 휘핑크림 빼기", "추천 디저트 및 시즌 음료 문의하기", "따뜻한 라떼 사이즈업 주문하기",
    "매장 와이파이 비밀번호 물어보기", "콘센트 있는 좌석 위치 문의하기", "주문한 음료가 잘못 나왔을 때 교환 요청", "텀블러 할인 및 개인 컵 사용 요청", "케이크 포크와 냅킨 추가 요청하기",
    "음료 캐리어와 빨대 챙겨 달라고 하기", "원두 종류(산미/고소함) 선택하기", "얼음 없이 차가운 음료 주문하기", "화장실 위치 및 비밀번호 물어보기", "테이블 위 흘린 음료 정리 도움 요청",
    "영수증 발급 및 분할 결제 요청하기", "브런치 세트 가능 시간 확인하기", "알레르기 유발 성분(견과류 등) 확인", "마감 시간 및 라스트 오더 시간 문의", "선물용 원두 분쇄도 지정해 구매하기"
  ],
  restaurant: [
    "예약 확인 및 인원수 말하기", "예약 없이 방문해 대기 시간 묻기", "창가 자리나 조용한 테이블 요청하기", "영어/사진 메뉴판 및 대표 메뉴 추천받기", "고수나 특정 재료 빼달라고 요청하기",
    "맵기 단계 조절 및 어린이 메뉴 문의", "스테이크 굽기 정도 선택하기", "물과 앞접시, 수저 추가로 요청하기", "음식이 너무 늦게 나올 때 확인 요청", "주문한 메뉴와 다른 음식이 나왔을 때",
    "사이드 메뉴와 음료 추가 주문하기", "생일/기념일 좌석 및 서비스 문의", "남은 음식 포장(투고 박스) 요청하기", "계산서 요청 및 테이블 결제 문의", "더치페이(개별 카드 결제) 요청하기",
    "계산서 내역 오류 정중히 확인하기", "팁 포함 여부 및 결제 방식 확인", "식재료 알레르기(갑각류/땅콩) 알리기", "비건·채식 옵션 메뉴 문의하기", "식사 후 근처 볼거리나 택시 호출 문의"
  ],
  hotel: [
    "프런트에서 예약자 확인 및 체크인", "얼리 체크인 가능 여부 문의하기", "체크인 전 캐리어 먼저 맡기기", "조식 시간 및 식당 위치 확인하기", "객실 와이파이 연결 및 안내받기",
    "객실 카드키 작동 불량으로 재발급", "수건, 생수, 어메니티 추가 요청하기", "에어컨/난방 작동 문제로 점검 요청", "조용한 고층 객실로 방 변경 요청하기", "룸서비스 주문 및 배달 시간 확인",
    "세탁 서비스 및 다리미 대여 문의", "수영장 및 피트니스 센터 이용 문의", "모닝콜(Wake-up call) 요청하기", "주변 맛집 추천 및 예약 대행 부탁", "객실 내 금고 잠김 해제 요청하기",
    "레이트 체크아웃 비용 및 가능 여부", "체크아웃 및 미니바·보증금 정산", "체크아웃 후 공항 가기 전까지 짐 보관", "호텔 공항 셔틀버스 예약하기", "객실에 두고 온 분실물 확인 요청"
  ],
  pharmacy: [
    "두통 및 발열로 진통해열제 구매하기", "목감기와 기침약 증상 설명해 고르기", "소화불량 및 위산 역류 약 요청하기", "물갈이 배탈 및 지사제 구매하기", "알레르기 비염 및 항히스타민제 찾기",
    "근육통 파스 및 바르는 소염제 구매", "상처 소독약과 방수 밴드 구매하기", "벌레 물린 데 바르는 연고 찾기", "인공눈물 및 안약 증상별 구매하기", "어린이용 해열 시럽 용량 문의하기",
    "복용 주기와 식전/식후 복용법 확인", "졸음 유발 성분 유무 확인하기", "기존 복용 중인 약과의 상호작용 문의", "임산부/수유부 복용 가능 여부 확인", "화상 연고 및 거즈 드레싱 구매하기",
    "멀미약(붙이는 패치/먹는 약) 구매", "구내염 연고 및 비타민 구매하기", "수면 보조제 및 시차 적응 도움 약 문의", "보험 청구용 상세 영수증 발급 요청", "기내 반입용 영문 약품 설명서 문의"
  ],
  convenience: [
    "도시락 구매 후 전자레인지 데우기", "젓가락, 숟가락, 물티슈 챙겨 받기", "교통카드 구매 및 현금 충전하기", "봉투 필요 여부 답하고 구매하기", "따뜻한 캔음료 및 즉석 커피 구매",
    "컵라면 구매 후 뜨거운 물 위치 묻기", "어묵·핫푸드 카운터에서 주문하기", "ATM 위치 및 해외 카드 출금 확인", "편의점 택배 발송 및 수하물 보내기", "우산 및 우비 위치 물어보기",
    "스마트폰 충전 케이블/보조배터리 구매", "유심칩 핀이나 건전지 규격 찾기", "행사 상품(1+1, 2+1) 적용 확인하기", "연령 확인 화면 터치 및 여권 제시", "현금 결제 후 잔돈/동전 교환 요청",
    "모바일 바코드/QR 결제 요청하기", "얼음컵과 파우치 음료 조합해 사기", "상비 의약품(소화제/밴드) 코너 찾기", "공연/미술관 티켓 발권기 사용 문의", "세금 환급(Tax Free) 가능 여부 확인"
  ]
};

// 기본 템플릿 생성 함수 (아직 직접 채우지 않은 번호도 20개 모두 정상 학습 가능하도록 구성)
function buildTopicLanguageDialogues(topicId, langId) {
  const customList = (RAW_DIALOGUES[topicId] && RAW_DIALOGUES[topicId][langId]) || [];
  const customMap = {};
  customList.forEach(item => { customMap[item.id] = item; });

  const titles = TOPIC_SCENARIO_TITLES[topicId] || [];
  const result = [];

  for (let i = 1; i <= 20; i++) {
    if (customMap[i]) {
      result.push(customMap[i]);
    } else {
      const scenarioTitle = titles[i - 1] || `실전 대화 상황 #${i}`;
      result.push(createDefaultScenario(topicId, langId, i, scenarioTitle));
    }
  }
  return result;
}

function createDefaultScenario(topicId, langId, index, title) {
  const rolePair = {
    airport: ["공항 직원", "승객"],
    cafe: ["직원", "손님"],
    restaurant: ["직원", "손님"],
    hotel: ["프런트 직원", "투숙객"],
    pharmacy: ["약사", "손님"],
    convenience: ["점원", "손님"]
  }[topicId] || ["직원", "손님"];

  const templates = {
    en: [
      {
        role: rolePair[0], side: "left",
        text: `Hello! Welcome. How can I help you with "${title}" today?`,
        translation: `안녕하세요! 어서 오세요. 오늘 '${title}' 관련해서 어떻게 도와드릴까요?`,
        expressions: [{ phrase: "How can I help you with ~?", meaning: "~와 관련해서 어떻게 도와드릴까요?" }],
        vocabulary: [{ word: "welcome", meaning: "환영합니다, 어서 오세요" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "Hi! Excuse me, could you please check this for me?",
        translation: "안녕하세요! 실례지만 이것 좀 확인해 주시겠어요?",
        expressions: [{ phrase: "Could you please check this for me?", meaning: "이것 좀 확인해 주시겠어요?" }],
        vocabulary: [{ word: "excuse me", meaning: "실례합니다" }, { word: "check", meaning: "확인하다" }]
      },
      {
        role: rolePair[0], side: "left",
        text: "Of course! Let me take a look right away. Everything looks good.",
        translation: "물론이죠! 바로 확인해 드리겠습니다. 모든 것이 문제없어 보이네요.",
        expressions: [{ phrase: "Let me take a look", meaning: "제가 한번 살펴보겠습니다" }],
        vocabulary: [{ word: "right away", meaning: "즉시, 바로" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "Thank you so much for your help!",
        translation: "도와주셔서 정말 감사합니다!",
        expressions: [{ phrase: "Thank you so much for ~", meaning: "~해 주셔서 정말 감사합니다" }],
        vocabulary: [{ word: "help", meaning: "도움" }]
      }
    ],
    ja: [
      {
        role: rolePair[0], side: "left",
        text: "いらっしゃいませ。どのようなご用件でしょうか？",
        translation: "어서 오세요. 어떤 용건이신가요?",
        expressions: [{ phrase: "どのようなご用件でしょうか？", meaning: "어떤 용무(용건)이신가요? (정중한 응대)" }],
        vocabulary: [{ word: "用件(ようけん)", meaning: "용건, 볼일" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "すみません、こちらを確認していただけますか？",
        translation: "실례합니다, 이쪽을 확인해 주실 수 있나요?",
        expressions: [{ phrase: "〜していただけますか？", meaning: "~해 주실 수 있으신가요?" }],
        vocabulary: [{ word: "確認(かくにん)", meaning: "확인" }]
      },
      {
        role: rolePair[0], side: "left",
        text: "かしこまりました。すぐにお調べいたします。",
        translation: "알겠습니다. 바로 확인해 드리겠습니다.",
        expressions: [{ phrase: "すぐにお調べいたします", meaning: "즉시 알아봐 드리겠습니다 (겸양 표현)" }],
        vocabulary: [{ word: "調べる(しらべる)", meaning: "조사하다, 확인하다" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "ありがとうございます。助かりました。",
        translation: "감사합니다. 큰 도움이 되었습니다.",
        expressions: [{ phrase: "助かりました", meaning: "도움이 되었습니다, 덕분에 살았습니다" }],
        vocabulary: [{ word: "助かる(たすかる)", meaning: "도움이 되다" }]
      }
    ],
    zh: [
      {
        role: rolePair[0], side: "left",
        text: "您好！请问有什么可以帮您的吗？",
        translation: "안녕하세요! 무엇을 도와드릴까요?",
        expressions: [{ phrase: "有什么可以帮您的吗？", meaning: "도와드릴 일이 있을까요?" }],
        vocabulary: [{ word: "请问 (qǐngwèn)", meaning: "실례지만 여쭙겠습니다" }, { word: "帮 (bāng)", meaning: "돕다" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "不好意思，可以帮我看一下这个吗？",
        translation: "실례합니다, 이것 좀 봐주실 수 있나요?",
        expressions: [{ phrase: "可以帮我看一下 ~ 吗？", meaning: "~을 좀 봐주실 수 있나요?" }],
        vocabulary: [{ word: "不好意思 (bù hǎoyìsi)", meaning: "실례합니다, 미안합니다" }]
      },
      {
        role: rolePair[0], side: "left",
        text: "没问题，我马上为您确认一下。",
        translation: "문제없습니다, 제가 바로 확인해 드리겠습니다.",
        expressions: [{ phrase: "马上为您确认", meaning: "즉시 확인해 드리다" }],
        vocabulary: [{ word: "马上 (mǎshàng)", meaning: "곧바로, 즉시" }, { word: "确认 (quèrèn)", meaning: "확인하다" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "太感谢您了！",
        translation: "정말 감사합니다!",
        expressions: [{ phrase: "太感谢您了", meaning: "대단히 감사합니다" }],
        vocabulary: [{ word: "感谢 (gǎnxiè)", meaning: "감사하다" }]
      }
    ],
    vi: [
      {
        role: rolePair[0], side: "left",
        text: "Xin chào! Tôi có thể giúp gì cho quý khách ạ?",
        translation: "안녕하세요! 손님, 무엇을 도와드릴까요?",
        expressions: [{ phrase: "Tôi có thể giúp gì cho ~", meaning: "~에게 무엇을 도와드릴 수 있을까요?" }],
        vocabulary: [{ word: "giúp", meaning: "돕다" }, { word: "quý khách", meaning: "손님, 고객님" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "Xin lỗi, bạn có thể kiểm tra giúp tôi cái này được không?",
        translation: "실례합니다, 이것 좀 확인해 주실 수 있나요?",
        expressions: [{ phrase: "kiểm tra giúp tôi", meaning: "저를 도와 확인해 주다" }],
        vocabulary: [{ word: "kiểm tra", meaning: "확인하다, 점검하다" }]
      },
      {
        role: rolePair[0], side: "left",
        text: "Dạ vâng, để tôi kiểm tra ngay cho quý khách nhé.",
        translation: "네, 바로 확인해 드리겠습니다.",
        expressions: [{ phrase: "để tôi ~ ngay", meaning: "제가 즉시 ~하겠습니다" }],
        vocabulary: [{ word: "ngay", meaning: "즉시, 바로" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "Cảm ơn bạn rất nhiều!",
        translation: "정말 감사합니다!",
        expressions: [{ phrase: "Cảm ơn ~ rất nhiều", meaning: "대단히 감사합니다" }],
        vocabulary: [{ word: "rất nhiều", meaning: "매우 많이" }]
      }
    ],
    ar: [
      {
        role: rolePair[0], side: "left",
        text: "مرحباً! كيف يمكنني مساعدتك اليوم؟",
        translation: "안녕하세요! 오늘 어떻게 도와드릴까요?",
        expressions: [{ phrase: "كيف يمكنني مساعدتك؟", meaning: "어떻게 도와드릴까요?" }],
        vocabulary: [{ word: "مساعدة (musā'ada)", meaning: "도움" }, { word: "اليوم (al-yawm)", meaning: "오늘" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "عفواً، هل يمكنك التحقق من هذا من فضلك؟",
        translation: "실례합니다, 이것 좀 확인해 주시겠어요?",
        expressions: [{ phrase: "هل يمكنك التحقق من ~؟", meaning: "~을 확인해 주실 수 있나요?" }],
        vocabulary: [{ word: "عفواً ('afwan)", meaning: "실례합니다" }, { word: "التحقق (at-tahaqquq)", meaning: "확인" }]
      },
      {
        role: rolePair[0], side: "left",
        text: "بكل سرور، دعني أتحقق من ذلك فوراً.",
        translation: "기꺼이 그러겠습니다, 바로 확인해 보겠습니다.",
        expressions: [{ phrase: "بكل سرور", meaning: "기꺼이, 즐거이" }],
        vocabulary: [{ word: "فوراً (fawran)", meaning: "즉시, 바로" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "شكراً جزيلاً على مساعدتك!",
        translation: "도와주셔서 대단히 감사합니다!",
        expressions: [{ phrase: "شكراً جزيلاً", meaning: "대단히 감사합니다" }],
        vocabulary: [{ word: "جزيلاً (jazīlan)", meaning: "많이, 깊이" }]
      }
    ]
  };

  return {
    id: index,
    title: title,
    lines: templates[langId] || templates.en
  };
}

// 최종 DIALOGUE_DATA 객체 생성
const DIALOGUE_DATA = {};
TOPICS_META.forEach(topic => {
  DIALOGUE_DATA[topic.id] = {};
  LANGUAGES_META.forEach(lang => {
    DIALOGUE_DATA[topic.id][lang.id] = buildTopicLanguageDialogues(topic.id, lang.id);
  });
});
