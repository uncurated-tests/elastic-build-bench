'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1737<T> = T extends (infer U)[]
  ? DeepReadonlyArray1737<U>
  : T extends object
  ? DeepReadonlyObject1737<T>
  : T;

interface DeepReadonlyArray1737<T> extends ReadonlyArray<DeepReadonly1737<T>> {}

type DeepReadonlyObject1737<T> = {
  readonly [P in keyof T]: DeepReadonly1737<T[P]>;
};

type UnionToIntersection1737<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1737<T> = UnionToIntersection1737<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1737<T extends unknown[], V> = [...T, V];

type TuplifyUnion1737<T, L = LastOf1737<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1737<TuplifyUnion1737<Exclude<T, L>>, L>;

type DeepPartial1737<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1737<T[P]> }
  : T;

type Paths1737<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1737<K, Paths1737<T[K], Prev1737[D]>> : never }[keyof T]
  : never;

type Prev1737 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1737<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1737 {
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

type ConfigPaths1737 = Paths1737<NestedConfig1737>;

interface HeavyProps1737 {
  config: DeepPartial1737<NestedConfig1737>;
  path?: ConfigPaths1737;
}

const HeavyComponent1737 = memo(function HeavyComponent1737({ config }: HeavyProps1737) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1737) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1737 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1737: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1737.displayName = 'HeavyComponent1737';
export default HeavyComponent1737;
