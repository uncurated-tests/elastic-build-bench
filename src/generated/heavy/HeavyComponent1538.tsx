'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1538<T> = T extends (infer U)[]
  ? DeepReadonlyArray1538<U>
  : T extends object
  ? DeepReadonlyObject1538<T>
  : T;

interface DeepReadonlyArray1538<T> extends ReadonlyArray<DeepReadonly1538<T>> {}

type DeepReadonlyObject1538<T> = {
  readonly [P in keyof T]: DeepReadonly1538<T[P]>;
};

type UnionToIntersection1538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1538<T> = UnionToIntersection1538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1538<T extends unknown[], V> = [...T, V];

type TuplifyUnion1538<T, L = LastOf1538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1538<TuplifyUnion1538<Exclude<T, L>>, L>;

type DeepPartial1538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1538<T[P]> }
  : T;

type Paths1538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1538<K, Paths1538<T[K], Prev1538[D]>> : never }[keyof T]
  : never;

type Prev1538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1538 {
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

type ConfigPaths1538 = Paths1538<NestedConfig1538>;

interface HeavyProps1538 {
  config: DeepPartial1538<NestedConfig1538>;
  path?: ConfigPaths1538;
}

const HeavyComponent1538 = memo(function HeavyComponent1538({ config }: HeavyProps1538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1538.displayName = 'HeavyComponent1538';
export default HeavyComponent1538;
