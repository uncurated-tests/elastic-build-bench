'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5791<T> = T extends (infer U)[]
  ? DeepReadonlyArray5791<U>
  : T extends object
  ? DeepReadonlyObject5791<T>
  : T;

interface DeepReadonlyArray5791<T> extends ReadonlyArray<DeepReadonly5791<T>> {}

type DeepReadonlyObject5791<T> = {
  readonly [P in keyof T]: DeepReadonly5791<T[P]>;
};

type UnionToIntersection5791<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5791<T> = UnionToIntersection5791<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5791<T extends unknown[], V> = [...T, V];

type TuplifyUnion5791<T, L = LastOf5791<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5791<TuplifyUnion5791<Exclude<T, L>>, L>;

type DeepPartial5791<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5791<T[P]> }
  : T;

type Paths5791<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5791<K, Paths5791<T[K], Prev5791[D]>> : never }[keyof T]
  : never;

type Prev5791 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5791<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5791 {
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

type ConfigPaths5791 = Paths5791<NestedConfig5791>;

interface HeavyProps5791 {
  config: DeepPartial5791<NestedConfig5791>;
  path?: ConfigPaths5791;
}

const HeavyComponent5791 = memo(function HeavyComponent5791({ config }: HeavyProps5791) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5791) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5791 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5791: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5791.displayName = 'HeavyComponent5791';
export default HeavyComponent5791;
