'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1754<T> = T extends (infer U)[]
  ? DeepReadonlyArray1754<U>
  : T extends object
  ? DeepReadonlyObject1754<T>
  : T;

interface DeepReadonlyArray1754<T> extends ReadonlyArray<DeepReadonly1754<T>> {}

type DeepReadonlyObject1754<T> = {
  readonly [P in keyof T]: DeepReadonly1754<T[P]>;
};

type UnionToIntersection1754<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1754<T> = UnionToIntersection1754<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1754<T extends unknown[], V> = [...T, V];

type TuplifyUnion1754<T, L = LastOf1754<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1754<TuplifyUnion1754<Exclude<T, L>>, L>;

type DeepPartial1754<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1754<T[P]> }
  : T;

type Paths1754<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1754<K, Paths1754<T[K], Prev1754[D]>> : never }[keyof T]
  : never;

type Prev1754 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1754<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1754 {
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

type ConfigPaths1754 = Paths1754<NestedConfig1754>;

interface HeavyProps1754 {
  config: DeepPartial1754<NestedConfig1754>;
  path?: ConfigPaths1754;
}

const HeavyComponent1754 = memo(function HeavyComponent1754({ config }: HeavyProps1754) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1754) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1754 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1754: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1754.displayName = 'HeavyComponent1754';
export default HeavyComponent1754;
