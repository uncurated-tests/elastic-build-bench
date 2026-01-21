'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly480<T> = T extends (infer U)[]
  ? DeepReadonlyArray480<U>
  : T extends object
  ? DeepReadonlyObject480<T>
  : T;

interface DeepReadonlyArray480<T> extends ReadonlyArray<DeepReadonly480<T>> {}

type DeepReadonlyObject480<T> = {
  readonly [P in keyof T]: DeepReadonly480<T[P]>;
};

type UnionToIntersection480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf480<T> = UnionToIntersection480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push480<T extends unknown[], V> = [...T, V];

type TuplifyUnion480<T, L = LastOf480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push480<TuplifyUnion480<Exclude<T, L>>, L>;

type DeepPartial480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial480<T[P]> }
  : T;

type Paths480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join480<K, Paths480<T[K], Prev480[D]>> : never }[keyof T]
  : never;

type Prev480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig480 {
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

type ConfigPaths480 = Paths480<NestedConfig480>;

interface HeavyProps480 {
  config: DeepPartial480<NestedConfig480>;
  path?: ConfigPaths480;
}

const HeavyComponent480 = memo(function HeavyComponent480({ config }: HeavyProps480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent480.displayName = 'HeavyComponent480';
export default HeavyComponent480;
