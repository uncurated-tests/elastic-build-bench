'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5051<T> = T extends (infer U)[]
  ? DeepReadonlyArray5051<U>
  : T extends object
  ? DeepReadonlyObject5051<T>
  : T;

interface DeepReadonlyArray5051<T> extends ReadonlyArray<DeepReadonly5051<T>> {}

type DeepReadonlyObject5051<T> = {
  readonly [P in keyof T]: DeepReadonly5051<T[P]>;
};

type UnionToIntersection5051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5051<T> = UnionToIntersection5051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5051<T extends unknown[], V> = [...T, V];

type TuplifyUnion5051<T, L = LastOf5051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5051<TuplifyUnion5051<Exclude<T, L>>, L>;

type DeepPartial5051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5051<T[P]> }
  : T;

type Paths5051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5051<K, Paths5051<T[K], Prev5051[D]>> : never }[keyof T]
  : never;

type Prev5051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5051 {
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

type ConfigPaths5051 = Paths5051<NestedConfig5051>;

interface HeavyProps5051 {
  config: DeepPartial5051<NestedConfig5051>;
  path?: ConfigPaths5051;
}

const HeavyComponent5051 = memo(function HeavyComponent5051({ config }: HeavyProps5051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5051.displayName = 'HeavyComponent5051';
export default HeavyComponent5051;
