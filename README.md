\# IT Market Monitoring System



Веб-приложение для мониторинга и анализа тенденций на региональном рынке ИТ-специалистов.



\## Описание проекта



Данный проект представляет собой программное обеспечение, предназначенное для анализа состояния и динамики рынка ИТ-специалистов на региональном уровне.



Основной регион исследования — Новосибирская область. При этом архитектура системы предусматривает возможность масштабирования на другие регионы Российской Федерации.



Приложение ориентировано не на поиск вакансий, а на \*\*мониторинг и аналитическую обработку данных\*\*, включая:

\- динамику количества вакансий;

\- уровень заработных плат;

\- востребованные навыки;

\- распределение по специализациям;

\- уровень конкуренции на рынке труда.



\## Цель проекта



Создание веб-приложения, позволяющего:

\- автоматически собирать и обрабатывать данные о вакансиях;

\- выявлять тенденции на рынке ИТ-специалистов;

\- визуализировать аналитические показатели в удобной форме;

\- предоставлять пользователю инструмент для анализа рынка труда.



\## Основные пользователи



\- Соискатели

\- Работодатели

\- Аналитики рынка труда

\- Исследователи

\- Студенты и преподаватели



\## Функциональные возможности (MVP)



Первая версия приложения включает:



\- Главную страницу с аналитическим дашбордом

\- Фильтрацию по регионам

\- KPI-показатели:

&#x20; - количество вакансий

&#x20; - средняя/медианная зарплата

&#x20; - уровень конкуренции

&#x20; - доля удалённой работы

\- График динамики вакансий

\- Таблицу востребованных специализаций

\- Backend API с тестовыми (mock) данными



\## Технологический стек



\### Frontend

\- React

\- TypeScript

\- Tailwind CSS

\- Recharts



\### Backend

\- FastAPI (Python)

\- REST API



\### База данных

\- PostgreSQL

\- SQLAlchemy

\- Alembic



\### Архитектура

\- Монолитное веб-приложение



\## Структура проекта
vkr/

│

├── .gitignore

├── README.md

├── AGENTS.md

├── docker-compose.yml

├── .env.example

│

├── docs/

│   ├── architecture/

│   │   ├── context.md

│   │   ├── modules.md

│   │   ├── api.md

│   │   └── database.md

│   ├── diagrams/

│   │   ├── use-case.puml

│   │   ├── er-diagram.puml

│   │   ├── component-diagram.puml

│   │   └── deployment-diagram.puml

│   └── thesis-notes/

│       ├── chapter-2-notes.md

│       ├── chapter-4-notes.md

│       └── screenshots-list.md

│

├── frontend/

│   ├── package.json

│   ├── tsconfig.json

│   ├── vite.config.ts

│   ├── index.html

│   ├── .env.example

│   │

│   ├── public/

│   │   └── favicon.svg

│   │

│   └── src/

│       ├── app/

│       │   ├── router/

│       │   │   └── index.tsx

│       │   ├── providers/

│       │   │   └── index.tsx

│       │   └── styles/

│       │       └── globals.css

│       │

│       ├── pages/

│       │   ├── dashboard/

│       │   │   └── DashboardPage.tsx

│       │   ├── regions/

│       │   │   └── RegionsPage.tsx

│       │   ├── skills/

│       │   │   └── SkillsPage.tsx

│       │   ├── salaries/

│       │   │   └── SalariesPage.tsx

│       │   ├── specializations/

│       │   │   └── SpecializationsPage.tsx

│       │   └── not-found/

│       │       └── NotFoundPage.tsx

│       │

│       ├── widgets/

│       │   ├── header/

│       │   │   └── Header.tsx

│       │   ├── sidebar/

│       │   │   └── Sidebar.tsx

│       │   ├── filters-panel/

│       │   │   └── FiltersPanel.tsx

│       │   ├── kpi-cards/

│       │   │   └── KpiCards.tsx

│       │   ├── vacancy-dynamics-chart/

│       │   │   └── VacancyDynamicsChart.tsx

│       │   └── top-specializations-table/

│       │       └── TopSpecializationsTable.tsx

│       │

│       ├── entities/

│       │   ├── region/

│       │   │   ├── model/

│       │   │   │   └── types.ts

│       │   │   └── ui/

│       │   ├── vacancy/

│       │   │   ├── model/

│       │   │   │   └── types.ts

│       │   │   └── ui/

│       │   ├── skill/

│       │   │   ├── model/

│       │   │   │   └── types.ts

│       │   │   └── ui/

│       │   └── statistics/

