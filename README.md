# Pandora 사이트 리뉴얼     
### *작업중인 사이트로 아직까지 미완성입니다. 반응형,오류 계속해서 수정중*      

### *💛 작업툴*
- 와이어프레이밍 및 디자인 : Photoshop, Illustrator
- Bracket, Visual Studio code, jQuery

### *💛 How to Design*
 - 브랜드가 가진 따뜻하고 빈티지스러운 '핑크'의 느낌을 살려서, 전체적으로 핑크를 베이스로하여 디자인
 - 흩날리는 꽃잎 같은 느낌을 주고자, 배경에 찢어진 천 느낌의 핑크색 배경 배치
 - 브랜드 자체가 주는 심플한 분위기를 그대로 가져가고자, 텍스트보다는 이미지 위주로 배치
    + 악세사리를 눈으로 보는 재미를 더하고자 함

  
### *💛 Code*

- PC~MOBILE 반응형 지원 (pc는 1920＊1080에서 최적화)
- 메인 슬라이드는 jQuery를 사용하여 구현
  + appendTo,PrependTo사용하여 자연스럽게 슬라이드 흘러갈 수 있도록 구현
  + addClass,removeClass로 중앙에 오는 메인 이미지만 컬러로 나오도록 구현(CSS의 filter속성 이용)
- 메뉴 각각 hover했을 때 색이 변경되는 효과는 CSS의 background속성 이용하여 구현
- 이미지 슬라이드는 Swiper 라이브러리를 활용하였습니다.
    - 참고 링크 : [swiper](https://swiperjs.com/demos)



### 💛 PC ver. 디자인
<p align="center"><img src="https://user-images.githubusercontent.com/75009488/112649666-fa8cda80-8e8d-11eb-9c76-4bdb8d321742.jpg" width="50%" height="50%"/></p>     
        
        
### 💛 Mobile ver. 디자인
<p align="center"><img src="https://user-images.githubusercontent.com/75009488/112649778-12fcf500-8e8e-11eb-8c25-687adab81d5d.jpg" width="50%" height="50%"/></p>
