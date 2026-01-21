'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12757<T> = T extends (infer U)[]
  ? DeepReadonlyArray12757<U>
  : T extends object
  ? DeepReadonlyObject12757<T>
  : T;

interface DeepReadonlyArray12757<T> extends ReadonlyArray<DeepReadonly12757<T>> {}

type DeepReadonlyObject12757<T> = {
  readonly [P in keyof T]: DeepReadonly12757<T[P]>;
};

type UnionToIntersection12757<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12757<T> = UnionToIntersection12757<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12757<T extends unknown[], V> = [...T, V];

type TuplifyUnion12757<T, L = LastOf12757<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12757<TuplifyUnion12757<Exclude<T, L>>, L>;

type DeepPartial12757<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12757<T[P]> }
  : T;

type Paths12757<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12757<K, Paths12757<T[K], Prev12757[D]>> : never }[keyof T]
  : never;

type Prev12757 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12757<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12757 {
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

type ConfigPaths12757 = Paths12757<NestedConfig12757>;

interface HeavyProps12757 {
  config: DeepPartial12757<NestedConfig12757>;
  path?: ConfigPaths12757;
}

const HeavyComponent12757 = memo(function HeavyComponent12757({ config }: HeavyProps12757) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12757) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12757 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12757: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12757.displayName = 'HeavyComponent12757';
export default HeavyComponent12757;
