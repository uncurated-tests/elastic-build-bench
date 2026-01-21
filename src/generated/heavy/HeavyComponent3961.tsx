'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3961<T> = T extends (infer U)[]
  ? DeepReadonlyArray3961<U>
  : T extends object
  ? DeepReadonlyObject3961<T>
  : T;

interface DeepReadonlyArray3961<T> extends ReadonlyArray<DeepReadonly3961<T>> {}

type DeepReadonlyObject3961<T> = {
  readonly [P in keyof T]: DeepReadonly3961<T[P]>;
};

type UnionToIntersection3961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3961<T> = UnionToIntersection3961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3961<T extends unknown[], V> = [...T, V];

type TuplifyUnion3961<T, L = LastOf3961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3961<TuplifyUnion3961<Exclude<T, L>>, L>;

type DeepPartial3961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3961<T[P]> }
  : T;

type Paths3961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3961<K, Paths3961<T[K], Prev3961[D]>> : never }[keyof T]
  : never;

type Prev3961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3961 {
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

type ConfigPaths3961 = Paths3961<NestedConfig3961>;

interface HeavyProps3961 {
  config: DeepPartial3961<NestedConfig3961>;
  path?: ConfigPaths3961;
}

const HeavyComponent3961 = memo(function HeavyComponent3961({ config }: HeavyProps3961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3961.displayName = 'HeavyComponent3961';
export default HeavyComponent3961;
