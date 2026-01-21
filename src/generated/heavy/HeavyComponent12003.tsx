'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12003<T> = T extends (infer U)[]
  ? DeepReadonlyArray12003<U>
  : T extends object
  ? DeepReadonlyObject12003<T>
  : T;

interface DeepReadonlyArray12003<T> extends ReadonlyArray<DeepReadonly12003<T>> {}

type DeepReadonlyObject12003<T> = {
  readonly [P in keyof T]: DeepReadonly12003<T[P]>;
};

type UnionToIntersection12003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12003<T> = UnionToIntersection12003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12003<T extends unknown[], V> = [...T, V];

type TuplifyUnion12003<T, L = LastOf12003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12003<TuplifyUnion12003<Exclude<T, L>>, L>;

type DeepPartial12003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12003<T[P]> }
  : T;

type Paths12003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12003<K, Paths12003<T[K], Prev12003[D]>> : never }[keyof T]
  : never;

type Prev12003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12003 {
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

type ConfigPaths12003 = Paths12003<NestedConfig12003>;

interface HeavyProps12003 {
  config: DeepPartial12003<NestedConfig12003>;
  path?: ConfigPaths12003;
}

const HeavyComponent12003 = memo(function HeavyComponent12003({ config }: HeavyProps12003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12003.displayName = 'HeavyComponent12003';
export default HeavyComponent12003;
