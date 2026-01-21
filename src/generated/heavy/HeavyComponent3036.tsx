'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3036<T> = T extends (infer U)[]
  ? DeepReadonlyArray3036<U>
  : T extends object
  ? DeepReadonlyObject3036<T>
  : T;

interface DeepReadonlyArray3036<T> extends ReadonlyArray<DeepReadonly3036<T>> {}

type DeepReadonlyObject3036<T> = {
  readonly [P in keyof T]: DeepReadonly3036<T[P]>;
};

type UnionToIntersection3036<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3036<T> = UnionToIntersection3036<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3036<T extends unknown[], V> = [...T, V];

type TuplifyUnion3036<T, L = LastOf3036<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3036<TuplifyUnion3036<Exclude<T, L>>, L>;

type DeepPartial3036<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3036<T[P]> }
  : T;

type Paths3036<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3036<K, Paths3036<T[K], Prev3036[D]>> : never }[keyof T]
  : never;

type Prev3036 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3036<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3036 {
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

type ConfigPaths3036 = Paths3036<NestedConfig3036>;

interface HeavyProps3036 {
  config: DeepPartial3036<NestedConfig3036>;
  path?: ConfigPaths3036;
}

const HeavyComponent3036 = memo(function HeavyComponent3036({ config }: HeavyProps3036) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3036) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3036 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3036: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3036.displayName = 'HeavyComponent3036';
export default HeavyComponent3036;
