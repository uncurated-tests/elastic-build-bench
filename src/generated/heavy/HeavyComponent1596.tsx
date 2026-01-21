'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1596<T> = T extends (infer U)[]
  ? DeepReadonlyArray1596<U>
  : T extends object
  ? DeepReadonlyObject1596<T>
  : T;

interface DeepReadonlyArray1596<T> extends ReadonlyArray<DeepReadonly1596<T>> {}

type DeepReadonlyObject1596<T> = {
  readonly [P in keyof T]: DeepReadonly1596<T[P]>;
};

type UnionToIntersection1596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1596<T> = UnionToIntersection1596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1596<T extends unknown[], V> = [...T, V];

type TuplifyUnion1596<T, L = LastOf1596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1596<TuplifyUnion1596<Exclude<T, L>>, L>;

type DeepPartial1596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1596<T[P]> }
  : T;

type Paths1596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1596<K, Paths1596<T[K], Prev1596[D]>> : never }[keyof T]
  : never;

type Prev1596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1596 {
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

type ConfigPaths1596 = Paths1596<NestedConfig1596>;

interface HeavyProps1596 {
  config: DeepPartial1596<NestedConfig1596>;
  path?: ConfigPaths1596;
}

const HeavyComponent1596 = memo(function HeavyComponent1596({ config }: HeavyProps1596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1596.displayName = 'HeavyComponent1596';
export default HeavyComponent1596;
