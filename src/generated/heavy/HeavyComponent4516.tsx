'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4516<T> = T extends (infer U)[]
  ? DeepReadonlyArray4516<U>
  : T extends object
  ? DeepReadonlyObject4516<T>
  : T;

interface DeepReadonlyArray4516<T> extends ReadonlyArray<DeepReadonly4516<T>> {}

type DeepReadonlyObject4516<T> = {
  readonly [P in keyof T]: DeepReadonly4516<T[P]>;
};

type UnionToIntersection4516<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4516<T> = UnionToIntersection4516<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4516<T extends unknown[], V> = [...T, V];

type TuplifyUnion4516<T, L = LastOf4516<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4516<TuplifyUnion4516<Exclude<T, L>>, L>;

type DeepPartial4516<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4516<T[P]> }
  : T;

type Paths4516<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4516<K, Paths4516<T[K], Prev4516[D]>> : never }[keyof T]
  : never;

type Prev4516 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4516<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4516 {
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

type ConfigPaths4516 = Paths4516<NestedConfig4516>;

interface HeavyProps4516 {
  config: DeepPartial4516<NestedConfig4516>;
  path?: ConfigPaths4516;
}

const HeavyComponent4516 = memo(function HeavyComponent4516({ config }: HeavyProps4516) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4516) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4516 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4516: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4516.displayName = 'HeavyComponent4516';
export default HeavyComponent4516;
