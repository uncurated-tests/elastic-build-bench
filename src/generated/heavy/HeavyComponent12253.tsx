'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12253<T> = T extends (infer U)[]
  ? DeepReadonlyArray12253<U>
  : T extends object
  ? DeepReadonlyObject12253<T>
  : T;

interface DeepReadonlyArray12253<T> extends ReadonlyArray<DeepReadonly12253<T>> {}

type DeepReadonlyObject12253<T> = {
  readonly [P in keyof T]: DeepReadonly12253<T[P]>;
};

type UnionToIntersection12253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12253<T> = UnionToIntersection12253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12253<T extends unknown[], V> = [...T, V];

type TuplifyUnion12253<T, L = LastOf12253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12253<TuplifyUnion12253<Exclude<T, L>>, L>;

type DeepPartial12253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12253<T[P]> }
  : T;

type Paths12253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12253<K, Paths12253<T[K], Prev12253[D]>> : never }[keyof T]
  : never;

type Prev12253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12253 {
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

type ConfigPaths12253 = Paths12253<NestedConfig12253>;

interface HeavyProps12253 {
  config: DeepPartial12253<NestedConfig12253>;
  path?: ConfigPaths12253;
}

const HeavyComponent12253 = memo(function HeavyComponent12253({ config }: HeavyProps12253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12253.displayName = 'HeavyComponent12253';
export default HeavyComponent12253;
