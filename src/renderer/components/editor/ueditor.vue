<template>
    <div>
        <script id="editor" type="text/plain"></script>
    </div>
</template>

<script>
    export default {
        name: 'UEditor',
        props: {
            id: {
                type: String
            },
            config: {
                type: Object
            }
        },
        data() {
            return {
                editor: null
            }
        },
        mounted() {
            this.editor = VueUeditorWrap.getEditor('editor', this.config);
        },
        methods: {
            getUEContent: function () {
                return this.editor.getContent();
            }
        }
    }
</script>