'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12365<T> = T extends (infer U)[]
  ? DeepReadonlyArray12365<U>
  : T extends object
  ? DeepReadonlyObject12365<T>
  : T;

interface DeepReadonlyArray12365<T> extends ReadonlyArray<DeepReadonly12365<T>> {}

type DeepReadonlyObject12365<T> = {
  readonly [P in keyof T]: DeepReadonly12365<T[P]>;
};

type UnionToIntersection12365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12365<T> = UnionToIntersection12365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12365<T extends unknown[], V> = [...T, V];

type TuplifyUnion12365<T, L = LastOf12365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12365<TuplifyUnion12365<Exclude<T, L>>, L>;

type DeepPartial12365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12365<T[P]> }
  : T;

type Paths12365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12365<K, Paths12365<T[K], Prev12365[D]>> : never }[keyof T]
  : never;

type Prev12365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12365 {
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

type ConfigPaths12365 = Paths12365<NestedConfig12365>;

interface HeavyProps12365 {
  config: DeepPartial12365<NestedConfig12365>;
  path?: ConfigPaths12365;
}

const HeavyComponent12365 = memo(function HeavyComponent12365({ config }: HeavyProps12365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12365.displayName = 'HeavyComponent12365';
export default HeavyComponent12365;
