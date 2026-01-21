'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5601<T> = T extends (infer U)[]
  ? DeepReadonlyArray5601<U>
  : T extends object
  ? DeepReadonlyObject5601<T>
  : T;

interface DeepReadonlyArray5601<T> extends ReadonlyArray<DeepReadonly5601<T>> {}

type DeepReadonlyObject5601<T> = {
  readonly [P in keyof T]: DeepReadonly5601<T[P]>;
};

type UnionToIntersection5601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5601<T> = UnionToIntersection5601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5601<T extends unknown[], V> = [...T, V];

type TuplifyUnion5601<T, L = LastOf5601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5601<TuplifyUnion5601<Exclude<T, L>>, L>;

type DeepPartial5601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5601<T[P]> }
  : T;

type Paths5601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5601<K, Paths5601<T[K], Prev5601[D]>> : never }[keyof T]
  : never;

type Prev5601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5601 {
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

type ConfigPaths5601 = Paths5601<NestedConfig5601>;

interface HeavyProps5601 {
  config: DeepPartial5601<NestedConfig5601>;
  path?: ConfigPaths5601;
}

const HeavyComponent5601 = memo(function HeavyComponent5601({ config }: HeavyProps5601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5601.displayName = 'HeavyComponent5601';
export default HeavyComponent5601;
