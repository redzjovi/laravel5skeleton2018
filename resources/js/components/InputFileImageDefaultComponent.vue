<template>
    <div>
        <div class="input-group" ref="input_file_image_default">
            <img
                class="img-thumbnail" style="height: 50px; object-fit: scale-down; width: 50px;"
                :src="src"
            />
            <input
                type="hidden"
                :name="name" :value="value"
            />
            <div>
                <button
                    class="btn btn-secondary btn-sm" type="button"
                    @click="deleteMethod"
                >
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        deleteMethod(index) {
            $(this.$refs.input_file_image_default).remove();
        }
    },
    name: 'InputFileImageDefault',
    props: {
        name: {
            required: true
        },
        src: String,
        value: String
    }
}
</script>

<style></style>
