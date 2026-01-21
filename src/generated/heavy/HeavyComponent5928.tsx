'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5928<T> = T extends (infer U)[]
  ? DeepReadonlyArray5928<U>
  : T extends object
  ? DeepReadonlyObject5928<T>
  : T;

interface DeepReadonlyArray5928<T> extends ReadonlyArray<DeepReadonly5928<T>> {}

type DeepReadonlyObject5928<T> = {
  readonly [P in keyof T]: DeepReadonly5928<T[P]>;
};

type UnionToIntersection5928<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5928<T> = UnionToIntersection5928<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5928<T extends unknown[], V> = [...T, V];

type TuplifyUnion5928<T, L = LastOf5928<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5928<TuplifyUnion5928<Exclude<T, L>>, L>;

type DeepPartial5928<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5928<T[P]> }
  : T;

type Paths5928<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5928<K, Paths5928<T[K], Prev5928[D]>> : never }[keyof T]
  : never;

type Prev5928 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5928<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5928 {
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

type ConfigPaths5928 = Paths5928<NestedConfig5928>;

interface HeavyProps5928 {
  config: DeepPartial5928<NestedConfig5928>;
  path?: ConfigPaths5928;
}

const HeavyComponent5928 = memo(function HeavyComponent5928({ config }: HeavyProps5928) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5928) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5928 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5928: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5928.displayName = 'HeavyComponent5928';
export default HeavyComponent5928;
