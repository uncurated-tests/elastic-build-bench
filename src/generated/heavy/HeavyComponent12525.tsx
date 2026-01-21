'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12525<T> = T extends (infer U)[]
  ? DeepReadonlyArray12525<U>
  : T extends object
  ? DeepReadonlyObject12525<T>
  : T;

interface DeepReadonlyArray12525<T> extends ReadonlyArray<DeepReadonly12525<T>> {}

type DeepReadonlyObject12525<T> = {
  readonly [P in keyof T]: DeepReadonly12525<T[P]>;
};

type UnionToIntersection12525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12525<T> = UnionToIntersection12525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12525<T extends unknown[], V> = [...T, V];

type TuplifyUnion12525<T, L = LastOf12525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12525<TuplifyUnion12525<Exclude<T, L>>, L>;

type DeepPartial12525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12525<T[P]> }
  : T;

type Paths12525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12525<K, Paths12525<T[K], Prev12525[D]>> : never }[keyof T]
  : never;

type Prev12525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12525 {
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

type ConfigPaths12525 = Paths12525<NestedConfig12525>;

interface HeavyProps12525 {
  config: DeepPartial12525<NestedConfig12525>;
  path?: ConfigPaths12525;
}

const HeavyComponent12525 = memo(function HeavyComponent12525({ config }: HeavyProps12525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12525.displayName = 'HeavyComponent12525';
export default HeavyComponent12525;
