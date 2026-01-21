'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1702<T> = T extends (infer U)[]
  ? DeepReadonlyArray1702<U>
  : T extends object
  ? DeepReadonlyObject1702<T>
  : T;

interface DeepReadonlyArray1702<T> extends ReadonlyArray<DeepReadonly1702<T>> {}

type DeepReadonlyObject1702<T> = {
  readonly [P in keyof T]: DeepReadonly1702<T[P]>;
};

type UnionToIntersection1702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1702<T> = UnionToIntersection1702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1702<T extends unknown[], V> = [...T, V];

type TuplifyUnion1702<T, L = LastOf1702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1702<TuplifyUnion1702<Exclude<T, L>>, L>;

type DeepPartial1702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1702<T[P]> }
  : T;

type Paths1702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1702<K, Paths1702<T[K], Prev1702[D]>> : never }[keyof T]
  : never;

type Prev1702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1702 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths1702 = Paths1702<NestedConfig1702>;

interface HeavyProps1702 {
  config: DeepPartial1702<NestedConfig1702>;
  path?: ConfigPaths1702;
}

const HeavyComponent1702 = memo(function HeavyComponent1702({ config }: HeavyProps1702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1702.displayName = 'HeavyComponent1702';
export default HeavyComponent1702;
