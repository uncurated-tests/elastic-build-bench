'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12646<T> = T extends (infer U)[]
  ? DeepReadonlyArray12646<U>
  : T extends object
  ? DeepReadonlyObject12646<T>
  : T;

interface DeepReadonlyArray12646<T> extends ReadonlyArray<DeepReadonly12646<T>> {}

type DeepReadonlyObject12646<T> = {
  readonly [P in keyof T]: DeepReadonly12646<T[P]>;
};

type UnionToIntersection12646<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12646<T> = UnionToIntersection12646<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12646<T extends unknown[], V> = [...T, V];

type TuplifyUnion12646<T, L = LastOf12646<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12646<TuplifyUnion12646<Exclude<T, L>>, L>;

type DeepPartial12646<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12646<T[P]> }
  : T;

type Paths12646<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12646<K, Paths12646<T[K], Prev12646[D]>> : never }[keyof T]
  : never;

type Prev12646 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12646<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12646 {
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

type ConfigPaths12646 = Paths12646<NestedConfig12646>;

interface HeavyProps12646 {
  config: DeepPartial12646<NestedConfig12646>;
  path?: ConfigPaths12646;
}

const HeavyComponent12646 = memo(function HeavyComponent12646({ config }: HeavyProps12646) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12646) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12646 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12646: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12646.displayName = 'HeavyComponent12646';
export default HeavyComponent12646;
