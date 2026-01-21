'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12197<T> = T extends (infer U)[]
  ? DeepReadonlyArray12197<U>
  : T extends object
  ? DeepReadonlyObject12197<T>
  : T;

interface DeepReadonlyArray12197<T> extends ReadonlyArray<DeepReadonly12197<T>> {}

type DeepReadonlyObject12197<T> = {
  readonly [P in keyof T]: DeepReadonly12197<T[P]>;
};

type UnionToIntersection12197<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12197<T> = UnionToIntersection12197<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12197<T extends unknown[], V> = [...T, V];

type TuplifyUnion12197<T, L = LastOf12197<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12197<TuplifyUnion12197<Exclude<T, L>>, L>;

type DeepPartial12197<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12197<T[P]> }
  : T;

type Paths12197<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12197<K, Paths12197<T[K], Prev12197[D]>> : never }[keyof T]
  : never;

type Prev12197 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12197<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12197 {
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

type ConfigPaths12197 = Paths12197<NestedConfig12197>;

interface HeavyProps12197 {
  config: DeepPartial12197<NestedConfig12197>;
  path?: ConfigPaths12197;
}

const HeavyComponent12197 = memo(function HeavyComponent12197({ config }: HeavyProps12197) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12197) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12197 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12197: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12197.displayName = 'HeavyComponent12197';
export default HeavyComponent12197;
