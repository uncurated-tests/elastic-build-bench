'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5513<T> = T extends (infer U)[]
  ? DeepReadonlyArray5513<U>
  : T extends object
  ? DeepReadonlyObject5513<T>
  : T;

interface DeepReadonlyArray5513<T> extends ReadonlyArray<DeepReadonly5513<T>> {}

type DeepReadonlyObject5513<T> = {
  readonly [P in keyof T]: DeepReadonly5513<T[P]>;
};

type UnionToIntersection5513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5513<T> = UnionToIntersection5513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5513<T extends unknown[], V> = [...T, V];

type TuplifyUnion5513<T, L = LastOf5513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5513<TuplifyUnion5513<Exclude<T, L>>, L>;

type DeepPartial5513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5513<T[P]> }
  : T;

type Paths5513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5513<K, Paths5513<T[K], Prev5513[D]>> : never }[keyof T]
  : never;

type Prev5513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5513 {
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

type ConfigPaths5513 = Paths5513<NestedConfig5513>;

interface HeavyProps5513 {
  config: DeepPartial5513<NestedConfig5513>;
  path?: ConfigPaths5513;
}

const HeavyComponent5513 = memo(function HeavyComponent5513({ config }: HeavyProps5513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5513.displayName = 'HeavyComponent5513';
export default HeavyComponent5513;
