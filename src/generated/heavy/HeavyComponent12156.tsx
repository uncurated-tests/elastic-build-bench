'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12156<T> = T extends (infer U)[]
  ? DeepReadonlyArray12156<U>
  : T extends object
  ? DeepReadonlyObject12156<T>
  : T;

interface DeepReadonlyArray12156<T> extends ReadonlyArray<DeepReadonly12156<T>> {}

type DeepReadonlyObject12156<T> = {
  readonly [P in keyof T]: DeepReadonly12156<T[P]>;
};

type UnionToIntersection12156<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12156<T> = UnionToIntersection12156<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12156<T extends unknown[], V> = [...T, V];

type TuplifyUnion12156<T, L = LastOf12156<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12156<TuplifyUnion12156<Exclude<T, L>>, L>;

type DeepPartial12156<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12156<T[P]> }
  : T;

type Paths12156<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12156<K, Paths12156<T[K], Prev12156[D]>> : never }[keyof T]
  : never;

type Prev12156 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12156<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12156 {
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

type ConfigPaths12156 = Paths12156<NestedConfig12156>;

interface HeavyProps12156 {
  config: DeepPartial12156<NestedConfig12156>;
  path?: ConfigPaths12156;
}

const HeavyComponent12156 = memo(function HeavyComponent12156({ config }: HeavyProps12156) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12156) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12156 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12156: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12156.displayName = 'HeavyComponent12156';
export default HeavyComponent12156;
