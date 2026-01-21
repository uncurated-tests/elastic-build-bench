'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3853<T> = T extends (infer U)[]
  ? DeepReadonlyArray3853<U>
  : T extends object
  ? DeepReadonlyObject3853<T>
  : T;

interface DeepReadonlyArray3853<T> extends ReadonlyArray<DeepReadonly3853<T>> {}

type DeepReadonlyObject3853<T> = {
  readonly [P in keyof T]: DeepReadonly3853<T[P]>;
};

type UnionToIntersection3853<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3853<T> = UnionToIntersection3853<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3853<T extends unknown[], V> = [...T, V];

type TuplifyUnion3853<T, L = LastOf3853<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3853<TuplifyUnion3853<Exclude<T, L>>, L>;

type DeepPartial3853<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3853<T[P]> }
  : T;

type Paths3853<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3853<K, Paths3853<T[K], Prev3853[D]>> : never }[keyof T]
  : never;

type Prev3853 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3853<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3853 {
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

type ConfigPaths3853 = Paths3853<NestedConfig3853>;

interface HeavyProps3853 {
  config: DeepPartial3853<NestedConfig3853>;
  path?: ConfigPaths3853;
}

const HeavyComponent3853 = memo(function HeavyComponent3853({ config }: HeavyProps3853) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3853) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3853 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3853: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3853.displayName = 'HeavyComponent3853';
export default HeavyComponent3853;
