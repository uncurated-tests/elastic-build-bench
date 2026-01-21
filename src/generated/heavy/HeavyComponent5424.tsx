'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5424<T> = T extends (infer U)[]
  ? DeepReadonlyArray5424<U>
  : T extends object
  ? DeepReadonlyObject5424<T>
  : T;

interface DeepReadonlyArray5424<T> extends ReadonlyArray<DeepReadonly5424<T>> {}

type DeepReadonlyObject5424<T> = {
  readonly [P in keyof T]: DeepReadonly5424<T[P]>;
};

type UnionToIntersection5424<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5424<T> = UnionToIntersection5424<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5424<T extends unknown[], V> = [...T, V];

type TuplifyUnion5424<T, L = LastOf5424<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5424<TuplifyUnion5424<Exclude<T, L>>, L>;

type DeepPartial5424<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5424<T[P]> }
  : T;

type Paths5424<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5424<K, Paths5424<T[K], Prev5424[D]>> : never }[keyof T]
  : never;

type Prev5424 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5424<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5424 {
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

type ConfigPaths5424 = Paths5424<NestedConfig5424>;

interface HeavyProps5424 {
  config: DeepPartial5424<NestedConfig5424>;
  path?: ConfigPaths5424;
}

const HeavyComponent5424 = memo(function HeavyComponent5424({ config }: HeavyProps5424) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5424) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5424 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5424: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5424.displayName = 'HeavyComponent5424';
export default HeavyComponent5424;
