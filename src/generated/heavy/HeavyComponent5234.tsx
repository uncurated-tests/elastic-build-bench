'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5234<T> = T extends (infer U)[]
  ? DeepReadonlyArray5234<U>
  : T extends object
  ? DeepReadonlyObject5234<T>
  : T;

interface DeepReadonlyArray5234<T> extends ReadonlyArray<DeepReadonly5234<T>> {}

type DeepReadonlyObject5234<T> = {
  readonly [P in keyof T]: DeepReadonly5234<T[P]>;
};

type UnionToIntersection5234<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5234<T> = UnionToIntersection5234<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5234<T extends unknown[], V> = [...T, V];

type TuplifyUnion5234<T, L = LastOf5234<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5234<TuplifyUnion5234<Exclude<T, L>>, L>;

type DeepPartial5234<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5234<T[P]> }
  : T;

type Paths5234<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5234<K, Paths5234<T[K], Prev5234[D]>> : never }[keyof T]
  : never;

type Prev5234 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5234<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5234 {
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

type ConfigPaths5234 = Paths5234<NestedConfig5234>;

interface HeavyProps5234 {
  config: DeepPartial5234<NestedConfig5234>;
  path?: ConfigPaths5234;
}

const HeavyComponent5234 = memo(function HeavyComponent5234({ config }: HeavyProps5234) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5234) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5234 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5234: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5234.displayName = 'HeavyComponent5234';
export default HeavyComponent5234;
