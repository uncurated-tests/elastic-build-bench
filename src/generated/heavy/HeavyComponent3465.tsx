'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3465<T> = T extends (infer U)[]
  ? DeepReadonlyArray3465<U>
  : T extends object
  ? DeepReadonlyObject3465<T>
  : T;

interface DeepReadonlyArray3465<T> extends ReadonlyArray<DeepReadonly3465<T>> {}

type DeepReadonlyObject3465<T> = {
  readonly [P in keyof T]: DeepReadonly3465<T[P]>;
};

type UnionToIntersection3465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3465<T> = UnionToIntersection3465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3465<T extends unknown[], V> = [...T, V];

type TuplifyUnion3465<T, L = LastOf3465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3465<TuplifyUnion3465<Exclude<T, L>>, L>;

type DeepPartial3465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3465<T[P]> }
  : T;

type Paths3465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3465<K, Paths3465<T[K], Prev3465[D]>> : never }[keyof T]
  : never;

type Prev3465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3465 {
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

type ConfigPaths3465 = Paths3465<NestedConfig3465>;

interface HeavyProps3465 {
  config: DeepPartial3465<NestedConfig3465>;
  path?: ConfigPaths3465;
}

const HeavyComponent3465 = memo(function HeavyComponent3465({ config }: HeavyProps3465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3465.displayName = 'HeavyComponent3465';
export default HeavyComponent3465;
