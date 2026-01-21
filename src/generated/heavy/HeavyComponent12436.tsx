'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12436<T> = T extends (infer U)[]
  ? DeepReadonlyArray12436<U>
  : T extends object
  ? DeepReadonlyObject12436<T>
  : T;

interface DeepReadonlyArray12436<T> extends ReadonlyArray<DeepReadonly12436<T>> {}

type DeepReadonlyObject12436<T> = {
  readonly [P in keyof T]: DeepReadonly12436<T[P]>;
};

type UnionToIntersection12436<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12436<T> = UnionToIntersection12436<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12436<T extends unknown[], V> = [...T, V];

type TuplifyUnion12436<T, L = LastOf12436<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12436<TuplifyUnion12436<Exclude<T, L>>, L>;

type DeepPartial12436<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12436<T[P]> }
  : T;

type Paths12436<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12436<K, Paths12436<T[K], Prev12436[D]>> : never }[keyof T]
  : never;

type Prev12436 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12436<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12436 {
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

type ConfigPaths12436 = Paths12436<NestedConfig12436>;

interface HeavyProps12436 {
  config: DeepPartial12436<NestedConfig12436>;
  path?: ConfigPaths12436;
}

const HeavyComponent12436 = memo(function HeavyComponent12436({ config }: HeavyProps12436) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12436) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12436 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12436: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12436.displayName = 'HeavyComponent12436';
export default HeavyComponent12436;
