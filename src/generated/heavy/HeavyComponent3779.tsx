'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3779<T> = T extends (infer U)[]
  ? DeepReadonlyArray3779<U>
  : T extends object
  ? DeepReadonlyObject3779<T>
  : T;

interface DeepReadonlyArray3779<T> extends ReadonlyArray<DeepReadonly3779<T>> {}

type DeepReadonlyObject3779<T> = {
  readonly [P in keyof T]: DeepReadonly3779<T[P]>;
};

type UnionToIntersection3779<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3779<T> = UnionToIntersection3779<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3779<T extends unknown[], V> = [...T, V];

type TuplifyUnion3779<T, L = LastOf3779<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3779<TuplifyUnion3779<Exclude<T, L>>, L>;

type DeepPartial3779<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3779<T[P]> }
  : T;

type Paths3779<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3779<K, Paths3779<T[K], Prev3779[D]>> : never }[keyof T]
  : never;

type Prev3779 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3779<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3779 {
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

type ConfigPaths3779 = Paths3779<NestedConfig3779>;

interface HeavyProps3779 {
  config: DeepPartial3779<NestedConfig3779>;
  path?: ConfigPaths3779;
}

const HeavyComponent3779 = memo(function HeavyComponent3779({ config }: HeavyProps3779) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3779) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3779 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3779: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3779.displayName = 'HeavyComponent3779';
export default HeavyComponent3779;
