## osi 7계층
네트워크 통신이 일어나는 과정
1. L1   => 케이블          --물리계층, 물리적 장비 (ON/OFF 상태)
2. L2   => 허브, 맥주소   --데이터 링크 계층 , 통신의 흐름 관리
3. L3   => 라우터, IP      ---네트워크 계층 , 데이터를 목적지까지 전달 
4. L4   => 포트, TCP(신뢰성)      --전송 계층
5. L5   API, Socket  --세선계층




## 암호화방법
동기/비동기/Hash 

## 직렬화(Serializaion)와 역직렬화(Deserialization)
1. 직렬화 : 객체를 저장 가능한 상태 혹은 전송 가능한 상태로 변환하는 것을 뜻 한다. 
           즉, 객체를 저장,전송 할 수 있는 특정 포맷 상태로 바꾸는 과정
2. 역직렬화 : 특정 포맷 상태의 데이터를 다시 객체로 변환하는 것.


> 데이터 직렬화 포맷

    - CSV,XML,JSON 형태의 직렬화  
        사람이 읽을 수 있다.  
        저장 공간의 효율성이 상대적으로 떨어지고, 파싱하는 시간이 오래걸린다.
        주로 데이터의 양이 적을 때 사용
    - Binary 직렬화  
        사람이 읽을 수 없다.
        저장 공간의 효율성이 상대적으로 높고, 파싱하는 시간이 빠르다.
        모든 시스템에서 사용이 가능하다.
    - java 직렬화  
        java 시스템 간의 데이터 교환이 필요할 때 사용한다.
        serializable 인터페이스를 구현하여 사용가능하다. 


> java에서 직렬화가 필요한 이유

    일반적으로 java에서의 직렬화는 객체를 Binary형태로 변환하는 것을 뜻함.
    disk에 객체를 저장하거나 컴퓨터 네트워크 상으로 객체를 전송할 때 Binary 형태로 바뀌어야만 가능하기 때문이다. 


## java 직렬화와 transient 키워드

```java.io.Serializable``` 인터페이스를 구현함으로써 Java 직렬화를 수행할 수 있고, 객체를 바이트 스트림으로 변환하고 디스크 파일에 저장하거나 네트워크상으로 전달 할 수 있다.

 *예
```java 

public class Student implements Serializable {
    public static final long serialVersionUID = 1234L;
 
    private long studentId;
    private String name;
    private transient int age;	// transient 변수는 직렬화에서 제외 => 데이터를 저장하거나 전송 시 민감한 정보등을 제외 하고 싶을 때 사용
 
    public Student(long studentId, String name, int age) {
        this.studentId = studentId;
        this.name = name;
        this.age = age;
    }
    
    @Override
    public String toString() {
        return String.format("%d - %s - %d", studentId, name, age);
    }

}

```
 ** 직렬화시 내부에서 자동으로 SerialVersionUID라는 고유의 번호를 생성하여 관리한다. 이 uid는 직렬화와 역직렬화 시 값이 맞는지 확인 하여 값이 맞지 않다면 오류가 발생한다. 만약 클래스가 변경 된다면 uid값도 변경되기 때문에 유지보수 차원에서 늘 관리 해주어야 하는 번거로움이 있다. 따라서 위와 같이 uid를 직접 선언하고 관리하는 방식을 권장하고 있다.



main
```java

public static void main(String[] args){
    Student student = new Student(516L, "최도원", 32);
    byte[] serializedMember;
    try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
        try (ObjectOutputStream oos = new ObjectOutputStream(baos)) {
            oos.writeObject(member);
            // serializedMember -> 직렬화된 Student 객체
            serializedMember = baos.toByteArray();
        }
    }
    // 바이트 배열로 생성된 직렬화 데이터를 base64로 변환
    System.out.println(Base64.getEncoder().encodeToString(serializedMember));
}

```

java.io.ObjectOutputSream를 사용하여 Student 클래스를 직렬화

```java
public static void main(String[] args){
    // 직렬화 예제에서 생성된 base64 데이터
    String base64Member = "...생략";
    byte[] serializedMember = Base64.getDecoder().decode(base64Member);
    try (ByteArrayInputStream bais = new ByteArrayInputStream(serializedMember)) {
        try (ObjectInputStream ois = new ObjectInputStream(bais)) {
            // 역직렬화된 Student 객체를 읽어온다.
            Object objectMember = ois.readObject();
            Student student = (Student) objectMember;
            System.out.println(student);
        }
    }
}
```

## 다운로드 IO

```java
BufferedInputStream bis = new BufferedInputStream(new FileInputStream(file));
BufferedOutputStream bos = new BufferedOutputStream(respons.getPutputStream())
```
> 파일을 생성/수정(out)
```java

pubilc class Sample{
        public static void main(String[] args){
            try{
                FileOutputStream fos = new FileOutputStream("C:/user/java/tes.txt");
                BufferedOutputStream bos = new BufferedOutputStream(fos);
                String strText ="파일에 저장할 문자 \n Hellow world!!" ;
                bos.write(strText.getBytes());

                bos.close();
                fos.close(); 
            } catch (Exception e) {

            }
        }
}
```

> 기록한 파일을 출력(in)
```java
pubilc class Sample2{
    try{
        FileInputStream fis = new FileInputStream("C:/user/java/tes.txt");
        byte[] byteBuff = new byte[9999];
        int nRlen = fis.read(byteBuff);
        String strBuff = new String(byteBuff,0,nRLen);
        System.out.printf("읽은 바이트 수 :[%d] \n 읽은 내용 : \n%s \n",nRLen,strBuff);

        fis.close
    } catch (Exception e) {
        
    }
}

```