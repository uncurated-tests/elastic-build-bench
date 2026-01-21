'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5865<T> = T extends (infer U)[]
  ? DeepReadonlyArray5865<U>
  : T extends object
  ? DeepReadonlyObject5865<T>
  : T;

interface DeepReadonlyArray5865<T> extends ReadonlyArray<DeepReadonly5865<T>> {}

type DeepReadonlyObject5865<T> = {
  readonly [P in keyof T]: DeepReadonly5865<T[P]>;
};

type UnionToIntersection5865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5865<T> = UnionToIntersection5865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5865<T extends unknown[], V> = [...T, V];

type TuplifyUnion5865<T, L = LastOf5865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5865<TuplifyUnion5865<Exclude<T, L>>, L>;

type DeepPartial5865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5865<T[P]> }
  : T;

type Paths5865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5865<K, Paths5865<T[K], Prev5865[D]>> : never }[keyof T]
  : never;

type Prev5865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5865 {
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

type ConfigPaths5865 = Paths5865<NestedConfig5865>;

interface HeavyProps5865 {
  config: DeepPartial5865<NestedConfig5865>;
  path?: ConfigPaths5865;
}

const HeavyComponent5865 = memo(function HeavyComponent5865({ config }: HeavyProps5865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5865.displayName = 'HeavyComponent5865';
export default HeavyComponent5865;
