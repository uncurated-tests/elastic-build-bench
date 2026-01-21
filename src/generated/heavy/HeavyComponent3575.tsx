'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3575<T> = T extends (infer U)[]
  ? DeepReadonlyArray3575<U>
  : T extends object
  ? DeepReadonlyObject3575<T>
  : T;

interface DeepReadonlyArray3575<T> extends ReadonlyArray<DeepReadonly3575<T>> {}

type DeepReadonlyObject3575<T> = {
  readonly [P in keyof T]: DeepReadonly3575<T[P]>;
};

type UnionToIntersection3575<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3575<T> = UnionToIntersection3575<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3575<T extends unknown[], V> = [...T, V];

type TuplifyUnion3575<T, L = LastOf3575<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3575<TuplifyUnion3575<Exclude<T, L>>, L>;

type DeepPartial3575<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3575<T[P]> }
  : T;

type Paths3575<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3575<K, Paths3575<T[K], Prev3575[D]>> : never }[keyof T]
  : never;

type Prev3575 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3575<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3575 {
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

type ConfigPaths3575 = Paths3575<NestedConfig3575>;

interface HeavyProps3575 {
  config: DeepPartial3575<NestedConfig3575>;
  path?: ConfigPaths3575;
}

const HeavyComponent3575 = memo(function HeavyComponent3575({ config }: HeavyProps3575) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3575) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3575 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3575: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3575.displayName = 'HeavyComponent3575';
export default HeavyComponent3575;
