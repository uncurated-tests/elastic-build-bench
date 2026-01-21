'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12647<T> = T extends (infer U)[]
  ? DeepReadonlyArray12647<U>
  : T extends object
  ? DeepReadonlyObject12647<T>
  : T;

interface DeepReadonlyArray12647<T> extends ReadonlyArray<DeepReadonly12647<T>> {}

type DeepReadonlyObject12647<T> = {
  readonly [P in keyof T]: DeepReadonly12647<T[P]>;
};

type UnionToIntersection12647<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12647<T> = UnionToIntersection12647<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12647<T extends unknown[], V> = [...T, V];

type TuplifyUnion12647<T, L = LastOf12647<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12647<TuplifyUnion12647<Exclude<T, L>>, L>;

type DeepPartial12647<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12647<T[P]> }
  : T;

type Paths12647<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12647<K, Paths12647<T[K], Prev12647[D]>> : never }[keyof T]
  : never;

type Prev12647 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12647<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12647 {
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

type ConfigPaths12647 = Paths12647<NestedConfig12647>;

interface HeavyProps12647 {
  config: DeepPartial12647<NestedConfig12647>;
  path?: ConfigPaths12647;
}

const HeavyComponent12647 = memo(function HeavyComponent12647({ config }: HeavyProps12647) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12647) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12647 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12647: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12647.displayName = 'HeavyComponent12647';
export default HeavyComponent12647;
