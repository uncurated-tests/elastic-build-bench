'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4101<T> = T extends (infer U)[]
  ? DeepReadonlyArray4101<U>
  : T extends object
  ? DeepReadonlyObject4101<T>
  : T;

interface DeepReadonlyArray4101<T> extends ReadonlyArray<DeepReadonly4101<T>> {}

type DeepReadonlyObject4101<T> = {
  readonly [P in keyof T]: DeepReadonly4101<T[P]>;
};

type UnionToIntersection4101<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4101<T> = UnionToIntersection4101<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4101<T extends unknown[], V> = [...T, V];

type TuplifyUnion4101<T, L = LastOf4101<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4101<TuplifyUnion4101<Exclude<T, L>>, L>;

type DeepPartial4101<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4101<T[P]> }
  : T;

type Paths4101<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4101<K, Paths4101<T[K], Prev4101[D]>> : never }[keyof T]
  : never;

type Prev4101 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4101<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4101 {
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

type ConfigPaths4101 = Paths4101<NestedConfig4101>;

interface HeavyProps4101 {
  config: DeepPartial4101<NestedConfig4101>;
  path?: ConfigPaths4101;
}

const HeavyComponent4101 = memo(function HeavyComponent4101({ config }: HeavyProps4101) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4101) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4101 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4101: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4101.displayName = 'HeavyComponent4101';
export default HeavyComponent4101;
