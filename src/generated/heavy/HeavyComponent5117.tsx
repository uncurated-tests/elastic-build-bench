'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5117<T> = T extends (infer U)[]
  ? DeepReadonlyArray5117<U>
  : T extends object
  ? DeepReadonlyObject5117<T>
  : T;

interface DeepReadonlyArray5117<T> extends ReadonlyArray<DeepReadonly5117<T>> {}

type DeepReadonlyObject5117<T> = {
  readonly [P in keyof T]: DeepReadonly5117<T[P]>;
};

type UnionToIntersection5117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5117<T> = UnionToIntersection5117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5117<T extends unknown[], V> = [...T, V];

type TuplifyUnion5117<T, L = LastOf5117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5117<TuplifyUnion5117<Exclude<T, L>>, L>;

type DeepPartial5117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5117<T[P]> }
  : T;

type Paths5117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5117<K, Paths5117<T[K], Prev5117[D]>> : never }[keyof T]
  : never;

type Prev5117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5117 {
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

type ConfigPaths5117 = Paths5117<NestedConfig5117>;

interface HeavyProps5117 {
  config: DeepPartial5117<NestedConfig5117>;
  path?: ConfigPaths5117;
}

const HeavyComponent5117 = memo(function HeavyComponent5117({ config }: HeavyProps5117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5117.displayName = 'HeavyComponent5117';
export default HeavyComponent5117;
