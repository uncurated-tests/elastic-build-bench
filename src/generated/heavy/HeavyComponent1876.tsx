'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1876<T> = T extends (infer U)[]
  ? DeepReadonlyArray1876<U>
  : T extends object
  ? DeepReadonlyObject1876<T>
  : T;

interface DeepReadonlyArray1876<T> extends ReadonlyArray<DeepReadonly1876<T>> {}

type DeepReadonlyObject1876<T> = {
  readonly [P in keyof T]: DeepReadonly1876<T[P]>;
};

type UnionToIntersection1876<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1876<T> = UnionToIntersection1876<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1876<T extends unknown[], V> = [...T, V];

type TuplifyUnion1876<T, L = LastOf1876<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1876<TuplifyUnion1876<Exclude<T, L>>, L>;

type DeepPartial1876<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1876<T[P]> }
  : T;

type Paths1876<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1876<K, Paths1876<T[K], Prev1876[D]>> : never }[keyof T]
  : never;

type Prev1876 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1876<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1876 {
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

type ConfigPaths1876 = Paths1876<NestedConfig1876>;

interface HeavyProps1876 {
  config: DeepPartial1876<NestedConfig1876>;
  path?: ConfigPaths1876;
}

const HeavyComponent1876 = memo(function HeavyComponent1876({ config }: HeavyProps1876) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1876) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1876 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1876: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1876.displayName = 'HeavyComponent1876';
export default HeavyComponent1876;
