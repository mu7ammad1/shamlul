import React from 'react';

interface PaletteProps {
    params: {
        slug: string;
    };
}

const Data = [
    ['FFB534', 'FBF6EE', 'C1F2B0', '65B741'],
    ['EEF0E5', 'B6C4B6', '304D30', '163020'],
    ['F2F1EB', 'EEE7DA', 'AFC8AD', '88AB8E'],

    ['F3F8FF', 'E26EE5', '7E30E1', '49108B'],

    ['711DB0', 'C21292', 'EF4040', 'FFA732'],
    ['9BB8CD', 'FFF7D4', 'EEC759', 'B1C381'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['cdb4db', 'ffc8dd', 'ffafcc', 'bde0fe', 'a2d2ff'],
    ['606c38', '283618', 'fefae0', 'dda15e', 'bc6c25'],
    ['8ecae6', '219ebc', '023047', 'ffb703', 'fb8500'],
    ['780000', 'c1121f', 'fdf0d5', '003049', '669bbc'],
    ['dad7cd', 'a3b18a', '588157', '3a5a40', '344e41'],
    ['edede9', 'd6ccc2', 'f5ebe0', 'e3d5ca', 'd5bdaf'],
    ['2b2d42', '8d99ae', 'edf2f4', 'ef233c', 'd90429'],
    ['000000', '14213d', 'fca311', 'e5e5e5', 'ffffff'],
    ['264653', '2a9d8f', 'e9c46a', 'f4a261', 'e76f51'],
    ['003049', 'd62828', 'f77f00', 'fcbf49', 'eae2b7'],
    ['0d1b2a', '1b263b', '415a77', '778da9', 'e0e1dd'],
    ['355070', '6d597a', 'b56576', 'e56b6f', 'eaac8b'],
    ['e63946', 'f1faee', 'a8dadc', '457b9d', '1d3557'],
    ['ccd5ae', 'e9edc9', 'fefae0', 'faedcd', 'd4a373'],
    ['d8e2dc', 'ffe5d9', 'ffcad4', 'f4acb7', '9d8189'],
    ['f4f1de', 'e07a5f', '3d405b', '81b29a', 'f2cc8f'],
    ['000814', '001d3d', '003566', 'ffc300', 'ffd60a'],
    ['001219', '005f73', '0a9396', '94d2bd', 'e9d8a6','ee9b00','ca6702','bb3e03','ae2012','9b2226'],
    ['03045e', '023e8a', '0077b6', '0096c7', '00b4d8','48cae4','90e0ef', 'ade8f4','caf0f8'],
    ['386641', '6a994e', 'a7c957', 'f2e8cf', 'bc4749'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['000000', '000000', '000000', '000000', '000000'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],
    ['092635', '1B4242', '5C8374', '9EC8B9'],];

const Palette: React.FC<PaletteProps> = ({ params }) => {
    // البحث عن الصف الذي يتطابق مع سلسلة الصف في params.slug
    const selectedRow = Data.find(row => row.join('-') === params.slug);

    if (!selectedRow) {
        // التعامل مع حالة عدم العثور على الصف المطابق للـ slug
        return <div className='flex justify-center items-center h-screen'>
            <div>
                <h1>Page not found</h1>
            </div>
        </div>;
    }

    return (
        <main className="flex justify-center mx-10">
            <div className="max-w-7xl w-full">
                <div className="flex hover:outline outline-emerald-400 rounded-lg dark:bg-[#202020] bg-gray-200">
                    {selectedRow.map((color, colIndex) => (
                        <span
                            key={colIndex}
                            className={`w-96 h-24 flex justify-center items-center dark:text-white text-3xl first:rounded-l-lg last:rounded-r-lg sh bold-${color}`}
                            style={{ background: `#${color}` }}
                        >
                            {color}
                        </span>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Palette;
