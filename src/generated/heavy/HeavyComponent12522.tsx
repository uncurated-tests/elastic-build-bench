'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12522<T> = T extends (infer U)[]
  ? DeepReadonlyArray12522<U>
  : T extends object
  ? DeepReadonlyObject12522<T>
  : T;

interface DeepReadonlyArray12522<T> extends ReadonlyArray<DeepReadonly12522<T>> {}

type DeepReadonlyObject12522<T> = {
  readonly [P in keyof T]: DeepReadonly12522<T[P]>;
};

type UnionToIntersection12522<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12522<T> = UnionToIntersection12522<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12522<T extends unknown[], V> = [...T, V];

type TuplifyUnion12522<T, L = LastOf12522<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12522<TuplifyUnion12522<Exclude<T, L>>, L>;

type DeepPartial12522<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12522<T[P]> }
  : T;

type Paths12522<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12522<K, Paths12522<T[K], Prev12522[D]>> : never }[keyof T]
  : never;

type Prev12522 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12522<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12522 {
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

type ConfigPaths12522 = Paths12522<NestedConfig12522>;

interface HeavyProps12522 {
  config: DeepPartial12522<NestedConfig12522>;
  path?: ConfigPaths12522;
}

const HeavyComponent12522 = memo(function HeavyComponent12522({ config }: HeavyProps12522) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12522) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12522 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12522: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12522.displayName = 'HeavyComponent12522';
export default HeavyComponent12522;
