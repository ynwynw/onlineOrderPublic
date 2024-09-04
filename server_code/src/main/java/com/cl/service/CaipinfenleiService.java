package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.CaipinfenleiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.CaipinfenleiView;


/**
 * 菜品分类
 *
 * @author 
 * @email 
 * @date 2024-04-26 10:51:21
 */
public interface CaipinfenleiService extends IService<CaipinfenleiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<CaipinfenleiView> selectListView(Wrapper<CaipinfenleiEntity> wrapper);
   	
   	CaipinfenleiView selectView(@Param("ew") Wrapper<CaipinfenleiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<CaipinfenleiEntity> wrapper);
   	

}

