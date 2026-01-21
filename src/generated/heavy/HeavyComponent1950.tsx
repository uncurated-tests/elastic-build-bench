'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1950<T> = T extends (infer U)[]
  ? DeepReadonlyArray1950<U>
  : T extends object
  ? DeepReadonlyObject1950<T>
  : T;

interface DeepReadonlyArray1950<T> extends ReadonlyArray<DeepReadonly1950<T>> {}

type DeepReadonlyObject1950<T> = {
  readonly [P in keyof T]: DeepReadonly1950<T[P]>;
};

type UnionToIntersection1950<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1950<T> = UnionToIntersection1950<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1950<T extends unknown[], V> = [...T, V];

type TuplifyUnion1950<T, L = LastOf1950<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1950<TuplifyUnion1950<Exclude<T, L>>, L>;

type DeepPartial1950<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1950<T[P]> }
  : T;

type Paths1950<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1950<K, Paths1950<T[K], Prev1950[D]>> : never }[keyof T]
  : never;

type Prev1950 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1950<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1950 {
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

type ConfigPaths1950 = Paths1950<NestedConfig1950>;

interface HeavyProps1950 {
  config: DeepPartial1950<NestedConfig1950>;
  path?: ConfigPaths1950;
}

const HeavyComponent1950 = memo(function HeavyComponent1950({ config }: HeavyProps1950) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1950) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1950 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1950: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1950.displayName = 'HeavyComponent1950';
export default HeavyComponent1950;
