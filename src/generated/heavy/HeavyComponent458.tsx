'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly458<T> = T extends (infer U)[]
  ? DeepReadonlyArray458<U>
  : T extends object
  ? DeepReadonlyObject458<T>
  : T;

interface DeepReadonlyArray458<T> extends ReadonlyArray<DeepReadonly458<T>> {}

type DeepReadonlyObject458<T> = {
  readonly [P in keyof T]: DeepReadonly458<T[P]>;
};

type UnionToIntersection458<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf458<T> = UnionToIntersection458<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push458<T extends unknown[], V> = [...T, V];

type TuplifyUnion458<T, L = LastOf458<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push458<TuplifyUnion458<Exclude<T, L>>, L>;

type DeepPartial458<T> = T extends object
  ? { [P in keyof T]?: DeepPartial458<T[P]> }
  : T;

type Paths458<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join458<K, Paths458<T[K], Prev458[D]>> : never }[keyof T]
  : never;

type Prev458 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join458<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig458 {
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

type ConfigPaths458 = Paths458<NestedConfig458>;

interface HeavyProps458 {
  config: DeepPartial458<NestedConfig458>;
  path?: ConfigPaths458;
}

const HeavyComponent458 = memo(function HeavyComponent458({ config }: HeavyProps458) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 458) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-458 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H458: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent458.displayName = 'HeavyComponent458';
export default HeavyComponent458;
