'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1505<T> = T extends (infer U)[]
  ? DeepReadonlyArray1505<U>
  : T extends object
  ? DeepReadonlyObject1505<T>
  : T;

interface DeepReadonlyArray1505<T> extends ReadonlyArray<DeepReadonly1505<T>> {}

type DeepReadonlyObject1505<T> = {
  readonly [P in keyof T]: DeepReadonly1505<T[P]>;
};

type UnionToIntersection1505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1505<T> = UnionToIntersection1505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1505<T extends unknown[], V> = [...T, V];

type TuplifyUnion1505<T, L = LastOf1505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1505<TuplifyUnion1505<Exclude<T, L>>, L>;

type DeepPartial1505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1505<T[P]> }
  : T;

type Paths1505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1505<K, Paths1505<T[K], Prev1505[D]>> : never }[keyof T]
  : never;

type Prev1505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1505 {
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

type ConfigPaths1505 = Paths1505<NestedConfig1505>;

interface HeavyProps1505 {
  config: DeepPartial1505<NestedConfig1505>;
  path?: ConfigPaths1505;
}

const HeavyComponent1505 = memo(function HeavyComponent1505({ config }: HeavyProps1505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1505.displayName = 'HeavyComponent1505';
export default HeavyComponent1505;
