'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3166<T> = T extends (infer U)[]
  ? DeepReadonlyArray3166<U>
  : T extends object
  ? DeepReadonlyObject3166<T>
  : T;

interface DeepReadonlyArray3166<T> extends ReadonlyArray<DeepReadonly3166<T>> {}

type DeepReadonlyObject3166<T> = {
  readonly [P in keyof T]: DeepReadonly3166<T[P]>;
};

type UnionToIntersection3166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3166<T> = UnionToIntersection3166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3166<T extends unknown[], V> = [...T, V];

type TuplifyUnion3166<T, L = LastOf3166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3166<TuplifyUnion3166<Exclude<T, L>>, L>;

type DeepPartial3166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3166<T[P]> }
  : T;

type Paths3166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3166<K, Paths3166<T[K], Prev3166[D]>> : never }[keyof T]
  : never;

type Prev3166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3166 {
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

type ConfigPaths3166 = Paths3166<NestedConfig3166>;

interface HeavyProps3166 {
  config: DeepPartial3166<NestedConfig3166>;
  path?: ConfigPaths3166;
}

const HeavyComponent3166 = memo(function HeavyComponent3166({ config }: HeavyProps3166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3166.displayName = 'HeavyComponent3166';
export default HeavyComponent3166;
