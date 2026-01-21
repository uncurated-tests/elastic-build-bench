'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12555<T> = T extends (infer U)[]
  ? DeepReadonlyArray12555<U>
  : T extends object
  ? DeepReadonlyObject12555<T>
  : T;

interface DeepReadonlyArray12555<T> extends ReadonlyArray<DeepReadonly12555<T>> {}

type DeepReadonlyObject12555<T> = {
  readonly [P in keyof T]: DeepReadonly12555<T[P]>;
};

type UnionToIntersection12555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12555<T> = UnionToIntersection12555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12555<T extends unknown[], V> = [...T, V];

type TuplifyUnion12555<T, L = LastOf12555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12555<TuplifyUnion12555<Exclude<T, L>>, L>;

type DeepPartial12555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12555<T[P]> }
  : T;

type Paths12555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12555<K, Paths12555<T[K], Prev12555[D]>> : never }[keyof T]
  : never;

type Prev12555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12555 {
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

type ConfigPaths12555 = Paths12555<NestedConfig12555>;

interface HeavyProps12555 {
  config: DeepPartial12555<NestedConfig12555>;
  path?: ConfigPaths12555;
}

const HeavyComponent12555 = memo(function HeavyComponent12555({ config }: HeavyProps12555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12555.displayName = 'HeavyComponent12555';
export default HeavyComponent12555;
