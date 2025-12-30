import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAACUCAMAAACX8CSrAAAAY1BMVEX///8AAAD5+fny8vLh4eGvr6/8/PyTk5NiYmIZGRk6OjpTU1OKiopISEipqalLS0vIyMjo6Oi9vb1ycnLY2Nh6enpBQUEzMzNsbGycnJy2trYuLi7Ozs4lJSVbW1sJCQmCgoLlo8iEAAAJP0lEQVR4nO2ch5LrqBKGR6CcrCyh/P5PuQRlQLZnd2zuLb46VTO2wuiHpulu0Pn50Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go/l/xJyDOX3j/NSaXX/wvC7IUQ/+7LH+FhgaBPTa2XYRDsaJwIL28+uyETqz3ZSgfPEP/TEwXx5/fqHfYOIuZ0+T503r74757Fo7jkxnBF0FovA/eex/S7j22vS0G0DS0DPrsSkdhJAzN6NPtQ/oySChsl3gP0CghOx+t1a/vz81dYh5ew3KTLCYNUgTVNbkYje5tXTFZNvRYZSW8O5Uk4wGr2yv/QoTxyONFt/pVkx2e3ROdXJzZjHiM6pW1DLM+Afn5mrFZI8np+zIPRNVPRaSHk0R9Wzyv6OW7MI/z0WF7ETq70f5ILBjcn17c1wl2c50kj1l0hPJGLi9FdE9mbKjasnOjTNIYsQZcVq3Do+1TCA7qJTsNLjIbsTTLyzxMevJzWzs1zzZSUrJTvyL7EpspQkZ2E8j0AKbhCsxCaVkx95FtiGMWGjUfje5LeAhU0u8g1Ky0VW1WFw6yLvxdB6+gUSUSrLtkJMt7Kzidm46gF1FLm4elWSDkpMdXwMW0FsIZ13Dk3idgSexbo4zgYNQSTbkZZ/jtBQ9hoHml/lLZQhi5TghHbo8uzhAxWWHu2y7rfbv0UtFFLBfMM2nPldK9jVaOcgGWbc8/+D7UfCCH8fYgTHVVb3MD7O5d7lSsqVGbhesRYZH7lhm+nK9rDGqBBbxPNI286zNv6kkG8y8S6MdBFoaxzxmy3yhTHagWbIZmM0V6/DlgEqyaRh9hk5gAJHOipAszZTTbOEt6GmpcVxyOlZLs/3o5/F92W13Ue2RpwSIPHAoTULl4LG9V2hg9jC2XNaOvTkYkDeg22rEZ+BSEfrQFnZJXfZCVMaBPflRVEochEvt3LaoeyT/vi+bJZQ7tIho4oerXvPcV1JjOEVzgBSbZtKATDbzmv/Bc/9bsqNqVkvrnhTVboiN4BzWAGJOtCVapWTjDlkLLENI7RrdZM3PCLhMBHZLNpuuVbtRWoH5LD2rGQfscWzcCvN6yH7PlUPD5zQl66wIEFlJqG+qlB8mJSMwXz7Ex2WC9L0pbBaknSQkqph7TOqXsvaPkeFuWMcktsVmO9BLS4oizCkSuH9yc9aORbD/GRU4yDb9w8i2rZg7F0j7384n0VRvuqsXK/A8rsjAphAvuzxPOxjD1iMw5FcDTWl/xeJyMwjXgipxIr+Igf4MInsZz85kdNv36ehwfZsiSRyTycpo2FtM9JqkktTqvgSRvfganJzsss0q5P1uI57devesaJ8EsmEpsWe+Wi7tLLvavjd9wSQbCt1SEZ+NAOwXZvXiOUgGr5rsxUKxbH/73qw8/jFjT7A8Ai5fwUMrELVUNvYbSsmOd9nhycgfgmJS0hnVs2kIOIdx3q5GTlKct2bEv8VGxlYQRp4xbB2FM6iKc70Fttmqvw1jIIoOn/DdO9p48fRi3fkzAFJtWBwV7ktv6xGAn5jz5SYpvNTxTV5qhkdbhvMaAJHW5QOBrwGJ7GWGhniSKbcjOD8brmZJZRtemUiCaztxD+MEW0e0tikyXt4G9glIf2zRdH5c/yPhpH8x875ecvMyEwkvQv+0IkQTbXZDx5CuFX0DWkBdu7g/Phs1/4vudtuN143oWmHsy4rksYcrzGhbIHKMoyV9HVr72fIPbOX+NjTpSvA5/DpugJiGKm8LJso2k7liTTLtA5823HI755DoKQBNPMf1k0nqX+sMZc97iY0BXINjGLruuCNz3O+dHK4mst1PCHoNKnuPzea1/kXI2Ej24nWJgNsJIGDv0uI4SG53eXyelHTgYT8OqX+tO45Bs/aoQ41ZsH7EM693Iqr3PDY8te7XMUmZazh8JvXtZsksDkvgedv3/DqKvLchCXq9Lc4jGegh8v06ZGY9yqbzluGzBSx03MI1DEKZV9jY7mdyqbO5Bbr01P0oAwk3De/0DS1zlkQ4v+HhOROe1gqHLoIdojk6T6okm/bh6auUGvPgon68kScl7ktajvWO246p7OFHGXpqx+eQCyS0Lbya28v0CgPz/+UpW6fhgUqy6TNecwub38ZkTHWQh8iyrCzLEgL+2VpWHOZBzZ0cXKrNdJ5UTjafQ4MHezeijlyn7Yvna4Fp0cdzQF6ewRdytScq2/vNiuLfwGTz5SOI5/M8Kd4ubUMzEy0okcqxerL5Ui6R/bvVMFsuW531geRG9u2bEFLg/45svoL9VDY0k9aKESW2rDZjtJYjkk2DIE+dZZH2V7JhFoelOz6qbpnjJg8nYoSBTIgC2STm9ZRZFlk2GvCl3KNsmFIOMVfRF0VhEoo+a1E+nlMzXnZfKSUbsAmad15UNv5pYk2VT6nGZo6Zbz+vfQMIIdZvOXPeNHkpkk1T1kmZ1aBFNl/cI7Jb6HAJ9jTVI7qdxoWePOnUks12p/FbSojs6w6uoxmXrQnF675AJJtuD5qUWRZZ3uid+QPH+tHU+Y9xdLEBl3njjuMYRP4w+XNbmCnX8WLZxNPJ3z36NJCVDvji3i7bC3Icnp7V2dDEriwO59Dqr5tShbLphMHHrN9ikd3wB9zVmuP72RZe+/tGtjLLIkt5bOQPMNn5+xsShbItief8Eos6vqbJDsS/CCdvZCuzLLJsPI24A1R2+5ug/Eb2/Ivb/QkpezeCL+US2bK3H+8RzttMtjKrQSmbm/lS7hsZmN1nKZvCbRukmXADZyyZML6EyUrCHSfwrcTTDKu6rrut9CaTzU8YX8JcnpPz1+/m29DMUDiXBIHspTanzCLYInt6QTa2YJiSnOsI/pxCeM5MBLKXGFg12XwNcc3AcHqFk6skIxUFnGG5bvCIoooRRY9gdPMyJIWGLOkLGqWLXNoimw8PvsStkYdJGzvz7AZV/XwhaMCJaT6HcSssISK1XFrKMkv+vyAgsmt/eHuBYBp8aZlBnd2Xt/n2qTOjwM1DJ2YrA0mPYWsEFgpzbA8ncxC8gUDeFlcmJP/5KUg3CJYrVtm+m6OM5JcAY4veKMCuDoO9XWGFDXsZQZRqZb4y+RchDYNQIAbmY2hhH/Xu7WzyumOg0MY7jUaj0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0mj/lH0a1ePNwYE7+AAAAAElFTkSuQmCC" alt="logo" />
            </div>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to ="services">Services</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;

