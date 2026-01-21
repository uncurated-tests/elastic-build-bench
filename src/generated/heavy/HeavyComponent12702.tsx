'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12702<T> = T extends (infer U)[]
  ? DeepReadonlyArray12702<U>
  : T extends object
  ? DeepReadonlyObject12702<T>
  : T;

interface DeepReadonlyArray12702<T> extends ReadonlyArray<DeepReadonly12702<T>> {}

type DeepReadonlyObject12702<T> = {
  readonly [P in keyof T]: DeepReadonly12702<T[P]>;
};

type UnionToIntersection12702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12702<T> = UnionToIntersection12702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12702<T extends unknown[], V> = [...T, V];

type TuplifyUnion12702<T, L = LastOf12702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12702<TuplifyUnion12702<Exclude<T, L>>, L>;

type DeepPartial12702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12702<T[P]> }
  : T;

type Paths12702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12702<K, Paths12702<T[K], Prev12702[D]>> : never }[keyof T]
  : never;

type Prev12702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12702 {
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

type ConfigPaths12702 = Paths12702<NestedConfig12702>;

interface HeavyProps12702 {
  config: DeepPartial12702<NestedConfig12702>;
  path?: ConfigPaths12702;
}

const HeavyComponent12702 = memo(function HeavyComponent12702({ config }: HeavyProps12702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12702.displayName = 'HeavyComponent12702';
export default HeavyComponent12702;
