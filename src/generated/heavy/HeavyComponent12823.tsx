'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12823<T> = T extends (infer U)[]
  ? DeepReadonlyArray12823<U>
  : T extends object
  ? DeepReadonlyObject12823<T>
  : T;

interface DeepReadonlyArray12823<T> extends ReadonlyArray<DeepReadonly12823<T>> {}

type DeepReadonlyObject12823<T> = {
  readonly [P in keyof T]: DeepReadonly12823<T[P]>;
};

type UnionToIntersection12823<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12823<T> = UnionToIntersection12823<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12823<T extends unknown[], V> = [...T, V];

type TuplifyUnion12823<T, L = LastOf12823<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12823<TuplifyUnion12823<Exclude<T, L>>, L>;

type DeepPartial12823<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12823<T[P]> }
  : T;

type Paths12823<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12823<K, Paths12823<T[K], Prev12823[D]>> : never }[keyof T]
  : never;

type Prev12823 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12823<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12823 {
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

type ConfigPaths12823 = Paths12823<NestedConfig12823>;

interface HeavyProps12823 {
  config: DeepPartial12823<NestedConfig12823>;
  path?: ConfigPaths12823;
}

const HeavyComponent12823 = memo(function HeavyComponent12823({ config }: HeavyProps12823) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12823) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12823 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12823: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12823.displayName = 'HeavyComponent12823';
export default HeavyComponent12823;
