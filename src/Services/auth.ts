import { resolvePreset } from "@babel/core";

export function signIn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'einfuinvwjENVPEWMiomckadovpLMDJKM',
                user: {
                    name: 'Diego',
                    email: 'diego@rocketseat.com.br',
                },
            });
        }, 2000);
    });
}