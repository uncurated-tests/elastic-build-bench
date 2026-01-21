'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3902<T> = T extends (infer U)[]
  ? DeepReadonlyArray3902<U>
  : T extends object
  ? DeepReadonlyObject3902<T>
  : T;

interface DeepReadonlyArray3902<T> extends ReadonlyArray<DeepReadonly3902<T>> {}

type DeepReadonlyObject3902<T> = {
  readonly [P in keyof T]: DeepReadonly3902<T[P]>;
};

type UnionToIntersection3902<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3902<T> = UnionToIntersection3902<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3902<T extends unknown[], V> = [...T, V];

type TuplifyUnion3902<T, L = LastOf3902<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3902<TuplifyUnion3902<Exclude<T, L>>, L>;

type DeepPartial3902<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3902<T[P]> }
  : T;

type Paths3902<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3902<K, Paths3902<T[K], Prev3902[D]>> : never }[keyof T]
  : never;

type Prev3902 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3902<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3902 {
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

type ConfigPaths3902 = Paths3902<NestedConfig3902>;

interface HeavyProps3902 {
  config: DeepPartial3902<NestedConfig3902>;
  path?: ConfigPaths3902;
}

const HeavyComponent3902 = memo(function HeavyComponent3902({ config }: HeavyProps3902) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3902) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3902 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3902: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3902.displayName = 'HeavyComponent3902';
export default HeavyComponent3902;
