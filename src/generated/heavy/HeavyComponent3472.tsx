'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3472<T> = T extends (infer U)[]
  ? DeepReadonlyArray3472<U>
  : T extends object
  ? DeepReadonlyObject3472<T>
  : T;

interface DeepReadonlyArray3472<T> extends ReadonlyArray<DeepReadonly3472<T>> {}

type DeepReadonlyObject3472<T> = {
  readonly [P in keyof T]: DeepReadonly3472<T[P]>;
};

type UnionToIntersection3472<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3472<T> = UnionToIntersection3472<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3472<T extends unknown[], V> = [...T, V];

type TuplifyUnion3472<T, L = LastOf3472<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3472<TuplifyUnion3472<Exclude<T, L>>, L>;

type DeepPartial3472<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3472<T[P]> }
  : T;

type Paths3472<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3472<K, Paths3472<T[K], Prev3472[D]>> : never }[keyof T]
  : never;

type Prev3472 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3472<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3472 {
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

type ConfigPaths3472 = Paths3472<NestedConfig3472>;

interface HeavyProps3472 {
  config: DeepPartial3472<NestedConfig3472>;
  path?: ConfigPaths3472;
}

const HeavyComponent3472 = memo(function HeavyComponent3472({ config }: HeavyProps3472) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3472) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3472 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3472: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3472.displayName = 'HeavyComponent3472';
export default HeavyComponent3472;
