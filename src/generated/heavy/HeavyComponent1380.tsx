'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1380<T> = T extends (infer U)[]
  ? DeepReadonlyArray1380<U>
  : T extends object
  ? DeepReadonlyObject1380<T>
  : T;

interface DeepReadonlyArray1380<T> extends ReadonlyArray<DeepReadonly1380<T>> {}

type DeepReadonlyObject1380<T> = {
  readonly [P in keyof T]: DeepReadonly1380<T[P]>;
};

type UnionToIntersection1380<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1380<T> = UnionToIntersection1380<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1380<T extends unknown[], V> = [...T, V];

type TuplifyUnion1380<T, L = LastOf1380<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1380<TuplifyUnion1380<Exclude<T, L>>, L>;

type DeepPartial1380<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1380<T[P]> }
  : T;

type Paths1380<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1380<K, Paths1380<T[K], Prev1380[D]>> : never }[keyof T]
  : never;

type Prev1380 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1380<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1380 {
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

type ConfigPaths1380 = Paths1380<NestedConfig1380>;

interface HeavyProps1380 {
  config: DeepPartial1380<NestedConfig1380>;
  path?: ConfigPaths1380;
}

const HeavyComponent1380 = memo(function HeavyComponent1380({ config }: HeavyProps1380) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1380) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1380 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1380: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1380.displayName = 'HeavyComponent1380';
export default HeavyComponent1380;
