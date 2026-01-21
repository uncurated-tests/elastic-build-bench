'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12213<T> = T extends (infer U)[]
  ? DeepReadonlyArray12213<U>
  : T extends object
  ? DeepReadonlyObject12213<T>
  : T;

interface DeepReadonlyArray12213<T> extends ReadonlyArray<DeepReadonly12213<T>> {}

type DeepReadonlyObject12213<T> = {
  readonly [P in keyof T]: DeepReadonly12213<T[P]>;
};

type UnionToIntersection12213<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12213<T> = UnionToIntersection12213<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12213<T extends unknown[], V> = [...T, V];

type TuplifyUnion12213<T, L = LastOf12213<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12213<TuplifyUnion12213<Exclude<T, L>>, L>;

type DeepPartial12213<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12213<T[P]> }
  : T;

type Paths12213<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12213<K, Paths12213<T[K], Prev12213[D]>> : never }[keyof T]
  : never;

type Prev12213 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12213<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12213 {
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

type ConfigPaths12213 = Paths12213<NestedConfig12213>;

interface HeavyProps12213 {
  config: DeepPartial12213<NestedConfig12213>;
  path?: ConfigPaths12213;
}

const HeavyComponent12213 = memo(function HeavyComponent12213({ config }: HeavyProps12213) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12213) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12213 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12213: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12213.displayName = 'HeavyComponent12213';
export default HeavyComponent12213;
