'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5156<T> = T extends (infer U)[]
  ? DeepReadonlyArray5156<U>
  : T extends object
  ? DeepReadonlyObject5156<T>
  : T;

interface DeepReadonlyArray5156<T> extends ReadonlyArray<DeepReadonly5156<T>> {}

type DeepReadonlyObject5156<T> = {
  readonly [P in keyof T]: DeepReadonly5156<T[P]>;
};

type UnionToIntersection5156<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5156<T> = UnionToIntersection5156<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5156<T extends unknown[], V> = [...T, V];

type TuplifyUnion5156<T, L = LastOf5156<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5156<TuplifyUnion5156<Exclude<T, L>>, L>;

type DeepPartial5156<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5156<T[P]> }
  : T;

type Paths5156<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5156<K, Paths5156<T[K], Prev5156[D]>> : never }[keyof T]
  : never;

type Prev5156 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5156<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5156 {
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

type ConfigPaths5156 = Paths5156<NestedConfig5156>;

interface HeavyProps5156 {
  config: DeepPartial5156<NestedConfig5156>;
  path?: ConfigPaths5156;
}

const HeavyComponent5156 = memo(function HeavyComponent5156({ config }: HeavyProps5156) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5156) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5156 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5156: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5156.displayName = 'HeavyComponent5156';
export default HeavyComponent5156;
