'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5576<T> = T extends (infer U)[]
  ? DeepReadonlyArray5576<U>
  : T extends object
  ? DeepReadonlyObject5576<T>
  : T;

interface DeepReadonlyArray5576<T> extends ReadonlyArray<DeepReadonly5576<T>> {}

type DeepReadonlyObject5576<T> = {
  readonly [P in keyof T]: DeepReadonly5576<T[P]>;
};

type UnionToIntersection5576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5576<T> = UnionToIntersection5576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5576<T extends unknown[], V> = [...T, V];

type TuplifyUnion5576<T, L = LastOf5576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5576<TuplifyUnion5576<Exclude<T, L>>, L>;

type DeepPartial5576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5576<T[P]> }
  : T;

type Paths5576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5576<K, Paths5576<T[K], Prev5576[D]>> : never }[keyof T]
  : never;

type Prev5576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5576 {
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

type ConfigPaths5576 = Paths5576<NestedConfig5576>;

interface HeavyProps5576 {
  config: DeepPartial5576<NestedConfig5576>;
  path?: ConfigPaths5576;
}

const HeavyComponent5576 = memo(function HeavyComponent5576({ config }: HeavyProps5576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5576.displayName = 'HeavyComponent5576';
export default HeavyComponent5576;
