'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5142<T> = T extends (infer U)[]
  ? DeepReadonlyArray5142<U>
  : T extends object
  ? DeepReadonlyObject5142<T>
  : T;

interface DeepReadonlyArray5142<T> extends ReadonlyArray<DeepReadonly5142<T>> {}

type DeepReadonlyObject5142<T> = {
  readonly [P in keyof T]: DeepReadonly5142<T[P]>;
};

type UnionToIntersection5142<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5142<T> = UnionToIntersection5142<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5142<T extends unknown[], V> = [...T, V];

type TuplifyUnion5142<T, L = LastOf5142<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5142<TuplifyUnion5142<Exclude<T, L>>, L>;

type DeepPartial5142<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5142<T[P]> }
  : T;

type Paths5142<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5142<K, Paths5142<T[K], Prev5142[D]>> : never }[keyof T]
  : never;

type Prev5142 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5142<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5142 {
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

type ConfigPaths5142 = Paths5142<NestedConfig5142>;

interface HeavyProps5142 {
  config: DeepPartial5142<NestedConfig5142>;
  path?: ConfigPaths5142;
}

const HeavyComponent5142 = memo(function HeavyComponent5142({ config }: HeavyProps5142) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5142) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5142 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5142: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5142.displayName = 'HeavyComponent5142';
export default HeavyComponent5142;
