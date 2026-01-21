'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3807<T> = T extends (infer U)[]
  ? DeepReadonlyArray3807<U>
  : T extends object
  ? DeepReadonlyObject3807<T>
  : T;

interface DeepReadonlyArray3807<T> extends ReadonlyArray<DeepReadonly3807<T>> {}

type DeepReadonlyObject3807<T> = {
  readonly [P in keyof T]: DeepReadonly3807<T[P]>;
};

type UnionToIntersection3807<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3807<T> = UnionToIntersection3807<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3807<T extends unknown[], V> = [...T, V];

type TuplifyUnion3807<T, L = LastOf3807<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3807<TuplifyUnion3807<Exclude<T, L>>, L>;

type DeepPartial3807<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3807<T[P]> }
  : T;

type Paths3807<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3807<K, Paths3807<T[K], Prev3807[D]>> : never }[keyof T]
  : never;

type Prev3807 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3807<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3807 {
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

type ConfigPaths3807 = Paths3807<NestedConfig3807>;

interface HeavyProps3807 {
  config: DeepPartial3807<NestedConfig3807>;
  path?: ConfigPaths3807;
}

const HeavyComponent3807 = memo(function HeavyComponent3807({ config }: HeavyProps3807) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3807) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3807 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3807: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3807.displayName = 'HeavyComponent3807';
export default HeavyComponent3807;
