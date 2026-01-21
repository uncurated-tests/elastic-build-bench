'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3852<T> = T extends (infer U)[]
  ? DeepReadonlyArray3852<U>
  : T extends object
  ? DeepReadonlyObject3852<T>
  : T;

interface DeepReadonlyArray3852<T> extends ReadonlyArray<DeepReadonly3852<T>> {}

type DeepReadonlyObject3852<T> = {
  readonly [P in keyof T]: DeepReadonly3852<T[P]>;
};

type UnionToIntersection3852<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3852<T> = UnionToIntersection3852<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3852<T extends unknown[], V> = [...T, V];

type TuplifyUnion3852<T, L = LastOf3852<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3852<TuplifyUnion3852<Exclude<T, L>>, L>;

type DeepPartial3852<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3852<T[P]> }
  : T;

type Paths3852<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3852<K, Paths3852<T[K], Prev3852[D]>> : never }[keyof T]
  : never;

type Prev3852 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3852<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3852 {
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

type ConfigPaths3852 = Paths3852<NestedConfig3852>;

interface HeavyProps3852 {
  config: DeepPartial3852<NestedConfig3852>;
  path?: ConfigPaths3852;
}

const HeavyComponent3852 = memo(function HeavyComponent3852({ config }: HeavyProps3852) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3852) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3852 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3852: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3852.displayName = 'HeavyComponent3852';
export default HeavyComponent3852;