│       │       ├── model/

│       │       │   └── types.ts

│       │       └── ui/

│       │

│       ├── features/

│       │   ├── select-region/

│       │   │   ├── model/

│       │   │   └── ui/

│       │   ├── filter-statistics/

│       │   │   ├── model/

│       │   │   └── ui/

│       │   └── load-dashboard-data/

│       │       ├── api/

│       │       └── model/

│       │

│       ├── shared/

│       │   ├── api/

│       │   │   ├── client.ts

│       │   │   └── endpoints.ts

│       │   ├── config/

│       │   │   └── env.ts

│       │   ├── lib/

│       │   │   ├── formatters.ts

│       │   │   └── helpers.ts

│       │   ├── ui/

│       │   │   ├── Button.tsx

│       │   │   ├── Card.tsx

│       │   │   ├── Table.tsx

│       │   │   ├── Select.tsx

│       │   │   └── Loader.tsx

│       │   └── types/

│       │       └── common.ts

│       │

│       ├── App.tsx

│       └── main.tsx

│

├── backend/

│   ├── requirements.txt

│   ├── .env.example

│   ├── alembic.ini

│   │

│   ├── migrations/

│   │   ├── env.py

│   │   ├── script.py.mako

│   │   └── versions/

│   │

│   ├── app/

│   │   ├── main.py

│   │   │

│   │   ├── core/

│   │   │   ├── config.py

│   │   │   ├── database.py

│   │   │   ├── security.py

│   │   │   └── logging.py

│   │   │

│   │   ├── api/

│   │   │   ├── deps.py

│   │   │   ├── router.py

│   │   │   └── v1/

│   │   │       ├── dashboard.py

│   │   │       ├── regions.py

│   │   │       ├── skills.py

│   │   │       ├── salaries.py

│   │   │       └── specializations.py

│   │   │

│   │   ├── models/

│   │   │   ├── region.py

│   │   │   ├── vacancy.py

│   │   │   ├── skill.py

│   │   │   ├── vacancy\_skill.py

│   │   │   └── statistic\_snapshot.py

│   │   │

│   │   ├── schemas/

│   │   │   ├── region.py

│   │   │   ├── vacancy.py

│   │   │   ├── skill.py

│   │   │   ├── dashboard.py

│   │   │   └── common.py

│   │   │

│   │   ├── repositories/

│   │   │   ├── region\_repository.py

│   │   │   ├── vacancy\_repository.py

│   │   │   ├── skill\_repository.py

│   │   │   └── statistics\_repository.py

│   │   │

│   │   ├── services/

│   │   │   ├── dashboard\_service.py

│   │   │   ├── analytics\_service.py

│   │   │   ├── region\_service.py

│   │   │   └── seed\_service.py

│   │   │

│   │   ├── analytics/

│   │   │   ├── indicators.py

│   │   │   ├── aggregations.py

│   │   │   └── calculations.py

│   │   │

│   │   ├── loaders/

│   │   │   ├── mock\_loader.py

│   │   │   └── hh\_adapter.py

│   │   │

│   │   └── tests/

│   │       ├── conftest.py

│   │       ├── test\_dashboard.py

│   │       ├── test\_regions.py

│   │       └── test\_analytics.py

│   │

│   └── scripts/

│       ├── seed\_mock\_data.py

│       └── run\_dev.py

│

└── infra/

&#x20;   ├── nginx/

&#x20;   │   └── default.conf

&#x20;   └── db/

&#x20;       └── init.sql



\## Этап разработки



Текущий этап: создание MVP (минимально жизнеспособной версии).



На данном этапе:

\- используется тестовые данные;

\- не реализован сбор данных с внешних источников;

\- отсутствует авторизация пользователей;

\- основной акцент сделан на архитектуре и аналитике.



\## Планы развития



В следующих этапах планируется:



\- интеграция с API платформ вакансий (например, hh.ru);

\- реализация реального сбора данных;

\- расширение аналитических показателей;

\- добавление пользовательских сценариев;

\- улучшение визуализации данных;

\- оптимизация производительности системы.



\## Ограничения проекта



\- система не является сервисом поиска вакансий;

\- точность аналитики зависит от источников данных;

\- используется только открытая информация;

\- в рамках диплома не реализуется сложное прогнозирование.



\## Запуск проекта (будет добавлено позже)



Инструкции по запуску frontend и backend будут добавлены после создания базовой структуры проекта.



\## Автор



Студент направления «Прикладная информатика»

ВКР: разработка ПО для мониторинга тенденций на региональном рынке ИТ-специалистов

