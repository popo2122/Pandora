# Pandora 사이트 리뉴얼     
### *작업중인 사이트로 아직까지 미완성입니다. 반응형,오류 계속해서 수정중*      

### *💛 작업툴*
- 와이어프레이밍 및 디자인 : Photoshop, Illustrator
- Visual Studio code
- HTML5, CSS3, jQuery

### *💛 How to Design*
 - 브랜드가 가진 따뜻하고 빈티지스러운 '핑크'의 느낌을 살리기 위해, 핑크 베이스로 디자인을 했지만  
   동시에 화려하지 않고 심플한 느낌 함께 가져가고자 함
 - '흩날리는 꽃잎', '트위드' 느낌으로 브랜드 이미지를 구현하고 싶어 찢어진듯한 천 느낌의 핑크색 배경 배치
 - 전체적으로 심플하지만, 제품과 이미지를 강조하기 위해 텍스트를 최대한 줄이고 이미지 위주로 배치하여 디자인
 - 로고를 제외한 페이지 내의 모든 아이콘은 일러스트로 직접 제작함

  
### *💛 Code*

- PC 1920 * 1080에서 최적화, MOBILE까지 반응형 지원(~500까지 최적화)
- 메인 이미지 슬라이드는 jQuery를 사용하여 구현
  + appendTo,PrependTo로 반복되는 슬라이드 자연스럽게 흘러가도록 함
  + addClass,removeClass로 중앙에 오는 메인 이미지만 컬러+사이즈 커지도록 구현(CSS의 filter,transform속성 이용)
- 메뉴 각각 hover했을 때 색이 변경되는 효과는 CSS의 background속성 이용하여 구현
- styling섹션의 hover는 CSS, unicef섹션의 텍스트 hover는 jQuery사용
- 제품 이미지 슬라이드와 모바일 메인 슬라이드는 Swiper 라이브러리를 활용
    - 참고 링크 : [swiper](https://swiperjs.com/demos)



### 💛 PC ver. 디자인
<p align="center"><img src="https://user-images.githubusercontent.com/75009488/112649666-fa8cda80-8e8d-11eb-9c76-4bdb8d321742.jpg" width="50%" height="50%"/></p>     
        
        
### 💛 Mobile ver. 디자인
<p align="center"><img src="https://user-images.githubusercontent.com/75009488/112649778-12fcf500-8e8e-11eb-8c25-687adab81d5d.jpg" width="50%" height="50%"/></p>
