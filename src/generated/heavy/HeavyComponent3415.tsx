'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3415<T> = T extends (infer U)[]
  ? DeepReadonlyArray3415<U>
  : T extends object
  ? DeepReadonlyObject3415<T>
  : T;

interface DeepReadonlyArray3415<T> extends ReadonlyArray<DeepReadonly3415<T>> {}

type DeepReadonlyObject3415<T> = {
  readonly [P in keyof T]: DeepReadonly3415<T[P]>;
};

type UnionToIntersection3415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3415<T> = UnionToIntersection3415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3415<T extends unknown[], V> = [...T, V];

type TuplifyUnion3415<T, L = LastOf3415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3415<TuplifyUnion3415<Exclude<T, L>>, L>;

type DeepPartial3415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3415<T[P]> }
  : T;

type Paths3415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3415<K, Paths3415<T[K], Prev3415[D]>> : never }[keyof T]
  : never;

type Prev3415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3415 {
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

type ConfigPaths3415 = Paths3415<NestedConfig3415>;

interface HeavyProps3415 {
  config: DeepPartial3415<NestedConfig3415>;
  path?: ConfigPaths3415;
}

const HeavyComponent3415 = memo(function HeavyComponent3415({ config }: HeavyProps3415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3415.displayName = 'HeavyComponent3415';
export default HeavyComponent3415;
