module.exports = {
	UdpListenIP: "127.0.0.1",
	UdpListenPort: 22102,

	UdpTargetIP: "47.90.134.247", // America: 47.90.134.247, Europe: 47.245.143.151
	UdpTargetPort: 22102,

	useDispatchServer: true,

	ignoredProtos: [
		// "QueryPathReq",
		// "PingReq",
		// "PingRsp",
		"UnionCmdNotify",
		// "EvtAiSyncCombatThreatInfoNotify",
		// "WorldPlayerRTTNotify",
		// "QueryPathRsp",
		// "EvtAiSyncSkillCdNotify",
		// "SetEntityClientDataNotify",
		// "ObstacleModifyNotify",
		// "ClientReportNotify",
		// "ClientAbilityInitFinishNotify",
		// "EntityConfigHashNotify",
		// "MonsterAIConfigHashNotify",
		// "EntityAiSyncNotify",
		// //currently broken packets
		"TakeAchievementRewardRsp",
		"ActivityPlayOpenAnimNotify",
		"FurnitureCurModuleArrangeCountNotify",
		"HomeAvatarTalkFinishInfoNotify",
		"GroupLinkAllNotify",
		"UnlockedFurnitureSuiteDataNotify",
		"HomeAvatarRewardEventNotify",
		"H5ActivityIdsNotify",
		"HomePriorCheckNotify",
		"HomePlantInfoNotify",
		"HomeResourceNotify",
		"HomeAvatarAllFinishRewardNotify",
		"HomeBasicInfoNotify",
		"FurnitureMakeRsp"
	]
}