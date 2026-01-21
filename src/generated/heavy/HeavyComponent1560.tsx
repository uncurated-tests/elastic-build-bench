'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1560<T> = T extends (infer U)[]
  ? DeepReadonlyArray1560<U>
  : T extends object
  ? DeepReadonlyObject1560<T>
  : T;

interface DeepReadonlyArray1560<T> extends ReadonlyArray<DeepReadonly1560<T>> {}

type DeepReadonlyObject1560<T> = {
  readonly [P in keyof T]: DeepReadonly1560<T[P]>;
};

type UnionToIntersection1560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1560<T> = UnionToIntersection1560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1560<T extends unknown[], V> = [...T, V];

type TuplifyUnion1560<T, L = LastOf1560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1560<TuplifyUnion1560<Exclude<T, L>>, L>;

type DeepPartial1560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1560<T[P]> }
  : T;

type Paths1560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1560<K, Paths1560<T[K], Prev1560[D]>> : never }[keyof T]
  : never;

type Prev1560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1560 {
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

type ConfigPaths1560 = Paths1560<NestedConfig1560>;

interface HeavyProps1560 {
  config: DeepPartial1560<NestedConfig1560>;
  path?: ConfigPaths1560;
}

const HeavyComponent1560 = memo(function HeavyComponent1560({ config }: HeavyProps1560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1560.displayName = 'HeavyComponent1560';
export default HeavyComponent1560;
