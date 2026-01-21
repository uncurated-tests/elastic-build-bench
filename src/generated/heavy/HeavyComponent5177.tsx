'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5177<T> = T extends (infer U)[]
  ? DeepReadonlyArray5177<U>
  : T extends object
  ? DeepReadonlyObject5177<T>
  : T;

interface DeepReadonlyArray5177<T> extends ReadonlyArray<DeepReadonly5177<T>> {}

type DeepReadonlyObject5177<T> = {
  readonly [P in keyof T]: DeepReadonly5177<T[P]>;
};

type UnionToIntersection5177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5177<T> = UnionToIntersection5177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5177<T extends unknown[], V> = [...T, V];

type TuplifyUnion5177<T, L = LastOf5177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5177<TuplifyUnion5177<Exclude<T, L>>, L>;

type DeepPartial5177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5177<T[P]> }
  : T;

type Paths5177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5177<K, Paths5177<T[K], Prev5177[D]>> : never }[keyof T]
  : never;

type Prev5177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5177 {
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

type ConfigPaths5177 = Paths5177<NestedConfig5177>;

interface HeavyProps5177 {
  config: DeepPartial5177<NestedConfig5177>;
  path?: ConfigPaths5177;
}

const HeavyComponent5177 = memo(function HeavyComponent5177({ config }: HeavyProps5177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5177.displayName = 'HeavyComponent5177';
export default HeavyComponent5177;
