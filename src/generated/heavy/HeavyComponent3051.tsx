'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3051<T> = T extends (infer U)[]
  ? DeepReadonlyArray3051<U>
  : T extends object
  ? DeepReadonlyObject3051<T>
  : T;

interface DeepReadonlyArray3051<T> extends ReadonlyArray<DeepReadonly3051<T>> {}

type DeepReadonlyObject3051<T> = {
  readonly [P in keyof T]: DeepReadonly3051<T[P]>;
};

type UnionToIntersection3051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3051<T> = UnionToIntersection3051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3051<T extends unknown[], V> = [...T, V];

type TuplifyUnion3051<T, L = LastOf3051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3051<TuplifyUnion3051<Exclude<T, L>>, L>;

type DeepPartial3051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3051<T[P]> }
  : T;

type Paths3051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3051<K, Paths3051<T[K], Prev3051[D]>> : never }[keyof T]
  : never;

type Prev3051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3051 {
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

type ConfigPaths3051 = Paths3051<NestedConfig3051>;

interface HeavyProps3051 {
  config: DeepPartial3051<NestedConfig3051>;
  path?: ConfigPaths3051;
}

const HeavyComponent3051 = memo(function HeavyComponent3051({ config }: HeavyProps3051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3051.displayName = 'HeavyComponent3051';
export default HeavyComponent3051;
