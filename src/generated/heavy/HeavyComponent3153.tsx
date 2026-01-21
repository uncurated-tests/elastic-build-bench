'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3153<T> = T extends (infer U)[]
  ? DeepReadonlyArray3153<U>
  : T extends object
  ? DeepReadonlyObject3153<T>
  : T;

interface DeepReadonlyArray3153<T> extends ReadonlyArray<DeepReadonly3153<T>> {}

type DeepReadonlyObject3153<T> = {
  readonly [P in keyof T]: DeepReadonly3153<T[P]>;
};

type UnionToIntersection3153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3153<T> = UnionToIntersection3153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3153<T extends unknown[], V> = [...T, V];

type TuplifyUnion3153<T, L = LastOf3153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3153<TuplifyUnion3153<Exclude<T, L>>, L>;

type DeepPartial3153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3153<T[P]> }
  : T;

type Paths3153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3153<K, Paths3153<T[K], Prev3153[D]>> : never }[keyof T]
  : never;

type Prev3153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3153 {
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

type ConfigPaths3153 = Paths3153<NestedConfig3153>;

interface HeavyProps3153 {
  config: DeepPartial3153<NestedConfig3153>;
  path?: ConfigPaths3153;
}

const HeavyComponent3153 = memo(function HeavyComponent3153({ config }: HeavyProps3153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3153.displayName = 'HeavyComponent3153';
export default HeavyComponent3153;
