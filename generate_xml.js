function generateXML(repetitions) {
    const template = `<field>
<type>text</type>
<name>slot{{num}}</name>
<required>0</required>
</field>`;

    for (let i = 1; i <= repetitions; i++) {
        let formattedNumber = i.toString().padStart(3, '0');
        console.log(template.replace('{{num}}', formattedNumber));
    }
}

function generateTEXT(repetitions) {
    const template = `[[slot{{num}}]]`;
    let output = '';

    for (let i = 1; i <= repetitions; i++) {
        let formattedNumber = i.toString().padStart(3, '0');
        output += template.replace('{{num}}', formattedNumber);

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

// Example usage: generate XML 20 times
//generateXML(200);
generateTEXT(200);
exit