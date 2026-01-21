'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5743<T> = T extends (infer U)[]
  ? DeepReadonlyArray5743<U>
  : T extends object
  ? DeepReadonlyObject5743<T>
  : T;

interface DeepReadonlyArray5743<T> extends ReadonlyArray<DeepReadonly5743<T>> {}

type DeepReadonlyObject5743<T> = {
  readonly [P in keyof T]: DeepReadonly5743<T[P]>;
};

type UnionToIntersection5743<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5743<T> = UnionToIntersection5743<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5743<T extends unknown[], V> = [...T, V];

type TuplifyUnion5743<T, L = LastOf5743<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5743<TuplifyUnion5743<Exclude<T, L>>, L>;

type DeepPartial5743<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5743<T[P]> }
  : T;

type Paths5743<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5743<K, Paths5743<T[K], Prev5743[D]>> : never }[keyof T]
  : never;

type Prev5743 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5743<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5743 {
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

type ConfigPaths5743 = Paths5743<NestedConfig5743>;

interface HeavyProps5743 {
  config: DeepPartial5743<NestedConfig5743>;
  path?: ConfigPaths5743;
}

const HeavyComponent5743 = memo(function HeavyComponent5743({ config }: HeavyProps5743) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5743) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5743 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5743: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5743.displayName = 'HeavyComponent5743';
export default HeavyComponent5743;
