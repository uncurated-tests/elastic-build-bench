'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12996<T> = T extends (infer U)[]
  ? DeepReadonlyArray12996<U>
  : T extends object
  ? DeepReadonlyObject12996<T>
  : T;

interface DeepReadonlyArray12996<T> extends ReadonlyArray<DeepReadonly12996<T>> {}

type DeepReadonlyObject12996<T> = {
  readonly [P in keyof T]: DeepReadonly12996<T[P]>;
};

type UnionToIntersection12996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12996<T> = UnionToIntersection12996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12996<T extends unknown[], V> = [...T, V];

type TuplifyUnion12996<T, L = LastOf12996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12996<TuplifyUnion12996<Exclude<T, L>>, L>;

type DeepPartial12996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12996<T[P]> }
  : T;

type Paths12996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12996<K, Paths12996<T[K], Prev12996[D]>> : never }[keyof T]
  : never;

type Prev12996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12996 {
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

type ConfigPaths12996 = Paths12996<NestedConfig12996>;

interface HeavyProps12996 {
  config: DeepPartial12996<NestedConfig12996>;
  path?: ConfigPaths12996;
}

const HeavyComponent12996 = memo(function HeavyComponent12996({ config }: HeavyProps12996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12996.displayName = 'HeavyComponent12996';
export default HeavyComponent12996;
