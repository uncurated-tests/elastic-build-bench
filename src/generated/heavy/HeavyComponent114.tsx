'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly114<T> = T extends (infer U)[]
  ? DeepReadonlyArray114<U>
  : T extends object
  ? DeepReadonlyObject114<T>
  : T;

interface DeepReadonlyArray114<T> extends ReadonlyArray<DeepReadonly114<T>> {}

type DeepReadonlyObject114<T> = {
  readonly [P in keyof T]: DeepReadonly114<T[P]>;
};

type UnionToIntersection114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf114<T> = UnionToIntersection114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push114<T extends unknown[], V> = [...T, V];

type TuplifyUnion114<T, L = LastOf114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push114<TuplifyUnion114<Exclude<T, L>>, L>;

type DeepPartial114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial114<T[P]> }
  : T;

type Paths114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join114<K, Paths114<T[K], Prev114[D]>> : never }[keyof T]
  : never;

type Prev114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig114 {
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

type ConfigPaths114 = Paths114<NestedConfig114>;

interface HeavyProps114 {
  config: DeepPartial114<NestedConfig114>;
  path?: ConfigPaths114;
}

const HeavyComponent114 = memo(function HeavyComponent114({ config }: HeavyProps114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent114.displayName = 'HeavyComponent114';
export default HeavyComponent114;
