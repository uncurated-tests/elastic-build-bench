'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3918<T> = T extends (infer U)[]
  ? DeepReadonlyArray3918<U>
  : T extends object
  ? DeepReadonlyObject3918<T>
  : T;

interface DeepReadonlyArray3918<T> extends ReadonlyArray<DeepReadonly3918<T>> {}

type DeepReadonlyObject3918<T> = {
  readonly [P in keyof T]: DeepReadonly3918<T[P]>;
};

type UnionToIntersection3918<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3918<T> = UnionToIntersection3918<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3918<T extends unknown[], V> = [...T, V];

type TuplifyUnion3918<T, L = LastOf3918<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3918<TuplifyUnion3918<Exclude<T, L>>, L>;

type DeepPartial3918<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3918<T[P]> }
  : T;

type Paths3918<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3918<K, Paths3918<T[K], Prev3918[D]>> : never }[keyof T]
  : never;

type Prev3918 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3918<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3918 {
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

type ConfigPaths3918 = Paths3918<NestedConfig3918>;

interface HeavyProps3918 {
  config: DeepPartial3918<NestedConfig3918>;
  path?: ConfigPaths3918;
}

const HeavyComponent3918 = memo(function HeavyComponent3918({ config }: HeavyProps3918) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3918) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3918 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3918: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3918.displayName = 'HeavyComponent3918';
export default HeavyComponent3918;
