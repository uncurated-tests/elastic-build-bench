'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1730<T> = T extends (infer U)[]
  ? DeepReadonlyArray1730<U>
  : T extends object
  ? DeepReadonlyObject1730<T>
  : T;

interface DeepReadonlyArray1730<T> extends ReadonlyArray<DeepReadonly1730<T>> {}

type DeepReadonlyObject1730<T> = {
  readonly [P in keyof T]: DeepReadonly1730<T[P]>;
};

type UnionToIntersection1730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1730<T> = UnionToIntersection1730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1730<T extends unknown[], V> = [...T, V];

type TuplifyUnion1730<T, L = LastOf1730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1730<TuplifyUnion1730<Exclude<T, L>>, L>;

type DeepPartial1730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1730<T[P]> }
  : T;

type Paths1730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1730<K, Paths1730<T[K], Prev1730[D]>> : never }[keyof T]
  : never;

type Prev1730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1730 {
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

type ConfigPaths1730 = Paths1730<NestedConfig1730>;

interface HeavyProps1730 {
  config: DeepPartial1730<NestedConfig1730>;
  path?: ConfigPaths1730;
}

const HeavyComponent1730 = memo(function HeavyComponent1730({ config }: HeavyProps1730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1730.displayName = 'HeavyComponent1730';
export default HeavyComponent1730;
