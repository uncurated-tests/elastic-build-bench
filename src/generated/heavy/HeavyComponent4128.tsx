'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4128<T> = T extends (infer U)[]
  ? DeepReadonlyArray4128<U>
  : T extends object
  ? DeepReadonlyObject4128<T>
  : T;

interface DeepReadonlyArray4128<T> extends ReadonlyArray<DeepReadonly4128<T>> {}

type DeepReadonlyObject4128<T> = {
  readonly [P in keyof T]: DeepReadonly4128<T[P]>;
};

type UnionToIntersection4128<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4128<T> = UnionToIntersection4128<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4128<T extends unknown[], V> = [...T, V];

type TuplifyUnion4128<T, L = LastOf4128<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4128<TuplifyUnion4128<Exclude<T, L>>, L>;

type DeepPartial4128<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4128<T[P]> }
  : T;

type Paths4128<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4128<K, Paths4128<T[K], Prev4128[D]>> : never }[keyof T]
  : never;

type Prev4128 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4128<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4128 {
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

type ConfigPaths4128 = Paths4128<NestedConfig4128>;

interface HeavyProps4128 {
  config: DeepPartial4128<NestedConfig4128>;
  path?: ConfigPaths4128;
}

const HeavyComponent4128 = memo(function HeavyComponent4128({ config }: HeavyProps4128) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4128) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4128 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4128: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4128.displayName = 'HeavyComponent4128';
export default HeavyComponent4128;
