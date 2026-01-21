'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12135<T> = T extends (infer U)[]
  ? DeepReadonlyArray12135<U>
  : T extends object
  ? DeepReadonlyObject12135<T>
  : T;

interface DeepReadonlyArray12135<T> extends ReadonlyArray<DeepReadonly12135<T>> {}

type DeepReadonlyObject12135<T> = {
  readonly [P in keyof T]: DeepReadonly12135<T[P]>;
};

type UnionToIntersection12135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12135<T> = UnionToIntersection12135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12135<T extends unknown[], V> = [...T, V];

type TuplifyUnion12135<T, L = LastOf12135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12135<TuplifyUnion12135<Exclude<T, L>>, L>;

type DeepPartial12135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12135<T[P]> }
  : T;

type Paths12135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12135<K, Paths12135<T[K], Prev12135[D]>> : never }[keyof T]
  : never;

type Prev12135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12135 {
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

type ConfigPaths12135 = Paths12135<NestedConfig12135>;

interface HeavyProps12135 {
  config: DeepPartial12135<NestedConfig12135>;
  path?: ConfigPaths12135;
}

const HeavyComponent12135 = memo(function HeavyComponent12135({ config }: HeavyProps12135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12135.displayName = 'HeavyComponent12135';
export default HeavyComponent12135;
