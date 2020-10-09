# Karina1996.github.io
Приватный проект


# Отчет по лабораторным работам
# студент группы [ИДБ-17-05](https://github.com/stankin/design-part-1/wiki/list-idb-17-05) Лазарева К.Р.

## Лабораторная работа №1
[Задание №1](https://github.com/stankin/design-1/wiki/lab-1)
1. RAMUS - программное средство разработки структурно-функциональных моделей
Нотация IDEF0: Структурированное отображение функций производственной системы/среды, информации и объектов, связывающих эти функции

### Описание процесса "Приготовить шарлотку" с помощью IDEF0-диаграммы в RAMUS 
Исходный текст предложения: Приготовить шарлотку
* IDEF0-диаграмма в развернутом виде:
![none](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_1/exp_img/01_A0.png)

Рузультативное предложение: **Студент при помощи кухонных приборов приготавливает шарлотку по кулинарному рецепту**

[Файл модели](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_1/IDEF0_cookCharlotte.rsf)

2. PLANTUML - программное средство автоматической генерации UML-диаграмм
Диаграмма классов — структурная диаграмма языка моделирования UML, демонстрирующая общую структуру иерархии классов системы, их коопераций, атрибутов, методов, интерфейсов и взаимосвязей между ними.
Диаграмма вариантов использования (прецедентов) -  диаграмма, отражающая отношения между акторами и прецедентами и являющаяся составной частью модели прецедентов, позволяющей описать систему на концептуальном уровне.

### Создание диаграммы классов и диаграммы прецедентов "Приготовление шарлотки" в PLANTUML 
* [Текст](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_1/UML_Code1.txt) и [Картинка](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_1/UML_TotalDiagram.png) диаграммы классов

![none](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_1/UML_TotalDiagram.png)

Студент является человеком, который использует кухонные приборы. Каждый человек способен приготовить пищу согласно алгоритму действий (кулинарному рецепту), а без помощи пищевых продуктов это НЕВОЗМОЖНО.

* [Текст](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_1/UML_Code2.txt) и [Картинка](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_1/UML_DiagramPrecedentov.png) диаграммы прецедентов

![none](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_1/UML_DiagramPrecedentov.png)


 ## Лабораторная работа №2
[Задание №2](https://github.com/stankin/design-1/wiki/lab-2)
1. Определение надсистемы (среды функционирования)

### Описание процесса "Оформить сотрудника" с помощью IDEF0-диаграммы в RAMUS 
Исходный текст предложения: Оформить сотрудника
* IDEF0-диаграмма в развернутом виде:

  **Блок А0**
![none](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_2/exp_img/01_A0.png)

В контекстной   диаграмме   входной   информацией   являются  данные:   Документы для офорmления трудового договора в соотвествии с ТК РФ, а также Заявление   о приёме на работу. Выходная информация – Приказ о приёме на работу. Механизмами являются: Работодатель, неоформленные Сотрудники. С помощью MS Word формирование и печать результирующих документов. Управляющий элемент –  Трудовое законодательство РФ (ТК РФ).

  
  **Блоки А1, А2, А3** 
![none](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_2/exp_img/02_A0.png)


[Файл модели](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_2/IDEF0_WelcomeWork.rsf)

2. Определение автоматизируемых видов деятельности

В РАМУС объект "Хранилище" позволяет описать данные, которые необходимо сохранить в памяти прежде, чем использовать в функциональных блоках.

### Декомпозиция (разбиение на подпроцессы) процессов A1, A3 в DFD
 DFD (Data Flow Diagrams)- диаграммы потоков данных
  
В качестве автоматизируемых блоков (процессов) выбраны: А1 - "Управлять", А3 - "Оформить приказ"

  **Блок А1**
![none](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_2/exp_img/03_A1.png)

  **Блок А3**
![none](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_2/exp_img/04_A3.png)

В диаграмме процесса «Оформить приказ» обязательным условием для входной информации является подписанное Заявление и Трудовой договор. На основании этих данных оформляется приказ. В случае, если какой-либо из документов не подписан - возврат на предыдущий этап (процесс). Процесс "Оформить приказ" состоит из трех подпроцессов: Формирование приказа, Рассмотрение и утверждение приказа, Подписание приказа. Выходная информация – Подписанный приказ, который СОХРАНЁН в базу данных.

3. Описание участников автоматизируемой деятельности
### Создание диаграммы прецедентов (отношения между действующими лицами и прецедентами) атоматизируемого блока "Управлять" в PLANTUML
* [Текст](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_2/UML_Code.txt) и [Картинка](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_2/ProcA3_DiagramPreced.png) 
![none](https://github.com/Karina1996/Karina1996.github.io/blob/master/Laba_2/ProcA3_DiagramPreced.png)

**Доступ к программе MS Word разрешен только сотрудникам компании.**

 ## Лабораторная работа №3
[Задание №3](https://github.com/stankin/design-1/wiki/lab-3)
1. Описание хранилищ данных (***см. лабороторную работу №2***)

2. Описание взаимодействия участников автоматизируемой деятельности

Диаграммы последовательностей - UML-диаграмма, на которой для набора объектов на единой временной оси показан ЖЦ объекта: (создание-деятельность-уничтожение некой сущности) и взаимодействие действующих лиц ИС в рамках прецедента (вариантов использования)

### Создание диаграммы поледовательности (используется для уточнения диаграмм прецедентов, более детального описания логики вариантов использования).

3. Завершение идентификации всех потоков

### Создание ER - диаграммы (представление потока, переходящего из диаграммы IDEF0 (блок А1) в DFD)
[Текст]() и [Картинка]() диаграммы классов (общая структура иерархии классов)

Информационный поток Приказ состоит из бумажной версии приказа и записи в БД?

*С помощью PlantUML выполнено построение диаграмм.*

