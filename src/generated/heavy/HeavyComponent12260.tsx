'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12260<T> = T extends (infer U)[]
  ? DeepReadonlyArray12260<U>
  : T extends object
  ? DeepReadonlyObject12260<T>
  : T;

interface DeepReadonlyArray12260<T> extends ReadonlyArray<DeepReadonly12260<T>> {}

type DeepReadonlyObject12260<T> = {
  readonly [P in keyof T]: DeepReadonly12260<T[P]>;
};

type UnionToIntersection12260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12260<T> = UnionToIntersection12260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12260<T extends unknown[], V> = [...T, V];

type TuplifyUnion12260<T, L = LastOf12260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12260<TuplifyUnion12260<Exclude<T, L>>, L>;

type DeepPartial12260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12260<T[P]> }
  : T;

type Paths12260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12260<K, Paths12260<T[K], Prev12260[D]>> : never }[keyof T]
  : never;

type Prev12260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12260 {
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

type ConfigPaths12260 = Paths12260<NestedConfig12260>;

interface HeavyProps12260 {
  config: DeepPartial12260<NestedConfig12260>;
  path?: ConfigPaths12260;
}

const HeavyComponent12260 = memo(function HeavyComponent12260({ config }: HeavyProps12260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12260.displayName = 'HeavyComponent12260';
export default HeavyComponent12260;
