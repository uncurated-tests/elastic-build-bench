'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12726<T> = T extends (infer U)[]
  ? DeepReadonlyArray12726<U>
  : T extends object
  ? DeepReadonlyObject12726<T>
  : T;

interface DeepReadonlyArray12726<T> extends ReadonlyArray<DeepReadonly12726<T>> {}

type DeepReadonlyObject12726<T> = {
  readonly [P in keyof T]: DeepReadonly12726<T[P]>;
};

type UnionToIntersection12726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12726<T> = UnionToIntersection12726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12726<T extends unknown[], V> = [...T, V];

type TuplifyUnion12726<T, L = LastOf12726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12726<TuplifyUnion12726<Exclude<T, L>>, L>;

type DeepPartial12726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12726<T[P]> }
  : T;

type Paths12726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12726<K, Paths12726<T[K], Prev12726[D]>> : never }[keyof T]
  : never;

type Prev12726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12726 {
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

type ConfigPaths12726 = Paths12726<NestedConfig12726>;

interface HeavyProps12726 {
  config: DeepPartial12726<NestedConfig12726>;
  path?: ConfigPaths12726;
}

const HeavyComponent12726 = memo(function HeavyComponent12726({ config }: HeavyProps12726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12726.displayName = 'HeavyComponent12726';
export default HeavyComponent12726;
