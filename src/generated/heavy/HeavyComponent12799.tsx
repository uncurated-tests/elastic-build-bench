'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12799<T> = T extends (infer U)[]
  ? DeepReadonlyArray12799<U>
  : T extends object
  ? DeepReadonlyObject12799<T>
  : T;

interface DeepReadonlyArray12799<T> extends ReadonlyArray<DeepReadonly12799<T>> {}

type DeepReadonlyObject12799<T> = {
  readonly [P in keyof T]: DeepReadonly12799<T[P]>;
};

type UnionToIntersection12799<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12799<T> = UnionToIntersection12799<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12799<T extends unknown[], V> = [...T, V];

type TuplifyUnion12799<T, L = LastOf12799<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12799<TuplifyUnion12799<Exclude<T, L>>, L>;

type DeepPartial12799<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12799<T[P]> }
  : T;

type Paths12799<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12799<K, Paths12799<T[K], Prev12799[D]>> : never }[keyof T]
  : never;

type Prev12799 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12799<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12799 {
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

type ConfigPaths12799 = Paths12799<NestedConfig12799>;

interface HeavyProps12799 {
  config: DeepPartial12799<NestedConfig12799>;
  path?: ConfigPaths12799;
}

const HeavyComponent12799 = memo(function HeavyComponent12799({ config }: HeavyProps12799) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12799) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12799 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12799: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12799.displayName = 'HeavyComponent12799';
export default HeavyComponent12799;
