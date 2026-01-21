'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12124<T> = T extends (infer U)[]
  ? DeepReadonlyArray12124<U>
  : T extends object
  ? DeepReadonlyObject12124<T>
  : T;

interface DeepReadonlyArray12124<T> extends ReadonlyArray<DeepReadonly12124<T>> {}

type DeepReadonlyObject12124<T> = {
  readonly [P in keyof T]: DeepReadonly12124<T[P]>;
};

type UnionToIntersection12124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12124<T> = UnionToIntersection12124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12124<T extends unknown[], V> = [...T, V];

type TuplifyUnion12124<T, L = LastOf12124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12124<TuplifyUnion12124<Exclude<T, L>>, L>;

type DeepPartial12124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12124<T[P]> }
  : T;

type Paths12124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12124<K, Paths12124<T[K], Prev12124[D]>> : never }[keyof T]
  : never;

type Prev12124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12124 {
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

type ConfigPaths12124 = Paths12124<NestedConfig12124>;

interface HeavyProps12124 {
  config: DeepPartial12124<NestedConfig12124>;
  path?: ConfigPaths12124;
}

const HeavyComponent12124 = memo(function HeavyComponent12124({ config }: HeavyProps12124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12124.displayName = 'HeavyComponent12124';
export default HeavyComponent12124;
