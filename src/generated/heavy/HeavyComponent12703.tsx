'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12703<T> = T extends (infer U)[]
  ? DeepReadonlyArray12703<U>
  : T extends object
  ? DeepReadonlyObject12703<T>
  : T;

interface DeepReadonlyArray12703<T> extends ReadonlyArray<DeepReadonly12703<T>> {}

type DeepReadonlyObject12703<T> = {
  readonly [P in keyof T]: DeepReadonly12703<T[P]>;
};

type UnionToIntersection12703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12703<T> = UnionToIntersection12703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12703<T extends unknown[], V> = [...T, V];

type TuplifyUnion12703<T, L = LastOf12703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12703<TuplifyUnion12703<Exclude<T, L>>, L>;

type DeepPartial12703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12703<T[P]> }
  : T;

type Paths12703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12703<K, Paths12703<T[K], Prev12703[D]>> : never }[keyof T]
  : never;

type Prev12703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12703 {
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

type ConfigPaths12703 = Paths12703<NestedConfig12703>;

interface HeavyProps12703 {
  config: DeepPartial12703<NestedConfig12703>;
  path?: ConfigPaths12703;
}

const HeavyComponent12703 = memo(function HeavyComponent12703({ config }: HeavyProps12703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12703.displayName = 'HeavyComponent12703';
export default HeavyComponent12703;
