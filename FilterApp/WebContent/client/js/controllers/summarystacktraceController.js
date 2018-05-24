myApp.controller('summarystacktraceController', ['$scope', '$location', 'NgTableParams', function($scope, $location, NgTableParams){

	//Back to Summary types
	$scope.goToSummaryTypes = function(){
		$location.path('/summarytypes');
	}
	
	
	//Display mock data in table	
		 var data = [
			  {id: "1", date: "2017-11-13 16:35:36", name: "IdSokning.java:149", logDate: "Tid: 2017-12-12 20.05.05;077",
			  logThread: "Tråd: [ACTIVE] ExecuteThread: 0 for queue: weblogic.kernel.Default (self-tuning)",
			  logCallID: "AnropsID: n/a",
			  logException: "java.io.FileNotFoundException: /opt/rsv/pki/prod/int_org/ca-cert/temp (Is a directory (errno:21))",
			  logContent: "at java.io.FileInputStream.open(Native Method)"
				  	+ "\nat java.io.FileInputStream.<init>(FileInputStream.java:120)"
				  	+ "\nat se.rsv.zi.pki.ZiDirectoryCAFactory.readAndStoreCertificate(ZiDirectoryCAFactory.java:95)"
				  	+ "\nat se.rsv.zi.pki.ZiDirectoryCAFactory.readCertificateDir(ZiDirectoryCAFactory.java:75)"
				  	+ "\nat se.rsv.zi.pki.ZiDirectoryCAFactory.createCA(ZiDirectoryCAFactory.java:46)"
				  	+ "\nat se.rsv.zi.pki.ZiCA.getInstance(ZiCA.java:63)"
				  	+ "at se.rsv.zi.security.authentication.ZiAuthenticationProvider.<init>(ZiAuthenticationProvider.java:72)"
				  	+ "at sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)"
				  	+ "at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:39)"
				  	+ "at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:27)"
				  	+ "at java.lang.reflect.Constructor.newInstance(Constructor.java:513)"
				  	+ "at java.lang.Class.newInstance0(Class.java:361)"
				  	+ "at java.lang.Class.newInstance(Class.java:314)"
				  	+ "at com.bea.common.security.internal.legacy.service.SecurityProviderImpl.init(SecurityProviderImpl.java:46)"
				  	+ "at com.bea.common.engine.internal.ServiceEngineImpl.findOrStartService(ServiceEngineImpl.java:363)"
				  	+ "at com.bea.common.engine.internal.ServiceEngineImpl.findOrStartService(ServiceEngineImpl.java:315)"
				  	+ "at com.bea.common.engine.internal.ServiceEngineImpl.lookupService(ServiceEngineImpl.java:257)"
				  	+ "at com.bea.common.engine.internal.ServicesImpl.getService(ServicesImpl.java:72)"
				  	+ "at weblogic.security.service.internal.WLSIdentityServiceImpl.initialize(WLSIdentityServiceImpl.java:46)"
				  	+ "at weblogic.security.service.CSSWLSDelegateImpl.initializeServiceEngine(CSSWLSDelegateImpl.java:299)"
				  	+ "at weblogic.security.service.CSSWLSDelegateImpl.initialize(CSSWLSDelegateImpl.java:220)"
				  	+ "at weblogic.security.service.CommonSecurityServiceManagerDelegateImpl.InitializeServiceEngine(CommonSecurityServiceManagerDelegateImpl.java:1789)"
				  	+ "at weblogic.security.service.CommonSecurityServiceManagerDelegateImpl.initializeRealm(CommonSecurityServiceManagerDelegateImpl.java:443)"
				  	+ "at weblogic.security.service.CommonSecurityServiceManagerDelegateImpl.loadRealm(CommonSecurityServiceManagerDelegateImpl.java:841)"
				  	+ "at weblogic.security.service.CommonSecurityServiceManagerDelegateImpl.initializeRealms(CommonSecurityServiceManagerDelegateImpl.java:870)"
				  	+ "at weblogic.security.service.CommonSecurityServiceManagerDelegateImpl.initialize(CommonSecurityServiceManagerDelegateImpl.java:1032)"
				  	+ "at weblogic.security.service.SecurityServiceManager.initialize(SecurityServiceManager.java:888)"
				  	+ "at weblogic.security.SecurityService.start(SecurityService.java:141)"
				  	+ "at weblogic.t3.srvr.SubsystemRequest.run(SubsystemRequest.java:64)"
				  	+ "at weblogic.work.ExecuteThread.execute(ExecuteThread.java:263)"
				  	+ "at weblogic.work.ExecuteThread.run(ExecuteThread.java:221)"},
				{date: "2017-11-13 15:57:37", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:24:59", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:16:00", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:14:55", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:13:35", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:12:49", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:11:52", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:11:02", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:10:53", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:10:35", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:52:55", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:52:54", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:52:53", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:52:52", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:51:21", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:42:57", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:41:46", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:35:07", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:31:57", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-12 16:35:36", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-12 16:25:16", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-11 12:35:36", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-11 12:34:30", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-11 12:25:36", name: "IdSokning.java:149", details: "log header", content: "log content"},
		    ];
		 $scope.tableParams = new NgTableParams({}, { dataset: data});
		 	$scope.expandSelected=function(log){
		 		data.forEach(function(val){
		 			if(data.id == log.id){
		 				val.expanded=false;
		 			}
		 		})
			    log.expanded=true;
			  }
  
}]);