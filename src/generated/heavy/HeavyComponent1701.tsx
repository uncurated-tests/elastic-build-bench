'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1701<T> = T extends (infer U)[]
  ? DeepReadonlyArray1701<U>
  : T extends object
  ? DeepReadonlyObject1701<T>
  : T;

interface DeepReadonlyArray1701<T> extends ReadonlyArray<DeepReadonly1701<T>> {}

type DeepReadonlyObject1701<T> = {
  readonly [P in keyof T]: DeepReadonly1701<T[P]>;
};

type UnionToIntersection1701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1701<T> = UnionToIntersection1701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1701<T extends unknown[], V> = [...T, V];

type TuplifyUnion1701<T, L = LastOf1701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1701<TuplifyUnion1701<Exclude<T, L>>, L>;

type DeepPartial1701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1701<T[P]> }
  : T;

type Paths1701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1701<K, Paths1701<T[K], Prev1701[D]>> : never }[keyof T]
  : never;

type Prev1701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1701 {
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

type ConfigPaths1701 = Paths1701<NestedConfig1701>;

interface HeavyProps1701 {
  config: DeepPartial1701<NestedConfig1701>;
  path?: ConfigPaths1701;
}

const HeavyComponent1701 = memo(function HeavyComponent1701({ config }: HeavyProps1701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1701.displayName = 'HeavyComponent1701';
export default HeavyComponent1701;
