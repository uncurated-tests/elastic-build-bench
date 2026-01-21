'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12901<T> = T extends (infer U)[]
  ? DeepReadonlyArray12901<U>
  : T extends object
  ? DeepReadonlyObject12901<T>
  : T;

interface DeepReadonlyArray12901<T> extends ReadonlyArray<DeepReadonly12901<T>> {}

type DeepReadonlyObject12901<T> = {
  readonly [P in keyof T]: DeepReadonly12901<T[P]>;
};

type UnionToIntersection12901<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12901<T> = UnionToIntersection12901<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12901<T extends unknown[], V> = [...T, V];

type TuplifyUnion12901<T, L = LastOf12901<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12901<TuplifyUnion12901<Exclude<T, L>>, L>;

type DeepPartial12901<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12901<T[P]> }
  : T;

type Paths12901<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12901<K, Paths12901<T[K], Prev12901[D]>> : never }[keyof T]
  : never;

type Prev12901 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12901<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12901 {
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

type ConfigPaths12901 = Paths12901<NestedConfig12901>;

interface HeavyProps12901 {
  config: DeepPartial12901<NestedConfig12901>;
  path?: ConfigPaths12901;
}

const HeavyComponent12901 = memo(function HeavyComponent12901({ config }: HeavyProps12901) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12901) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12901 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12901: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12901.displayName = 'HeavyComponent12901';
export default HeavyComponent12901;
