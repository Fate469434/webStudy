<template>
    <el-container>
        <el-header>
            <FHeader/>
        </el-header>
        <el-container>
            <el-aside :width="store.asideWidth">
                <FMenu/>
            </el-aside>
            <el-main>
                <FTagList/>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';
import { myStore } from '../store';

const store = myStore()

</script>

<style>
.el-aside{
    transition: all 0.4s;
}
</style>