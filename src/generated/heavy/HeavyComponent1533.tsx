'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1533<T> = T extends (infer U)[]
  ? DeepReadonlyArray1533<U>
  : T extends object
  ? DeepReadonlyObject1533<T>
  : T;

interface DeepReadonlyArray1533<T> extends ReadonlyArray<DeepReadonly1533<T>> {}

type DeepReadonlyObject1533<T> = {
  readonly [P in keyof T]: DeepReadonly1533<T[P]>;
};

type UnionToIntersection1533<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1533<T> = UnionToIntersection1533<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1533<T extends unknown[], V> = [...T, V];

type TuplifyUnion1533<T, L = LastOf1533<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1533<TuplifyUnion1533<Exclude<T, L>>, L>;

type DeepPartial1533<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1533<T[P]> }
  : T;

type Paths1533<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1533<K, Paths1533<T[K], Prev1533[D]>> : never }[keyof T]
  : never;

type Prev1533 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1533<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1533 {
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

type ConfigPaths1533 = Paths1533<NestedConfig1533>;

interface HeavyProps1533 {
  config: DeepPartial1533<NestedConfig1533>;
  path?: ConfigPaths1533;
}

const HeavyComponent1533 = memo(function HeavyComponent1533({ config }: HeavyProps1533) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1533) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1533 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1533: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1533.displayName = 'HeavyComponent1533';
export default HeavyComponent1533;
