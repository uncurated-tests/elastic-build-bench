'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3953<T> = T extends (infer U)[]
  ? DeepReadonlyArray3953<U>
  : T extends object
  ? DeepReadonlyObject3953<T>
  : T;

interface DeepReadonlyArray3953<T> extends ReadonlyArray<DeepReadonly3953<T>> {}

type DeepReadonlyObject3953<T> = {
  readonly [P in keyof T]: DeepReadonly3953<T[P]>;
};

type UnionToIntersection3953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3953<T> = UnionToIntersection3953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3953<T extends unknown[], V> = [...T, V];

type TuplifyUnion3953<T, L = LastOf3953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3953<TuplifyUnion3953<Exclude<T, L>>, L>;

type DeepPartial3953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3953<T[P]> }
  : T;

type Paths3953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3953<K, Paths3953<T[K], Prev3953[D]>> : never }[keyof T]
  : never;

type Prev3953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3953 {
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

type ConfigPaths3953 = Paths3953<NestedConfig3953>;

interface HeavyProps3953 {
  config: DeepPartial3953<NestedConfig3953>;
  path?: ConfigPaths3953;
}

const HeavyComponent3953 = memo(function HeavyComponent3953({ config }: HeavyProps3953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3953.displayName = 'HeavyComponent3953';
export default HeavyComponent3953;
