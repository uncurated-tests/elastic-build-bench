'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12970<T> = T extends (infer U)[]
  ? DeepReadonlyArray12970<U>
  : T extends object
  ? DeepReadonlyObject12970<T>
  : T;

interface DeepReadonlyArray12970<T> extends ReadonlyArray<DeepReadonly12970<T>> {}

type DeepReadonlyObject12970<T> = {
  readonly [P in keyof T]: DeepReadonly12970<T[P]>;
};

type UnionToIntersection12970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12970<T> = UnionToIntersection12970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12970<T extends unknown[], V> = [...T, V];

type TuplifyUnion12970<T, L = LastOf12970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12970<TuplifyUnion12970<Exclude<T, L>>, L>;

type DeepPartial12970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12970<T[P]> }
  : T;

type Paths12970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12970<K, Paths12970<T[K], Prev12970[D]>> : never }[keyof T]
  : never;

type Prev12970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12970 {
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

type ConfigPaths12970 = Paths12970<NestedConfig12970>;

interface HeavyProps12970 {
  config: DeepPartial12970<NestedConfig12970>;
  path?: ConfigPaths12970;
}

const HeavyComponent12970 = memo(function HeavyComponent12970({ config }: HeavyProps12970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12970.displayName = 'HeavyComponent12970';
export default HeavyComponent12970;
