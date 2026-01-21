'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3846<T> = T extends (infer U)[]
  ? DeepReadonlyArray3846<U>
  : T extends object
  ? DeepReadonlyObject3846<T>
  : T;

interface DeepReadonlyArray3846<T> extends ReadonlyArray<DeepReadonly3846<T>> {}

type DeepReadonlyObject3846<T> = {
  readonly [P in keyof T]: DeepReadonly3846<T[P]>;
};

type UnionToIntersection3846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3846<T> = UnionToIntersection3846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3846<T extends unknown[], V> = [...T, V];

type TuplifyUnion3846<T, L = LastOf3846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3846<TuplifyUnion3846<Exclude<T, L>>, L>;

type DeepPartial3846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3846<T[P]> }
  : T;

type Paths3846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3846<K, Paths3846<T[K], Prev3846[D]>> : never }[keyof T]
  : never;

type Prev3846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3846 {
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

type ConfigPaths3846 = Paths3846<NestedConfig3846>;

interface HeavyProps3846 {
  config: DeepPartial3846<NestedConfig3846>;
  path?: ConfigPaths3846;
}

const HeavyComponent3846 = memo(function HeavyComponent3846({ config }: HeavyProps3846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3846.displayName = 'HeavyComponent3846';
export default HeavyComponent3846;
