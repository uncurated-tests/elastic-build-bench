'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3178<T> = T extends (infer U)[]
  ? DeepReadonlyArray3178<U>
  : T extends object
  ? DeepReadonlyObject3178<T>
  : T;

interface DeepReadonlyArray3178<T> extends ReadonlyArray<DeepReadonly3178<T>> {}

type DeepReadonlyObject3178<T> = {
  readonly [P in keyof T]: DeepReadonly3178<T[P]>;
};

type UnionToIntersection3178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3178<T> = UnionToIntersection3178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3178<T extends unknown[], V> = [...T, V];

type TuplifyUnion3178<T, L = LastOf3178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3178<TuplifyUnion3178<Exclude<T, L>>, L>;

type DeepPartial3178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3178<T[P]> }
  : T;

type Paths3178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3178<K, Paths3178<T[K], Prev3178[D]>> : never }[keyof T]
  : never;

type Prev3178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3178 {
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

type ConfigPaths3178 = Paths3178<NestedConfig3178>;

interface HeavyProps3178 {
  config: DeepPartial3178<NestedConfig3178>;
  path?: ConfigPaths3178;
}

const HeavyComponent3178 = memo(function HeavyComponent3178({ config }: HeavyProps3178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3178.displayName = 'HeavyComponent3178';
export default HeavyComponent3178;
