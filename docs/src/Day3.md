
j쿼리(자바스크립트의 라이브러리 중 하나) => 브라우저가 느려짐?
jQuery가 동작할 때는 라이브러리에 걸쳐 해당 브라우저에 맞는 네이티브 자바 스크립트로 변환 시켜야 하기에 코드가 많아지면 속도가 느려집니다. 
웹페이지는 브라우저상에서 돔(DOM, Document Object Model)이라는 표준 형식으로 파싱(Parsing)되어 표현됩니다. 
따라서 사용자 조작에 맞춰 동적으로 변화하는 대화형 웹(Interactive Web)을 구현하기 위해서는 돔 조작이 필수적입니다. 
그런데 대부분의 브라우저에서 돔 조작이 발생할 때마다 배치나 화면 표시에 많은 연산을 발생시키다 보니 조작이 빈번해질수록 브라우저 성능이 낮아지는
 문제가 있었고 이는 개발자의 창의력을 저해하는 요소로 작용하였습니다
이러한 이슈를 해결하기 위해 자바스크립트 라이브러리의 하나인 리액트(React)는 가상 돔을 채용하여 대중화시켰습니다
액트를 활용하면 메모리에 가상 돔을 구성하여 실제 돔과의 차이점을 비교하고 변경된 부분을 실제 돔에 적용할 수 있습니다. 
이러한 방식은 성능이 뛰어나고 화려한 웹페이지를 비교적 손쉽게 제작할 수 있도록 해 개발자들에게 크게 환영받았습니다. 
이후 등장한 뷰(Vue.js) 등의 프레임워크와 라이브러리도 가상 돔을 적극 채용하고 있습니다.  


부트스트렙==>



1.그리드 시스템

2. 아코디언

 

cors 에러
백   프론트
서로 다른 서버로 돌아가기 때문에 연동하기 위해 cors 공유 함

 

url
@Data   (롬북)   get/setter/tosting 을 자동으로 만들어줌
psa    
@AllargsConstructor   < autowird 사용을 하지 말고 생성자에 주입한다.

 

@Selectkey
jpa  쿼리에 의존하지 말자


url매핑  
@getmapping / @postmappig
value = "////", header = {}
value = "////", params = {}   같은 url 이라도 이렇게 분기처리 가능

 
타임리프
타일즈 대신 사용