'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1482<T> = T extends (infer U)[]
  ? DeepReadonlyArray1482<U>
  : T extends object
  ? DeepReadonlyObject1482<T>
  : T;

interface DeepReadonlyArray1482<T> extends ReadonlyArray<DeepReadonly1482<T>> {}

type DeepReadonlyObject1482<T> = {
  readonly [P in keyof T]: DeepReadonly1482<T[P]>;
};

type UnionToIntersection1482<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1482<T> = UnionToIntersection1482<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1482<T extends unknown[], V> = [...T, V];

type TuplifyUnion1482<T, L = LastOf1482<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1482<TuplifyUnion1482<Exclude<T, L>>, L>;

type DeepPartial1482<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1482<T[P]> }
  : T;

type Paths1482<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1482<K, Paths1482<T[K], Prev1482[D]>> : never }[keyof T]
  : never;

type Prev1482 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1482<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1482 {
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

type ConfigPaths1482 = Paths1482<NestedConfig1482>;

interface HeavyProps1482 {
  config: DeepPartial1482<NestedConfig1482>;
  path?: ConfigPaths1482;
}

const HeavyComponent1482 = memo(function HeavyComponent1482({ config }: HeavyProps1482) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1482) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1482 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1482: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1482.displayName = 'HeavyComponent1482';
export default HeavyComponent1482;
