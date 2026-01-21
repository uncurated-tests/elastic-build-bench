'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly126<T> = T extends (infer U)[]
  ? DeepReadonlyArray126<U>
  : T extends object
  ? DeepReadonlyObject126<T>
  : T;

interface DeepReadonlyArray126<T> extends ReadonlyArray<DeepReadonly126<T>> {}

type DeepReadonlyObject126<T> = {
  readonly [P in keyof T]: DeepReadonly126<T[P]>;
};

type UnionToIntersection126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf126<T> = UnionToIntersection126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push126<T extends unknown[], V> = [...T, V];

type TuplifyUnion126<T, L = LastOf126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push126<TuplifyUnion126<Exclude<T, L>>, L>;

type DeepPartial126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial126<T[P]> }
  : T;

type Paths126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join126<K, Paths126<T[K], Prev126[D]>> : never }[keyof T]
  : never;

type Prev126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig126 {
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

type ConfigPaths126 = Paths126<NestedConfig126>;

interface HeavyProps126 {
  config: DeepPartial126<NestedConfig126>;
  path?: ConfigPaths126;
}

const HeavyComponent126 = memo(function HeavyComponent126({ config }: HeavyProps126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent126.displayName = 'HeavyComponent126';
export default HeavyComponent126;
