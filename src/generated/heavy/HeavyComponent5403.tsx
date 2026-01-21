'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5403<T> = T extends (infer U)[]
  ? DeepReadonlyArray5403<U>
  : T extends object
  ? DeepReadonlyObject5403<T>
  : T;

interface DeepReadonlyArray5403<T> extends ReadonlyArray<DeepReadonly5403<T>> {}

type DeepReadonlyObject5403<T> = {
  readonly [P in keyof T]: DeepReadonly5403<T[P]>;
};

type UnionToIntersection5403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5403<T> = UnionToIntersection5403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5403<T extends unknown[], V> = [...T, V];

type TuplifyUnion5403<T, L = LastOf5403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5403<TuplifyUnion5403<Exclude<T, L>>, L>;

type DeepPartial5403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5403<T[P]> }
  : T;

type Paths5403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5403<K, Paths5403<T[K], Prev5403[D]>> : never }[keyof T]
  : never;

type Prev5403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5403 {
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

type ConfigPaths5403 = Paths5403<NestedConfig5403>;

interface HeavyProps5403 {
  config: DeepPartial5403<NestedConfig5403>;
  path?: ConfigPaths5403;
}

const HeavyComponent5403 = memo(function HeavyComponent5403({ config }: HeavyProps5403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5403.displayName = 'HeavyComponent5403';
export default HeavyComponent5403;
