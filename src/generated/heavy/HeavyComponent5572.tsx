'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5572<T> = T extends (infer U)[]
  ? DeepReadonlyArray5572<U>
  : T extends object
  ? DeepReadonlyObject5572<T>
  : T;

interface DeepReadonlyArray5572<T> extends ReadonlyArray<DeepReadonly5572<T>> {}

type DeepReadonlyObject5572<T> = {
  readonly [P in keyof T]: DeepReadonly5572<T[P]>;
};

type UnionToIntersection5572<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5572<T> = UnionToIntersection5572<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5572<T extends unknown[], V> = [...T, V];

type TuplifyUnion5572<T, L = LastOf5572<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5572<TuplifyUnion5572<Exclude<T, L>>, L>;

type DeepPartial5572<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5572<T[P]> }
  : T;

type Paths5572<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5572<K, Paths5572<T[K], Prev5572[D]>> : never }[keyof T]
  : never;

type Prev5572 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5572<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5572 {
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

type ConfigPaths5572 = Paths5572<NestedConfig5572>;

interface HeavyProps5572 {
  config: DeepPartial5572<NestedConfig5572>;
  path?: ConfigPaths5572;
}

const HeavyComponent5572 = memo(function HeavyComponent5572({ config }: HeavyProps5572) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5572) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5572 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5572: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5572.displayName = 'HeavyComponent5572';
export default HeavyComponent5572;
