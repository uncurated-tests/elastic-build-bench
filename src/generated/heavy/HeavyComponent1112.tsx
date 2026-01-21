'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1112<T> = T extends (infer U)[]
  ? DeepReadonlyArray1112<U>
  : T extends object
  ? DeepReadonlyObject1112<T>
  : T;

interface DeepReadonlyArray1112<T> extends ReadonlyArray<DeepReadonly1112<T>> {}

type DeepReadonlyObject1112<T> = {
  readonly [P in keyof T]: DeepReadonly1112<T[P]>;
};

type UnionToIntersection1112<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1112<T> = UnionToIntersection1112<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1112<T extends unknown[], V> = [...T, V];

type TuplifyUnion1112<T, L = LastOf1112<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1112<TuplifyUnion1112<Exclude<T, L>>, L>;

type DeepPartial1112<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1112<T[P]> }
  : T;

type Paths1112<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1112<K, Paths1112<T[K], Prev1112[D]>> : never }[keyof T]
  : never;

type Prev1112 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1112<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1112 {
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

type ConfigPaths1112 = Paths1112<NestedConfig1112>;

interface HeavyProps1112 {
  config: DeepPartial1112<NestedConfig1112>;
  path?: ConfigPaths1112;
}

const HeavyComponent1112 = memo(function HeavyComponent1112({ config }: HeavyProps1112) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1112) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1112 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1112: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1112.displayName = 'HeavyComponent1112';
export default HeavyComponent1112;
