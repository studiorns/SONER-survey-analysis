// SONER Marketing Analytics Survey - Chart Generation
// Data embedded directly (no CSV parsing needed)

const surveyData = [
    {role: "Head of Marketing", vendors: "4-6", sources: "4–6", burden: "Extremely taxing", confidence: "Neutral", time: "3+ weeks", value: "Very valuable", monthlyBudget: "$3,000 - $4,000+", annualBudget: "$20,000–$30,000", challenges: "Lack of unified cross-channel view", useCases: "Budget allocation & optimisation, Agency performance evaluation, Strategic planning", decisionFactors: "Faster insights, Clearer ROI attribution, Reduced reporting effort"},
    {role: "CMO / Marketing Director", vendors: "2-3", sources: "4–6", burden: "Extremely taxing", confidence: "Not very confident", time: "1–3 days", value: "Extremely valuable", monthlyBudget: "$1,001 – $2,000", annualBudget: "Would not be interested in outsourcing this", challenges: "Difficulty translating data into actionable insights", useCases: "Budget allocation & optimisation, Board / leadership reporting, Strategic planning", decisionFactors: "Faster insights, Better executive reporting, More actionable insights"},
    {role: "CMO / Marketing Director", vendors: "2-3", sources: "4–6", burden: "Taxing", confidence: "Not very confident", time: "1–3 days", value: "Extremely valuable", monthlyBudget: "<$1,000", annualBudget: "$5000-15000", challenges: "Lack of unified cross-channel view", useCases: "Board / leadership reporting, Campaign ROI measurement, Strategic planning", decisionFactors: "Clearer ROI attribution, Better executive reporting, More actionable insights"},
    {role: "Sponsorship manager", vendors: "4-6", sources: "1–3", burden: "Taxing", confidence: "Not very confident", time: "3+ weeks", value: "Very valuable", monthlyBudget: "$2,001 - $4,000+", annualBudget: "$15,001–$20,000", challenges: "Data quality, tracking and privacy constraints", useCases: "Budget allocation & optimisation, Board / leadership reporting, Campaign ROI measurement, Strategic planning", decisionFactors: "Faster insights, Clearer ROI attribution, Better executive reporting, More actionable insights"},
    {role: "CMO / Marketing Director", vendors: "6-10", sources: "7–10", burden: "Taxing", confidence: "Somewhat confident", time: "3+ weeks", value: "Moderately valuable", monthlyBudget: "$1,001 – $2,000", annualBudget: "$5000-15000", challenges: "Data quality, tracking and privacy constraints", useCases: "Board / leadership reporting, Campaign ROI measurement, Strategic planning", decisionFactors: "Reduced reporting effort, Better executive reporting"},
    {role: "Digital commm", vendors: "4-6", sources: "4–6", burden: "Extremely taxing", confidence: "Not very confident", time: "3+ weeks", value: "Extremely valuable", monthlyBudget: "$1,001 – $2,000", annualBudget: "$15,001–$20,000", challenges: "Inconsistent KPIs and attribution models", useCases: "Budget allocation & optimisation, Board / leadership reporting, Agency performance evaluation, Campaign ROI measurement, Strategic planning", decisionFactors: "Faster insights, Clearer ROI attribution, Reduced reporting effort"},
    {role: "Senior Marketing Manager", vendors: "4-6", sources: "4–6", burden: "Taxing", confidence: "Neutral", time: "1–3 days", value: "Very valuable", monthlyBudget: "$1,001 – $2,000", annualBudget: "$15,001–$20,000", challenges: "Lack of unified cross-channel view", useCases: "Budget allocation & optimisation, Board / leadership reporting, Strategic planning", decisionFactors: "Clearer ROI attribution"},
    {role: "Senior Marketing Manager", vendors: "1", sources: "1–3", burden: "Taxing", confidence: "Not very confident", time: "3+ weeks", value: "Extremely valuable", monthlyBudget: "<$1,000", annualBudget: "$5000-15000", challenges: "Lack of unified cross-channel view", useCases: "Campaign ROI measurement", decisionFactors: "Faster insights, Clearer ROI attribution, Independent / unbiased view"},
    {role: "Head of Marketing", vendors: "2-3", sources: "1–3", burden: "Somewhat taxing", confidence: "Somewhat confident", time: "1–2 weeks", value: "Extremely valuable", monthlyBudget: "<$1,000", annualBudget: "$5000-15000", challenges: "Difficulty translating data into actionable insights", useCases: "Budget allocation & optimisation, Board / leadership reporting, Agency performance evaluation, Campaign ROI measurement, Strategic planning", decisionFactors: "Better executive reporting, More actionable insights"},
    {role: "Manager", vendors: "4-6", sources: "4–6", burden: "Taxing", confidence: "Not very confident", time: "3+ weeks", value: "Very valuable", monthlyBudget: "$1,001 – $2,000", annualBudget: "$5000-15000", challenges: "Data quality, tracking and privacy constraints", useCases: "Budget allocation & optimisation, Board / leadership reporting, Agency performance evaluation, Campaign ROI measurement, Strategic planning", decisionFactors: "Faster insights, Clearer ROI attribution, Reduced reporting effort, Better executive reporting"},
    {role: "CMO / Marketing Director", vendors: "2-3", sources: "4–6", burden: "Somewhat taxing", confidence: "Neutral", time: "Real-time / same day", value: "Very valuable", monthlyBudget: "$1,001 – $2,000", annualBudget: "$5000-15000", challenges: "Data quality, tracking and privacy constraints", useCases: "Budget allocation & optimisation, Board / leadership reporting, Agency performance evaluation, Campaign ROI measurement, Strategic planning", decisionFactors: "Faster insights, Clearer ROI attribution, More actionable insights"},
    {role: "Head of Marketing", vendors: "6-10", sources: "4–6", burden: "Extremely taxing", confidence: "Not confident at all", time: "3+ weeks", value: "Extremely valuable", monthlyBudget: "$1,001 – $2,000", annualBudget: "$5000-15000", challenges: "Lack of unified cross-channel view", useCases: "Board / leadership reporting", decisionFactors: "Faster insights"},
    {role: "Senior Marketing Manager", vendors: "6-10", sources: "4–6", burden: "Taxing", confidence: "Neutral", time: "3+ weeks", value: "Extremely valuable", monthlyBudget: "$1,001 – $2,000", annualBudget: "$5000-15000", challenges: "Inconsistent KPIs and attribution models", useCases: "Budget allocation & optimisation, Board / leadership reporting, Agency performance evaluation, Campaign ROI measurement, Strategic planning", decisionFactors: "Faster insights, Clearer ROI attribution, Independent / unbiased view, Reduced reporting effort, Better executive reporting, More actionable insights"},
    {role: "Senior Marketing Manager", vendors: "6-10", sources: "7–10", burden: "Somewhat taxing", confidence: "Not very confident", time: "1–2 weeks", value: "Very valuable", monthlyBudget: "$1,001 – $2,000", annualBudget: "$5000-15000", challenges: "Difficulty translating data into actionable insights", useCases: "Budget allocation & optimisation, Board / leadership reporting, Agency performance evaluation, Campaign ROI measurement, Strategic planning", decisionFactors: "Faster insights, Clearer ROI attribution, Independent / unbiased view, Reduced reporting effort, Better executive reporting, More actionable insights"},
    {role: "CMO / Marketing Director", vendors: "4-6", sources: "4–6", burden: "Not taxing at all", confidence: "Neutral", time: "Real-time / same day", value: "Very valuable", monthlyBudget: "$2,001 - $4,000+", annualBudget: "$20,001–$30,000", challenges: "Lack of unified cross-channel view", useCases: "Strategic planning", decisionFactors: "Clearer ROI attribution"},
    {role: "Performance / Growth Lead", vendors: "4-6", sources: "1–3", burden: "Somewhat taxing", confidence: "Neutral", time: "1–2 weeks", value: "Very valuable", monthlyBudget: "$1,001 – $2,000", annualBudget: "$5000-15000", challenges: "Difficulty translating data into actionable insights", useCases: "Budget allocation & optimisation, Campaign ROI measurement, Strategic planning", decisionFactors: "Faster insights, Clearer ROI attribution, More actionable insights"},
    {role: "Head of Marketing", vendors: "4-6", sources: "7–10", burden: "Extremely taxing", confidence: "Somewhat confident", time: "3+ weeks", value: "Very valuable", monthlyBudget: "<$1,000", annualBudget: "$5000-15000", challenges: "Data quality, tracking and privacy constraints", useCases: "Budget allocation & optimisation, Board / leadership reporting, Campaign ROI measurement, Strategic planning", decisionFactors: "Clearer ROI attribution, Independent / unbiased view"},
    {role: "Senior Marketing Manager", vendors: "2-3", sources: "7–10", burden: "Somewhat taxing", confidence: "Not very confident", time: "1–2 weeks", value: "Extremely valuable", monthlyBudget: "$2,001 - $4,000+", annualBudget: "$15,001–$20,000", challenges: "Data quality, tracking and privacy constraints", useCases: "Budget allocation & optimisation, Board / leadership reporting, Agency performance evaluation, Campaign ROI measurement, Strategic planning", decisionFactors: "Clearer ROI attribution, Independent / unbiased view, Reduced reporting effort, Better executive reporting, More actionable insights"},
    {role: "Senior Marketing Manager", vendors: "2-3", sources: "1–3", burden: "Somewhat taxing", confidence: "Somewhat confident", time: "1–2 weeks", value: "Very valuable", monthlyBudget: "$1,001 – $2,000", annualBudget: "$15,001–$20,000", challenges: "Inconsistent KPIs and attribution models", useCases: "Budget allocation & optimisation, Agency performance evaluation, Campaign ROI measurement", decisionFactors: "More actionable insights"}
];

