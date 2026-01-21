'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12256<T> = T extends (infer U)[]
  ? DeepReadonlyArray12256<U>
  : T extends object
  ? DeepReadonlyObject12256<T>
  : T;

interface DeepReadonlyArray12256<T> extends ReadonlyArray<DeepReadonly12256<T>> {}

type DeepReadonlyObject12256<T> = {
  readonly [P in keyof T]: DeepReadonly12256<T[P]>;
};

type UnionToIntersection12256<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12256<T> = UnionToIntersection12256<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12256<T extends unknown[], V> = [...T, V];

type TuplifyUnion12256<T, L = LastOf12256<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12256<TuplifyUnion12256<Exclude<T, L>>, L>;

type DeepPartial12256<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12256<T[P]> }
  : T;

type Paths12256<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12256<K, Paths12256<T[K], Prev12256[D]>> : never }[keyof T]
  : never;

type Prev12256 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12256<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12256 {
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

type ConfigPaths12256 = Paths12256<NestedConfig12256>;

interface HeavyProps12256 {
  config: DeepPartial12256<NestedConfig12256>;
  path?: ConfigPaths12256;
}

const HeavyComponent12256 = memo(function HeavyComponent12256({ config }: HeavyProps12256) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12256) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12256 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12256: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12256.displayName = 'HeavyComponent12256';
export default HeavyComponent12256;
