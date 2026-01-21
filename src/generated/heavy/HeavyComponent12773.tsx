'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12773<T> = T extends (infer U)[]
  ? DeepReadonlyArray12773<U>
  : T extends object
  ? DeepReadonlyObject12773<T>
  : T;

interface DeepReadonlyArray12773<T> extends ReadonlyArray<DeepReadonly12773<T>> {}

type DeepReadonlyObject12773<T> = {
  readonly [P in keyof T]: DeepReadonly12773<T[P]>;
};

type UnionToIntersection12773<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12773<T> = UnionToIntersection12773<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12773<T extends unknown[], V> = [...T, V];

type TuplifyUnion12773<T, L = LastOf12773<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12773<TuplifyUnion12773<Exclude<T, L>>, L>;

type DeepPartial12773<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12773<T[P]> }
  : T;

type Paths12773<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12773<K, Paths12773<T[K], Prev12773[D]>> : never }[keyof T]
  : never;

type Prev12773 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12773<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12773 {
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

type ConfigPaths12773 = Paths12773<NestedConfig12773>;

interface HeavyProps12773 {
  config: DeepPartial12773<NestedConfig12773>;
  path?: ConfigPaths12773;
}

const HeavyComponent12773 = memo(function HeavyComponent12773({ config }: HeavyProps12773) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12773) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12773 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12773: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12773.displayName = 'HeavyComponent12773';
export default HeavyComponent12773;
