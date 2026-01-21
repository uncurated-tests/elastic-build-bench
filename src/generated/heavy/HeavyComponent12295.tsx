'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12295<T> = T extends (infer U)[]
  ? DeepReadonlyArray12295<U>
  : T extends object
  ? DeepReadonlyObject12295<T>
  : T;

interface DeepReadonlyArray12295<T> extends ReadonlyArray<DeepReadonly12295<T>> {}

type DeepReadonlyObject12295<T> = {
  readonly [P in keyof T]: DeepReadonly12295<T[P]>;
};

type UnionToIntersection12295<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12295<T> = UnionToIntersection12295<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12295<T extends unknown[], V> = [...T, V];

type TuplifyUnion12295<T, L = LastOf12295<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12295<TuplifyUnion12295<Exclude<T, L>>, L>;

type DeepPartial12295<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12295<T[P]> }
  : T;

type Paths12295<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12295<K, Paths12295<T[K], Prev12295[D]>> : never }[keyof T]
  : never;

type Prev12295 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12295<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12295 {
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

type ConfigPaths12295 = Paths12295<NestedConfig12295>;

interface HeavyProps12295 {
  config: DeepPartial12295<NestedConfig12295>;
  path?: ConfigPaths12295;
}

const HeavyComponent12295 = memo(function HeavyComponent12295({ config }: HeavyProps12295) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12295) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12295 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12295: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12295.displayName = 'HeavyComponent12295';
export default HeavyComponent12295;
