'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12873<T> = T extends (infer U)[]
  ? DeepReadonlyArray12873<U>
  : T extends object
  ? DeepReadonlyObject12873<T>
  : T;

interface DeepReadonlyArray12873<T> extends ReadonlyArray<DeepReadonly12873<T>> {}

type DeepReadonlyObject12873<T> = {
  readonly [P in keyof T]: DeepReadonly12873<T[P]>;
};

type UnionToIntersection12873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12873<T> = UnionToIntersection12873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12873<T extends unknown[], V> = [...T, V];

type TuplifyUnion12873<T, L = LastOf12873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12873<TuplifyUnion12873<Exclude<T, L>>, L>;

type DeepPartial12873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12873<T[P]> }
  : T;

type Paths12873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12873<K, Paths12873<T[K], Prev12873[D]>> : never }[keyof T]
  : never;

type Prev12873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12873 {
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

type ConfigPaths12873 = Paths12873<NestedConfig12873>;

interface HeavyProps12873 {
  config: DeepPartial12873<NestedConfig12873>;
  path?: ConfigPaths12873;
}

const HeavyComponent12873 = memo(function HeavyComponent12873({ config }: HeavyProps12873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12873.displayName = 'HeavyComponent12873';
export default HeavyComponent12873;
