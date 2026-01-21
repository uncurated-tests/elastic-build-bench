'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12766<T> = T extends (infer U)[]
  ? DeepReadonlyArray12766<U>
  : T extends object
  ? DeepReadonlyObject12766<T>
  : T;

interface DeepReadonlyArray12766<T> extends ReadonlyArray<DeepReadonly12766<T>> {}

type DeepReadonlyObject12766<T> = {
  readonly [P in keyof T]: DeepReadonly12766<T[P]>;
};

type UnionToIntersection12766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12766<T> = UnionToIntersection12766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12766<T extends unknown[], V> = [...T, V];

type TuplifyUnion12766<T, L = LastOf12766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12766<TuplifyUnion12766<Exclude<T, L>>, L>;

type DeepPartial12766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12766<T[P]> }
  : T;

type Paths12766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12766<K, Paths12766<T[K], Prev12766[D]>> : never }[keyof T]
  : never;

type Prev12766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12766 {
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

type ConfigPaths12766 = Paths12766<NestedConfig12766>;

interface HeavyProps12766 {
  config: DeepPartial12766<NestedConfig12766>;
  path?: ConfigPaths12766;
}

const HeavyComponent12766 = memo(function HeavyComponent12766({ config }: HeavyProps12766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12766.displayName = 'HeavyComponent12766';
export default HeavyComponent12766;
