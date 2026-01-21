'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12493<T> = T extends (infer U)[]
  ? DeepReadonlyArray12493<U>
  : T extends object
  ? DeepReadonlyObject12493<T>
  : T;

interface DeepReadonlyArray12493<T> extends ReadonlyArray<DeepReadonly12493<T>> {}

type DeepReadonlyObject12493<T> = {
  readonly [P in keyof T]: DeepReadonly12493<T[P]>;
};

type UnionToIntersection12493<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12493<T> = UnionToIntersection12493<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12493<T extends unknown[], V> = [...T, V];

type TuplifyUnion12493<T, L = LastOf12493<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12493<TuplifyUnion12493<Exclude<T, L>>, L>;

type DeepPartial12493<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12493<T[P]> }
  : T;

type Paths12493<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12493<K, Paths12493<T[K], Prev12493[D]>> : never }[keyof T]
  : never;

type Prev12493 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12493<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12493 {
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

type ConfigPaths12493 = Paths12493<NestedConfig12493>;

interface HeavyProps12493 {
  config: DeepPartial12493<NestedConfig12493>;
  path?: ConfigPaths12493;
}

const HeavyComponent12493 = memo(function HeavyComponent12493({ config }: HeavyProps12493) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12493) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12493 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12493: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12493.displayName = 'HeavyComponent12493';
export default HeavyComponent12493;
