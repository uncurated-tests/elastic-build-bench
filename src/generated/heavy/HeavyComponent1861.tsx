'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1861<T> = T extends (infer U)[]
  ? DeepReadonlyArray1861<U>
  : T extends object
  ? DeepReadonlyObject1861<T>
  : T;

interface DeepReadonlyArray1861<T> extends ReadonlyArray<DeepReadonly1861<T>> {}

type DeepReadonlyObject1861<T> = {
  readonly [P in keyof T]: DeepReadonly1861<T[P]>;
};

type UnionToIntersection1861<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1861<T> = UnionToIntersection1861<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1861<T extends unknown[], V> = [...T, V];

type TuplifyUnion1861<T, L = LastOf1861<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1861<TuplifyUnion1861<Exclude<T, L>>, L>;

type DeepPartial1861<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1861<T[P]> }
  : T;

type Paths1861<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1861<K, Paths1861<T[K], Prev1861[D]>> : never }[keyof T]
  : never;

type Prev1861 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1861<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1861 {
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

type ConfigPaths1861 = Paths1861<NestedConfig1861>;

interface HeavyProps1861 {
  config: DeepPartial1861<NestedConfig1861>;
  path?: ConfigPaths1861;
}

const HeavyComponent1861 = memo(function HeavyComponent1861({ config }: HeavyProps1861) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1861) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1861 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1861: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1861.displayName = 'HeavyComponent1861';
export default HeavyComponent1861;
