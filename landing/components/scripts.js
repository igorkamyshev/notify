import js from '../utils/js'

const Scripts = () =>
    <div>
        <script src={js('jquery.min')}></script>
        <script src={js('skel.min')}></script>
        <script src={js('util')}></script>
        <script src={js('main')}></script>
    </div>

export default Scripts
