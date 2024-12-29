// Assuming localScaleComponent is defined somewhere earlier
if (localScaleComponent && !localScaleComponent.merged) {
    // Your code here
    console.log("The local scale component exists and has not been merged.");
    
    // Example operation
    localScaleComponent.merged = true; // Mark it as merged
} else {
    console.log("Either the component does not exist or it has already been merged.");
}
