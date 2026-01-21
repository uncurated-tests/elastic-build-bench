'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5627<T> = T extends (infer U)[]
  ? DeepReadonlyArray5627<U>
  : T extends object
  ? DeepReadonlyObject5627<T>
  : T;

interface DeepReadonlyArray5627<T> extends ReadonlyArray<DeepReadonly5627<T>> {}

type DeepReadonlyObject5627<T> = {
  readonly [P in keyof T]: DeepReadonly5627<T[P]>;
};

type UnionToIntersection5627<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5627<T> = UnionToIntersection5627<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5627<T extends unknown[], V> = [...T, V];

type TuplifyUnion5627<T, L = LastOf5627<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5627<TuplifyUnion5627<Exclude<T, L>>, L>;

type DeepPartial5627<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5627<T[P]> }
  : T;

type Paths5627<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5627<K, Paths5627<T[K], Prev5627[D]>> : never }[keyof T]
  : never;

type Prev5627 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5627<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5627 {
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

type ConfigPaths5627 = Paths5627<NestedConfig5627>;

interface HeavyProps5627 {
  config: DeepPartial5627<NestedConfig5627>;
  path?: ConfigPaths5627;
}

const HeavyComponent5627 = memo(function HeavyComponent5627({ config }: HeavyProps5627) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5627) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5627 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5627: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5627.displayName = 'HeavyComponent5627';
export default HeavyComponent5627;
