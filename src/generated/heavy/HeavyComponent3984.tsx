'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3984<T> = T extends (infer U)[]
  ? DeepReadonlyArray3984<U>
  : T extends object
  ? DeepReadonlyObject3984<T>
  : T;

interface DeepReadonlyArray3984<T> extends ReadonlyArray<DeepReadonly3984<T>> {}

type DeepReadonlyObject3984<T> = {
  readonly [P in keyof T]: DeepReadonly3984<T[P]>;
};

type UnionToIntersection3984<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3984<T> = UnionToIntersection3984<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3984<T extends unknown[], V> = [...T, V];

type TuplifyUnion3984<T, L = LastOf3984<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3984<TuplifyUnion3984<Exclude<T, L>>, L>;

type DeepPartial3984<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3984<T[P]> }
  : T;

type Paths3984<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3984<K, Paths3984<T[K], Prev3984[D]>> : never }[keyof T]
  : never;

type Prev3984 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3984<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3984 {
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

type ConfigPaths3984 = Paths3984<NestedConfig3984>;

interface HeavyProps3984 {
  config: DeepPartial3984<NestedConfig3984>;
  path?: ConfigPaths3984;
}

const HeavyComponent3984 = memo(function HeavyComponent3984({ config }: HeavyProps3984) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3984) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3984 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3984: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3984.displayName = 'HeavyComponent3984';
export default HeavyComponent3984;
