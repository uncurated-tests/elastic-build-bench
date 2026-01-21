'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5593<T> = T extends (infer U)[]
  ? DeepReadonlyArray5593<U>
  : T extends object
  ? DeepReadonlyObject5593<T>
  : T;

interface DeepReadonlyArray5593<T> extends ReadonlyArray<DeepReadonly5593<T>> {}

type DeepReadonlyObject5593<T> = {
  readonly [P in keyof T]: DeepReadonly5593<T[P]>;
};

type UnionToIntersection5593<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5593<T> = UnionToIntersection5593<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5593<T extends unknown[], V> = [...T, V];

type TuplifyUnion5593<T, L = LastOf5593<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5593<TuplifyUnion5593<Exclude<T, L>>, L>;

type DeepPartial5593<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5593<T[P]> }
  : T;

type Paths5593<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5593<K, Paths5593<T[K], Prev5593[D]>> : never }[keyof T]
  : never;

type Prev5593 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5593<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5593 {
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

type ConfigPaths5593 = Paths5593<NestedConfig5593>;

interface HeavyProps5593 {
  config: DeepPartial5593<NestedConfig5593>;
  path?: ConfigPaths5593;
}

const HeavyComponent5593 = memo(function HeavyComponent5593({ config }: HeavyProps5593) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5593) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5593 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5593: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5593.displayName = 'HeavyComponent5593';
export default HeavyComponent5593;
