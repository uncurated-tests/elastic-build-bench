'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5408<T> = T extends (infer U)[]
  ? DeepReadonlyArray5408<U>
  : T extends object
  ? DeepReadonlyObject5408<T>
  : T;

interface DeepReadonlyArray5408<T> extends ReadonlyArray<DeepReadonly5408<T>> {}

type DeepReadonlyObject5408<T> = {
  readonly [P in keyof T]: DeepReadonly5408<T[P]>;
};

type UnionToIntersection5408<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5408<T> = UnionToIntersection5408<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5408<T extends unknown[], V> = [...T, V];

type TuplifyUnion5408<T, L = LastOf5408<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5408<TuplifyUnion5408<Exclude<T, L>>, L>;

type DeepPartial5408<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5408<T[P]> }
  : T;

type Paths5408<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5408<K, Paths5408<T[K], Prev5408[D]>> : never }[keyof T]
  : never;

type Prev5408 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5408<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5408 {
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

type ConfigPaths5408 = Paths5408<NestedConfig5408>;

interface HeavyProps5408 {
  config: DeepPartial5408<NestedConfig5408>;
  path?: ConfigPaths5408;
}

const HeavyComponent5408 = memo(function HeavyComponent5408({ config }: HeavyProps5408) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5408) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5408 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5408: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5408.displayName = 'HeavyComponent5408';
export default HeavyComponent5408;
