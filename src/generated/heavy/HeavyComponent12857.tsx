'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12857<T> = T extends (infer U)[]
  ? DeepReadonlyArray12857<U>
  : T extends object
  ? DeepReadonlyObject12857<T>
  : T;

interface DeepReadonlyArray12857<T> extends ReadonlyArray<DeepReadonly12857<T>> {}

type DeepReadonlyObject12857<T> = {
  readonly [P in keyof T]: DeepReadonly12857<T[P]>;
};

type UnionToIntersection12857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12857<T> = UnionToIntersection12857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12857<T extends unknown[], V> = [...T, V];

type TuplifyUnion12857<T, L = LastOf12857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12857<TuplifyUnion12857<Exclude<T, L>>, L>;

type DeepPartial12857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12857<T[P]> }
  : T;

type Paths12857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12857<K, Paths12857<T[K], Prev12857[D]>> : never }[keyof T]
  : never;

type Prev12857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12857 {
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

type ConfigPaths12857 = Paths12857<NestedConfig12857>;

interface HeavyProps12857 {
  config: DeepPartial12857<NestedConfig12857>;
  path?: ConfigPaths12857;
}

const HeavyComponent12857 = memo(function HeavyComponent12857({ config }: HeavyProps12857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12857.displayName = 'HeavyComponent12857';
export default HeavyComponent12857;
