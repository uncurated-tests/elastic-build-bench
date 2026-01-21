'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1927<T> = T extends (infer U)[]
  ? DeepReadonlyArray1927<U>
  : T extends object
  ? DeepReadonlyObject1927<T>
  : T;

interface DeepReadonlyArray1927<T> extends ReadonlyArray<DeepReadonly1927<T>> {}

type DeepReadonlyObject1927<T> = {
  readonly [P in keyof T]: DeepReadonly1927<T[P]>;
};

type UnionToIntersection1927<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1927<T> = UnionToIntersection1927<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1927<T extends unknown[], V> = [...T, V];

type TuplifyUnion1927<T, L = LastOf1927<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1927<TuplifyUnion1927<Exclude<T, L>>, L>;

type DeepPartial1927<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1927<T[P]> }
  : T;

type Paths1927<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1927<K, Paths1927<T[K], Prev1927[D]>> : never }[keyof T]
  : never;

type Prev1927 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1927<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1927 {
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

type ConfigPaths1927 = Paths1927<NestedConfig1927>;

interface HeavyProps1927 {
  config: DeepPartial1927<NestedConfig1927>;
  path?: ConfigPaths1927;
}

const HeavyComponent1927 = memo(function HeavyComponent1927({ config }: HeavyProps1927) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1927) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1927 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1927: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1927.displayName = 'HeavyComponent1927';
export default HeavyComponent1927;
