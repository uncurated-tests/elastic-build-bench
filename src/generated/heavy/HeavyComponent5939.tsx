'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5939<T> = T extends (infer U)[]
  ? DeepReadonlyArray5939<U>
  : T extends object
  ? DeepReadonlyObject5939<T>
  : T;

interface DeepReadonlyArray5939<T> extends ReadonlyArray<DeepReadonly5939<T>> {}

type DeepReadonlyObject5939<T> = {
  readonly [P in keyof T]: DeepReadonly5939<T[P]>;
};

type UnionToIntersection5939<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5939<T> = UnionToIntersection5939<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5939<T extends unknown[], V> = [...T, V];

type TuplifyUnion5939<T, L = LastOf5939<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5939<TuplifyUnion5939<Exclude<T, L>>, L>;

type DeepPartial5939<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5939<T[P]> }
  : T;

type Paths5939<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5939<K, Paths5939<T[K], Prev5939[D]>> : never }[keyof T]
  : never;

type Prev5939 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5939<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5939 {
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

type ConfigPaths5939 = Paths5939<NestedConfig5939>;

interface HeavyProps5939 {
  config: DeepPartial5939<NestedConfig5939>;
  path?: ConfigPaths5939;
}

const HeavyComponent5939 = memo(function HeavyComponent5939({ config }: HeavyProps5939) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5939) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5939 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5939: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5939.displayName = 'HeavyComponent5939';
export default HeavyComponent5939;
