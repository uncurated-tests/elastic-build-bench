'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12194<T> = T extends (infer U)[]
  ? DeepReadonlyArray12194<U>
  : T extends object
  ? DeepReadonlyObject12194<T>
  : T;

interface DeepReadonlyArray12194<T> extends ReadonlyArray<DeepReadonly12194<T>> {}

type DeepReadonlyObject12194<T> = {
  readonly [P in keyof T]: DeepReadonly12194<T[P]>;
};

type UnionToIntersection12194<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12194<T> = UnionToIntersection12194<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12194<T extends unknown[], V> = [...T, V];

type TuplifyUnion12194<T, L = LastOf12194<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12194<TuplifyUnion12194<Exclude<T, L>>, L>;

type DeepPartial12194<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12194<T[P]> }
  : T;

type Paths12194<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12194<K, Paths12194<T[K], Prev12194[D]>> : never }[keyof T]
  : never;

type Prev12194 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12194<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12194 {
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

type ConfigPaths12194 = Paths12194<NestedConfig12194>;

interface HeavyProps12194 {
  config: DeepPartial12194<NestedConfig12194>;
  path?: ConfigPaths12194;
}

const HeavyComponent12194 = memo(function HeavyComponent12194({ config }: HeavyProps12194) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12194) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12194 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12194: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12194.displayName = 'HeavyComponent12194';
export default HeavyComponent12194;
