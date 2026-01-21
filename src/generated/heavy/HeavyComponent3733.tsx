'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3733<T> = T extends (infer U)[]
  ? DeepReadonlyArray3733<U>
  : T extends object
  ? DeepReadonlyObject3733<T>
  : T;

interface DeepReadonlyArray3733<T> extends ReadonlyArray<DeepReadonly3733<T>> {}

type DeepReadonlyObject3733<T> = {
  readonly [P in keyof T]: DeepReadonly3733<T[P]>;
};

type UnionToIntersection3733<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3733<T> = UnionToIntersection3733<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3733<T extends unknown[], V> = [...T, V];

type TuplifyUnion3733<T, L = LastOf3733<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3733<TuplifyUnion3733<Exclude<T, L>>, L>;

type DeepPartial3733<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3733<T[P]> }
  : T;

type Paths3733<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3733<K, Paths3733<T[K], Prev3733[D]>> : never }[keyof T]
  : never;

type Prev3733 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3733<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3733 {
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

type ConfigPaths3733 = Paths3733<NestedConfig3733>;

interface HeavyProps3733 {
  config: DeepPartial3733<NestedConfig3733>;
  path?: ConfigPaths3733;
}

const HeavyComponent3733 = memo(function HeavyComponent3733({ config }: HeavyProps3733) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3733) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3733 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3733: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3733.displayName = 'HeavyComponent3733';
export default HeavyComponent3733;
