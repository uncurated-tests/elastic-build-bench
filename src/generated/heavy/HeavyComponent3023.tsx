'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3023<T> = T extends (infer U)[]
  ? DeepReadonlyArray3023<U>
  : T extends object
  ? DeepReadonlyObject3023<T>
  : T;

interface DeepReadonlyArray3023<T> extends ReadonlyArray<DeepReadonly3023<T>> {}

type DeepReadonlyObject3023<T> = {
  readonly [P in keyof T]: DeepReadonly3023<T[P]>;
};

type UnionToIntersection3023<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3023<T> = UnionToIntersection3023<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3023<T extends unknown[], V> = [...T, V];

type TuplifyUnion3023<T, L = LastOf3023<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3023<TuplifyUnion3023<Exclude<T, L>>, L>;

type DeepPartial3023<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3023<T[P]> }
  : T;

type Paths3023<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3023<K, Paths3023<T[K], Prev3023[D]>> : never }[keyof T]
  : never;

type Prev3023 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3023<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3023 {
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

type ConfigPaths3023 = Paths3023<NestedConfig3023>;

interface HeavyProps3023 {
  config: DeepPartial3023<NestedConfig3023>;
  path?: ConfigPaths3023;
}

const HeavyComponent3023 = memo(function HeavyComponent3023({ config }: HeavyProps3023) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3023) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3023 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3023: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3023.displayName = 'HeavyComponent3023';
export default HeavyComponent3023;
