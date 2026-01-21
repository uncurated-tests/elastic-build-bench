'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12743<T> = T extends (infer U)[]
  ? DeepReadonlyArray12743<U>
  : T extends object
  ? DeepReadonlyObject12743<T>
  : T;

interface DeepReadonlyArray12743<T> extends ReadonlyArray<DeepReadonly12743<T>> {}

type DeepReadonlyObject12743<T> = {
  readonly [P in keyof T]: DeepReadonly12743<T[P]>;
};

type UnionToIntersection12743<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12743<T> = UnionToIntersection12743<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12743<T extends unknown[], V> = [...T, V];

type TuplifyUnion12743<T, L = LastOf12743<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12743<TuplifyUnion12743<Exclude<T, L>>, L>;

type DeepPartial12743<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12743<T[P]> }
  : T;

type Paths12743<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12743<K, Paths12743<T[K], Prev12743[D]>> : never }[keyof T]
  : never;

type Prev12743 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12743<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12743 {
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

type ConfigPaths12743 = Paths12743<NestedConfig12743>;

interface HeavyProps12743 {
  config: DeepPartial12743<NestedConfig12743>;
  path?: ConfigPaths12743;
}

const HeavyComponent12743 = memo(function HeavyComponent12743({ config }: HeavyProps12743) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12743) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12743 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12743: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12743.displayName = 'HeavyComponent12743';
export default HeavyComponent12743;
