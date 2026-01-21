'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5823<T> = T extends (infer U)[]
  ? DeepReadonlyArray5823<U>
  : T extends object
  ? DeepReadonlyObject5823<T>
  : T;

interface DeepReadonlyArray5823<T> extends ReadonlyArray<DeepReadonly5823<T>> {}

type DeepReadonlyObject5823<T> = {
  readonly [P in keyof T]: DeepReadonly5823<T[P]>;
};

type UnionToIntersection5823<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5823<T> = UnionToIntersection5823<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5823<T extends unknown[], V> = [...T, V];

type TuplifyUnion5823<T, L = LastOf5823<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5823<TuplifyUnion5823<Exclude<T, L>>, L>;

type DeepPartial5823<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5823<T[P]> }
  : T;

type Paths5823<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5823<K, Paths5823<T[K], Prev5823[D]>> : never }[keyof T]
  : never;

type Prev5823 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5823<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5823 {
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

type ConfigPaths5823 = Paths5823<NestedConfig5823>;

interface HeavyProps5823 {
  config: DeepPartial5823<NestedConfig5823>;
  path?: ConfigPaths5823;
}

const HeavyComponent5823 = memo(function HeavyComponent5823({ config }: HeavyProps5823) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5823) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5823 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5823: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5823.displayName = 'HeavyComponent5823';
export default HeavyComponent5823;
