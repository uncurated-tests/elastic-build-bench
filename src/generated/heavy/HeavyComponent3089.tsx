'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3089<T> = T extends (infer U)[]
  ? DeepReadonlyArray3089<U>
  : T extends object
  ? DeepReadonlyObject3089<T>
  : T;

interface DeepReadonlyArray3089<T> extends ReadonlyArray<DeepReadonly3089<T>> {}

type DeepReadonlyObject3089<T> = {
  readonly [P in keyof T]: DeepReadonly3089<T[P]>;
};

type UnionToIntersection3089<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3089<T> = UnionToIntersection3089<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3089<T extends unknown[], V> = [...T, V];

type TuplifyUnion3089<T, L = LastOf3089<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3089<TuplifyUnion3089<Exclude<T, L>>, L>;

type DeepPartial3089<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3089<T[P]> }
  : T;

type Paths3089<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3089<K, Paths3089<T[K], Prev3089[D]>> : never }[keyof T]
  : never;

type Prev3089 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3089<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3089 {
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

type ConfigPaths3089 = Paths3089<NestedConfig3089>;

interface HeavyProps3089 {
  config: DeepPartial3089<NestedConfig3089>;
  path?: ConfigPaths3089;
}

const HeavyComponent3089 = memo(function HeavyComponent3089({ config }: HeavyProps3089) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3089) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3089 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3089: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3089.displayName = 'HeavyComponent3089';
export default HeavyComponent3089;
