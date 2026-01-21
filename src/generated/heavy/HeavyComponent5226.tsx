'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5226<T> = T extends (infer U)[]
  ? DeepReadonlyArray5226<U>
  : T extends object
  ? DeepReadonlyObject5226<T>
  : T;

interface DeepReadonlyArray5226<T> extends ReadonlyArray<DeepReadonly5226<T>> {}

type DeepReadonlyObject5226<T> = {
  readonly [P in keyof T]: DeepReadonly5226<T[P]>;
};

type UnionToIntersection5226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5226<T> = UnionToIntersection5226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5226<T extends unknown[], V> = [...T, V];

type TuplifyUnion5226<T, L = LastOf5226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5226<TuplifyUnion5226<Exclude<T, L>>, L>;

type DeepPartial5226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5226<T[P]> }
  : T;

type Paths5226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5226<K, Paths5226<T[K], Prev5226[D]>> : never }[keyof T]
  : never;

type Prev5226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5226 {
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

type ConfigPaths5226 = Paths5226<NestedConfig5226>;

interface HeavyProps5226 {
  config: DeepPartial5226<NestedConfig5226>;
  path?: ConfigPaths5226;
}

const HeavyComponent5226 = memo(function HeavyComponent5226({ config }: HeavyProps5226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5226.displayName = 'HeavyComponent5226';
export default HeavyComponent5226;
