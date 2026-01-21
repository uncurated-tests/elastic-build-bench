'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1597<T> = T extends (infer U)[]
  ? DeepReadonlyArray1597<U>
  : T extends object
  ? DeepReadonlyObject1597<T>
  : T;

interface DeepReadonlyArray1597<T> extends ReadonlyArray<DeepReadonly1597<T>> {}

type DeepReadonlyObject1597<T> = {
  readonly [P in keyof T]: DeepReadonly1597<T[P]>;
};

type UnionToIntersection1597<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1597<T> = UnionToIntersection1597<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1597<T extends unknown[], V> = [...T, V];

type TuplifyUnion1597<T, L = LastOf1597<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1597<TuplifyUnion1597<Exclude<T, L>>, L>;

type DeepPartial1597<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1597<T[P]> }
  : T;

type Paths1597<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1597<K, Paths1597<T[K], Prev1597[D]>> : never }[keyof T]
  : never;

type Prev1597 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1597<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1597 {
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

type ConfigPaths1597 = Paths1597<NestedConfig1597>;

interface HeavyProps1597 {
  config: DeepPartial1597<NestedConfig1597>;
  path?: ConfigPaths1597;
}

const HeavyComponent1597 = memo(function HeavyComponent1597({ config }: HeavyProps1597) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1597) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1597 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1597: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1597.displayName = 'HeavyComponent1597';
export default HeavyComponent1597;
