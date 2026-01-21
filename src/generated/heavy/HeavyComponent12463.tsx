'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12463<T> = T extends (infer U)[]
  ? DeepReadonlyArray12463<U>
  : T extends object
  ? DeepReadonlyObject12463<T>
  : T;

interface DeepReadonlyArray12463<T> extends ReadonlyArray<DeepReadonly12463<T>> {}

type DeepReadonlyObject12463<T> = {
  readonly [P in keyof T]: DeepReadonly12463<T[P]>;
};

type UnionToIntersection12463<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12463<T> = UnionToIntersection12463<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12463<T extends unknown[], V> = [...T, V];

type TuplifyUnion12463<T, L = LastOf12463<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12463<TuplifyUnion12463<Exclude<T, L>>, L>;

type DeepPartial12463<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12463<T[P]> }
  : T;

type Paths12463<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12463<K, Paths12463<T[K], Prev12463[D]>> : never }[keyof T]
  : never;

type Prev12463 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12463<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12463 {
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

type ConfigPaths12463 = Paths12463<NestedConfig12463>;

interface HeavyProps12463 {
  config: DeepPartial12463<NestedConfig12463>;
  path?: ConfigPaths12463;
}

const HeavyComponent12463 = memo(function HeavyComponent12463({ config }: HeavyProps12463) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12463) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12463 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12463: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12463.displayName = 'HeavyComponent12463';
export default HeavyComponent12463;
