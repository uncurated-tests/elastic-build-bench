'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1591<T> = T extends (infer U)[]
  ? DeepReadonlyArray1591<U>
  : T extends object
  ? DeepReadonlyObject1591<T>
  : T;

interface DeepReadonlyArray1591<T> extends ReadonlyArray<DeepReadonly1591<T>> {}

type DeepReadonlyObject1591<T> = {
  readonly [P in keyof T]: DeepReadonly1591<T[P]>;
};

type UnionToIntersection1591<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1591<T> = UnionToIntersection1591<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1591<T extends unknown[], V> = [...T, V];

type TuplifyUnion1591<T, L = LastOf1591<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1591<TuplifyUnion1591<Exclude<T, L>>, L>;

type DeepPartial1591<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1591<T[P]> }
  : T;

type Paths1591<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1591<K, Paths1591<T[K], Prev1591[D]>> : never }[keyof T]
  : never;

type Prev1591 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1591<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1591 {
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

type ConfigPaths1591 = Paths1591<NestedConfig1591>;

interface HeavyProps1591 {
  config: DeepPartial1591<NestedConfig1591>;
  path?: ConfigPaths1591;
}

const HeavyComponent1591 = memo(function HeavyComponent1591({ config }: HeavyProps1591) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1591) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1591 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1591: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1591.displayName = 'HeavyComponent1591';
export default HeavyComponent1591;
