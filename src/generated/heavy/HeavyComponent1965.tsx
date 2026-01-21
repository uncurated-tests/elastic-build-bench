'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1965<T> = T extends (infer U)[]
  ? DeepReadonlyArray1965<U>
  : T extends object
  ? DeepReadonlyObject1965<T>
  : T;

interface DeepReadonlyArray1965<T> extends ReadonlyArray<DeepReadonly1965<T>> {}

type DeepReadonlyObject1965<T> = {
  readonly [P in keyof T]: DeepReadonly1965<T[P]>;
};

type UnionToIntersection1965<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1965<T> = UnionToIntersection1965<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1965<T extends unknown[], V> = [...T, V];

type TuplifyUnion1965<T, L = LastOf1965<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1965<TuplifyUnion1965<Exclude<T, L>>, L>;

type DeepPartial1965<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1965<T[P]> }
  : T;

type Paths1965<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1965<K, Paths1965<T[K], Prev1965[D]>> : never }[keyof T]
  : never;

type Prev1965 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1965<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1965 {
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

type ConfigPaths1965 = Paths1965<NestedConfig1965>;

interface HeavyProps1965 {
  config: DeepPartial1965<NestedConfig1965>;
  path?: ConfigPaths1965;
}

const HeavyComponent1965 = memo(function HeavyComponent1965({ config }: HeavyProps1965) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1965) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1965 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1965: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1965.displayName = 'HeavyComponent1965';
export default HeavyComponent1965;
