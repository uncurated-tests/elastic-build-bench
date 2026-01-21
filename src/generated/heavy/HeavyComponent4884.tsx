'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4884<T> = T extends (infer U)[]
  ? DeepReadonlyArray4884<U>
  : T extends object
  ? DeepReadonlyObject4884<T>
  : T;

interface DeepReadonlyArray4884<T> extends ReadonlyArray<DeepReadonly4884<T>> {}

type DeepReadonlyObject4884<T> = {
  readonly [P in keyof T]: DeepReadonly4884<T[P]>;
};

type UnionToIntersection4884<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4884<T> = UnionToIntersection4884<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4884<T extends unknown[], V> = [...T, V];

type TuplifyUnion4884<T, L = LastOf4884<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4884<TuplifyUnion4884<Exclude<T, L>>, L>;

type DeepPartial4884<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4884<T[P]> }
  : T;

type Paths4884<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4884<K, Paths4884<T[K], Prev4884[D]>> : never }[keyof T]
  : never;

type Prev4884 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4884<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4884 {
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

type ConfigPaths4884 = Paths4884<NestedConfig4884>;

interface HeavyProps4884 {
  config: DeepPartial4884<NestedConfig4884>;
  path?: ConfigPaths4884;
}

const HeavyComponent4884 = memo(function HeavyComponent4884({ config }: HeavyProps4884) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4884) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4884 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4884: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4884.displayName = 'HeavyComponent4884';
export default HeavyComponent4884;
