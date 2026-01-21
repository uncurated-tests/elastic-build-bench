'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3476<T> = T extends (infer U)[]
  ? DeepReadonlyArray3476<U>
  : T extends object
  ? DeepReadonlyObject3476<T>
  : T;

interface DeepReadonlyArray3476<T> extends ReadonlyArray<DeepReadonly3476<T>> {}

type DeepReadonlyObject3476<T> = {
  readonly [P in keyof T]: DeepReadonly3476<T[P]>;
};

type UnionToIntersection3476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3476<T> = UnionToIntersection3476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3476<T extends unknown[], V> = [...T, V];

type TuplifyUnion3476<T, L = LastOf3476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3476<TuplifyUnion3476<Exclude<T, L>>, L>;

type DeepPartial3476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3476<T[P]> }
  : T;

type Paths3476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3476<K, Paths3476<T[K], Prev3476[D]>> : never }[keyof T]
  : never;

type Prev3476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3476 {
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

type ConfigPaths3476 = Paths3476<NestedConfig3476>;

interface HeavyProps3476 {
  config: DeepPartial3476<NestedConfig3476>;
  path?: ConfigPaths3476;
}

const HeavyComponent3476 = memo(function HeavyComponent3476({ config }: HeavyProps3476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3476.displayName = 'HeavyComponent3476';
export default HeavyComponent3476;
