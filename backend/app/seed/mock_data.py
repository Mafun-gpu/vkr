REGIONS = [
    {'id': 54, 'name': 'Novosibirsk Oblast'},
    {'id': 77, 'name': 'Moscow'},
]

DASHBOARD_MOCK = {
    'kpi': {
        'vacancies': 1250,
        'average_salary': 145000,
        'median_salary': 130000,
        'competition_level': 6.2,
        'remote_share': 42.5,
    },
    'vacancy_dynamics': [
        {'period': '2026-01', 'count': 1100},
        {'period': '2026-02', 'count': 1180},
        {'period': '2026-03', 'count': 1250},
    ],
    'top_specializations': [
        {'name': 'Backend Developer', 'count': 340},
        {'name': 'Frontend Developer', 'count': 290},
        {'name': 'Data Analyst', 'count': 180},
    ],
}
