'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12270<T> = T extends (infer U)[]
  ? DeepReadonlyArray12270<U>
  : T extends object
  ? DeepReadonlyObject12270<T>
  : T;

interface DeepReadonlyArray12270<T> extends ReadonlyArray<DeepReadonly12270<T>> {}

type DeepReadonlyObject12270<T> = {
  readonly [P in keyof T]: DeepReadonly12270<T[P]>;
};

type UnionToIntersection12270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12270<T> = UnionToIntersection12270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12270<T extends unknown[], V> = [...T, V];

type TuplifyUnion12270<T, L = LastOf12270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12270<TuplifyUnion12270<Exclude<T, L>>, L>;

type DeepPartial12270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12270<T[P]> }
  : T;

type Paths12270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12270<K, Paths12270<T[K], Prev12270[D]>> : never }[keyof T]
  : never;

type Prev12270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12270 {
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

type ConfigPaths12270 = Paths12270<NestedConfig12270>;

interface HeavyProps12270 {
  config: DeepPartial12270<NestedConfig12270>;
  path?: ConfigPaths12270;
}

const HeavyComponent12270 = memo(function HeavyComponent12270({ config }: HeavyProps12270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12270.displayName = 'HeavyComponent12270';
export default HeavyComponent12270;
