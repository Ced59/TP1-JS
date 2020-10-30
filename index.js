(async function () {
    const chalk = require('chalk');
    const {Aki} = require('aki-api');
    const {Select} = require('enquirer');
    const aki = new Aki('fr');

    const message = chalk.green('Coucou tout le monde! Je suis beau!');


    await aki.start();


    let myAnswer = 0;

    while (aki.progress <= 90) {

        const answers = [...aki.answers];

        const prompt = new Select({
            name: 'Answer',
            message: aki.question,
            choices: aki.answers
        });


        myAnswer = await prompt.run();

        await aki.step(answers.indexOf(myAnswer));

    }


    await aki.win();
    console.log(chalk.green('J\'ai trouvé lui: :', aki.answers[0].name));
    console.log(chalk.green('guessCount:', aki.guessCount));

})();
