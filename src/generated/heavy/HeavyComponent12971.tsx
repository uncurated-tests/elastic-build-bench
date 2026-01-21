'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12971<T> = T extends (infer U)[]
  ? DeepReadonlyArray12971<U>
  : T extends object
  ? DeepReadonlyObject12971<T>
  : T;

interface DeepReadonlyArray12971<T> extends ReadonlyArray<DeepReadonly12971<T>> {}

type DeepReadonlyObject12971<T> = {
  readonly [P in keyof T]: DeepReadonly12971<T[P]>;
};

type UnionToIntersection12971<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12971<T> = UnionToIntersection12971<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12971<T extends unknown[], V> = [...T, V];

type TuplifyUnion12971<T, L = LastOf12971<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12971<TuplifyUnion12971<Exclude<T, L>>, L>;

type DeepPartial12971<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12971<T[P]> }
  : T;

type Paths12971<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12971<K, Paths12971<T[K], Prev12971[D]>> : never }[keyof T]
  : never;

type Prev12971 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12971<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12971 {
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

type ConfigPaths12971 = Paths12971<NestedConfig12971>;

interface HeavyProps12971 {
  config: DeepPartial12971<NestedConfig12971>;
  path?: ConfigPaths12971;
}

const HeavyComponent12971 = memo(function HeavyComponent12971({ config }: HeavyProps12971) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12971) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12971 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12971: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12971.displayName = 'HeavyComponent12971';
export default HeavyComponent12971;
