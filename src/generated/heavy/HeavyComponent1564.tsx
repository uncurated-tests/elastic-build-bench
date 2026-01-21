'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1564<T> = T extends (infer U)[]
  ? DeepReadonlyArray1564<U>
  : T extends object
  ? DeepReadonlyObject1564<T>
  : T;

interface DeepReadonlyArray1564<T> extends ReadonlyArray<DeepReadonly1564<T>> {}

type DeepReadonlyObject1564<T> = {
  readonly [P in keyof T]: DeepReadonly1564<T[P]>;
};

type UnionToIntersection1564<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1564<T> = UnionToIntersection1564<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1564<T extends unknown[], V> = [...T, V];

type TuplifyUnion1564<T, L = LastOf1564<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1564<TuplifyUnion1564<Exclude<T, L>>, L>;

type DeepPartial1564<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1564<T[P]> }
  : T;

type Paths1564<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1564<K, Paths1564<T[K], Prev1564[D]>> : never }[keyof T]
  : never;

type Prev1564 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1564<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1564 {
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

type ConfigPaths1564 = Paths1564<NestedConfig1564>;

interface HeavyProps1564 {
  config: DeepPartial1564<NestedConfig1564>;
  path?: ConfigPaths1564;
}

const HeavyComponent1564 = memo(function HeavyComponent1564({ config }: HeavyProps1564) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1564) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1564 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1564: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1564.displayName = 'HeavyComponent1564';
export default HeavyComponent1564;
