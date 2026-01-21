'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12667<T> = T extends (infer U)[]
  ? DeepReadonlyArray12667<U>
  : T extends object
  ? DeepReadonlyObject12667<T>
  : T;

interface DeepReadonlyArray12667<T> extends ReadonlyArray<DeepReadonly12667<T>> {}

type DeepReadonlyObject12667<T> = {
  readonly [P in keyof T]: DeepReadonly12667<T[P]>;
};

type UnionToIntersection12667<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12667<T> = UnionToIntersection12667<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12667<T extends unknown[], V> = [...T, V];

type TuplifyUnion12667<T, L = LastOf12667<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12667<TuplifyUnion12667<Exclude<T, L>>, L>;

type DeepPartial12667<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12667<T[P]> }
  : T;

type Paths12667<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12667<K, Paths12667<T[K], Prev12667[D]>> : never }[keyof T]
  : never;

type Prev12667 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12667<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12667 {
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

type ConfigPaths12667 = Paths12667<NestedConfig12667>;

interface HeavyProps12667 {
  config: DeepPartial12667<NestedConfig12667>;
  path?: ConfigPaths12667;
}

const HeavyComponent12667 = memo(function HeavyComponent12667({ config }: HeavyProps12667) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12667) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12667 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12667: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12667.displayName = 'HeavyComponent12667';
export default HeavyComponent12667;
