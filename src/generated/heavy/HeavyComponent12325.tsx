'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12325<T> = T extends (infer U)[]
  ? DeepReadonlyArray12325<U>
  : T extends object
  ? DeepReadonlyObject12325<T>
  : T;

interface DeepReadonlyArray12325<T> extends ReadonlyArray<DeepReadonly12325<T>> {}

type DeepReadonlyObject12325<T> = {
  readonly [P in keyof T]: DeepReadonly12325<T[P]>;
};

type UnionToIntersection12325<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12325<T> = UnionToIntersection12325<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12325<T extends unknown[], V> = [...T, V];

type TuplifyUnion12325<T, L = LastOf12325<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12325<TuplifyUnion12325<Exclude<T, L>>, L>;

type DeepPartial12325<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12325<T[P]> }
  : T;

type Paths12325<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12325<K, Paths12325<T[K], Prev12325[D]>> : never }[keyof T]
  : never;

type Prev12325 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12325<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12325 {
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

type ConfigPaths12325 = Paths12325<NestedConfig12325>;

interface HeavyProps12325 {
  config: DeepPartial12325<NestedConfig12325>;
  path?: ConfigPaths12325;
}

const HeavyComponent12325 = memo(function HeavyComponent12325({ config }: HeavyProps12325) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12325) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12325 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12325: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12325.displayName = 'HeavyComponent12325';
export default HeavyComponent12325;
