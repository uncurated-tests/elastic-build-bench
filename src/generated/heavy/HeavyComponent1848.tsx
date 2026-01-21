'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1848<T> = T extends (infer U)[]
  ? DeepReadonlyArray1848<U>
  : T extends object
  ? DeepReadonlyObject1848<T>
  : T;

interface DeepReadonlyArray1848<T> extends ReadonlyArray<DeepReadonly1848<T>> {}

type DeepReadonlyObject1848<T> = {
  readonly [P in keyof T]: DeepReadonly1848<T[P]>;
};

type UnionToIntersection1848<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1848<T> = UnionToIntersection1848<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1848<T extends unknown[], V> = [...T, V];

type TuplifyUnion1848<T, L = LastOf1848<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1848<TuplifyUnion1848<Exclude<T, L>>, L>;

type DeepPartial1848<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1848<T[P]> }
  : T;

type Paths1848<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1848<K, Paths1848<T[K], Prev1848[D]>> : never }[keyof T]
  : never;

type Prev1848 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1848<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1848 {
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

type ConfigPaths1848 = Paths1848<NestedConfig1848>;

interface HeavyProps1848 {
  config: DeepPartial1848<NestedConfig1848>;
  path?: ConfigPaths1848;
}

const HeavyComponent1848 = memo(function HeavyComponent1848({ config }: HeavyProps1848) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1848) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1848 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1848: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1848.displayName = 'HeavyComponent1848';
export default HeavyComponent1848;
