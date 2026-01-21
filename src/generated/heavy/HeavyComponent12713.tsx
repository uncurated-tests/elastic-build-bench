'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12713<T> = T extends (infer U)[]
  ? DeepReadonlyArray12713<U>
  : T extends object
  ? DeepReadonlyObject12713<T>
  : T;

interface DeepReadonlyArray12713<T> extends ReadonlyArray<DeepReadonly12713<T>> {}

type DeepReadonlyObject12713<T> = {
  readonly [P in keyof T]: DeepReadonly12713<T[P]>;
};

type UnionToIntersection12713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12713<T> = UnionToIntersection12713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12713<T extends unknown[], V> = [...T, V];

type TuplifyUnion12713<T, L = LastOf12713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12713<TuplifyUnion12713<Exclude<T, L>>, L>;

type DeepPartial12713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12713<T[P]> }
  : T;

type Paths12713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12713<K, Paths12713<T[K], Prev12713[D]>> : never }[keyof T]
  : never;

type Prev12713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12713 {
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

type ConfigPaths12713 = Paths12713<NestedConfig12713>;

interface HeavyProps12713 {
  config: DeepPartial12713<NestedConfig12713>;
  path?: ConfigPaths12713;
}

const HeavyComponent12713 = memo(function HeavyComponent12713({ config }: HeavyProps12713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12713.displayName = 'HeavyComponent12713';
export default HeavyComponent12713;
