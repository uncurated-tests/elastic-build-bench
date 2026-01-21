'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12417<T> = T extends (infer U)[]
  ? DeepReadonlyArray12417<U>
  : T extends object
  ? DeepReadonlyObject12417<T>
  : T;

interface DeepReadonlyArray12417<T> extends ReadonlyArray<DeepReadonly12417<T>> {}

type DeepReadonlyObject12417<T> = {
  readonly [P in keyof T]: DeepReadonly12417<T[P]>;
};

type UnionToIntersection12417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12417<T> = UnionToIntersection12417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12417<T extends unknown[], V> = [...T, V];

type TuplifyUnion12417<T, L = LastOf12417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12417<TuplifyUnion12417<Exclude<T, L>>, L>;

type DeepPartial12417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12417<T[P]> }
  : T;

type Paths12417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12417<K, Paths12417<T[K], Prev12417[D]>> : never }[keyof T]
  : never;

type Prev12417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12417 {
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

type ConfigPaths12417 = Paths12417<NestedConfig12417>;

interface HeavyProps12417 {
  config: DeepPartial12417<NestedConfig12417>;
  path?: ConfigPaths12417;
}

const HeavyComponent12417 = memo(function HeavyComponent12417({ config }: HeavyProps12417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12417.displayName = 'HeavyComponent12417';
export default HeavyComponent12417;
