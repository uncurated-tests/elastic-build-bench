'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12457<T> = T extends (infer U)[]
  ? DeepReadonlyArray12457<U>
  : T extends object
  ? DeepReadonlyObject12457<T>
  : T;

interface DeepReadonlyArray12457<T> extends ReadonlyArray<DeepReadonly12457<T>> {}

type DeepReadonlyObject12457<T> = {
  readonly [P in keyof T]: DeepReadonly12457<T[P]>;
};

type UnionToIntersection12457<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12457<T> = UnionToIntersection12457<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12457<T extends unknown[], V> = [...T, V];

type TuplifyUnion12457<T, L = LastOf12457<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12457<TuplifyUnion12457<Exclude<T, L>>, L>;

type DeepPartial12457<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12457<T[P]> }
  : T;

type Paths12457<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12457<K, Paths12457<T[K], Prev12457[D]>> : never }[keyof T]
  : never;

type Prev12457 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12457<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12457 {
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

type ConfigPaths12457 = Paths12457<NestedConfig12457>;

interface HeavyProps12457 {
  config: DeepPartial12457<NestedConfig12457>;
  path?: ConfigPaths12457;
}

const HeavyComponent12457 = memo(function HeavyComponent12457({ config }: HeavyProps12457) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12457) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12457 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12457: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12457.displayName = 'HeavyComponent12457';
export default HeavyComponent12457;
