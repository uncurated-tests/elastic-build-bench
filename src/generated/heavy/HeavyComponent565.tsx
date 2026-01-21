'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly565<T> = T extends (infer U)[]
  ? DeepReadonlyArray565<U>
  : T extends object
  ? DeepReadonlyObject565<T>
  : T;

interface DeepReadonlyArray565<T> extends ReadonlyArray<DeepReadonly565<T>> {}

type DeepReadonlyObject565<T> = {
  readonly [P in keyof T]: DeepReadonly565<T[P]>;
};

type UnionToIntersection565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf565<T> = UnionToIntersection565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push565<T extends unknown[], V> = [...T, V];

type TuplifyUnion565<T, L = LastOf565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push565<TuplifyUnion565<Exclude<T, L>>, L>;

type DeepPartial565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial565<T[P]> }
  : T;

type Paths565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join565<K, Paths565<T[K], Prev565[D]>> : never }[keyof T]
  : never;

type Prev565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig565 {
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

type ConfigPaths565 = Paths565<NestedConfig565>;

interface HeavyProps565 {
  config: DeepPartial565<NestedConfig565>;
  path?: ConfigPaths565;
}

const HeavyComponent565 = memo(function HeavyComponent565({ config }: HeavyProps565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent565.displayName = 'HeavyComponent565';
export default HeavyComponent565;
