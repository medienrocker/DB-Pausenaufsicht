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

// Example usage: generate XML 200 times
generateXML(200);