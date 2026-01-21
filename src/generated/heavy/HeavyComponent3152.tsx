'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3152<T> = T extends (infer U)[]
  ? DeepReadonlyArray3152<U>
  : T extends object
  ? DeepReadonlyObject3152<T>
  : T;

interface DeepReadonlyArray3152<T> extends ReadonlyArray<DeepReadonly3152<T>> {}

type DeepReadonlyObject3152<T> = {
  readonly [P in keyof T]: DeepReadonly3152<T[P]>;
};

type UnionToIntersection3152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3152<T> = UnionToIntersection3152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3152<T extends unknown[], V> = [...T, V];

type TuplifyUnion3152<T, L = LastOf3152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3152<TuplifyUnion3152<Exclude<T, L>>, L>;

type DeepPartial3152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3152<T[P]> }
  : T;

type Paths3152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3152<K, Paths3152<T[K], Prev3152[D]>> : never }[keyof T]
  : never;

type Prev3152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3152 {
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

type ConfigPaths3152 = Paths3152<NestedConfig3152>;

interface HeavyProps3152 {
  config: DeepPartial3152<NestedConfig3152>;
  path?: ConfigPaths3152;
}

const HeavyComponent3152 = memo(function HeavyComponent3152({ config }: HeavyProps3152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3152.displayName = 'HeavyComponent3152';
export default HeavyComponent3152;
