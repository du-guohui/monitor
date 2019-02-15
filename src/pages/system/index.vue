<template>
  <div class="container">
    <view>
      <img
        class="image1"
        src="https://application.idcxtech.com/image/2019-1-29/upload_bb589465f08bb157662aedfd747fd62b.jpg"
      >
    </view>
    <div class="title">能耗在线</div>
    <div class="text">
      <p
        class="p"
      >能耗在线是广东优世联合集团旗下工程院自主研发的面向企事业单位，基于自主研发的物联网智能传感器及物联网平台，提供各环节水、电、气等能源消耗及温湿度环境的实时在线监测，分类分项多维度数据分析，可视化数据呈现的在线能耗应用平台。</p>
      <p
        class="p"
      >通过低功耗无线智能传感器实时采集的各类能耗及环境数据，经由智能物联网网关传输到云端实时计算，对各环节能源状况进行全面监测、分析和评估，实现能源消耗的信息化、可视化、智能化决策，最优化企事业单位效能管理。</p>
      <p class="p">能耗在线可以广泛应用于医院、学校、办公场所、工厂车间、仓库，冷链等场景下的能耗及环境监测管理：</p>
    </div>

    <div class="text-list">
      <div class="li left">
        <div class="img">
          <img
            src="https://application.idcxtech.com/image/2019-1-29/upload_66019b470e14364bd9b8ad0de7bf3e73.jpg"
          >
        </div>
        <div class="txt">
          <div class="h1">医院</div>
          <div class="h2">应用于医院水电气能耗分类分项实时监测，以及病房、诊室、手术间、药品仓库等区域的温湿度环境监测</div>
        </div>
      </div>
      <div class="li right">
        <div class="img">
          <img
            src="https://application.idcxtech.com/image/2019-1-29/upload_4032df743be063182cf4b31e9531aadf.jpg"
          >
        </div>
        <div class="txt">
          <div class="h1">学校</div>
          <div class="h2">应用于学校水电气能耗分类分项实时监测，以及教室、宿舍、办公楼、图书馆等区域的温湿度环境监测</div>
        </div>
      </div>
      <div class="li left">
        <div class="img">
          <img
            src="https://application.idcxtech.com/image/2019-1-29/upload_40b08741301db2010e2879eb33fd0cd3.jpg"
          >
        </div>
        <div class="txt">
          <div class="h1">工厂车间</div>
          <div class="h2">应用于工厂生产的各项水电气能耗分项分类实时监测，以及工厂车间室内区域的温湿度环境监测</div>
        </div>
      </div>
      <div class="li right">
        <div class="img">
          <img
            src="https://application.idcxtech.com/image/2019-1-29/upload_1b1e6d0ba136a87bdfedc04466fd76eb.jpg"
          >
        </div>
        <div class="txt">
          <div class="h1">办公场所</div>
          <div class="h2">应用于各级政府机关、企事业单位日常行政办公场所的各项能耗分项分类实时监测，以及室内区域的温湿度环境监测</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background: #e7e7e7;
}
.image1 {
  height: 110px;
}
.title {
  font-weight: normal;
  color: #172a88;
  line-height: 30px;
  padding: 10px 10px 5px;
  font-weight: bold;
}
.text {
  line-height: 22px;
  font-size: 13px;
  color: #333333;
  padding: 10px 15px;
}

.text .p {
  text-align: justify;
  text-indent: 24px;
  margin-bottom: 5px;
}
.text-list {
  overflow: hidden;
}

.text-list .li {
  overflow: hidden;
  margin: 15px 10px;
}

.text-list .img img{
    width: 160px;
    height: 91px;
    margin: 7px 10px 0;
}

.text-list .img,
.text-list .txt {
  width: 50%;
  min-height: 100px;
}

.text-list .txt .h1 {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 6px;
  margin-top: 5px;
  color: #333333;
}

.text-list .txt .h2 {
  font-size: 12px;
  line-height: 18px;
  color: #333333;
  margin: 5px 8px;
  /* text-align: justify; */
}

.text-list .li.left .img,
.text-list .li.right .txt {
  float: left;
}

.text-list .li.right .img,
.text-list .li.left .txt {
  float: right;
}
</style>
