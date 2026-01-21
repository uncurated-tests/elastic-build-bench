'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5624<T> = T extends (infer U)[]
  ? DeepReadonlyArray5624<U>
  : T extends object
  ? DeepReadonlyObject5624<T>
  : T;

interface DeepReadonlyArray5624<T> extends ReadonlyArray<DeepReadonly5624<T>> {}

type DeepReadonlyObject5624<T> = {
  readonly [P in keyof T]: DeepReadonly5624<T[P]>;
};

type UnionToIntersection5624<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5624<T> = UnionToIntersection5624<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5624<T extends unknown[], V> = [...T, V];

type TuplifyUnion5624<T, L = LastOf5624<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5624<TuplifyUnion5624<Exclude<T, L>>, L>;

type DeepPartial5624<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5624<T[P]> }
  : T;

type Paths5624<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5624<K, Paths5624<T[K], Prev5624[D]>> : never }[keyof T]
  : never;

type Prev5624 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5624<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5624 {
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

type ConfigPaths5624 = Paths5624<NestedConfig5624>;

interface HeavyProps5624 {
  config: DeepPartial5624<NestedConfig5624>;
  path?: ConfigPaths5624;
}

const HeavyComponent5624 = memo(function HeavyComponent5624({ config }: HeavyProps5624) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5624) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5624 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5624: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5624.displayName = 'HeavyComponent5624';
export default HeavyComponent5624;
