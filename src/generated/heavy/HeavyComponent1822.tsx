'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1822<T> = T extends (infer U)[]
  ? DeepReadonlyArray1822<U>
  : T extends object
  ? DeepReadonlyObject1822<T>
  : T;

interface DeepReadonlyArray1822<T> extends ReadonlyArray<DeepReadonly1822<T>> {}

type DeepReadonlyObject1822<T> = {
  readonly [P in keyof T]: DeepReadonly1822<T[P]>;
};

type UnionToIntersection1822<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1822<T> = UnionToIntersection1822<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1822<T extends unknown[], V> = [...T, V];

type TuplifyUnion1822<T, L = LastOf1822<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1822<TuplifyUnion1822<Exclude<T, L>>, L>;

type DeepPartial1822<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1822<T[P]> }
  : T;

type Paths1822<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1822<K, Paths1822<T[K], Prev1822[D]>> : never }[keyof T]
  : never;

type Prev1822 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1822<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1822 {
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

type ConfigPaths1822 = Paths1822<NestedConfig1822>;

interface HeavyProps1822 {
  config: DeepPartial1822<NestedConfig1822>;
  path?: ConfigPaths1822;
}

const HeavyComponent1822 = memo(function HeavyComponent1822({ config }: HeavyProps1822) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1822) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1822 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1822: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1822.displayName = 'HeavyComponent1822';
export default HeavyComponent1822;
