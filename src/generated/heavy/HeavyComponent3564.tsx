'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3564<T> = T extends (infer U)[]
  ? DeepReadonlyArray3564<U>
  : T extends object
  ? DeepReadonlyObject3564<T>
  : T;

interface DeepReadonlyArray3564<T> extends ReadonlyArray<DeepReadonly3564<T>> {}

type DeepReadonlyObject3564<T> = {
  readonly [P in keyof T]: DeepReadonly3564<T[P]>;
};

type UnionToIntersection3564<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3564<T> = UnionToIntersection3564<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3564<T extends unknown[], V> = [...T, V];

type TuplifyUnion3564<T, L = LastOf3564<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3564<TuplifyUnion3564<Exclude<T, L>>, L>;

type DeepPartial3564<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3564<T[P]> }
  : T;

type Paths3564<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3564<K, Paths3564<T[K], Prev3564[D]>> : never }[keyof T]
  : never;

type Prev3564 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3564<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3564 {
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

type ConfigPaths3564 = Paths3564<NestedConfig3564>;

interface HeavyProps3564 {
  config: DeepPartial3564<NestedConfig3564>;
  path?: ConfigPaths3564;
}

const HeavyComponent3564 = memo(function HeavyComponent3564({ config }: HeavyProps3564) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3564) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3564 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3564: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3564.displayName = 'HeavyComponent3564';
export default HeavyComponent3564;
