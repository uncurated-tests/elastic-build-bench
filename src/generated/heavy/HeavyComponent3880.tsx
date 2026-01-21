'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3880<T> = T extends (infer U)[]
  ? DeepReadonlyArray3880<U>
  : T extends object
  ? DeepReadonlyObject3880<T>
  : T;

interface DeepReadonlyArray3880<T> extends ReadonlyArray<DeepReadonly3880<T>> {}

type DeepReadonlyObject3880<T> = {
  readonly [P in keyof T]: DeepReadonly3880<T[P]>;
};

type UnionToIntersection3880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3880<T> = UnionToIntersection3880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3880<T extends unknown[], V> = [...T, V];

type TuplifyUnion3880<T, L = LastOf3880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3880<TuplifyUnion3880<Exclude<T, L>>, L>;

type DeepPartial3880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3880<T[P]> }
  : T;

type Paths3880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3880<K, Paths3880<T[K], Prev3880[D]>> : never }[keyof T]
  : never;

type Prev3880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3880 {
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

type ConfigPaths3880 = Paths3880<NestedConfig3880>;

interface HeavyProps3880 {
  config: DeepPartial3880<NestedConfig3880>;
  path?: ConfigPaths3880;
}

const HeavyComponent3880 = memo(function HeavyComponent3880({ config }: HeavyProps3880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3880.displayName = 'HeavyComponent3880';
export default HeavyComponent3880;
