var WCS_1_0_0_Module_Factory = function () {
  var WCS_1_0_0 = {
    n: 'WCS_1_0_0',
    dens: 'http:\/\/www.opengis.net\/wcs',
    tis: [{
        ln: 'SupportedInterpolationsType',
        ps: [{
            n: 'interpolationMethod',
            col: true
          }, {
            n: '_default',
            an: {
              lp: 'default'
            },
            t: 'a'
          }]
      }, {
        ln: 'WCSCapabilitiesType',
        ps: [{
            n: 'service',
            en: 'Service',
            ti: '.ServiceType'
          }, {
            n: 'capability',
            en: 'Capability',
            ti: '.WCSCapabilityType'
          }, {
            n: 'contentMetadata',
            en: 'ContentMetadata',
            ti: '.ContentMetadata'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'DescribeCoverage',
        ps: [{
            n: 'coverage',
            col: true,
            en: 'Coverage'
          }, {
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'Keywords',
        ps: [{
            n: 'keyword',
            col: true
          }, {
            n: 'type',
            ti: 'GML_3_1_1.CodeType'
          }]
      }, {
        ln: 'OnlineResourceType',
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'DCPTypeType.HTTP.Post',
        ps: [{
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }]
      }, {
        ln: 'GetCoverage',
        ps: [{
            n: 'sourceCoverage'
          }, {
            n: 'domainSubset',
            ti: '.DomainSubsetType'
          }, {
            n: 'rangeSubset',
            ti: '.RangeSubsetType'
          }, {
            n: 'interpolationMethod'
          }, {
            n: 'output',
            ti: '.OutputType'
          }, {
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'ValueRangeType',
        ps: [{
            n: 'min',
            ti: '.TypedLiteralType'
          }, {
            n: 'max',
            ti: '.TypedLiteralType'
          }, {
            n: 'type',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }, {
            n: 'semantic',
            an: {
              lp: 'semantic',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }, {
            n: 'atomic',
            ti: 'Boolean',
            an: {
              lp: 'atomic'
            },
            t: 'a'
          }, {
            n: 'closure',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'closure',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }]
      }, {
        ln: 'WCSCapabilityType.Request',
        ps: [{
            n: 'getCapabilities',
            en: 'GetCapabilities',
            ti: '.WCSCapabilityType.Request.GetCapabilities'
          }, {
            n: 'describeCoverage',
            en: 'DescribeCoverage',
            ti: '.WCSCapabilityType.Request.DescribeCoverage'
          }, {
            n: 'getCoverage',
            en: 'GetCoverage',
            ti: '.WCSCapabilityType.Request.GetCoverage'
          }]
      }, {
        ln: 'WCSCapabilityType.VendorSpecificCapabilities',
        ps: [{
            n: 'any',
            dom: false,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'ValueEnumType',
        bti: '.ValueEnumBaseType',
        ps: [{
            n: 'type',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }, {
            n: 'semantic',
            an: {
              lp: 'semantic',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }]
      }, {
        ln: 'TelephoneType',
        ps: [{
            n: 'voice',
            col: true
          }, {
            n: 'facsimile',
            col: true
          }]
      }, {
        ln: 'WCSCapabilityType.Request.DescribeCoverage',
        ps: [{
            n: 'dcpType',
            col: true,
            en: 'DCPType',
            ti: '.DCPTypeType'
          }]
      }, {
        ln: 'CoverageOfferingBriefType',
        bti: '.AbstractDescriptionType',
        ps: [{
            n: 'lonLatEnvelope',
            ti: '.LonLatEnvelopeType'
          }, {
            n: 'keywords',
            col: true,
            ti: '.Keywords'
          }]
      }, {
        ln: 'ResponsiblePartyType',
        ps: [{
            n: 'individualName'
          }, {
            n: 'optionalOrganisationName',
            en: 'organisationName'
          }, {
            n: 'organisationName'
          }, {
            n: 'positionName'
          }, {
            n: 'contactInfo',
            ti: '.ContactType'
          }]
      }, {
        ln: 'WCSCapabilityType.Request.GetCoverage',
        ps: [{
            n: 'dcpType',
            col: true,
            en: 'DCPType',
            ti: '.DCPTypeType'
          }]
      }, {
        ln: 'ContentMetadata',
        ps: [{
            n: 'coverageOfferingBrief',
            col: true,
            en: 'CoverageOfferingBrief',
            ti: '.CoverageOfferingBriefType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'DCPTypeType.HTTP.Get',
        ps: [{
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }]
      }, {
        ln: 'RangeSetType',
        bti: '.AbstractDescriptionType',
        ps: [{
            n: 'axisDescription',
            col: true,
            ti: '.AxisDescription'
          }, {
            n: 'nullValues',
            ti: '.ValueEnumType'
          }, {
            n: 'semantic',
            an: {
              lp: 'semantic',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }, {
            n: 'refSys',
            an: {
              lp: 'refSys'
            },
            t: 'a'
          }, {
            n: 'refSysLabel',
            an: {
              lp: 'refSysLabel'
            },
            t: 'a'
          }]
      }, {
        ln: 'SupportedFormatsType',
        ps: [{
            n: 'formats',
            col: true,
            ti: 'GML_3_1_1.CodeListType'
          }, {
            n: 'nativeFormat',
            an: {
              lp: 'nativeFormat'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoverageOfferingType',
        bti: '.CoverageOfferingBriefType',
        ps: [{
            n: 'domainSet',
            ti: '.DomainSetType'
          }, {
            n: 'rangeSet',
            ti: '.RangeSet'
          }, {
            n: 'supportedCRSs',
            ti: '.SupportedCRSsType'
          }, {
            n: 'supportedFormats',
            ti: '.SupportedFormatsType'
          }, {
            n: 'supportedInterpolations',
            ti: '.SupportedInterpolationsType'
          }]
      }, {
        ln: 'SupportedCRSsType',
        ps: [{
            n: 'requestResponseCRSs',
            col: true,
            ti: 'GML_3_1_1.CodeListType'
          }, {
            n: 'requestCRSs',
            col: true,
            ti: 'GML_3_1_1.CodeListType'
          }, {
            n: 'responseCRSs',
            col: true,
            ti: 'GML_3_1_1.CodeListType'
          }, {
            n: 'nativeCRSs',
            col: true,
            ti: 'GML_3_1_1.CodeListType'
          }]
      }, {
        ln: 'TimePeriodType',
        ps: [{
            n: 'beginPosition',
            ti: 'GML_3_1_1.TimePositionType'
          }, {
            n: 'endPosition',
            ti: 'GML_3_1_1.TimePositionType'
          }, {
            n: 'timeResolution'
          }, {
            n: 'frame',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }]
      }, {
        ln: 'AxisDescriptionType.Values',
        bti: '.ValueEnumType',
        ps: [{
            n: '_default',
            en: 'default',
            ti: '.TypedLiteralType'
          }]
      }, {
        ln: 'WCSCapabilityType.Exception',
        ps: [{
            n: 'format',
            col: true,
            en: 'Format'
          }]
      }, {
        ln: 'ServiceType',
        bti: '.AbstractDescriptionType',
        ps: [{
            n: 'keywords',
            col: true,
            ti: '.Keywords'
          }, {
            n: 'responsibleParty',
            ti: '.ResponsiblePartyType'
          }, {
            n: 'fees',
            ti: 'GML_3_1_1.CodeListType'
          }, {
            n: 'accessConstraints',
            col: true,
            ti: 'GML_3_1_1.CodeListType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'ValueEnumBaseType',
        ps: [{
            n: 'intervalOrSingleValue',
            col: true,
            etis: [{
                en: 'interval',
                ti: '.IntervalType'
              }, {
                en: 'singleValue',
                ti: '.TypedLiteralType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'DCPTypeType.HTTP',
        ps: [{
            n: 'getOrPost',
            col: true,
            etis: [{
                en: 'Get',
                ti: '.DCPTypeType.HTTP.Get'
              }, {
                en: 'Post',
                ti: '.DCPTypeType.HTTP.Post'
              }],
            t: 'es'
          }]
      }, {
        ln: 'ContactType',
        ps: [{
            n: 'phone',
            ti: '.TelephoneType'
          }, {
            n: 'address',
            ti: '.AddressType'
          }, {
            n: 'onlineResource',
            ti: '.OnlineResourceType'
          }]
      }, {
        ln: 'WCSCapabilityType',
        ps: [{
            n: 'request',
            en: 'Request',
            ti: '.WCSCapabilityType.Request'
          }, {
            n: 'exception',
            en: 'Exception',
            ti: '.WCSCapabilityType.Exception'
          }, {
            n: 'vendorSpecificCapabilities',
            en: 'VendorSpecificCapabilities',
            ti: '.WCSCapabilityType.VendorSpecificCapabilities'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'TimeSequenceType',
        ps: [{
            n: 'timePositionOrTimePeriod',
            col: true,
            etis: [{
                en: {
                  lp: 'timePosition',
                  ns: 'http:\/\/www.opengis.net\/gml'
                },
                ti: 'GML_3_1_1.TimePositionType'
              }, {
                en: 'timePeriod',
                ti: '.TimePeriodType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'LonLatEnvelopeType',
        bti: '.LonLatEnvelopeBaseType',
        ps: [{
            n: 'timePosition',
            col: true,
            en: {
              lp: 'timePosition',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.TimePositionType'
          }]
      }, {
        ln: 'AxisDescriptionType',
        bti: '.AbstractDescriptionType',
        ps: [{
            n: 'values',
            ti: '.AxisDescriptionType.Values'
          }, {
            n: 'semantic',
            an: {
              lp: 'semantic',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }, {
            n: 'refSys',
            an: {
              lp: 'refSys'
            },
            t: 'a'
          }, {
            n: 'refSysLabel',
            an: {
              lp: 'refSysLabel'
            },
            t: 'a'
          }]
      }, {
        ln: 'RangeSet',
        ps: [{
            n: 'rangeSet',
            en: 'RangeSet',
            ti: '.RangeSetType'
          }]
      }, {
        ln: 'RangeSubsetType.AxisSubset',
        bti: '.ValueEnumBaseType',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoverageDescription',
        ps: [{
            n: 'coverageOffering',
            col: true,
            en: 'CoverageOffering',
            ti: '.CoverageOfferingType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'LonLatEnvelopeBaseType',
        bti: 'GML_3_1_1.EnvelopeType'
      }, {
        ln: 'DomainSetType',
        ps: [{
            n: 'spatialDomain',
            ti: '.SpatialDomainType'
          }, {
            n: 'optionalTemporalDomain',
            en: 'temporalDomain',
            ti: '.TimeSequenceType'
          }, {
            n: 'temporalDomain',
            ti: '.TimeSequenceType'
          }]
      }, {
        ln: 'IntervalType',
        bti: '.ValueRangeType',
        ps: [{
            n: 'res',
            ti: '.TypedLiteralType'
          }]
      }, {
        ln: 'OutputType',
        ps: [{
            n: 'crs',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'format',
            ti: 'GML_3_1_1.CodeType'
          }]
      }, {
        ln: 'GetCapabilities',
        ps: [{
            n: 'section'
          }, {
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'DomainSubsetType',
        ps: [{
            n: 'spatialSubset',
            ti: '.SpatialSubsetType'
          }, {
            n: 'optionalTemporalSubset',
            en: 'temporalSubset',
            ti: '.TimeSequenceType'
          }, {
            n: 'temporalSubset',
            ti: '.TimeSequenceType'
          }]
      }, {
        ln: 'AbstractDescriptionBaseType',
        bti: 'GML_3_1_1.AbstractGMLType'
      }, {
        ln: 'MetadataLinkType',
        bti: '.MetadataAssociationType',
        ps: [{
            n: 'metadataType',
            an: {
              lp: 'metadataType'
            },
            t: 'a'
          }]
      }, {
        ln: 'AxisDescription',
        ps: [{
            n: 'axisDescription',
            en: 'AxisDescription',
            ti: '.AxisDescriptionType'
          }]
      }, {
        ln: 'MetadataAssociationType',
        bti: 'GML_3_1_1.MetaDataPropertyType'
      }, {
        ln: 'WCSCapabilityType.Request.GetCapabilities',
        ps: [{
            n: 'dcpType',
            col: true,
            en: 'DCPType',
            ti: '.DCPTypeType'
          }]
      }, {
        ln: 'AddressType',
        ps: [{
            n: 'deliveryPoint',
            col: true
          }, {
            n: 'city'
          }, {
            n: 'administrativeArea'
          }, {
            n: 'postalCode'
          }, {
            n: 'country'
          }, {
            n: 'electronicMailAddress',
            col: true
          }]
      }, {
        ln: 'AbstractDescriptionType',
        bti: '.AbstractDescriptionBaseType',
        ps: [{
            n: 'wcsDescription',
            en: 'description'
          }, {
            n: 'wcsName',
            en: 'name'
          }, {
            n: 'label'
          }]
      }, {
        ln: 'TypedLiteralType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.opengis.net\/wcs'
            },
            t: 'a'
          }]
      }, {
        ln: 'DCPTypeType',
        ps: [{
            n: 'http',
            en: 'HTTP',
            ti: '.DCPTypeType.HTTP'
          }]
      }, {
        ln: 'RangeSubsetType',
        ps: [{
            n: 'axisSubset',
            col: true,
            ti: '.RangeSubsetType.AxisSubset'
          }]
      }, {
        ln: 'SpatialSubsetType',
        bti: '.SpatialDomainType'
      }, {
        ln: 'SpatialDomainType',
        ps: [{
            n: 'envelope',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'Envelope',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.EnvelopeType',
            t: 'er'
          }, {
            n: 'grid',
            col: true,
            en: {
              lp: 'Grid',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.GridType'
          }, {
            n: 'polygon',
            col: true,
            en: {
              lp: 'Polygon',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.PolygonType'
          }]
      }, {
        t: 'enum',
        ln: 'InterpolationMethodType',
        vs: ['nearest neighbor', 'bilinear', 'bicubic', 'lost area', 'barycentric', 'none']
      }, {
        t: 'enum',
        ln: 'CapabilitiesSectionType',
        vs: ['\/', '\/WCS_Capabilities\/Service', '\/WCS_Capabilities\/Capability', '\/WCS_Capabilities\/ContentMetadata']
      }],
    eis: [{
        en: 'ContentMetadata',
        ti: '.ContentMetadata'
      }, {
        en: 'lonLatEnvelope',
        ti: '.LonLatEnvelopeType'
      }, {
        en: 'spatialSubset',
        ti: '.SpatialSubsetType'
      }, {
        en: 'domainSet',
        ti: '.DomainSetType'
      }, {
        en: 'DescribeCoverage',
        ti: '.DescribeCoverage'
      }, {
        en: 'formats',
        ti: 'GML_3_1_1.CodeListType'
      }, {
        en: 'interval',
        ti: '.IntervalType'
      }, {
        en: 'spatialDomain',
        ti: '.SpatialDomainType'
      }, {
        en: 'singleValue',
        ti: '.TypedLiteralType'
      }, {
        en: 'CoverageOfferingBrief',
        ti: '.CoverageOfferingBriefType',
        sh: {
          lp: '_GML',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'timePeriod',
        ti: '.TimePeriodType'
      }, {
        en: 'GetCoverage',
        ti: '.GetCoverage'
      }, {
        en: 'Service',
        ti: '.ServiceType',
        sh: {
          lp: '_GML',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'RangeSet',
        ti: '.RangeSetType',
        sh: {
          lp: '_GML',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'description'
      }, {
        en: 'supportedCRSs',
        ti: '.SupportedCRSsType'
      }, {
        en: 'WCS_Capabilities',
        ti: '.WCSCapabilitiesType'
      }, {
        en: 'CoverageOffering',
        ti: '.CoverageOfferingType',
        sh: {
          lp: '_GML',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'temporalDomain',
        ti: '.TimeSequenceType'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilities'
      }, {
        en: 'name'
      }, {
        en: 'axisDescription',
        ti: '.AxisDescription'
      }, {
        en: 'temporalSubset',
        ti: '.TimeSequenceType'
      }, {
        en: 'supportedInterpolations',
        ti: '.SupportedInterpolationsType'
      }, {
        en: 'supportedFormats',
        ti: '.SupportedFormatsType'
      }, {
        en: 'rangeSet',
        ti: '.RangeSet'
      }, {
        en: 'Capability',
        ti: '.WCSCapabilityType'
      }, {
        en: 'TimeSequence',
        ti: '.TimeSequenceType'
      }, {
        en: 'CoverageDescription',
        ti: '.CoverageDescription'
      }, {
        en: 'AxisDescription',
        ti: '.AxisDescriptionType',
        sh: {
          lp: '_GML',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'keywords',
        ti: '.Keywords'
      }, {
        en: 'metadataLink',
        ti: '.MetadataLinkType',
        sh: {
          lp: 'metaDataProperty',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'interpolationMethod'
      }]
  };
  return {
    WCS_1_0_0: WCS_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WCS_1_0_0_Module_Factory);
}
else {
  var WCS_1_0_0_Module = WCS_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WCS_1_0_0 = WCS_1_0_0_Module.WCS_1_0_0;
  }
  else {
    var WCS_1_0_0 = WCS_1_0_0_Module.WCS_1_0_0;
  }
}