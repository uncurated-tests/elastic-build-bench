'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12658<T> = T extends (infer U)[]
  ? DeepReadonlyArray12658<U>
  : T extends object
  ? DeepReadonlyObject12658<T>
  : T;

interface DeepReadonlyArray12658<T> extends ReadonlyArray<DeepReadonly12658<T>> {}

type DeepReadonlyObject12658<T> = {
  readonly [P in keyof T]: DeepReadonly12658<T[P]>;
};

type UnionToIntersection12658<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12658<T> = UnionToIntersection12658<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12658<T extends unknown[], V> = [...T, V];

type TuplifyUnion12658<T, L = LastOf12658<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12658<TuplifyUnion12658<Exclude<T, L>>, L>;

type DeepPartial12658<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12658<T[P]> }
  : T;

type Paths12658<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12658<K, Paths12658<T[K], Prev12658[D]>> : never }[keyof T]
  : never;

type Prev12658 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12658<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12658 {
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

type ConfigPaths12658 = Paths12658<NestedConfig12658>;

interface HeavyProps12658 {
  config: DeepPartial12658<NestedConfig12658>;
  path?: ConfigPaths12658;
}

const HeavyComponent12658 = memo(function HeavyComponent12658({ config }: HeavyProps12658) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12658) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12658 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12658: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12658.displayName = 'HeavyComponent12658';
export default HeavyComponent12658;
