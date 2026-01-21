'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly855<T> = T extends (infer U)[]
  ? DeepReadonlyArray855<U>
  : T extends object
  ? DeepReadonlyObject855<T>
  : T;

interface DeepReadonlyArray855<T> extends ReadonlyArray<DeepReadonly855<T>> {}

type DeepReadonlyObject855<T> = {
  readonly [P in keyof T]: DeepReadonly855<T[P]>;
};

type UnionToIntersection855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf855<T> = UnionToIntersection855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push855<T extends unknown[], V> = [...T, V];

type TuplifyUnion855<T, L = LastOf855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push855<TuplifyUnion855<Exclude<T, L>>, L>;

type DeepPartial855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial855<T[P]> }
  : T;

type Paths855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join855<K, Paths855<T[K], Prev855[D]>> : never }[keyof T]
  : never;

type Prev855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig855 {
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

type ConfigPaths855 = Paths855<NestedConfig855>;

interface HeavyProps855 {
  config: DeepPartial855<NestedConfig855>;
  path?: ConfigPaths855;
}

const HeavyComponent855 = memo(function HeavyComponent855({ config }: HeavyProps855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent855.displayName = 'HeavyComponent855';
export default HeavyComponent855;
