'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12085<T> = T extends (infer U)[]
  ? DeepReadonlyArray12085<U>
  : T extends object
  ? DeepReadonlyObject12085<T>
  : T;

interface DeepReadonlyArray12085<T> extends ReadonlyArray<DeepReadonly12085<T>> {}

type DeepReadonlyObject12085<T> = {
  readonly [P in keyof T]: DeepReadonly12085<T[P]>;
};

type UnionToIntersection12085<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12085<T> = UnionToIntersection12085<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12085<T extends unknown[], V> = [...T, V];

type TuplifyUnion12085<T, L = LastOf12085<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12085<TuplifyUnion12085<Exclude<T, L>>, L>;

type DeepPartial12085<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12085<T[P]> }
  : T;

type Paths12085<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12085<K, Paths12085<T[K], Prev12085[D]>> : never }[keyof T]
  : never;

type Prev12085 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12085<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12085 {
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

type ConfigPaths12085 = Paths12085<NestedConfig12085>;

interface HeavyProps12085 {
  config: DeepPartial12085<NestedConfig12085>;
  path?: ConfigPaths12085;
}

const HeavyComponent12085 = memo(function HeavyComponent12085({ config }: HeavyProps12085) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12085) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12085 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12085: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12085.displayName = 'HeavyComponent12085';
export default HeavyComponent12085;
