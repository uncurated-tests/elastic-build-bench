'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5262<T> = T extends (infer U)[]
  ? DeepReadonlyArray5262<U>
  : T extends object
  ? DeepReadonlyObject5262<T>
  : T;

interface DeepReadonlyArray5262<T> extends ReadonlyArray<DeepReadonly5262<T>> {}

type DeepReadonlyObject5262<T> = {
  readonly [P in keyof T]: DeepReadonly5262<T[P]>;
};

type UnionToIntersection5262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5262<T> = UnionToIntersection5262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5262<T extends unknown[], V> = [...T, V];

type TuplifyUnion5262<T, L = LastOf5262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5262<TuplifyUnion5262<Exclude<T, L>>, L>;

type DeepPartial5262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5262<T[P]> }
  : T;

type Paths5262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5262<K, Paths5262<T[K], Prev5262[D]>> : never }[keyof T]
  : never;

type Prev5262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5262 {
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

type ConfigPaths5262 = Paths5262<NestedConfig5262>;

interface HeavyProps5262 {
  config: DeepPartial5262<NestedConfig5262>;
  path?: ConfigPaths5262;
}

const HeavyComponent5262 = memo(function HeavyComponent5262({ config }: HeavyProps5262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5262.displayName = 'HeavyComponent5262';
export default HeavyComponent5262;
