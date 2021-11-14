const data = {
  result: [
    {
      id: "0001",
      type: "漢堡",
      image:
        "https://images.pexels.com/photos/4062272/pexels-photo-4062272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 79,
      amount: 0,
      name: "大麥克",
      introduction:
        "麥當勞永遠的一號餐， 全球狂熱50年， 紐澳100%雙層純牛肉， 淋上大麥克招牌醬料， 加上生菜、吉事、洋蔥、酸黃瓜， 美味層層堆疊，口感樂趣無窮。 從美國總統到素人都是鐵粉， 經濟學家還發明「大麥克指數」致敬，果然，只有大麥克，才是大麥克！",
      kcal: "548",
      isChecked: false,
    },
    {
      id: "0002",
      type: "漢堡",
      image:
        "https://images.pexels.com/photos/9467486/pexels-photo-9467486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 99,
      amount: 0,
      name: "起司堡",
      introduction:
        "麥當勞永遠的一號餐， 全球狂熱50年， 紐澳100%雙層純牛肉， 淋上大麥克招牌醬料， 加上生菜、吉事、洋蔥、酸黃瓜， 美味層層堆疊，口感樂趣無窮。 從美國總統到素人都是鐵粉， 經濟學家還發明「大麥克指數」致敬，果然，只有大麥克，才是大麥克！",
      kcal: "679",
      isChecked: false,
    },
    {
      id: "0003",
      type: "漢堡",
      image:
        "https://images.pexels.com/photos/9201333/pexels-photo-9201333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 149,
      amount: 0,
      name: "流漿起司牛肉堡",
      introduction:
        "麥當勞永遠的一號餐， 全球狂熱50年， 紐澳100%雙層純牛肉， 淋上大麥克招牌醬料， 加上生菜、吉事、洋蔥、酸黃瓜， 美味層層堆疊，口感樂趣無窮。 從美國總統到素人都是鐵粉， 經濟學家還發明「大麥克指數」致敬，果然，只有大麥克，才是大麥克！",
      kcal: "888",
      isChecked: false,
    },
    {
      id: "0004",
      type: "單點",
      image:
        "https://images.pexels.com/photos/6428247/pexels-photo-6428247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 109,
      amount: 0,
      name: "松露薯條",
      introduction:
        "下午想來點什麼~ 當然是麥當勞最經典的薯條。 使用整顆馬鈴薯切條製成， 口感紮實就是好吃！",
      kcal: "478",
      isChecked: false,
    },
    {
      id: "0005",
      type: "單點",
      image:
        "https://images.pexels.com/photos/6485538/pexels-photo-6485538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 69,
      amount: 0,
      name: "黃金馬鈴薯片",
      introduction:
        "下午想來點什麼~ 當然是麥當勞最經典的薯條。 使用整顆馬鈴薯切條製成， 口感紮實就是好吃！",
      kcal: "478",
      isChecked: false,
    },
    {
      id: "0006",
      type: "單點",
      image:
        "https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 119,
      amount: 0,
      name: "捲餅",
      introduction:
        "卷餅，是一種墨西哥料理。它主要是將肉、豆、碎奶酪等食品和各種醬放在墨西哥薄餅上，並把餅捲起來完全包緊。它與墨西哥夾餅類似，但夾餅只是用薄餅將裡面的食物包裹住一半，而並非全部。",
      kcal: "348",
      isChecked: false,
    },
    {
      id: "0007",
      type: "披薩",
      image:
        "https://images.pexels.com/photos/6697469/pexels-photo-6697469.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 219,
      amount: 0,
      name: "速食起司披薩",
      introduction:
        "披薩是一種著名的義大利食物。在中國大陸、台灣、新加坡以及馬來西亞都是使用音譯，其中pizza的「pi」寫成「匹、披、比」都是常見的，只是各種音譯的不同。在港澳通常直稱pizza或簡稱「薄餅」。",
      kcal: "899",
      isChecked: false,
    },
    {
      id: "0008",
      type: "飲品",
      image:
        "https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 35,
      amount: 0,
      name: "檸檬紅茶",
      introduction:
        "以檸檬汁融合經典紅茶，廣受台灣消費者喜愛的檸檬風味紅茶，口味清爽超有Fu！",
      kcal: "119",
      isChecked: false,
    },
    {
      id: "0009",
      type: "飲品",
      image:
        "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 59,
      amount: 0,
      name: "咖啡",
      introduction:
        "咖啡的講究，就是這麼單醇與濃烈。 100%特選阿拉比卡豆，100%雨林聯盟認證， 新鮮研磨、Espresso濃縮咖啡香醇萃取， 面對複雜的世界，要單純，很難！ 專注做一件事，夠單醇，才敢簡單！ 純粹就是好的黑咖啡。",
      kcal: "19",
      isChecked: false,
    },
    {
      id: "00010",
      type: "飲品",
      image:
        "https://images.pexels.com/photos/5869812/pexels-photo-5869812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 33,
      amount: 0,
      name: "可樂",
      introduction: "清涼暢快的百年傳奇經典飲料，氣泡口感，買套餐必搭！",
      kcal: "149",
      isChecked: false,
    },
  ],
  carousel: [
    {
      id: "2000",
      images:
        "https://images.pexels.com/photos/8112382/pexels-photo-8112382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      introduction: "享受美食---免費圖庫資料",
    },
    {
      id: "2001",
      images:
        "https://images.pexels.com/photos/6287251/pexels-photo-6287251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      introduction: "享受美食---免費圖庫資料",
    },
    {
      id: "2002",
      images:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      introduction: "享受美食---免費圖庫資料",
    },
    {
      id: "2003",
      images:
        "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      introduction: "享受美食---免費圖庫資料",
    },
  ],
};

export default data;
