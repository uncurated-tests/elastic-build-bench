'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5498<T> = T extends (infer U)[]
  ? DeepReadonlyArray5498<U>
  : T extends object
  ? DeepReadonlyObject5498<T>
  : T;

interface DeepReadonlyArray5498<T> extends ReadonlyArray<DeepReadonly5498<T>> {}

type DeepReadonlyObject5498<T> = {
  readonly [P in keyof T]: DeepReadonly5498<T[P]>;
};

type UnionToIntersection5498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5498<T> = UnionToIntersection5498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5498<T extends unknown[], V> = [...T, V];

type TuplifyUnion5498<T, L = LastOf5498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5498<TuplifyUnion5498<Exclude<T, L>>, L>;

type DeepPartial5498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5498<T[P]> }
  : T;

type Paths5498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5498<K, Paths5498<T[K], Prev5498[D]>> : never }[keyof T]
  : never;

type Prev5498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5498 {
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

type ConfigPaths5498 = Paths5498<NestedConfig5498>;

interface HeavyProps5498 {
  config: DeepPartial5498<NestedConfig5498>;
  path?: ConfigPaths5498;
}

const HeavyComponent5498 = memo(function HeavyComponent5498({ config }: HeavyProps5498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5498.displayName = 'HeavyComponent5498';
export default HeavyComponent5498;
