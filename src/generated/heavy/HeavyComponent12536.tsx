'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12536<T> = T extends (infer U)[]
  ? DeepReadonlyArray12536<U>
  : T extends object
  ? DeepReadonlyObject12536<T>
  : T;

interface DeepReadonlyArray12536<T> extends ReadonlyArray<DeepReadonly12536<T>> {}

type DeepReadonlyObject12536<T> = {
  readonly [P in keyof T]: DeepReadonly12536<T[P]>;
};

type UnionToIntersection12536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12536<T> = UnionToIntersection12536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12536<T extends unknown[], V> = [...T, V];

type TuplifyUnion12536<T, L = LastOf12536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12536<TuplifyUnion12536<Exclude<T, L>>, L>;

type DeepPartial12536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12536<T[P]> }
  : T;

type Paths12536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12536<K, Paths12536<T[K], Prev12536[D]>> : never }[keyof T]
  : never;

type Prev12536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12536 {
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

type ConfigPaths12536 = Paths12536<NestedConfig12536>;

interface HeavyProps12536 {
  config: DeepPartial12536<NestedConfig12536>;
  path?: ConfigPaths12536;
}

const HeavyComponent12536 = memo(function HeavyComponent12536({ config }: HeavyProps12536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12536.displayName = 'HeavyComponent12536';
export default HeavyComponent12536;