console.log('Loaded', surveyData.length, 'survey responses');

// Helper function to count occurrences
function countOccurrences(data, field) {
    const counts = {};
    data.forEach(row => {
        const value = row[field];
        if (value && value.trim()) {
            counts[value] = (counts[value] || 0) + 1;
        }
    });
    return counts;
}

// Helper function to parse multi-select fields
function parseMultiSelect(data, field) {
    const counts = {};
    data.forEach(row => {
        const value = row[field];
        if (value && value.trim()) {
            const items = value.split(',').map(item => item.trim());
            items.forEach(item => {
                if (item) {
                    counts[item] = (counts[item] || 0) + 1;
                }
            });
        }
    });
    return counts;
}

function generateAllCharts() {
    const colors = {
        primary: ['#4285f4', '#8ab4f8', '#1a73e8', '#174ea6', '#5f9bea'],
        green: ['#27ae60', '#2ecc71', '#1e8449', '#45b57a', '#6fc98e'],
        red: ['#e74c3c', '#c0392b', '#ec7063', '#e8575c', '#d5504f'],
        orange: ['#f39c12', '#e67e22', '#f5b041', '#f8b739', '#f9c66b'],
        purple: ['#9b59b6', '#8e44ad', '#af7ac5', '#bb8fce', '#d2b4de'],
        mixed: ['#27ae60', '#f39c12', '#e67e22', '#c0392b']
    };

    const chartConfig = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } },
            y: { ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } }
        }
    };

    // 1. Role Distribution
    const roleData = countOccurrences(surveyData, 'role');
    new Chart(document.getElementById('roleChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(roleData),
            datasets: [{
                label: 'Respondents',
                data: Object.values(roleData),
                backgroundColor: colors.primary
            }]
        },
        options: {
            indexAxis: 'y',
            ...chartConfig,
            plugins: { legend: { display: false } },
            scales: {
                x: { beginAtZero: true, ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } },
                y: { ticks: { color: '#a0a0a0' }, grid: { display: false } }
            }
        }
    });

    // 2. Report Burden
    const burdenOrder = ['Not taxing at all', 'Somewhat taxing', 'Taxing', 'Extremely taxing'];
    const burdenData = countOccurrences(surveyData, 'burden');
    const burdenValues = burdenOrder.map(label => burdenData[label] || 0);
    
    new Chart(document.getElementById('burdenChart'), {
        type: 'doughnut',
        data: {
            labels: burdenOrder,
            datasets: [{
                data: burdenValues,
                backgroundColor: colors.mixed
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: '#a0a0a0' } }
            }
        }
    });

    // 3. Vendors
    const vendorsData = countOccurrences(surveyData, 'vendors');
    new Chart(document.getElementById('vendorsChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(vendorsData),
            datasets: [{
                label: 'Respondents',
                data: Object.values(vendorsData),
                backgroundColor: '#3498db'
            }]
        },
        options: {
            ...chartConfig,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } },
                x: { ticks: { color: '#a0a0a0' }, grid: { display: false } }
            }
        }
    });

    // 4. Data Sources
    const sourcesOrder = ['1–3', '4–6', '7–10'];
    const sourcesData = countOccurrences(surveyData, 'sources');
    const sourcesValues = sourcesOrder.map(label => sourcesData[label] || 0);
    
    new Chart(document.getElementById('sourcesChart'), {
        type: 'bar',
        data: {
            labels: sourcesOrder,
            datasets: [{
                label: 'Respondents',
                data: sourcesValues,
                backgroundColor: '#e74c3c'
            }]
        },
        options: {
            ...chartConfig,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } },
                x: { ticks: { color: '#a0a0a0' }, grid: { display: false } }
            }
        }
    });

    // 5. Confidence
    const confidenceOrder = ['Not confident at all', 'Not very confident', 'Neutral', 'Somewhat confident', 'Very confident'];
    const confidenceData = countOccurrences(surveyData, 'confidence');
    const confidenceValues = confidenceOrder.map(label => confidenceData[label] || 0);
    
    new Chart(document.getElementById('confidenceChart'), {
        type: 'bar',
        data: {
            labels: confidenceOrder,
            datasets: [{
                label: 'Respondents',
                data: confidenceValues,
                backgroundColor: ['#8b0000', '#e74c3c', '#95a5a6', '#3498db', '#27ae60']
            }]
        },
        options: {
            indexAxis: 'y',
            ...chartConfig,
            plugins: {
                legend: { display: false },
                title: { 
                    display: true,
                    text: 'Confidence in Unified Performance View (68% Lack Confidence)',
                    color: '#e0e0e0',
                    font: { size: 14 }
                }
            },
            scales: {
                x: { beginAtZero: true, ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } },
                y: { ticks: { color: '#a0a0a0' }, grid: { display: false } }
            }
        }
    });

    // 6. Time to Insights
    const timeOrder = ['Real-time / same day', '1–3 days', '1–2 weeks', '3+ weeks'];
    const timeData = countOccurrences(surveyData, 'time');
    const timeValues = timeOrder.map(label => timeData[label] || 0);
    
    new Chart(document.getElementById('timeChart'), {
        type: 'bar',
        data: {
            labels: timeOrder,
            datasets: [{
                label: 'Respondents',
                data: timeValues,
                backgroundColor: colors.mixed
            }]
        },
        options: {
            ...chartConfig,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } },
                x: { ticks: { color: '#a0a0a0' }, grid: { display: false } }
            }
        }
    });

    // 7. Value
    const valueOrder = ['Not valuable', 'Moderately valuable', 'Very valuable', 'Extremely valuable'];
    const valueData = countOccurrences(surveyData, 'value');
    const valueValues = valueOrder.map(label => valueData[label] || 0);
    
    new Chart(document.getElementById('valueChart'), {
        type: 'doughnut',
        data: {
            labels: valueOrder,
            datasets: [{
                data: valueValues,
                backgroundColor: ['#95a5a6', '#f39c12', '#3498db', '#27ae60']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: '#a0a0a0' } }
            }
        }
    });

    // 8. Challenges
    const challengesData = countOccurrences(surveyData, 'challenges');
    new Chart(document.getElementById('challengesChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(challengesData).map(l => l.length > 60 ? l.substring(0, 57) + '...' : l),
            datasets: [{
                label: 'Respondents',
                data: Object.values(challengesData),
                backgroundColor: colors.red
            }]
        },
        options: {
            indexAxis: 'y',
            ...chartConfig,
            plugins: {
                legend: { display: false },
                title: { 
                    display: true,
                    text: 'Biggest Challenge in Understanding Cross-Channel Performance',
                    color: '#e0e0e0',
                    font: { size: 14 }
                }
            },
            scales: {
                x: { beginAtZero: true, ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } },
                y: { ticks: { color: '#a0a0a0', font: { size: 10 } }, grid: { display: false } }
            }
        }
    });

    // 9. Monthly Budget
    const monthlyBudgetOrder = ['<$1,000', '$1,001 – $2,000', '$2,001 - $4,000+', '$3,000 - $4,000+'];
    const monthlyBudgetData = countOccurrences(surveyData, 'monthlyBudget');
    const monthlyBudgetValues = monthlyBudgetOrder.map(label => monthlyBudgetData[label] || 0);
    
    new Chart(document.getElementById('monthlyBudgetChart'), {
        type: 'bar',
        data: {
            labels: monthlyBudgetOrder,
            datasets: [{
                label: 'Respondents',
                data: monthlyBudgetValues,
                backgroundColor: ['#95a5a6', '#3498db', '#27ae60', '#27ae60']
            }]
        },
        options: {
            ...chartConfig,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } },
                x: { ticks: { color: '#a0a0a0' }, grid: { display: false } }
            }
        }
    });

    // 10. Annual Budget
    const annualBudgetData = countOccurrences(surveyData, 'annualBudget');
    new Chart(document.getElementById('annualBudgetChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(annualBudgetData),
            datasets: [{
                label: 'Respondents',
                data: Object.values(annualBudgetData),
                backgroundColor: colors.green
            }]
        },
        options: {
            indexAxis: 'y',
            ...chartConfig,
            plugins: { legend: { display: false } },
            scales: {
                x: { beginAtZero: true, ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } },
                y: { ticks: { color: '#a0a0a0', font: { size: 10 } }, grid: { display: false } }
            }
        }
    });

    // 11. Use Cases
    const useCasesData = parseMultiSelect(surveyData, 'useCases');
    new Chart(document.getElementById('useCasesChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(useCasesData),
            datasets: [{
                label: 'Respondents',
                data: Object.values(useCasesData),
                backgroundColor: colors.purple
            }]
        },
        options: {
            indexAxis: 'y',
            ...chartConfig,
            plugins: {
                legend: { display: false },
                title: { 
                    display: true,
                    text: 'Primary Use Cases for Unified Analytics',
                    color: '#e0e0e0',
                    font: { size: 14 }
                }
            },
            scales: {
                x: { beginAtZero: true, ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } },
                y: { ticks: { color: '#a0a0a0', font: { size: 10 } }, grid: { display: false } }
            }
        }
    });

    // 12. Decision Factors
    const decisionFactorsData = parseMultiSelect(surveyData, 'decisionFactors');
    new Chart(document.getElementById('decisionFactorsChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(decisionFactorsData),
            datasets: [{
                label: 'Respondents',
                data: Object.values(decisionFactorsData),
                backgroundColor: '#3498db'
            }]
        },
        options: {
            indexAxis: 'y',
            ...chartConfig,
            plugins: {
                legend: { display: false },
                title: { 
                    display: true,
                    text: 'What Would Make You Switch to a New Insights Partner?',
                    color: '#e0e0e0',
                    font: { size: 14 }
                }
            },
            scales: {
                x: { beginAtZero: true, ticks: { color: '#a0a0a0' }, grid: { color: '#3d3d3d' } },
                y: { ticks: { color: '#a0a0a0', font: { size: 10 } }, grid: { display: false } }
            }
        }
    });

    console.log('All charts generated successfully!');
}

// Generate charts when page loads
document.addEventListener('DOMContentLoaded', function() {
    generateAllCharts();
    
    // Print button functionality
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
});
