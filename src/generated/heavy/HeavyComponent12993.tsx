'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12993<T> = T extends (infer U)[]
  ? DeepReadonlyArray12993<U>
  : T extends object
  ? DeepReadonlyObject12993<T>
  : T;

interface DeepReadonlyArray12993<T> extends ReadonlyArray<DeepReadonly12993<T>> {}

type DeepReadonlyObject12993<T> = {
  readonly [P in keyof T]: DeepReadonly12993<T[P]>;
};

type UnionToIntersection12993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12993<T> = UnionToIntersection12993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12993<T extends unknown[], V> = [...T, V];

type TuplifyUnion12993<T, L = LastOf12993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12993<TuplifyUnion12993<Exclude<T, L>>, L>;

type DeepPartial12993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12993<T[P]> }
  : T;

type Paths12993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12993<K, Paths12993<T[K], Prev12993[D]>> : never }[keyof T]
  : never;

type Prev12993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12993 {
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

type ConfigPaths12993 = Paths12993<NestedConfig12993>;

interface HeavyProps12993 {
  config: DeepPartial12993<NestedConfig12993>;
  path?: ConfigPaths12993;
}

const HeavyComponent12993 = memo(function HeavyComponent12993({ config }: HeavyProps12993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12993.displayName = 'HeavyComponent12993';
export default HeavyComponent12993;
