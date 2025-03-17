function updateRecipe() {
    const servings = parseInt(document.getElementById('servings').value);
    
    document.getElementById('eggs').textContent = 4 * servings;
    document.getElementById('milk').textContent = 50 * servings;
    document.getElementById('cheese').textContent = 30 * servings;
	document.getElementById('lardon').textContent = 150 * servings;
}

// Initial calculation on page load
updateRecipe();