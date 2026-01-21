'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5886<T> = T extends (infer U)[]
  ? DeepReadonlyArray5886<U>
  : T extends object
  ? DeepReadonlyObject5886<T>
  : T;

interface DeepReadonlyArray5886<T> extends ReadonlyArray<DeepReadonly5886<T>> {}

type DeepReadonlyObject5886<T> = {
  readonly [P in keyof T]: DeepReadonly5886<T[P]>;
};

type UnionToIntersection5886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5886<T> = UnionToIntersection5886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5886<T extends unknown[], V> = [...T, V];

type TuplifyUnion5886<T, L = LastOf5886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5886<TuplifyUnion5886<Exclude<T, L>>, L>;

type DeepPartial5886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5886<T[P]> }
  : T;

type Paths5886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5886<K, Paths5886<T[K], Prev5886[D]>> : never }[keyof T]
  : never;

type Prev5886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5886 {
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

type ConfigPaths5886 = Paths5886<NestedConfig5886>;

interface HeavyProps5886 {
  config: DeepPartial5886<NestedConfig5886>;
  path?: ConfigPaths5886;
}

const HeavyComponent5886 = memo(function HeavyComponent5886({ config }: HeavyProps5886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5886.displayName = 'HeavyComponent5886';
export default HeavyComponent5886;
