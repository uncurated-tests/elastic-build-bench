'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12293<T> = T extends (infer U)[]
  ? DeepReadonlyArray12293<U>
  : T extends object
  ? DeepReadonlyObject12293<T>
  : T;

interface DeepReadonlyArray12293<T> extends ReadonlyArray<DeepReadonly12293<T>> {}

type DeepReadonlyObject12293<T> = {
  readonly [P in keyof T]: DeepReadonly12293<T[P]>;
};

type UnionToIntersection12293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12293<T> = UnionToIntersection12293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12293<T extends unknown[], V> = [...T, V];

type TuplifyUnion12293<T, L = LastOf12293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12293<TuplifyUnion12293<Exclude<T, L>>, L>;

type DeepPartial12293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12293<T[P]> }
  : T;

type Paths12293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12293<K, Paths12293<T[K], Prev12293[D]>> : never }[keyof T]
  : never;

type Prev12293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12293 {
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

type ConfigPaths12293 = Paths12293<NestedConfig12293>;

interface HeavyProps12293 {
  config: DeepPartial12293<NestedConfig12293>;
  path?: ConfigPaths12293;
}

const HeavyComponent12293 = memo(function HeavyComponent12293({ config }: HeavyProps12293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12293.displayName = 'HeavyComponent12293';
export default HeavyComponent12293;
