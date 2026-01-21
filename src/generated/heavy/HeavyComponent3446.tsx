'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3446<T> = T extends (infer U)[]
  ? DeepReadonlyArray3446<U>
  : T extends object
  ? DeepReadonlyObject3446<T>
  : T;

interface DeepReadonlyArray3446<T> extends ReadonlyArray<DeepReadonly3446<T>> {}

type DeepReadonlyObject3446<T> = {
  readonly [P in keyof T]: DeepReadonly3446<T[P]>;
};

type UnionToIntersection3446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3446<T> = UnionToIntersection3446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3446<T extends unknown[], V> = [...T, V];

type TuplifyUnion3446<T, L = LastOf3446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3446<TuplifyUnion3446<Exclude<T, L>>, L>;

type DeepPartial3446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3446<T[P]> }
  : T;

type Paths3446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3446<K, Paths3446<T[K], Prev3446[D]>> : never }[keyof T]
  : never;

type Prev3446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3446 {
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

type ConfigPaths3446 = Paths3446<NestedConfig3446>;

interface HeavyProps3446 {
  config: DeepPartial3446<NestedConfig3446>;
  path?: ConfigPaths3446;
}

const HeavyComponent3446 = memo(function HeavyComponent3446({ config }: HeavyProps3446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3446.displayName = 'HeavyComponent3446';
export default HeavyComponent3446;
