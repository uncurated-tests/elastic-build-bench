'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3150<T> = T extends (infer U)[]
  ? DeepReadonlyArray3150<U>
  : T extends object
  ? DeepReadonlyObject3150<T>
  : T;

interface DeepReadonlyArray3150<T> extends ReadonlyArray<DeepReadonly3150<T>> {}

type DeepReadonlyObject3150<T> = {
  readonly [P in keyof T]: DeepReadonly3150<T[P]>;
};

type UnionToIntersection3150<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3150<T> = UnionToIntersection3150<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3150<T extends unknown[], V> = [...T, V];

type TuplifyUnion3150<T, L = LastOf3150<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3150<TuplifyUnion3150<Exclude<T, L>>, L>;

type DeepPartial3150<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3150<T[P]> }
  : T;

type Paths3150<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3150<K, Paths3150<T[K], Prev3150[D]>> : never }[keyof T]
  : never;

type Prev3150 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3150<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3150 {
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

type ConfigPaths3150 = Paths3150<NestedConfig3150>;

interface HeavyProps3150 {
  config: DeepPartial3150<NestedConfig3150>;
  path?: ConfigPaths3150;
}

const HeavyComponent3150 = memo(function HeavyComponent3150({ config }: HeavyProps3150) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3150) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3150 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3150: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3150.displayName = 'HeavyComponent3150';
export default HeavyComponent3150;
