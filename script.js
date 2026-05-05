// Multi-step Form Logic
function nextStep(stepNumber) {
    // Hide all steps
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(step => step.style.display = 'none');

    // Show the target step
    const targetStep = document.getElementById(`step-${stepNumber}`);
    if (targetStep) {
        targetStep.style.display = 'block';
    }

    // Update Progress Stepper
    const progressSteps = document.querySelectorAll('.progress-stepper .step');
    progressSteps.forEach(step => {
        if (parseInt(step.getAttribute('data-step')) <= stepNumber) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function prevStep(stepNumber) {
    nextStep(stepNumber); // The logic is the same for navigating back
}

// Dynamic Spec Table Logic
const coaData = {
    'premium-cubes': { sucrose: '85% - 90%', moisture: '< 5%' },
    'bulk-powder': { sucrose: '80% - 85%', moisture: '< 7%' },
    'liquid-jaggery': { sucrose: '70% - 75%', moisture: '< 20%' }
};

const gradeSelect = document.getElementById('jaggery-grade');
const specTable = document.getElementById('dynamic-spec-table');
const coaSucrose = document.getElementById('coa-sucrose');
const coaMoisture = document.getElementById('coa-moisture');

if (gradeSelect) {
    gradeSelect.addEventListener('change', function() {
        const selectedGrade = this.value;
        if (selectedGrade && coaData[selectedGrade]) {
            coaSucrose.textContent = coaData[selectedGrade].sucrose;
            coaMoisture.textContent = coaData[selectedGrade].moisture;
            specTable.style.display = 'block';
        } else {
            specTable.style.display = 'none';
        }
    });
}

// Interactive Incoterms Map Logic
const destinationPortSelect = document.getElementById('destination-port');
const selectedPortDisplay = document.getElementById('selected-port-display');

if (destinationPortSelect) {
    destinationPortSelect.addEventListener('change', function() {
        const portName = this.options[this.selectedIndex].text;
        if (selectedPortDisplay) {
            selectedPortDisplay.textContent = portName;
        }
    });
}

// Batch Tracking Demo Logic
function trackBatch() {
    const batchInput = document.getElementById('batch-id-input');
    const batchResult = document.getElementById('batch-result');
    const procDate = document.getElementById('proc-date');

    if (!batchInput || !batchResult || !procDate) return;

    const batchId = batchInput.value.trim();
    if (batchId) {
        // Simulate an API call / data retrieval
        batchResult.style.display = 'block';

        // Dynamic simulated date just to show it "working"
        const dates = ["October 15, 2023", "November 02, 2023", "September 28, 2023"];
        procDate.textContent = dates[Math.floor(Math.random() * dates.length)];
    } else {
        alert("Please enter a valid Batch ID.");
        batchResult.style.display = 'none';
    }
}

// Form Submission handling
const rfqForm = document.getElementById('rfq-form');
if (rfqForm) {
    rfqForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your inquiry has been submitted successfully.');
        // Reset form and go back to step 1
        this.reset();
        specTable.style.display = 'none';
        nextStep(1);
    });
}
