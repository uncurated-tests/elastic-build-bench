'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5964<T> = T extends (infer U)[]
  ? DeepReadonlyArray5964<U>
  : T extends object
  ? DeepReadonlyObject5964<T>
  : T;

interface DeepReadonlyArray5964<T> extends ReadonlyArray<DeepReadonly5964<T>> {}

type DeepReadonlyObject5964<T> = {
  readonly [P in keyof T]: DeepReadonly5964<T[P]>;
};

type UnionToIntersection5964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5964<T> = UnionToIntersection5964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5964<T extends unknown[], V> = [...T, V];

type TuplifyUnion5964<T, L = LastOf5964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5964<TuplifyUnion5964<Exclude<T, L>>, L>;

type DeepPartial5964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5964<T[P]> }
  : T;

type Paths5964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5964<K, Paths5964<T[K], Prev5964[D]>> : never }[keyof T]
  : never;

type Prev5964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5964 {
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

type ConfigPaths5964 = Paths5964<NestedConfig5964>;

interface HeavyProps5964 {
  config: DeepPartial5964<NestedConfig5964>;
  path?: ConfigPaths5964;
}

const HeavyComponent5964 = memo(function HeavyComponent5964({ config }: HeavyProps5964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5964.displayName = 'HeavyComponent5964';
export default HeavyComponent5964;
