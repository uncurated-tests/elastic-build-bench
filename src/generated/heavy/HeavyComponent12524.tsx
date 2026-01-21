'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12524<T> = T extends (infer U)[]
  ? DeepReadonlyArray12524<U>
  : T extends object
  ? DeepReadonlyObject12524<T>
  : T;

interface DeepReadonlyArray12524<T> extends ReadonlyArray<DeepReadonly12524<T>> {}

type DeepReadonlyObject12524<T> = {
  readonly [P in keyof T]: DeepReadonly12524<T[P]>;
};

type UnionToIntersection12524<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12524<T> = UnionToIntersection12524<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12524<T extends unknown[], V> = [...T, V];

type TuplifyUnion12524<T, L = LastOf12524<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12524<TuplifyUnion12524<Exclude<T, L>>, L>;

type DeepPartial12524<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12524<T[P]> }
  : T;

type Paths12524<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12524<K, Paths12524<T[K], Prev12524[D]>> : never }[keyof T]
  : never;

type Prev12524 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12524<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12524 {
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

type ConfigPaths12524 = Paths12524<NestedConfig12524>;

interface HeavyProps12524 {
  config: DeepPartial12524<NestedConfig12524>;
  path?: ConfigPaths12524;
}

const HeavyComponent12524 = memo(function HeavyComponent12524({ config }: HeavyProps12524) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12524) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12524 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12524: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12524.displayName = 'HeavyComponent12524';
export default HeavyComponent12524;
