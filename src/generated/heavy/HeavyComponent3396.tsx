'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3396<T> = T extends (infer U)[]
  ? DeepReadonlyArray3396<U>
  : T extends object
  ? DeepReadonlyObject3396<T>
  : T;

interface DeepReadonlyArray3396<T> extends ReadonlyArray<DeepReadonly3396<T>> {}

type DeepReadonlyObject3396<T> = {
  readonly [P in keyof T]: DeepReadonly3396<T[P]>;
};

type UnionToIntersection3396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3396<T> = UnionToIntersection3396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3396<T extends unknown[], V> = [...T, V];

type TuplifyUnion3396<T, L = LastOf3396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3396<TuplifyUnion3396<Exclude<T, L>>, L>;

type DeepPartial3396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3396<T[P]> }
  : T;

type Paths3396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3396<K, Paths3396<T[K], Prev3396[D]>> : never }[keyof T]
  : never;

type Prev3396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3396 {
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

type ConfigPaths3396 = Paths3396<NestedConfig3396>;

interface HeavyProps3396 {
  config: DeepPartial3396<NestedConfig3396>;
  path?: ConfigPaths3396;
}

const HeavyComponent3396 = memo(function HeavyComponent3396({ config }: HeavyProps3396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3396.displayName = 'HeavyComponent3396';
export default HeavyComponent3396;
