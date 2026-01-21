'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1483<T> = T extends (infer U)[]
  ? DeepReadonlyArray1483<U>
  : T extends object
  ? DeepReadonlyObject1483<T>
  : T;

interface DeepReadonlyArray1483<T> extends ReadonlyArray<DeepReadonly1483<T>> {}

type DeepReadonlyObject1483<T> = {
  readonly [P in keyof T]: DeepReadonly1483<T[P]>;
};

type UnionToIntersection1483<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1483<T> = UnionToIntersection1483<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1483<T extends unknown[], V> = [...T, V];

type TuplifyUnion1483<T, L = LastOf1483<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1483<TuplifyUnion1483<Exclude<T, L>>, L>;

type DeepPartial1483<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1483<T[P]> }
  : T;

type Paths1483<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1483<K, Paths1483<T[K], Prev1483[D]>> : never }[keyof T]
  : never;

type Prev1483 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1483<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1483 {
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

type ConfigPaths1483 = Paths1483<NestedConfig1483>;

interface HeavyProps1483 {
  config: DeepPartial1483<NestedConfig1483>;
  path?: ConfigPaths1483;
}

const HeavyComponent1483 = memo(function HeavyComponent1483({ config }: HeavyProps1483) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1483) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1483 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1483: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1483.displayName = 'HeavyComponent1483';
export default HeavyComponent1483;
