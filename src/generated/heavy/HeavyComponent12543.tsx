'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12543<T> = T extends (infer U)[]
  ? DeepReadonlyArray12543<U>
  : T extends object
  ? DeepReadonlyObject12543<T>
  : T;

interface DeepReadonlyArray12543<T> extends ReadonlyArray<DeepReadonly12543<T>> {}

type DeepReadonlyObject12543<T> = {
  readonly [P in keyof T]: DeepReadonly12543<T[P]>;
};

type UnionToIntersection12543<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12543<T> = UnionToIntersection12543<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12543<T extends unknown[], V> = [...T, V];

type TuplifyUnion12543<T, L = LastOf12543<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12543<TuplifyUnion12543<Exclude<T, L>>, L>;

type DeepPartial12543<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12543<T[P]> }
  : T;

type Paths12543<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12543<K, Paths12543<T[K], Prev12543[D]>> : never }[keyof T]
  : never;

type Prev12543 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12543<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12543 {
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

type ConfigPaths12543 = Paths12543<NestedConfig12543>;

interface HeavyProps12543 {
  config: DeepPartial12543<NestedConfig12543>;
  path?: ConfigPaths12543;
}

const HeavyComponent12543 = memo(function HeavyComponent12543({ config }: HeavyProps12543) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12543) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12543 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12543: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12543.displayName = 'HeavyComponent12543';
export default HeavyComponent12543;
