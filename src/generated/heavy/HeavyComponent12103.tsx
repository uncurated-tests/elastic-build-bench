'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12103<T> = T extends (infer U)[]
  ? DeepReadonlyArray12103<U>
  : T extends object
  ? DeepReadonlyObject12103<T>
  : T;

interface DeepReadonlyArray12103<T> extends ReadonlyArray<DeepReadonly12103<T>> {}

type DeepReadonlyObject12103<T> = {
  readonly [P in keyof T]: DeepReadonly12103<T[P]>;
};

type UnionToIntersection12103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12103<T> = UnionToIntersection12103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12103<T extends unknown[], V> = [...T, V];

type TuplifyUnion12103<T, L = LastOf12103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12103<TuplifyUnion12103<Exclude<T, L>>, L>;

type DeepPartial12103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12103<T[P]> }
  : T;

type Paths12103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12103<K, Paths12103<T[K], Prev12103[D]>> : never }[keyof T]
  : never;

type Prev12103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12103 {
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

type ConfigPaths12103 = Paths12103<NestedConfig12103>;

interface HeavyProps12103 {
  config: DeepPartial12103<NestedConfig12103>;
  path?: ConfigPaths12103;
}

const HeavyComponent12103 = memo(function HeavyComponent12103({ config }: HeavyProps12103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12103.displayName = 'HeavyComponent12103';
export default HeavyComponent12103;
