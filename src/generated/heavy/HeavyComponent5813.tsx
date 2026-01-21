'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5813<T> = T extends (infer U)[]
  ? DeepReadonlyArray5813<U>
  : T extends object
  ? DeepReadonlyObject5813<T>
  : T;

interface DeepReadonlyArray5813<T> extends ReadonlyArray<DeepReadonly5813<T>> {}

type DeepReadonlyObject5813<T> = {
  readonly [P in keyof T]: DeepReadonly5813<T[P]>;
};

type UnionToIntersection5813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5813<T> = UnionToIntersection5813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5813<T extends unknown[], V> = [...T, V];

type TuplifyUnion5813<T, L = LastOf5813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5813<TuplifyUnion5813<Exclude<T, L>>, L>;

type DeepPartial5813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5813<T[P]> }
  : T;

type Paths5813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5813<K, Paths5813<T[K], Prev5813[D]>> : never }[keyof T]
  : never;

type Prev5813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5813 {
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

type ConfigPaths5813 = Paths5813<NestedConfig5813>;

interface HeavyProps5813 {
  config: DeepPartial5813<NestedConfig5813>;
  path?: ConfigPaths5813;
}

const HeavyComponent5813 = memo(function HeavyComponent5813({ config }: HeavyProps5813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5813.displayName = 'HeavyComponent5813';
export default HeavyComponent5813;
