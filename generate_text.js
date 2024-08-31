function generateTEXT(repetitions) {
    const template = `<span class="slot{{num}}">[[slot{{num}}]]</span>`;
    let output = '';

    for (let i = 1; i <= repetitions; i++) {
        let formattedNumber = i.toString().padStart(3, '0');
        output += template.replaceAll('{{num}}', formattedNumber);

        // Add a space between slots, except at the end of a line
        if (i % 10 !== 0 && i !== repetitions) {
            output += ' ';
        }

        // Add a line break after every 10 slots
        if (i % 10 === 0 && i !== repetitions) {
            output += '\n';
        }
    }

    console.log(output);
    return output; // In case you want to use the output elsewhere
}

// Example usage: generate TEXT 200 times
generateTEXT(200);