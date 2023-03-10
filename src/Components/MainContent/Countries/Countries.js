import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from "../../ThemeContext/themeContext";
import { useContext } from "react";

function Countries() {

    const themeContext = useContext(ThemeContext)
    return (
        <CountriesContainer className="row">
            <CountryItem className="col-lg-3 col-md-4 col-sm-6">
                <Flag>
                    <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAgVBMVEXaJR3//wDZEx7qlhTXAB7ZHR3ZGx3zxg7YCx7rmxT++wHqmBT99gT88Ab43Qr32Av21Az0yw3ywQ/iZRnwuBDurhLtqBLjcBjfUxr65wj76wfsoxPcPBzbLRz54QnpkBXnhRbmfxfleRfjbBjhXRreTRvzxA/wthHdRBvgWRrniRZlYMFKAAAEEElEQVR4nO3d63aiMBQFYBNPEG/Veqla71Zbp+//gIMiSCAIKF3Kyf7+dmYWnMmOMZyUWg0AAAAAAAAAAAAAAAAAAAAAAAAArpbPvoDXQw169iW8GrUQC/Xsi3gxsima8tkX8WJoJVYIj0YthRBLhCdK1r2a1BGeKHrzavKG8GjEybMv4qXI9bkma4TninrnmvQQnislfPjgCcnfS01+EZ4A9S816SM8ASkCGCcXchPWZIOi+Og9rMk7wuNzxZX77It5DXIbqckW4TmJRAfhuSARhZp4nJ1Wk53z7At6AdTQaoKt6lo8OgiPx5nEajJBeGgQq8kAAyUeHYSn5nwlavJle3jceHS88Ni+vqdWoiYty8PjDBMlEWJod3jckaEmI7vDQx1DTTpWh0ftDSURYm/z/r37Y6zJj83hMUbH7vCoqbEkQkwZhkfJXGicUpMx5fsHKlQ6NZnX81h3U2rSXef6+/NJhYoiTcuO8o0qtbijYXLNXrqvik3FUvX+uCI9Vb3HHlT/05K0KzZIfHRIm0If1zlUsiTel97EvmJZBlSp2VVDu+z7u8O2ooPEJ5er0isyW1ZvctUo+ii5JB9UoYVaCtqXuVRp7Sudm4Aj+9n3mlNfVndy1dG6pJKsWQwSn3v8LKEi3SOrvSZFj38rHDGYXHUUf1Ze1IRRbgKy9vZARd5qFV+UmClq3l2SObvcBGhq3pPO0pkyzE3AcRvZFUhouFwWJWa0ya5BzIbxIPHJxaxQRWYLlpOrTqU+wTAZs51cdTTMO9V2huxzE6C8M61FzbJudjUuWH3BucXZ5q7Jlven8JV2EOM2a45pJFti01lSE6fIZr4lxzTou0BNvu0YKEWiY0l4EgcxbrPimEbBB6ZWHNMwdJPfYkOnueEgxm0WHNMwdpPfYkGnecHo2BAe40EMfzyk/YD9MY2UbvLTNnTaBjb7TvOUbvIGOTUnZVuFe6d5ykGMS+MRbY0/ZX5Mwxida+ORXJo2sJmHxxSd6Da0cQO7yzo8hoMYrdg2tKkDm+MxjZCbGAV9J/74RjqJtqYx5/BQvIu4bopFoq2Jc3jUIXavKY1H7jFWuwPf8Ei9L3SQ+owv3tb0wff5KGldbbtbidA7sD/ZhkcdI7e5yuiG1juwj1zDI+fXm8xuPFIU/eNcw0PhIrXzL08Y6F+4wpsxDY9aBHf4nrPxyHHDJ4ZMXwgggxa/3/z/6WFbE9MXApA/aX4uiqxK3YX/WcXzhQDnX+vvfckt2HikyP8qzfKFALJ9urU7zr/Seae/zTE8p1/rf9/51/O5XJYvBPCi07y3YY+8McbwnUWy2Xrg/CsdWgw/eWT7oSNajuQ4oTx6SwxLAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMx/np0p7vEdSWwAAAAASUVORK5CYII="></img>
                </Flag>
                <CountryInfor className={themeContext.theme}>
                    <h3>Việt Nam</h3>
                    <CountryPop>Dân số:
                        <span>123.456</span>
                    </CountryPop>

                    <CountryPos>Châu lục:
                        <span>Châu Á</span>
                    </CountryPos>

                    <CountryCapital>Thủ đô:
                        <span>Hà Nội</span>
                    </CountryCapital>

                </CountryInfor>
            </CountryItem>

            <CountryItem className="col-lg-3 col-md-4 col-sm-6">
                <Flag>
                    <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAgVBMVEXaJR3//wDZEx7qlhTXAB7ZHR3ZGx3zxg7YCx7rmxT++wHqmBT99gT88Ab43Qr32Av21Az0yw3ywQ/iZRnwuBDurhLtqBLjcBjfUxr65wj76wfsoxPcPBzbLRz54QnpkBXnhRbmfxfleRfjbBjhXRreTRvzxA/wthHdRBvgWRrniRZlYMFKAAAEEElEQVR4nO3d63aiMBQFYBNPEG/Veqla71Zbp+//gIMiSCAIKF3Kyf7+dmYWnMmOMZyUWg0AAAAAAAAAAAAAAAAAAAAAAAAArpbPvoDXQw169iW8GrUQC/Xsi3gxsima8tkX8WJoJVYIj0YthRBLhCdK1r2a1BGeKHrzavKG8GjEybMv4qXI9bkma4TninrnmvQQnislfPjgCcnfS01+EZ4A9S816SM8ASkCGCcXchPWZIOi+Og9rMk7wuNzxZX77It5DXIbqckW4TmJRAfhuSARhZp4nJ1Wk53z7At6AdTQaoKt6lo8OgiPx5nEajJBeGgQq8kAAyUeHYSn5nwlavJle3jceHS88Ni+vqdWoiYty8PjDBMlEWJod3jckaEmI7vDQx1DTTpWh0ftDSURYm/z/r37Y6zJj83hMUbH7vCoqbEkQkwZhkfJXGicUpMx5fsHKlQ6NZnX81h3U2rSXef6+/NJhYoiTcuO8o0qtbijYXLNXrqvik3FUvX+uCI9Vb3HHlT/05K0KzZIfHRIm0If1zlUsiTel97EvmJZBlSp2VVDu+z7u8O2ooPEJ5er0isyW1ZvctUo+ii5JB9UoYVaCtqXuVRp7Sudm4Aj+9n3mlNfVndy1dG6pJKsWQwSn3v8LKEi3SOrvSZFj38rHDGYXHUUf1Ze1IRRbgKy9vZARd5qFV+UmClq3l2SObvcBGhq3pPO0pkyzE3AcRvZFUhouFwWJWa0ya5BzIbxIPHJxaxQRWYLlpOrTqU+wTAZs51cdTTMO9V2huxzE6C8M61FzbJudjUuWH3BucXZ5q7Jlven8JV2EOM2a45pJFti01lSE6fIZr4lxzTou0BNvu0YKEWiY0l4EgcxbrPimEbBB6ZWHNMwdJPfYkOnueEgxm0WHNMwdpPfYkGnecHo2BAe40EMfzyk/YD9MY2UbvLTNnTaBjb7TvOUbvIGOTUnZVuFe6d5ykGMS+MRbY0/ZX5Mwxida+ORXJo2sJmHxxSd6Da0cQO7yzo8hoMYrdg2tKkDm+MxjZCbGAV9J/74RjqJtqYx5/BQvIu4bopFoq2Jc3jUIXavKY1H7jFWuwPf8Ei9L3SQ+owv3tb0wff5KGldbbtbidA7sD/ZhkcdI7e5yuiG1juwj1zDI+fXm8xuPFIU/eNcw0PhIrXzL08Y6F+4wpsxDY9aBHf4nrPxyHHDJ4ZMXwgggxa/3/z/6WFbE9MXApA/aX4uiqxK3YX/WcXzhQDnX+vvfckt2HikyP8qzfKFALJ9urU7zr/Seae/zTE8p1/rf9/51/O5XJYvBPCi07y3YY+8McbwnUWy2Xrg/CsdWgw/eWT7oSNajuQ4oTx6SwxLAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMx/np0p7vEdSWwAAAAASUVORK5CYII="></img>
                </Flag>
                <CountryInfor className={themeContext.theme}>
                    <h3>Việt Nam</h3>
                    <CountryPop>Dân số:
                        <span>123.456</span>
                    </CountryPop>

                    <CountryPos>Châu lục:
                        <span>Châu Á</span>
                    </CountryPos>

                    <CountryCapital>Thủ đô:
                        <span>Hà Nội</span>
                    </CountryCapital>

                </CountryInfor>
            </CountryItem>

            <CountryItem className="col-lg-3 col-md-4 col-sm-6">
                <Flag>
                    <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAgVBMVEXaJR3//wDZEx7qlhTXAB7ZHR3ZGx3zxg7YCx7rmxT++wHqmBT99gT88Ab43Qr32Av21Az0yw3ywQ/iZRnwuBDurhLtqBLjcBjfUxr65wj76wfsoxPcPBzbLRz54QnpkBXnhRbmfxfleRfjbBjhXRreTRvzxA/wthHdRBvgWRrniRZlYMFKAAAEEElEQVR4nO3d63aiMBQFYBNPEG/Veqla71Zbp+//gIMiSCAIKF3Kyf7+dmYWnMmOMZyUWg0AAAAAAAAAAAAAAAAAAAAAAAAArpbPvoDXQw169iW8GrUQC/Xsi3gxsima8tkX8WJoJVYIj0YthRBLhCdK1r2a1BGeKHrzavKG8GjEybMv4qXI9bkma4TninrnmvQQnislfPjgCcnfS01+EZ4A9S816SM8ASkCGCcXchPWZIOi+Og9rMk7wuNzxZX77It5DXIbqckW4TmJRAfhuSARhZp4nJ1Wk53z7At6AdTQaoKt6lo8OgiPx5nEajJBeGgQq8kAAyUeHYSn5nwlavJle3jceHS88Ni+vqdWoiYty8PjDBMlEWJod3jckaEmI7vDQx1DTTpWh0ftDSURYm/z/r37Y6zJj83hMUbH7vCoqbEkQkwZhkfJXGicUpMx5fsHKlQ6NZnX81h3U2rSXef6+/NJhYoiTcuO8o0qtbijYXLNXrqvik3FUvX+uCI9Vb3HHlT/05K0KzZIfHRIm0If1zlUsiTel97EvmJZBlSp2VVDu+z7u8O2ooPEJ5er0isyW1ZvctUo+ii5JB9UoYVaCtqXuVRp7Sudm4Aj+9n3mlNfVndy1dG6pJKsWQwSn3v8LKEi3SOrvSZFj38rHDGYXHUUf1Ze1IRRbgKy9vZARd5qFV+UmClq3l2SObvcBGhq3pPO0pkyzE3AcRvZFUhouFwWJWa0ya5BzIbxIPHJxaxQRWYLlpOrTqU+wTAZs51cdTTMO9V2huxzE6C8M61FzbJudjUuWH3BucXZ5q7Jlven8JV2EOM2a45pJFti01lSE6fIZr4lxzTou0BNvu0YKEWiY0l4EgcxbrPimEbBB6ZWHNMwdJPfYkOnueEgxm0WHNMwdpPfYkGnecHo2BAe40EMfzyk/YD9MY2UbvLTNnTaBjb7TvOUbvIGOTUnZVuFe6d5ykGMS+MRbY0/ZX5Mwxida+ORXJo2sJmHxxSd6Da0cQO7yzo8hoMYrdg2tKkDm+MxjZCbGAV9J/74RjqJtqYx5/BQvIu4bopFoq2Jc3jUIXavKY1H7jFWuwPf8Ei9L3SQ+owv3tb0wff5KGldbbtbidA7sD/ZhkcdI7e5yuiG1juwj1zDI+fXm8xuPFIU/eNcw0PhIrXzL08Y6F+4wpsxDY9aBHf4nrPxyHHDJ4ZMXwgggxa/3/z/6WFbE9MXApA/aX4uiqxK3YX/WcXzhQDnX+vvfckt2HikyP8qzfKFALJ9urU7zr/Seae/zTE8p1/rf9/51/O5XJYvBPCi07y3YY+8McbwnUWy2Xrg/CsdWgw/eWT7oSNajuQ4oTx6SwxLAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMx/np0p7vEdSWwAAAAASUVORK5CYII="></img>
                </Flag>
                <CountryInfor className={themeContext.theme}>
                    <h3>Việt Nam</h3>
                    <CountryPop>Dân số:
                        <span>123.456</span>
                    </CountryPop>

                    <CountryPos>Châu lục:
                        <span>Châu Á</span>
                    </CountryPos>

                    <CountryCapital>Thủ đô:
                        <span>Hà Nội</span>
                    </CountryCapital>

                </CountryInfor>
            </CountryItem>

            <CountryItem className="col-lg-3 col-md-4 col-sm-6">
                <Flag>
                    <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAgVBMVEXaJR3//wDZEx7qlhTXAB7ZHR3ZGx3zxg7YCx7rmxT++wHqmBT99gT88Ab43Qr32Av21Az0yw3ywQ/iZRnwuBDurhLtqBLjcBjfUxr65wj76wfsoxPcPBzbLRz54QnpkBXnhRbmfxfleRfjbBjhXRreTRvzxA/wthHdRBvgWRrniRZlYMFKAAAEEElEQVR4nO3d63aiMBQFYBNPEG/Veqla71Zbp+//gIMiSCAIKF3Kyf7+dmYWnMmOMZyUWg0AAAAAAAAAAAAAAAAAAAAAAAAArpbPvoDXQw169iW8GrUQC/Xsi3gxsima8tkX8WJoJVYIj0YthRBLhCdK1r2a1BGeKHrzavKG8GjEybMv4qXI9bkma4TninrnmvQQnislfPjgCcnfS01+EZ4A9S816SM8ASkCGCcXchPWZIOi+Og9rMk7wuNzxZX77It5DXIbqckW4TmJRAfhuSARhZp4nJ1Wk53z7At6AdTQaoKt6lo8OgiPx5nEajJBeGgQq8kAAyUeHYSn5nwlavJle3jceHS88Ni+vqdWoiYty8PjDBMlEWJod3jckaEmI7vDQx1DTTpWh0ftDSURYm/z/r37Y6zJj83hMUbH7vCoqbEkQkwZhkfJXGicUpMx5fsHKlQ6NZnX81h3U2rSXef6+/NJhYoiTcuO8o0qtbijYXLNXrqvik3FUvX+uCI9Vb3HHlT/05K0KzZIfHRIm0If1zlUsiTel97EvmJZBlSp2VVDu+z7u8O2ooPEJ5er0isyW1ZvctUo+ii5JB9UoYVaCtqXuVRp7Sudm4Aj+9n3mlNfVndy1dG6pJKsWQwSn3v8LKEi3SOrvSZFj38rHDGYXHUUf1Ze1IRRbgKy9vZARd5qFV+UmClq3l2SObvcBGhq3pPO0pkyzE3AcRvZFUhouFwWJWa0ya5BzIbxIPHJxaxQRWYLlpOrTqU+wTAZs51cdTTMO9V2huxzE6C8M61FzbJudjUuWH3BucXZ5q7Jlven8JV2EOM2a45pJFti01lSE6fIZr4lxzTou0BNvu0YKEWiY0l4EgcxbrPimEbBB6ZWHNMwdJPfYkOnueEgxm0WHNMwdpPfYkGnecHo2BAe40EMfzyk/YD9MY2UbvLTNnTaBjb7TvOUbvIGOTUnZVuFe6d5ykGMS+MRbY0/ZX5Mwxida+ORXJo2sJmHxxSd6Da0cQO7yzo8hoMYrdg2tKkDm+MxjZCbGAV9J/74RjqJtqYx5/BQvIu4bopFoq2Jc3jUIXavKY1H7jFWuwPf8Ei9L3SQ+owv3tb0wff5KGldbbtbidA7sD/ZhkcdI7e5yuiG1juwj1zDI+fXm8xuPFIU/eNcw0PhIrXzL08Y6F+4wpsxDY9aBHf4nrPxyHHDJ4ZMXwgggxa/3/z/6WFbE9MXApA/aX4uiqxK3YX/WcXzhQDnX+vvfckt2HikyP8qzfKFALJ9urU7zr/Seae/zTE8p1/rf9/51/O5XJYvBPCi07y3YY+8McbwnUWy2Xrg/CsdWgw/eWT7oSNajuQ4oTx6SwxLAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMx/np0p7vEdSWwAAAAASUVORK5CYII="></img>
                </Flag>
                <CountryInfor className={themeContext.theme}>
                    <h3>Việt Nam</h3>
                    <CountryPop>Dân số:
                        <span>123.456</span>
                    </CountryPop>

                    <CountryPos>Châu lục:
                        <span>Châu Á</span>
                    </CountryPos>

                    <CountryCapital>Thủ đô:
                        <span>Hà Nội</span>
                    </CountryCapital>

                </CountryInfor>
            </CountryItem>

            <CountryItem className="col-lg-3 col-md-4 col-sm-6">
                <Flag>
                    <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAgVBMVEXaJR3//wDZEx7qlhTXAB7ZHR3ZGx3zxg7YCx7rmxT++wHqmBT99gT88Ab43Qr32Av21Az0yw3ywQ/iZRnwuBDurhLtqBLjcBjfUxr65wj76wfsoxPcPBzbLRz54QnpkBXnhRbmfxfleRfjbBjhXRreTRvzxA/wthHdRBvgWRrniRZlYMFKAAAEEElEQVR4nO3d63aiMBQFYBNPEG/Veqla71Zbp+//gIMiSCAIKF3Kyf7+dmYWnMmOMZyUWg0AAAAAAAAAAAAAAAAAAAAAAAAArpbPvoDXQw169iW8GrUQC/Xsi3gxsima8tkX8WJoJVYIj0YthRBLhCdK1r2a1BGeKHrzavKG8GjEybMv4qXI9bkma4TninrnmvQQnislfPjgCcnfS01+EZ4A9S816SM8ASkCGCcXchPWZIOi+Og9rMk7wuNzxZX77It5DXIbqckW4TmJRAfhuSARhZp4nJ1Wk53z7At6AdTQaoKt6lo8OgiPx5nEajJBeGgQq8kAAyUeHYSn5nwlavJle3jceHS88Ni+vqdWoiYty8PjDBMlEWJod3jckaEmI7vDQx1DTTpWh0ftDSURYm/z/r37Y6zJj83hMUbH7vCoqbEkQkwZhkfJXGicUpMx5fsHKlQ6NZnX81h3U2rSXef6+/NJhYoiTcuO8o0qtbijYXLNXrqvik3FUvX+uCI9Vb3HHlT/05K0KzZIfHRIm0If1zlUsiTel97EvmJZBlSp2VVDu+z7u8O2ooPEJ5er0isyW1ZvctUo+ii5JB9UoYVaCtqXuVRp7Sudm4Aj+9n3mlNfVndy1dG6pJKsWQwSn3v8LKEi3SOrvSZFj38rHDGYXHUUf1Ze1IRRbgKy9vZARd5qFV+UmClq3l2SObvcBGhq3pPO0pkyzE3AcRvZFUhouFwWJWa0ya5BzIbxIPHJxaxQRWYLlpOrTqU+wTAZs51cdTTMO9V2huxzE6C8M61FzbJudjUuWH3BucXZ5q7Jlven8JV2EOM2a45pJFti01lSE6fIZr4lxzTou0BNvu0YKEWiY0l4EgcxbrPimEbBB6ZWHNMwdJPfYkOnueEgxm0WHNMwdpPfYkGnecHo2BAe40EMfzyk/YD9MY2UbvLTNnTaBjb7TvOUbvIGOTUnZVuFe6d5ykGMS+MRbY0/ZX5Mwxida+ORXJo2sJmHxxSd6Da0cQO7yzo8hoMYrdg2tKkDm+MxjZCbGAV9J/74RjqJtqYx5/BQvIu4bopFoq2Jc3jUIXavKY1H7jFWuwPf8Ei9L3SQ+owv3tb0wff5KGldbbtbidA7sD/ZhkcdI7e5yuiG1juwj1zDI+fXm8xuPFIU/eNcw0PhIrXzL08Y6F+4wpsxDY9aBHf4nrPxyHHDJ4ZMXwgggxa/3/z/6WFbE9MXApA/aX4uiqxK3YX/WcXzhQDnX+vvfckt2HikyP8qzfKFALJ9urU7zr/Seae/zTE8p1/rf9/51/O5XJYvBPCi07y3YY+8McbwnUWy2Xrg/CsdWgw/eWT7oSNajuQ4oTx6SwxLAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMx/np0p7vEdSWwAAAAASUVORK5CYII="></img>
                </Flag>
                <CountryInfor className={themeContext.theme}>
                    <h3>Việt Nam</h3>
                    <CountryPop>Dân số:
                        <span>123.456</span>
                    </CountryPop>

                    <CountryPos>Châu lục:
                        <span>Châu Á</span>
                    </CountryPos>

                    <CountryCapital>Thủ đô:
                        <span>Hà Nội</span>
                    </CountryCapital>

                </CountryInfor>
            </CountryItem>

        </CountriesContainer>
    )
}

export default Countries

const CountriesContainer = styled.div`
`

const CountryItem = styled.div`
    filter: brightness(1);
    margin-bottom: 20px;
    &:hover{
    filter: brightness(0.9);
    }
`

const Flag = styled.div`
    overflow: hidden;
    img{
        width: 100%;
        &:hover{
            scale: 1.1;
        }
    }
`

const CountryInfor = styled.div`
    box-shadow: 0 2px 0.5px 0.5px rgba(0, 0, 0, 0.2);
    h3{
        padding: 10px;
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 0;
    }
`

const CountryPop = styled.div`
    padding-left: 10px;
    font-size: 1.4rem;
    span{
        padding-left: 5px;
    }
`

const CountryPos = styled.div`
    padding-left: 10px;
    font-size: 1.4rem;
    span{
        padding-left: 5px;
    }
`

const CountryCapital = styled.div`
    padding-left: 10px;
    font-size: 1.4rem;
    padding-bottom: 10px;
    span{
        padding-left: 5px;
    }
`