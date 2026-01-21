'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5389<T> = T extends (infer U)[]
  ? DeepReadonlyArray5389<U>
  : T extends object
  ? DeepReadonlyObject5389<T>
  : T;

interface DeepReadonlyArray5389<T> extends ReadonlyArray<DeepReadonly5389<T>> {}

type DeepReadonlyObject5389<T> = {
  readonly [P in keyof T]: DeepReadonly5389<T[P]>;
};

type UnionToIntersection5389<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5389<T> = UnionToIntersection5389<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5389<T extends unknown[], V> = [...T, V];

type TuplifyUnion5389<T, L = LastOf5389<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5389<TuplifyUnion5389<Exclude<T, L>>, L>;

type DeepPartial5389<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5389<T[P]> }
  : T;

type Paths5389<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5389<K, Paths5389<T[K], Prev5389[D]>> : never }[keyof T]
  : never;

type Prev5389 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5389<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5389 {
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

type ConfigPaths5389 = Paths5389<NestedConfig5389>;

interface HeavyProps5389 {
  config: DeepPartial5389<NestedConfig5389>;
  path?: ConfigPaths5389;
}

const HeavyComponent5389 = memo(function HeavyComponent5389({ config }: HeavyProps5389) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5389) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5389 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5389: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5389.displayName = 'HeavyComponent5389';
export default HeavyComponent5389;
