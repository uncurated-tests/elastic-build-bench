'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3372<T> = T extends (infer U)[]
  ? DeepReadonlyArray3372<U>
  : T extends object
  ? DeepReadonlyObject3372<T>
  : T;

interface DeepReadonlyArray3372<T> extends ReadonlyArray<DeepReadonly3372<T>> {}

type DeepReadonlyObject3372<T> = {
  readonly [P in keyof T]: DeepReadonly3372<T[P]>;
};

type UnionToIntersection3372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3372<T> = UnionToIntersection3372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3372<T extends unknown[], V> = [...T, V];

type TuplifyUnion3372<T, L = LastOf3372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3372<TuplifyUnion3372<Exclude<T, L>>, L>;

type DeepPartial3372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3372<T[P]> }
  : T;

type Paths3372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3372<K, Paths3372<T[K], Prev3372[D]>> : never }[keyof T]
  : never;

type Prev3372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3372 {
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

type ConfigPaths3372 = Paths3372<NestedConfig3372>;

interface HeavyProps3372 {
  config: DeepPartial3372<NestedConfig3372>;
  path?: ConfigPaths3372;
}

const HeavyComponent3372 = memo(function HeavyComponent3372({ config }: HeavyProps3372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3372.displayName = 'HeavyComponent3372';
export default HeavyComponent3372;
