'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12132<T> = T extends (infer U)[]
  ? DeepReadonlyArray12132<U>
  : T extends object
  ? DeepReadonlyObject12132<T>
  : T;

interface DeepReadonlyArray12132<T> extends ReadonlyArray<DeepReadonly12132<T>> {}

type DeepReadonlyObject12132<T> = {
  readonly [P in keyof T]: DeepReadonly12132<T[P]>;
};

type UnionToIntersection12132<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12132<T> = UnionToIntersection12132<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12132<T extends unknown[], V> = [...T, V];

type TuplifyUnion12132<T, L = LastOf12132<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12132<TuplifyUnion12132<Exclude<T, L>>, L>;

type DeepPartial12132<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12132<T[P]> }
  : T;

type Paths12132<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12132<K, Paths12132<T[K], Prev12132[D]>> : never }[keyof T]
  : never;

type Prev12132 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12132<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12132 {
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

type ConfigPaths12132 = Paths12132<NestedConfig12132>;

interface HeavyProps12132 {
  config: DeepPartial12132<NestedConfig12132>;
  path?: ConfigPaths12132;
}

const HeavyComponent12132 = memo(function HeavyComponent12132({ config }: HeavyProps12132) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12132) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12132 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12132: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12132.displayName = 'HeavyComponent12132';
export default HeavyComponent12132;
