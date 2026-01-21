'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1763<T> = T extends (infer U)[]
  ? DeepReadonlyArray1763<U>
  : T extends object
  ? DeepReadonlyObject1763<T>
  : T;

interface DeepReadonlyArray1763<T> extends ReadonlyArray<DeepReadonly1763<T>> {}

type DeepReadonlyObject1763<T> = {
  readonly [P in keyof T]: DeepReadonly1763<T[P]>;
};

type UnionToIntersection1763<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1763<T> = UnionToIntersection1763<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1763<T extends unknown[], V> = [...T, V];

type TuplifyUnion1763<T, L = LastOf1763<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1763<TuplifyUnion1763<Exclude<T, L>>, L>;

type DeepPartial1763<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1763<T[P]> }
  : T;

type Paths1763<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1763<K, Paths1763<T[K], Prev1763[D]>> : never }[keyof T]
  : never;

type Prev1763 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1763<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1763 {
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

type ConfigPaths1763 = Paths1763<NestedConfig1763>;

interface HeavyProps1763 {
  config: DeepPartial1763<NestedConfig1763>;
  path?: ConfigPaths1763;
}

const HeavyComponent1763 = memo(function HeavyComponent1763({ config }: HeavyProps1763) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1763) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1763 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1763: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1763.displayName = 'HeavyComponent1763';
export default HeavyComponent1763;
