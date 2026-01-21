'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3286<T> = T extends (infer U)[]
  ? DeepReadonlyArray3286<U>
  : T extends object
  ? DeepReadonlyObject3286<T>
  : T;

interface DeepReadonlyArray3286<T> extends ReadonlyArray<DeepReadonly3286<T>> {}

type DeepReadonlyObject3286<T> = {
  readonly [P in keyof T]: DeepReadonly3286<T[P]>;
};

type UnionToIntersection3286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3286<T> = UnionToIntersection3286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3286<T extends unknown[], V> = [...T, V];

type TuplifyUnion3286<T, L = LastOf3286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3286<TuplifyUnion3286<Exclude<T, L>>, L>;

type DeepPartial3286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3286<T[P]> }
  : T;

type Paths3286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3286<K, Paths3286<T[K], Prev3286[D]>> : never }[keyof T]
  : never;

type Prev3286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3286 {
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

type ConfigPaths3286 = Paths3286<NestedConfig3286>;

interface HeavyProps3286 {
  config: DeepPartial3286<NestedConfig3286>;
  path?: ConfigPaths3286;
}

const HeavyComponent3286 = memo(function HeavyComponent3286({ config }: HeavyProps3286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3286.displayName = 'HeavyComponent3286';
export default HeavyComponent3286;
