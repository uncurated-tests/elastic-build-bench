'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3758<T> = T extends (infer U)[]
  ? DeepReadonlyArray3758<U>
  : T extends object
  ? DeepReadonlyObject3758<T>
  : T;

interface DeepReadonlyArray3758<T> extends ReadonlyArray<DeepReadonly3758<T>> {}

type DeepReadonlyObject3758<T> = {
  readonly [P in keyof T]: DeepReadonly3758<T[P]>;
};

type UnionToIntersection3758<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3758<T> = UnionToIntersection3758<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3758<T extends unknown[], V> = [...T, V];

type TuplifyUnion3758<T, L = LastOf3758<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3758<TuplifyUnion3758<Exclude<T, L>>, L>;

type DeepPartial3758<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3758<T[P]> }
  : T;

type Paths3758<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3758<K, Paths3758<T[K], Prev3758[D]>> : never }[keyof T]
  : never;

type Prev3758 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3758<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3758 {
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

type ConfigPaths3758 = Paths3758<NestedConfig3758>;

interface HeavyProps3758 {
  config: DeepPartial3758<NestedConfig3758>;
  path?: ConfigPaths3758;
}

const HeavyComponent3758 = memo(function HeavyComponent3758({ config }: HeavyProps3758) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3758) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3758 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3758: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3758.displayName = 'HeavyComponent3758';
export default HeavyComponent3758;
