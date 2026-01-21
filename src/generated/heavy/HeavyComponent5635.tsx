'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5635<T> = T extends (infer U)[]
  ? DeepReadonlyArray5635<U>
  : T extends object
  ? DeepReadonlyObject5635<T>
  : T;

interface DeepReadonlyArray5635<T> extends ReadonlyArray<DeepReadonly5635<T>> {}

type DeepReadonlyObject5635<T> = {
  readonly [P in keyof T]: DeepReadonly5635<T[P]>;
};

type UnionToIntersection5635<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5635<T> = UnionToIntersection5635<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5635<T extends unknown[], V> = [...T, V];

type TuplifyUnion5635<T, L = LastOf5635<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5635<TuplifyUnion5635<Exclude<T, L>>, L>;

type DeepPartial5635<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5635<T[P]> }
  : T;

type Paths5635<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5635<K, Paths5635<T[K], Prev5635[D]>> : never }[keyof T]
  : never;

type Prev5635 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5635<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5635 {
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

type ConfigPaths5635 = Paths5635<NestedConfig5635>;

interface HeavyProps5635 {
  config: DeepPartial5635<NestedConfig5635>;
  path?: ConfigPaths5635;
}

const HeavyComponent5635 = memo(function HeavyComponent5635({ config }: HeavyProps5635) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5635) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5635 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5635: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5635.displayName = 'HeavyComponent5635';
export default HeavyComponent5635;
