'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12706<T> = T extends (infer U)[]
  ? DeepReadonlyArray12706<U>
  : T extends object
  ? DeepReadonlyObject12706<T>
  : T;

interface DeepReadonlyArray12706<T> extends ReadonlyArray<DeepReadonly12706<T>> {}

type DeepReadonlyObject12706<T> = {
  readonly [P in keyof T]: DeepReadonly12706<T[P]>;
};

type UnionToIntersection12706<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12706<T> = UnionToIntersection12706<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12706<T extends unknown[], V> = [...T, V];

type TuplifyUnion12706<T, L = LastOf12706<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12706<TuplifyUnion12706<Exclude<T, L>>, L>;

type DeepPartial12706<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12706<T[P]> }
  : T;

type Paths12706<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12706<K, Paths12706<T[K], Prev12706[D]>> : never }[keyof T]
  : never;

type Prev12706 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12706<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12706 {
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

type ConfigPaths12706 = Paths12706<NestedConfig12706>;

interface HeavyProps12706 {
  config: DeepPartial12706<NestedConfig12706>;
  path?: ConfigPaths12706;
}

const HeavyComponent12706 = memo(function HeavyComponent12706({ config }: HeavyProps12706) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12706) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12706 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12706: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12706.displayName = 'HeavyComponent12706';
export default HeavyComponent12706;
