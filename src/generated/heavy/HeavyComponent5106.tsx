'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5106<T> = T extends (infer U)[]
  ? DeepReadonlyArray5106<U>
  : T extends object
  ? DeepReadonlyObject5106<T>
  : T;

interface DeepReadonlyArray5106<T> extends ReadonlyArray<DeepReadonly5106<T>> {}

type DeepReadonlyObject5106<T> = {
  readonly [P in keyof T]: DeepReadonly5106<T[P]>;
};

type UnionToIntersection5106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5106<T> = UnionToIntersection5106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5106<T extends unknown[], V> = [...T, V];

type TuplifyUnion5106<T, L = LastOf5106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5106<TuplifyUnion5106<Exclude<T, L>>, L>;

type DeepPartial5106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5106<T[P]> }
  : T;

type Paths5106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5106<K, Paths5106<T[K], Prev5106[D]>> : never }[keyof T]
  : never;

type Prev5106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5106 {
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

type ConfigPaths5106 = Paths5106<NestedConfig5106>;

interface HeavyProps5106 {
  config: DeepPartial5106<NestedConfig5106>;
  path?: ConfigPaths5106;
}

const HeavyComponent5106 = memo(function HeavyComponent5106({ config }: HeavyProps5106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5106.displayName = 'HeavyComponent5106';
export default HeavyComponent5106;
