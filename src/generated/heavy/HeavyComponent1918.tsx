'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1918<T> = T extends (infer U)[]
  ? DeepReadonlyArray1918<U>
  : T extends object
  ? DeepReadonlyObject1918<T>
  : T;

interface DeepReadonlyArray1918<T> extends ReadonlyArray<DeepReadonly1918<T>> {}

type DeepReadonlyObject1918<T> = {
  readonly [P in keyof T]: DeepReadonly1918<T[P]>;
};

type UnionToIntersection1918<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1918<T> = UnionToIntersection1918<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1918<T extends unknown[], V> = [...T, V];

type TuplifyUnion1918<T, L = LastOf1918<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1918<TuplifyUnion1918<Exclude<T, L>>, L>;

type DeepPartial1918<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1918<T[P]> }
  : T;

type Paths1918<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1918<K, Paths1918<T[K], Prev1918[D]>> : never }[keyof T]
  : never;

type Prev1918 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1918<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1918 {
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

type ConfigPaths1918 = Paths1918<NestedConfig1918>;

interface HeavyProps1918 {
  config: DeepPartial1918<NestedConfig1918>;
  path?: ConfigPaths1918;
}

const HeavyComponent1918 = memo(function HeavyComponent1918({ config }: HeavyProps1918) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1918) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1918 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1918: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1918.displayName = 'HeavyComponent1918';
export default HeavyComponent1918;
