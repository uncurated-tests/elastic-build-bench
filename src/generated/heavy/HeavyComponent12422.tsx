'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12422<T> = T extends (infer U)[]
  ? DeepReadonlyArray12422<U>
  : T extends object
  ? DeepReadonlyObject12422<T>
  : T;

interface DeepReadonlyArray12422<T> extends ReadonlyArray<DeepReadonly12422<T>> {}

type DeepReadonlyObject12422<T> = {
  readonly [P in keyof T]: DeepReadonly12422<T[P]>;
};

type UnionToIntersection12422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12422<T> = UnionToIntersection12422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12422<T extends unknown[], V> = [...T, V];

type TuplifyUnion12422<T, L = LastOf12422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12422<TuplifyUnion12422<Exclude<T, L>>, L>;

type DeepPartial12422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12422<T[P]> }
  : T;

type Paths12422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12422<K, Paths12422<T[K], Prev12422[D]>> : never }[keyof T]
  : never;

type Prev12422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12422 {
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

type ConfigPaths12422 = Paths12422<NestedConfig12422>;

interface HeavyProps12422 {
  config: DeepPartial12422<NestedConfig12422>;
  path?: ConfigPaths12422;
}

const HeavyComponent12422 = memo(function HeavyComponent12422({ config }: HeavyProps12422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12422.displayName = 'HeavyComponent12422';
export default HeavyComponent12422;
