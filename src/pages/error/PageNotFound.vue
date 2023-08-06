<template>
    <div class="Not_Found_View">
        <div class="Content">
            <img class="Content_Img" src="../../assets/img/page_not_found.webp">
            <div class="Content_Word">页面未找到</div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.Not_Found_View {
    padding: 80px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.Content_Img {
    max-width: 200px;
}

.Content_Word {
    padding: 40px 0 0 0;
    font-size: 40px;
    font-weight: bolder;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: rainbow 1s linear infinite;
}

@keyframes rainbow {
    0% { color: red; }
    14.3% { color: orange; }
    28.6% { color: yellow; }
    42.9% { color: green; }
    57.1% { color: blue; }
    71.4% { color: indigo; }
    85.7% { color: violet; }
    100.0% { color: red; }
}
/*
@keyframes rainbow {
    0% { color: red;}
    14.3% { color: orange;}
    28.6% { color: yellow;}
    42.9% { color: green;}
    57.1% { color: blue;}
    71.4% { color: indigo;}
    85.7% { color: violet;}
    100.0% { color: red;}
}
*/
</style>