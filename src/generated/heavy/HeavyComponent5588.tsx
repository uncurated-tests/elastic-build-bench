'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5588<T> = T extends (infer U)[]
  ? DeepReadonlyArray5588<U>
  : T extends object
  ? DeepReadonlyObject5588<T>
  : T;

interface DeepReadonlyArray5588<T> extends ReadonlyArray<DeepReadonly5588<T>> {}

type DeepReadonlyObject5588<T> = {
  readonly [P in keyof T]: DeepReadonly5588<T[P]>;
};

type UnionToIntersection5588<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5588<T> = UnionToIntersection5588<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5588<T extends unknown[], V> = [...T, V];

type TuplifyUnion5588<T, L = LastOf5588<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5588<TuplifyUnion5588<Exclude<T, L>>, L>;

type DeepPartial5588<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5588<T[P]> }
  : T;

type Paths5588<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5588<K, Paths5588<T[K], Prev5588[D]>> : never }[keyof T]
  : never;

type Prev5588 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5588<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5588 {
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

type ConfigPaths5588 = Paths5588<NestedConfig5588>;

interface HeavyProps5588 {
  config: DeepPartial5588<NestedConfig5588>;
  path?: ConfigPaths5588;
}

const HeavyComponent5588 = memo(function HeavyComponent5588({ config }: HeavyProps5588) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5588) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5588 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5588: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5588.displayName = 'HeavyComponent5588';
export default HeavyComponent5588;
