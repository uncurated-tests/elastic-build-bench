'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12386<T> = T extends (infer U)[]
  ? DeepReadonlyArray12386<U>
  : T extends object
  ? DeepReadonlyObject12386<T>
  : T;

interface DeepReadonlyArray12386<T> extends ReadonlyArray<DeepReadonly12386<T>> {}

type DeepReadonlyObject12386<T> = {
  readonly [P in keyof T]: DeepReadonly12386<T[P]>;
};

type UnionToIntersection12386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12386<T> = UnionToIntersection12386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12386<T extends unknown[], V> = [...T, V];

type TuplifyUnion12386<T, L = LastOf12386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12386<TuplifyUnion12386<Exclude<T, L>>, L>;

type DeepPartial12386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12386<T[P]> }
  : T;

type Paths12386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12386<K, Paths12386<T[K], Prev12386[D]>> : never }[keyof T]
  : never;

type Prev12386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12386 {
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

type ConfigPaths12386 = Paths12386<NestedConfig12386>;

interface HeavyProps12386 {
  config: DeepPartial12386<NestedConfig12386>;
  path?: ConfigPaths12386;
}

const HeavyComponent12386 = memo(function HeavyComponent12386({ config }: HeavyProps12386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12386.displayName = 'HeavyComponent12386';
export default HeavyComponent12386;
