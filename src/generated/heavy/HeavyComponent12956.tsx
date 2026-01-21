'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12956<T> = T extends (infer U)[]
  ? DeepReadonlyArray12956<U>
  : T extends object
  ? DeepReadonlyObject12956<T>
  : T;

interface DeepReadonlyArray12956<T> extends ReadonlyArray<DeepReadonly12956<T>> {}

type DeepReadonlyObject12956<T> = {
  readonly [P in keyof T]: DeepReadonly12956<T[P]>;
};

type UnionToIntersection12956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12956<T> = UnionToIntersection12956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12956<T extends unknown[], V> = [...T, V];

type TuplifyUnion12956<T, L = LastOf12956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12956<TuplifyUnion12956<Exclude<T, L>>, L>;

type DeepPartial12956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12956<T[P]> }
  : T;

type Paths12956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12956<K, Paths12956<T[K], Prev12956[D]>> : never }[keyof T]
  : never;

type Prev12956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12956 {
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

type ConfigPaths12956 = Paths12956<NestedConfig12956>;

interface HeavyProps12956 {
  config: DeepPartial12956<NestedConfig12956>;
  path?: ConfigPaths12956;
}

const HeavyComponent12956 = memo(function HeavyComponent12956({ config }: HeavyProps12956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12956.displayName = 'HeavyComponent12956';
export default HeavyComponent12956;
