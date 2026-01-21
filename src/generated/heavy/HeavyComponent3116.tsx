'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3116<T> = T extends (infer U)[]
  ? DeepReadonlyArray3116<U>
  : T extends object
  ? DeepReadonlyObject3116<T>
  : T;

interface DeepReadonlyArray3116<T> extends ReadonlyArray<DeepReadonly3116<T>> {}

type DeepReadonlyObject3116<T> = {
  readonly [P in keyof T]: DeepReadonly3116<T[P]>;
};

type UnionToIntersection3116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3116<T> = UnionToIntersection3116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3116<T extends unknown[], V> = [...T, V];

type TuplifyUnion3116<T, L = LastOf3116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3116<TuplifyUnion3116<Exclude<T, L>>, L>;

type DeepPartial3116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3116<T[P]> }
  : T;

type Paths3116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3116<K, Paths3116<T[K], Prev3116[D]>> : never }[keyof T]
  : never;

type Prev3116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3116 {
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

type ConfigPaths3116 = Paths3116<NestedConfig3116>;

interface HeavyProps3116 {
  config: DeepPartial3116<NestedConfig3116>;
  path?: ConfigPaths3116;
}

const HeavyComponent3116 = memo(function HeavyComponent3116({ config }: HeavyProps3116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3116.displayName = 'HeavyComponent3116';
export default HeavyComponent3116;
