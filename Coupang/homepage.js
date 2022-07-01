var imgs = 4; // 최대 이미지 수
var now = 0; // 현재 이미지 위치

function slide() {
    now = now == imgs ? 0 : now += 1; // 현재 이미지가 최대 이미지와 같을 시 0으로 초기화, 다를 시 다음 이미지로 변경

    $(".imgs > img").eq(now - 1).css({"margin-left": "-2000px"}); // 정해준 시간이 지난 뒤 now - 1값에 이미지 인덱스를 margin-left를 -2000px만큼 주어 넘겨줌.
    $(".imgs > img").eq(now).css({"margin-left": "0px"}); // 정해진 시간이 지난 뒤 now값에 이미지 인덱스를 margin-left를 0px로 초기화하여 화면에 보여줌.
}

function start() {
    $(".imgs > img").eq(0).siblings().css({"margin-left":"-2000px"}); 
    setInterval(function () { slide()}, 2000); // 2초마다 slide()함수 사용.
}
start();