  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.1.5)

2024-01-01T21:26:05.560+05:30  INFO 5076 --- [           main] c.m.m.Microservice2Application           : Starting Microservice2Application using Java 17.0.9 with PID 5076 (D:\Learnings\practise\Practise Spring\microservice2\target\classes started by yaswa in D:\Learnings\practise\Practise Spring\microservice2)
2024-01-01T21:26:05.564+05:30  INFO 5076 --- [           main] c.m.m.Microservice2Application           : No active profile set, falling back to 1 default profile: "default"
2024-01-01T21:26:06.470+05:30  INFO 5076 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8082 (http)
2024-01-01T21:26:06.479+05:30  INFO 5076 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2024-01-01T21:26:06.480+05:30  INFO 5076 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.15]
2024-01-01T21:26:06.559+05:30  INFO 5076 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2024-01-01T21:26:06.560+05:30  INFO 5076 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 932 ms
2024-01-01T21:26:06.601+05:30  WARN 5076 --- [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'sampleComponent' defined in file [D:\Learnings\practise\Practise Spring\microservice2\target\classes\com\microservices\microservice2\SampleComponent.class]: Failed to instantiate [com.microservices.microservice2.SampleComponent]: Constructor threw exception
2024-01-01T21:26:06.606+05:30  INFO 5076 --- [           main] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]
2024-01-01T21:26:06.614+05:30  INFO 5076 --- [           main] .s.b.a.l.ConditionEvaluationReportLogger : 

Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2024-01-01T21:26:06.631+05:30 ERROR 5076 --- [           main] o.s.boot.SpringApplication               : Application run failed

org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'sampleComponent' defined in file [D:\Learnings\practise\Practise Spring\microservice2\target\classes\com\microservices\microservice2\SampleComponent.class]: Failed to instantiate [com.microservices.microservice2.SampleComponent]: Constructor threw exception
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateBean(AbstractAutowireCapableBeanFactory.java:1314) ~[spring-beans-6.0.13.jar:6.0.13]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1199) ~[spring-beans-6.0.13.jar:6.0.13]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:560) ~[spring-beans-6.0.13.jar:6.0.13]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:520) ~[spring-beans-6.0.13.jar:6.0.13]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:325) ~[spring-beans-6.0.13.jar:6.0.13]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[spring-beans-6.0.13.jar:6.0.13]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:323) ~[spring-beans-6.0.13.jar:6.0.13]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-6.0.13.jar:6.0.13]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:973) ~[spring-beans-6.0.13.jar:6.0.13]
	at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:950) ~[spring-context-6.0.13.jar:6.0.13]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:616) ~[spring-context-6.0.13.jar:6.0.13]
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.1.5.jar:3.1.5]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:738) ~[spring-boot-3.1.5.jar:3.1.5]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:440) ~[spring-boot-3.1.5.jar:3.1.5]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:316) ~[spring-boot-3.1.5.jar:3.1.5]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1306) ~[spring-boot-3.1.5.jar:3.1.5]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1295) ~[spring-boot-3.1.5.jar:3.1.5]
	at com.microservices.microservice2.Microservice2Application.main(Microservice2Application.java:10) ~[classes/:na