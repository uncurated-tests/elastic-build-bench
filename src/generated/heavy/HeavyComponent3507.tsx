'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3507<T> = T extends (infer U)[]
  ? DeepReadonlyArray3507<U>
  : T extends object
  ? DeepReadonlyObject3507<T>
  : T;

interface DeepReadonlyArray3507<T> extends ReadonlyArray<DeepReadonly3507<T>> {}

type DeepReadonlyObject3507<T> = {
  readonly [P in keyof T]: DeepReadonly3507<T[P]>;
};

type UnionToIntersection3507<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3507<T> = UnionToIntersection3507<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3507<T extends unknown[], V> = [...T, V];

type TuplifyUnion3507<T, L = LastOf3507<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3507<TuplifyUnion3507<Exclude<T, L>>, L>;

type DeepPartial3507<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3507<T[P]> }
  : T;

type Paths3507<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3507<K, Paths3507<T[K], Prev3507[D]>> : never }[keyof T]
  : never;

type Prev3507 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3507<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3507 {
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

type ConfigPaths3507 = Paths3507<NestedConfig3507>;

interface HeavyProps3507 {
  config: DeepPartial3507<NestedConfig3507>;
  path?: ConfigPaths3507;
}

const HeavyComponent3507 = memo(function HeavyComponent3507({ config }: HeavyProps3507) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3507) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3507 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3507: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3507.displayName = 'HeavyComponent3507';
export default HeavyComponent3507;
