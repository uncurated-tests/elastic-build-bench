'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5445<T> = T extends (infer U)[]
  ? DeepReadonlyArray5445<U>
  : T extends object
  ? DeepReadonlyObject5445<T>
  : T;

interface DeepReadonlyArray5445<T> extends ReadonlyArray<DeepReadonly5445<T>> {}

type DeepReadonlyObject5445<T> = {
  readonly [P in keyof T]: DeepReadonly5445<T[P]>;
};

type UnionToIntersection5445<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5445<T> = UnionToIntersection5445<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5445<T extends unknown[], V> = [...T, V];

type TuplifyUnion5445<T, L = LastOf5445<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5445<TuplifyUnion5445<Exclude<T, L>>, L>;

type DeepPartial5445<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5445<T[P]> }
  : T;

type Paths5445<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5445<K, Paths5445<T[K], Prev5445[D]>> : never }[keyof T]
  : never;

type Prev5445 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5445<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5445 {
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

type ConfigPaths5445 = Paths5445<NestedConfig5445>;

interface HeavyProps5445 {
  config: DeepPartial5445<NestedConfig5445>;
  path?: ConfigPaths5445;
}

const HeavyComponent5445 = memo(function HeavyComponent5445({ config }: HeavyProps5445) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5445) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5445 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5445: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5445.displayName = 'HeavyComponent5445';
export default HeavyComponent5445;
