'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5072<T> = T extends (infer U)[]
  ? DeepReadonlyArray5072<U>
  : T extends object
  ? DeepReadonlyObject5072<T>
  : T;

interface DeepReadonlyArray5072<T> extends ReadonlyArray<DeepReadonly5072<T>> {}

type DeepReadonlyObject5072<T> = {
  readonly [P in keyof T]: DeepReadonly5072<T[P]>;
};

type UnionToIntersection5072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5072<T> = UnionToIntersection5072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5072<T extends unknown[], V> = [...T, V];

type TuplifyUnion5072<T, L = LastOf5072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5072<TuplifyUnion5072<Exclude<T, L>>, L>;

type DeepPartial5072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5072<T[P]> }
  : T;

type Paths5072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5072<K, Paths5072<T[K], Prev5072[D]>> : never }[keyof T]
  : never;

type Prev5072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5072 {
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

type ConfigPaths5072 = Paths5072<NestedConfig5072>;

interface HeavyProps5072 {
  config: DeepPartial5072<NestedConfig5072>;
  path?: ConfigPaths5072;
}

const HeavyComponent5072 = memo(function HeavyComponent5072({ config }: HeavyProps5072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5072.displayName = 'HeavyComponent5072';
export default HeavyComponent5072;
