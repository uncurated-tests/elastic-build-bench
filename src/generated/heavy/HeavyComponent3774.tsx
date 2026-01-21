'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3774<T> = T extends (infer U)[]
  ? DeepReadonlyArray3774<U>
  : T extends object
  ? DeepReadonlyObject3774<T>
  : T;

interface DeepReadonlyArray3774<T> extends ReadonlyArray<DeepReadonly3774<T>> {}

type DeepReadonlyObject3774<T> = {
  readonly [P in keyof T]: DeepReadonly3774<T[P]>;
};

type UnionToIntersection3774<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3774<T> = UnionToIntersection3774<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3774<T extends unknown[], V> = [...T, V];

type TuplifyUnion3774<T, L = LastOf3774<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3774<TuplifyUnion3774<Exclude<T, L>>, L>;

type DeepPartial3774<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3774<T[P]> }
  : T;

type Paths3774<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3774<K, Paths3774<T[K], Prev3774[D]>> : never }[keyof T]
  : never;

type Prev3774 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3774<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3774 {
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

type ConfigPaths3774 = Paths3774<NestedConfig3774>;

interface HeavyProps3774 {
  config: DeepPartial3774<NestedConfig3774>;
  path?: ConfigPaths3774;
}

const HeavyComponent3774 = memo(function HeavyComponent3774({ config }: HeavyProps3774) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3774) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3774 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3774: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3774.displayName = 'HeavyComponent3774';
export default HeavyComponent3774;
