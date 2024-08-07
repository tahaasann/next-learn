// Bu dosyayı uygulamanızın tamamında kullanılacak fontları tutmak için kullanacaksınız.

import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin'],
});

// Uygulamanızın belirli öğelerine de yazı tipi ekleyebilirsiniz.