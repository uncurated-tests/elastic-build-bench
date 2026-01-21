'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12475<T> = T extends (infer U)[]
  ? DeepReadonlyArray12475<U>
  : T extends object
  ? DeepReadonlyObject12475<T>
  : T;

interface DeepReadonlyArray12475<T> extends ReadonlyArray<DeepReadonly12475<T>> {}

type DeepReadonlyObject12475<T> = {
  readonly [P in keyof T]: DeepReadonly12475<T[P]>;
};

type UnionToIntersection12475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12475<T> = UnionToIntersection12475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12475<T extends unknown[], V> = [...T, V];

type TuplifyUnion12475<T, L = LastOf12475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12475<TuplifyUnion12475<Exclude<T, L>>, L>;

type DeepPartial12475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12475<T[P]> }
  : T;

type Paths12475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12475<K, Paths12475<T[K], Prev12475[D]>> : never }[keyof T]
  : never;

type Prev12475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12475 {
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

type ConfigPaths12475 = Paths12475<NestedConfig12475>;

interface HeavyProps12475 {
  config: DeepPartial12475<NestedConfig12475>;
  path?: ConfigPaths12475;
}

const HeavyComponent12475 = memo(function HeavyComponent12475({ config }: HeavyProps12475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12475.displayName = 'HeavyComponent12475';
export default HeavyComponent12475;
