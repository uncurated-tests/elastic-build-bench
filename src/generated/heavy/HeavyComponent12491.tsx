'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12491<T> = T extends (infer U)[]
  ? DeepReadonlyArray12491<U>
  : T extends object
  ? DeepReadonlyObject12491<T>
  : T;

interface DeepReadonlyArray12491<T> extends ReadonlyArray<DeepReadonly12491<T>> {}

type DeepReadonlyObject12491<T> = {
  readonly [P in keyof T]: DeepReadonly12491<T[P]>;
};

type UnionToIntersection12491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12491<T> = UnionToIntersection12491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12491<T extends unknown[], V> = [...T, V];

type TuplifyUnion12491<T, L = LastOf12491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12491<TuplifyUnion12491<Exclude<T, L>>, L>;

type DeepPartial12491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12491<T[P]> }
  : T;

type Paths12491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12491<K, Paths12491<T[K], Prev12491[D]>> : never }[keyof T]
  : never;

type Prev12491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12491 {
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

type ConfigPaths12491 = Paths12491<NestedConfig12491>;

interface HeavyProps12491 {
  config: DeepPartial12491<NestedConfig12491>;
  path?: ConfigPaths12491;
}

const HeavyComponent12491 = memo(function HeavyComponent12491({ config }: HeavyProps12491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12491.displayName = 'HeavyComponent12491';
export default HeavyComponent12491;
