<template>
  <q-page id="faq">
    <div class="container">
      <q-breadcrumbs class="text-bread q-pt-lg q-pa-md q-pl-md" active-color="text-bread">
        <template v-slot:separator>
          <q-icon
            size="1.5em"
            name="chevron_right"
            color="text-bread"
          />
        </template>
        <q-breadcrumbs-el label="首頁" icon="home" to="/" />
        <q-breadcrumbs-el label="常見問題" />
      </q-breadcrumbs>
      <div class="fax-container">
        <div class="row justify-center">
          <div style="width: 100%;">
            <!-- 取貨 -->
            <q-chat-message
              :text="['你好，我想買你們的甜點，請問要怎麼取貨？']"
              sent
              text-color="white"
              bg-color="blue-grey-3"
              style="padding-bottom:30px"
            >
              <template v-slot:name>You</template>
              <template v-slot:stamp>5 minutes ago</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--sent"
                  :src="require('../assets/photo.jpg')"
                >
              </template>
            </q-chat-message>
            <q-chat-message class="bg-chart" style="padding-bottom:30px">
              <template v-slot:name>任由尼小編</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  :src="require('../assets/logo.jpg')"
                >
              </template>
              <div style="white-space: pre-line;">您好~我們提供 3 種取貨方式
                1. 面交取貨：單筆消費滿 300 元
                2. 宅配到府：僅限整顆千層，運費為 1 顆 160 元、2-4顆 225 元、5-6 顆 290 元
                3. 7-11 冷凍店到店：含規定箱子運費為 170 元
              </div>
            </q-chat-message>

            <!-- 付款 -->
            <q-chat-message
              :text="['可以貨到付款嗎？']"
              sent
              text-color="white"
              bg-color="blue-grey-3"
              style="padding-bottom:30px"
            >
              <template v-slot:name>You</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--sent"
                  :src="require('../assets/photo.jpg')"
                >
              </template>
            </q-chat-message>
            <q-chat-message class="bg-chart" style="padding-bottom:30px">
              <template v-slot:name>任由尼小編</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  :src="require('../assets/logo.jpg')"
                >
              </template>
              <div style="white-space: pre-line;">很抱歉，目前不提供貨到付款，除了面交以外，其餘取貨方式皆須先匯款並告知帳號後五碼，才會開始製作訂單喔~
              </div>
            </q-chat-message>

            <!-- 宅配注意事項 -->
            <q-chat-message
              :text="['聽說現在疫情很多人訂包裹，宅配會不會把甜點撞壞呢？']"
              sent
              text-color="white"
              bg-color="blue-grey-3"
              style="padding-bottom:30px"
            >
              <template v-slot:name>You</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--sent"
                  :src="require('../assets/photo.jpg')"
                >
              </template>
            </q-chat-message>
            <q-chat-message class="bg-chart" style="padding-bottom:30px">
              <template v-slot:name>任由尼小編</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  :src="require('../assets/logo.jpg')"
                >
              </template>
              <div style="white-space: pre-line;">因疫情關係宅配公司貨量大，運送商品外觀毀損風險增加，請大家能接受再下訂，因宅配人為疏失造成的嚴重損壞，請於第一時間拍照存證與我們聯繫，我們將會盡快與宅配公司商議賠償事宜。
              </div>
            </q-chat-message>

            <!-- 面交地點 -->
            <q-chat-message
              :text="['了解，這是要送人的，我還是面交好了。可以選在捷運站附近嗎？']"
              sent
              text-color="white"
              bg-color="blue-grey-3"
              style="padding-bottom:30px"
            >
              <template v-slot:name>You</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--sent"
                  :src="require('../assets/photo.jpg')"
                >
              </template>
            </q-chat-message>
            <q-chat-message class="bg-chart" style="padding-bottom:30px">
              <template v-slot:name>任由尼小編</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  :src="require('../assets/logo.jpg')"
                >
              </template>
              <div style="white-space: pre-line;">以下是面交取貨地點，取貨時間都可以商議喔~
                1. 鳳山國中捷運站 1 號出口
                2. 統一超商工協門市前（鳳山區埤頂里建國路一段 79 號）
                3. 全家便利商店埤頂店門市前（鳳山區中山東路 545 號）
                4. 大東文化中心捷運站 1、2 號出口
                5. 鳳山西站 2 號出口（鳳山自由路、青年路口）
                6. 統一超商青建門市（鳳山區建國路三段 295 號）
                7. 和樂宴會館（鳳山區建國路二段 88 號）
                8. 鳳山火車站
              </div>
            </q-chat-message>

            <!-- 面交注意事項 -->
            <q-chat-message
              :text="['太好了！面交有什麼需要注意的嗎？']"
              sent
              text-color="white"
              bg-color="blue-grey-3"
              style="padding-bottom:30px"
            >
              <template v-slot:name>You</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--sent"
                  :src="require('../assets/photo.jpg')"
                >
              </template>
            </q-chat-message>
            <q-chat-message class="bg-chart" style="padding-bottom:30px">
              <template v-slot:name>任由尼小編</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  :src="require('../assets/logo.jpg')"
                >
              </template>
              <div style="white-space: pre-line;">單趟車程超過十五分鐘，建議自備「保冷袋+冷媒」取貨。甜點皆以冷凍方式交貨，取貨後請於冰箱冷藏解凍三至五小時，請勿於室溫下解凍，若要馬上食用可事先告知，會以冷藏或半冷凍方式交貨。為求商品品質，欲將甜點攜帶至中北部者，需自備「保冷袋+冷媒」至目的地後能冷藏或冷凍保存再食用，才可幫忙排單。甜點不宜於室溫下久放，建議離開冰箱後盡早食用完畢。
              </div>
            </q-chat-message>

          <!-- end -->
            <q-chat-message
              :text="['好喔~感恩~我等等就來下訂單！']"
              sent
              text-color="white"
              bg-color="blue-grey-3"
              style="padding-bottom:30px"
            >
              <template v-slot:name>You</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--sent"
                  :src="require('../assets/photo.jpg')"
                >
              </template>
            </q-chat-message>
            <q-chat-message class="bg-chart" style="padding-bottom:30px">
              <template v-slot:name>任由尼小編</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  :src="require('../assets/logo.jpg')"
                >
              </template>
              <div style="white-space: pre-line;">感謝您的購買，如有問題觀迎隨時與我們聯繫。</div>
            </q-chat-message>
            <q-chat-message
              sent
              text-color="white"
              bg-color="blue-grey-3"
              style="padding-bottom: 50px"
            >
              <template v-slot:name>You</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--sent"
                  :src="require('../assets/photo.jpg')"
                >
              </template>
              <q-spinner-dots size="2rem" />
            </q-chat-message>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageFAQ'
}
</script>
