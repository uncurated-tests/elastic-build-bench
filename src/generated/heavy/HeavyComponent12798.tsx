'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12798<T> = T extends (infer U)[]
  ? DeepReadonlyArray12798<U>
  : T extends object
  ? DeepReadonlyObject12798<T>
  : T;

interface DeepReadonlyArray12798<T> extends ReadonlyArray<DeepReadonly12798<T>> {}

type DeepReadonlyObject12798<T> = {
  readonly [P in keyof T]: DeepReadonly12798<T[P]>;
};

type UnionToIntersection12798<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12798<T> = UnionToIntersection12798<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12798<T extends unknown[], V> = [...T, V];

type TuplifyUnion12798<T, L = LastOf12798<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12798<TuplifyUnion12798<Exclude<T, L>>, L>;

type DeepPartial12798<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12798<T[P]> }
  : T;

type Paths12798<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12798<K, Paths12798<T[K], Prev12798[D]>> : never }[keyof T]
  : never;

type Prev12798 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12798<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12798 {
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

type ConfigPaths12798 = Paths12798<NestedConfig12798>;

interface HeavyProps12798 {
  config: DeepPartial12798<NestedConfig12798>;
  path?: ConfigPaths12798;
}

const HeavyComponent12798 = memo(function HeavyComponent12798({ config }: HeavyProps12798) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12798) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12798 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12798: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12798.displayName = 'HeavyComponent12798';
export default HeavyComponent12798;
