'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5268<T> = T extends (infer U)[]
  ? DeepReadonlyArray5268<U>
  : T extends object
  ? DeepReadonlyObject5268<T>
  : T;

interface DeepReadonlyArray5268<T> extends ReadonlyArray<DeepReadonly5268<T>> {}

type DeepReadonlyObject5268<T> = {
  readonly [P in keyof T]: DeepReadonly5268<T[P]>;
};

type UnionToIntersection5268<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5268<T> = UnionToIntersection5268<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5268<T extends unknown[], V> = [...T, V];

type TuplifyUnion5268<T, L = LastOf5268<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5268<TuplifyUnion5268<Exclude<T, L>>, L>;

type DeepPartial5268<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5268<T[P]> }
  : T;

type Paths5268<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5268<K, Paths5268<T[K], Prev5268[D]>> : never }[keyof T]
  : never;

type Prev5268 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5268<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5268 {
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

type ConfigPaths5268 = Paths5268<NestedConfig5268>;

interface HeavyProps5268 {
  config: DeepPartial5268<NestedConfig5268>;
  path?: ConfigPaths5268;
}

const HeavyComponent5268 = memo(function HeavyComponent5268({ config }: HeavyProps5268) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5268) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5268 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5268: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5268.displayName = 'HeavyComponent5268';
export default HeavyComponent5268;
