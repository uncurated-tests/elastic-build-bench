'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5241<T> = T extends (infer U)[]
  ? DeepReadonlyArray5241<U>
  : T extends object
  ? DeepReadonlyObject5241<T>
  : T;

interface DeepReadonlyArray5241<T> extends ReadonlyArray<DeepReadonly5241<T>> {}

type DeepReadonlyObject5241<T> = {
  readonly [P in keyof T]: DeepReadonly5241<T[P]>;
};

type UnionToIntersection5241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5241<T> = UnionToIntersection5241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5241<T extends unknown[], V> = [...T, V];

type TuplifyUnion5241<T, L = LastOf5241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5241<TuplifyUnion5241<Exclude<T, L>>, L>;

type DeepPartial5241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5241<T[P]> }
  : T;

type Paths5241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5241<K, Paths5241<T[K], Prev5241[D]>> : never }[keyof T]
  : never;

type Prev5241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5241 {
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

type ConfigPaths5241 = Paths5241<NestedConfig5241>;

interface HeavyProps5241 {
  config: DeepPartial5241<NestedConfig5241>;
  path?: ConfigPaths5241;
}

const HeavyComponent5241 = memo(function HeavyComponent5241({ config }: HeavyProps5241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5241.displayName = 'HeavyComponent5241';
export default HeavyComponent5241;
