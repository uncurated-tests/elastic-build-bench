'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12994<T> = T extends (infer U)[]
  ? DeepReadonlyArray12994<U>
  : T extends object
  ? DeepReadonlyObject12994<T>
  : T;

interface DeepReadonlyArray12994<T> extends ReadonlyArray<DeepReadonly12994<T>> {}

type DeepReadonlyObject12994<T> = {
  readonly [P in keyof T]: DeepReadonly12994<T[P]>;
};

type UnionToIntersection12994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12994<T> = UnionToIntersection12994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12994<T extends unknown[], V> = [...T, V];

type TuplifyUnion12994<T, L = LastOf12994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12994<TuplifyUnion12994<Exclude<T, L>>, L>;

type DeepPartial12994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12994<T[P]> }
  : T;

type Paths12994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12994<K, Paths12994<T[K], Prev12994[D]>> : never }[keyof T]
  : never;

type Prev12994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12994 {
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

type ConfigPaths12994 = Paths12994<NestedConfig12994>;

interface HeavyProps12994 {
  config: DeepPartial12994<NestedConfig12994>;
  path?: ConfigPaths12994;
}

const HeavyComponent12994 = memo(function HeavyComponent12994({ config }: HeavyProps12994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12994.displayName = 'HeavyComponent12994';
export default HeavyComponent12994;
