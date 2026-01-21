'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12408<T> = T extends (infer U)[]
  ? DeepReadonlyArray12408<U>
  : T extends object
  ? DeepReadonlyObject12408<T>
  : T;

interface DeepReadonlyArray12408<T> extends ReadonlyArray<DeepReadonly12408<T>> {}

type DeepReadonlyObject12408<T> = {
  readonly [P in keyof T]: DeepReadonly12408<T[P]>;
};

type UnionToIntersection12408<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12408<T> = UnionToIntersection12408<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12408<T extends unknown[], V> = [...T, V];

type TuplifyUnion12408<T, L = LastOf12408<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12408<TuplifyUnion12408<Exclude<T, L>>, L>;

type DeepPartial12408<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12408<T[P]> }
  : T;

type Paths12408<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12408<K, Paths12408<T[K], Prev12408[D]>> : never }[keyof T]
  : never;

type Prev12408 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12408<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12408 {
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

type ConfigPaths12408 = Paths12408<NestedConfig12408>;

interface HeavyProps12408 {
  config: DeepPartial12408<NestedConfig12408>;
  path?: ConfigPaths12408;
}

const HeavyComponent12408 = memo(function HeavyComponent12408({ config }: HeavyProps12408) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12408) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12408 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12408: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12408.displayName = 'HeavyComponent12408';
export default HeavyComponent12408;
