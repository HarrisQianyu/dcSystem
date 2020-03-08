<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>新增食品种类信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="hallForm" label-width="80px">
                    <el-form-item label="食堂名称">
                        <el-input v-model="hallForm.hallName"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">信息添加</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HallForm',
        data() {
            return {
                hallForm:{
                    hallName: ''
                }
            };
        },
        methods: {
            onSubmit() {
                this.$http({
                    method:'post',
                    url:"/hall/saveHall",
                    data:this.hallForm
                }).then(
                    ()=>{
                        this.$message.success('提交成功！');
                    }
                ).catch(()=>{
                        this.$message.success('提交失败！');
                    }
                )
            }
        }
    };
</script>