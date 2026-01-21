'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5010<T> = T extends (infer U)[]
  ? DeepReadonlyArray5010<U>
  : T extends object
  ? DeepReadonlyObject5010<T>
  : T;

interface DeepReadonlyArray5010<T> extends ReadonlyArray<DeepReadonly5010<T>> {}

type DeepReadonlyObject5010<T> = {
  readonly [P in keyof T]: DeepReadonly5010<T[P]>;
};

type UnionToIntersection5010<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5010<T> = UnionToIntersection5010<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5010<T extends unknown[], V> = [...T, V];

type TuplifyUnion5010<T, L = LastOf5010<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5010<TuplifyUnion5010<Exclude<T, L>>, L>;

type DeepPartial5010<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5010<T[P]> }
  : T;

type Paths5010<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5010<K, Paths5010<T[K], Prev5010[D]>> : never }[keyof T]
  : never;

type Prev5010 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5010<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5010 {
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

type ConfigPaths5010 = Paths5010<NestedConfig5010>;

interface HeavyProps5010 {
  config: DeepPartial5010<NestedConfig5010>;
  path?: ConfigPaths5010;
}

const HeavyComponent5010 = memo(function HeavyComponent5010({ config }: HeavyProps5010) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5010) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5010 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5010: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5010.displayName = 'HeavyComponent5010';
export default HeavyComponent5010;
