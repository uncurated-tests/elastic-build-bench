'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly978<T> = T extends (infer U)[]
  ? DeepReadonlyArray978<U>
  : T extends object
  ? DeepReadonlyObject978<T>
  : T;

interface DeepReadonlyArray978<T> extends ReadonlyArray<DeepReadonly978<T>> {}

type DeepReadonlyObject978<T> = {
  readonly [P in keyof T]: DeepReadonly978<T[P]>;
};

type UnionToIntersection978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf978<T> = UnionToIntersection978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push978<T extends unknown[], V> = [...T, V];

type TuplifyUnion978<T, L = LastOf978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push978<TuplifyUnion978<Exclude<T, L>>, L>;

type DeepPartial978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial978<T[P]> }
  : T;

type Paths978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join978<K, Paths978<T[K], Prev978[D]>> : never }[keyof T]
  : never;

type Prev978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig978 {
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

type ConfigPaths978 = Paths978<NestedConfig978>;

interface HeavyProps978 {
  config: DeepPartial978<NestedConfig978>;
  path?: ConfigPaths978;
}

const HeavyComponent978 = memo(function HeavyComponent978({ config }: HeavyProps978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent978.displayName = 'HeavyComponent978';
export default HeavyComponent978;
