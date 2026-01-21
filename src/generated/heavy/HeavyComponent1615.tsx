'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1615<T> = T extends (infer U)[]
  ? DeepReadonlyArray1615<U>
  : T extends object
  ? DeepReadonlyObject1615<T>
  : T;

interface DeepReadonlyArray1615<T> extends ReadonlyArray<DeepReadonly1615<T>> {}

type DeepReadonlyObject1615<T> = {
  readonly [P in keyof T]: DeepReadonly1615<T[P]>;
};

type UnionToIntersection1615<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1615<T> = UnionToIntersection1615<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1615<T extends unknown[], V> = [...T, V];

type TuplifyUnion1615<T, L = LastOf1615<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1615<TuplifyUnion1615<Exclude<T, L>>, L>;

type DeepPartial1615<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1615<T[P]> }
  : T;

type Paths1615<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1615<K, Paths1615<T[K], Prev1615[D]>> : never }[keyof T]
  : never;

type Prev1615 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1615<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1615 {
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

type ConfigPaths1615 = Paths1615<NestedConfig1615>;

interface HeavyProps1615 {
  config: DeepPartial1615<NestedConfig1615>;
  path?: ConfigPaths1615;
}

const HeavyComponent1615 = memo(function HeavyComponent1615({ config }: HeavyProps1615) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1615) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1615 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1615: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1615.displayName = 'HeavyComponent1615';
export default HeavyComponent1615;
