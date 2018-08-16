# Структура организации файлов стилей

Все исходные файлы стилей проекта, которые можно изменять, находятся в папке `static_src`. 

Некоторые файлы стилей импортируются в проект из установленных npm модулей в папке `node_modules`. Но их нельзя изменять, так как все изменения будут потеряны при повторном развёртывании проекта.


## ITCSS

При организации файлов и папок стилей внутри папки `static_src` используется методология Гарри Робертса ITCSS. 

Ниже приведены имеющиеся в сети материалы по этой методологии:

* [Изложение методологиии ITCSS в блоге компании xfive](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) [EN].