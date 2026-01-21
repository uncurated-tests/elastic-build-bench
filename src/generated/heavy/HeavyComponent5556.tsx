'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5556<T> = T extends (infer U)[]
  ? DeepReadonlyArray5556<U>
  : T extends object
  ? DeepReadonlyObject5556<T>
  : T;

interface DeepReadonlyArray5556<T> extends ReadonlyArray<DeepReadonly5556<T>> {}

type DeepReadonlyObject5556<T> = {
  readonly [P in keyof T]: DeepReadonly5556<T[P]>;
};

type UnionToIntersection5556<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5556<T> = UnionToIntersection5556<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5556<T extends unknown[], V> = [...T, V];

type TuplifyUnion5556<T, L = LastOf5556<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5556<TuplifyUnion5556<Exclude<T, L>>, L>;

type DeepPartial5556<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5556<T[P]> }
  : T;

type Paths5556<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5556<K, Paths5556<T[K], Prev5556[D]>> : never }[keyof T]
  : never;

type Prev5556 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5556<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5556 {
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

type ConfigPaths5556 = Paths5556<NestedConfig5556>;

interface HeavyProps5556 {
  config: DeepPartial5556<NestedConfig5556>;
  path?: ConfigPaths5556;
}

const HeavyComponent5556 = memo(function HeavyComponent5556({ config }: HeavyProps5556) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5556) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5556 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5556: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5556.displayName = 'HeavyComponent5556';
export default HeavyComponent5556;
