'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1092<T> = T extends (infer U)[]
  ? DeepReadonlyArray1092<U>
  : T extends object
  ? DeepReadonlyObject1092<T>
  : T;

interface DeepReadonlyArray1092<T> extends ReadonlyArray<DeepReadonly1092<T>> {}

type DeepReadonlyObject1092<T> = {
  readonly [P in keyof T]: DeepReadonly1092<T[P]>;
};

type UnionToIntersection1092<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1092<T> = UnionToIntersection1092<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1092<T extends unknown[], V> = [...T, V];

type TuplifyUnion1092<T, L = LastOf1092<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1092<TuplifyUnion1092<Exclude<T, L>>, L>;

type DeepPartial1092<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1092<T[P]> }
  : T;

type Paths1092<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1092<K, Paths1092<T[K], Prev1092[D]>> : never }[keyof T]
  : never;

type Prev1092 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1092<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1092 {
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

type ConfigPaths1092 = Paths1092<NestedConfig1092>;

interface HeavyProps1092 {
  config: DeepPartial1092<NestedConfig1092>;
  path?: ConfigPaths1092;
}

const HeavyComponent1092 = memo(function HeavyComponent1092({ config }: HeavyProps1092) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1092) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1092 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1092: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1092.displayName = 'HeavyComponent1092';
export default HeavyComponent1092;
