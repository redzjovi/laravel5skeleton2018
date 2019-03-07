<template>
    <div>
        <div
            class="input-group"
            v-for="(item, index) in items"
            :key="item"
        >
            <input
                accept="image/*" class="form-control form-control-sm" type="file"
                :name="name"
            />
            <div class="input-group-append">
                <button
                    class="btn btn-secondary btn-sm" type="button"
                    @click="itemDeleteMethod(index)"
                >
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        <button
            class="btn btn-secondary btn-sm" type="button"
            @click="itemAddMethod"
        >
            <i class="fas fa-plus"></i>
        </button>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            items: []
        }
    },
    methods: {
        itemAddMethod() {
            this.items.push(Date.now());
        },
        itemDeleteMethod(index) {
            this.items.splice(index, 1);
        }
    },
    props: {
        name: {
            required: true
        }
    }
}
</script>

<style></style>
