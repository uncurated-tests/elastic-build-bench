'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12516<T> = T extends (infer U)[]
  ? DeepReadonlyArray12516<U>
  : T extends object
  ? DeepReadonlyObject12516<T>
  : T;

interface DeepReadonlyArray12516<T> extends ReadonlyArray<DeepReadonly12516<T>> {}

type DeepReadonlyObject12516<T> = {
  readonly [P in keyof T]: DeepReadonly12516<T[P]>;
};

type UnionToIntersection12516<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12516<T> = UnionToIntersection12516<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12516<T extends unknown[], V> = [...T, V];

type TuplifyUnion12516<T, L = LastOf12516<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12516<TuplifyUnion12516<Exclude<T, L>>, L>;

type DeepPartial12516<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12516<T[P]> }
  : T;

type Paths12516<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12516<K, Paths12516<T[K], Prev12516[D]>> : never }[keyof T]
  : never;

type Prev12516 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12516<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12516 {
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

type ConfigPaths12516 = Paths12516<NestedConfig12516>;

interface HeavyProps12516 {
  config: DeepPartial12516<NestedConfig12516>;
  path?: ConfigPaths12516;
}

const HeavyComponent12516 = memo(function HeavyComponent12516({ config }: HeavyProps12516) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12516) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12516 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12516: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12516.displayName = 'HeavyComponent12516';
export default HeavyComponent12516;
