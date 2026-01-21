'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5426<T> = T extends (infer U)[]
  ? DeepReadonlyArray5426<U>
  : T extends object
  ? DeepReadonlyObject5426<T>
  : T;

interface DeepReadonlyArray5426<T> extends ReadonlyArray<DeepReadonly5426<T>> {}

type DeepReadonlyObject5426<T> = {
  readonly [P in keyof T]: DeepReadonly5426<T[P]>;
};

type UnionToIntersection5426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5426<T> = UnionToIntersection5426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5426<T extends unknown[], V> = [...T, V];

type TuplifyUnion5426<T, L = LastOf5426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5426<TuplifyUnion5426<Exclude<T, L>>, L>;

type DeepPartial5426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5426<T[P]> }
  : T;

type Paths5426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5426<K, Paths5426<T[K], Prev5426[D]>> : never }[keyof T]
  : never;

type Prev5426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5426 {
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

type ConfigPaths5426 = Paths5426<NestedConfig5426>;

interface HeavyProps5426 {
  config: DeepPartial5426<NestedConfig5426>;
  path?: ConfigPaths5426;
}

const HeavyComponent5426 = memo(function HeavyComponent5426({ config }: HeavyProps5426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5426.displayName = 'HeavyComponent5426';
export default HeavyComponent5426;
