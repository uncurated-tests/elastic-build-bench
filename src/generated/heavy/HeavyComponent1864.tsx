'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1864<T> = T extends (infer U)[]
  ? DeepReadonlyArray1864<U>
  : T extends object
  ? DeepReadonlyObject1864<T>
  : T;

interface DeepReadonlyArray1864<T> extends ReadonlyArray<DeepReadonly1864<T>> {}

type DeepReadonlyObject1864<T> = {
  readonly [P in keyof T]: DeepReadonly1864<T[P]>;
};

type UnionToIntersection1864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1864<T> = UnionToIntersection1864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1864<T extends unknown[], V> = [...T, V];

type TuplifyUnion1864<T, L = LastOf1864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1864<TuplifyUnion1864<Exclude<T, L>>, L>;

type DeepPartial1864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1864<T[P]> }
  : T;

type Paths1864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1864<K, Paths1864<T[K], Prev1864[D]>> : never }[keyof T]
  : never;

type Prev1864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1864 {
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

type ConfigPaths1864 = Paths1864<NestedConfig1864>;

interface HeavyProps1864 {
  config: DeepPartial1864<NestedConfig1864>;
  path?: ConfigPaths1864;
}

const HeavyComponent1864 = memo(function HeavyComponent1864({ config }: HeavyProps1864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1864.displayName = 'HeavyComponent1864';
export default HeavyComponent1864;
