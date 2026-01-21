'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3740<T> = T extends (infer U)[]
  ? DeepReadonlyArray3740<U>
  : T extends object
  ? DeepReadonlyObject3740<T>
  : T;

interface DeepReadonlyArray3740<T> extends ReadonlyArray<DeepReadonly3740<T>> {}

type DeepReadonlyObject3740<T> = {
  readonly [P in keyof T]: DeepReadonly3740<T[P]>;
};

type UnionToIntersection3740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3740<T> = UnionToIntersection3740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3740<T extends unknown[], V> = [...T, V];

type TuplifyUnion3740<T, L = LastOf3740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3740<TuplifyUnion3740<Exclude<T, L>>, L>;

type DeepPartial3740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3740<T[P]> }
  : T;

type Paths3740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3740<K, Paths3740<T[K], Prev3740[D]>> : never }[keyof T]
  : never;

type Prev3740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3740 {
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

type ConfigPaths3740 = Paths3740<NestedConfig3740>;

interface HeavyProps3740 {
  config: DeepPartial3740<NestedConfig3740>;
  path?: ConfigPaths3740;
}

const HeavyComponent3740 = memo(function HeavyComponent3740({ config }: HeavyProps3740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3740.displayName = 'HeavyComponent3740';
export default HeavyComponent3740;
