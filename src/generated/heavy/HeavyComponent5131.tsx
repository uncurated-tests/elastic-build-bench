'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5131<T> = T extends (infer U)[]
  ? DeepReadonlyArray5131<U>
  : T extends object
  ? DeepReadonlyObject5131<T>
  : T;

interface DeepReadonlyArray5131<T> extends ReadonlyArray<DeepReadonly5131<T>> {}

type DeepReadonlyObject5131<T> = {
  readonly [P in keyof T]: DeepReadonly5131<T[P]>;
};

type UnionToIntersection5131<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5131<T> = UnionToIntersection5131<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5131<T extends unknown[], V> = [...T, V];

type TuplifyUnion5131<T, L = LastOf5131<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5131<TuplifyUnion5131<Exclude<T, L>>, L>;

type DeepPartial5131<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5131<T[P]> }
  : T;

type Paths5131<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5131<K, Paths5131<T[K], Prev5131[D]>> : never }[keyof T]
  : never;

type Prev5131 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5131<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5131 {
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

type ConfigPaths5131 = Paths5131<NestedConfig5131>;

interface HeavyProps5131 {
  config: DeepPartial5131<NestedConfig5131>;
  path?: ConfigPaths5131;
}

const HeavyComponent5131 = memo(function HeavyComponent5131({ config }: HeavyProps5131) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5131) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5131 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5131: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5131.displayName = 'HeavyComponent5131';
export default HeavyComponent5131;
