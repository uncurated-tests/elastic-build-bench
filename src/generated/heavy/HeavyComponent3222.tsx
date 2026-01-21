'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3222<T> = T extends (infer U)[]
  ? DeepReadonlyArray3222<U>
  : T extends object
  ? DeepReadonlyObject3222<T>
  : T;

interface DeepReadonlyArray3222<T> extends ReadonlyArray<DeepReadonly3222<T>> {}

type DeepReadonlyObject3222<T> = {
  readonly [P in keyof T]: DeepReadonly3222<T[P]>;
};

type UnionToIntersection3222<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3222<T> = UnionToIntersection3222<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3222<T extends unknown[], V> = [...T, V];

type TuplifyUnion3222<T, L = LastOf3222<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3222<TuplifyUnion3222<Exclude<T, L>>, L>;

type DeepPartial3222<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3222<T[P]> }
  : T;

type Paths3222<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3222<K, Paths3222<T[K], Prev3222[D]>> : never }[keyof T]
  : never;

type Prev3222 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3222<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3222 {
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

type ConfigPaths3222 = Paths3222<NestedConfig3222>;

interface HeavyProps3222 {
  config: DeepPartial3222<NestedConfig3222>;
  path?: ConfigPaths3222;
}

const HeavyComponent3222 = memo(function HeavyComponent3222({ config }: HeavyProps3222) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3222) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3222 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3222: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3222.displayName = 'HeavyComponent3222';
export default HeavyComponent3222;
