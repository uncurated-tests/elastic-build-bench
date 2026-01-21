'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4860<T> = T extends (infer U)[]
  ? DeepReadonlyArray4860<U>
  : T extends object
  ? DeepReadonlyObject4860<T>
  : T;

interface DeepReadonlyArray4860<T> extends ReadonlyArray<DeepReadonly4860<T>> {}

type DeepReadonlyObject4860<T> = {
  readonly [P in keyof T]: DeepReadonly4860<T[P]>;
};

type UnionToIntersection4860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4860<T> = UnionToIntersection4860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4860<T extends unknown[], V> = [...T, V];

type TuplifyUnion4860<T, L = LastOf4860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4860<TuplifyUnion4860<Exclude<T, L>>, L>;

type DeepPartial4860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4860<T[P]> }
  : T;

type Paths4860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4860<K, Paths4860<T[K], Prev4860[D]>> : never }[keyof T]
  : never;

type Prev4860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4860 {
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

type ConfigPaths4860 = Paths4860<NestedConfig4860>;

interface HeavyProps4860 {
  config: DeepPartial4860<NestedConfig4860>;
  path?: ConfigPaths4860;
}

const HeavyComponent4860 = memo(function HeavyComponent4860({ config }: HeavyProps4860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4860.displayName = 'HeavyComponent4860';
export default HeavyComponent4860;
