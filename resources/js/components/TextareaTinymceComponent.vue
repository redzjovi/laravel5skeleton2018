<template>
    <div>
        <tinymce-vue
            v-model="value"
            :id="id"
            :other_options="otherOptions"
            :plugins="plugins"
            :toolbar1="toolbar1"
            :toolbar2="toolbar2"
        >
        </tinymce-vue>
        <textarea v-show="false" :name="name">{{ value }}</textarea>
    </div>
</template>

<script>
import tinymceVue from 'vue-tinymce-editor';

export default {
    components: {
        'tinymce-vue': tinymceVue
    },
    name: 'textarea-tinymce',
    props: {
        id: {
            required: true
        },
        name: String,
        otherOptions: {
            default: function () {
                return {
                    height: 400,
                    imagetools_toolbar: 'editimage imageoptions',
                    images_upload_handler: function (blobInfo, success, failure) {
                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', '/api/v1/medium/tinymce/image');
                        xhr.setRequestHeader('Accept', 'application/json');

                        xhr.onload = function() {
                            var json = JSON.parse(xhr.responseText);

                            if (xhr.status != 200) {
                                failure(json.message);
                                return
                            }

                            success(json.data.location);
                        };

                        var formData = new FormData();
                        formData.append('file', blobInfo.blob(), blobInfo.filename());

                        xhr.send(formData);
                    },
                    relative_urls: false,
                    remove_script_host: false,
                    toolbar: false
                }
            },
            type: Object
        },
        plugins: {
            default: function () {
                return [
                    'anchor',
                    'advlist',
                    'autolink',
                    'charmap',
                    'code',

                    // 'codesample',
                    'colorpicker',
                    'contextmenu',
                    'directionality',
                    'emoticons',

                    'fullscreen',
                    'help',
                    'hr',
                    'image',
                    'imagetools',

                    // 'insertdatetime',
                    'link',
                    'lists',
                    'media',
                    'nonbreaking',

                    'pagebreak',
                    'paste',
                    'preview',
                    'print',
                    'save',

                    'searchreplace',
                    'table',
                    // 'template',
                    'textcolor',
                    'textpattern',

                    'toc',
                    'visualblocks',
                    'visualchars',
                    'wordcount',
                ];
            }
        },
        toolbar1: {
            // default: 'formatselect bold italic bullist numlist | alignleft aligncenter alignright alignjustify link pagebreak'
            default: '',
        },
        toolbar2: {
            // default: 'strikethrough hr forecolor backcolor | removeformat charmap outdent indent | undo redo help codesample | code fullscreen'
            default: '',
        },
        value: ''
    }
}
</script>

<style>
    .mce-fullscreen {
        z-index: 1020
    }
</style>
