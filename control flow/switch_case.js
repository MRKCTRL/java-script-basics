let role = 'guest';

switch(role) {
    case 'guest': 
    console.log('guest User');
    break;

    case'moderator User':
    console.log('moderator User');
    break;

    default:
        console.log('unknown User');
}

if (role === 'guest')console.log('Guest');
else if (role === 'moderator') console.log('moderator');
else console.log('unknoen User');