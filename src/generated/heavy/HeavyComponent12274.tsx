'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12274<T> = T extends (infer U)[]
  ? DeepReadonlyArray12274<U>
  : T extends object
  ? DeepReadonlyObject12274<T>
  : T;

interface DeepReadonlyArray12274<T> extends ReadonlyArray<DeepReadonly12274<T>> {}

type DeepReadonlyObject12274<T> = {
  readonly [P in keyof T]: DeepReadonly12274<T[P]>;
};

type UnionToIntersection12274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12274<T> = UnionToIntersection12274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12274<T extends unknown[], V> = [...T, V];

type TuplifyUnion12274<T, L = LastOf12274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12274<TuplifyUnion12274<Exclude<T, L>>, L>;

type DeepPartial12274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12274<T[P]> }
  : T;

type Paths12274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12274<K, Paths12274<T[K], Prev12274[D]>> : never }[keyof T]
  : never;

type Prev12274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12274 {
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

type ConfigPaths12274 = Paths12274<NestedConfig12274>;

interface HeavyProps12274 {
  config: DeepPartial12274<NestedConfig12274>;
  path?: ConfigPaths12274;
}

const HeavyComponent12274 = memo(function HeavyComponent12274({ config }: HeavyProps12274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12274.displayName = 'HeavyComponent12274';
export default HeavyComponent12274;
