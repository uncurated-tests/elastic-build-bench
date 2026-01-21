'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12015<T> = T extends (infer U)[]
  ? DeepReadonlyArray12015<U>
  : T extends object
  ? DeepReadonlyObject12015<T>
  : T;

interface DeepReadonlyArray12015<T> extends ReadonlyArray<DeepReadonly12015<T>> {}

type DeepReadonlyObject12015<T> = {
  readonly [P in keyof T]: DeepReadonly12015<T[P]>;
};

type UnionToIntersection12015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12015<T> = UnionToIntersection12015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12015<T extends unknown[], V> = [...T, V];

type TuplifyUnion12015<T, L = LastOf12015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12015<TuplifyUnion12015<Exclude<T, L>>, L>;

type DeepPartial12015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12015<T[P]> }
  : T;

type Paths12015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12015<K, Paths12015<T[K], Prev12015[D]>> : never }[keyof T]
  : never;

type Prev12015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12015 {
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

type ConfigPaths12015 = Paths12015<NestedConfig12015>;

interface HeavyProps12015 {
  config: DeepPartial12015<NestedConfig12015>;
  path?: ConfigPaths12015;
}

const HeavyComponent12015 = memo(function HeavyComponent12015({ config }: HeavyProps12015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12015.displayName = 'HeavyComponent12015';
export default HeavyComponent12015;
