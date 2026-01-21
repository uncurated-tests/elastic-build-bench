'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4143<T> = T extends (infer U)[]
  ? DeepReadonlyArray4143<U>
  : T extends object
  ? DeepReadonlyObject4143<T>
  : T;

interface DeepReadonlyArray4143<T> extends ReadonlyArray<DeepReadonly4143<T>> {}

type DeepReadonlyObject4143<T> = {
  readonly [P in keyof T]: DeepReadonly4143<T[P]>;
};

type UnionToIntersection4143<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4143<T> = UnionToIntersection4143<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4143<T extends unknown[], V> = [...T, V];

type TuplifyUnion4143<T, L = LastOf4143<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4143<TuplifyUnion4143<Exclude<T, L>>, L>;

type DeepPartial4143<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4143<T[P]> }
  : T;

type Paths4143<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4143<K, Paths4143<T[K], Prev4143[D]>> : never }[keyof T]
  : never;

type Prev4143 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4143<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4143 {
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

type ConfigPaths4143 = Paths4143<NestedConfig4143>;

interface HeavyProps4143 {
  config: DeepPartial4143<NestedConfig4143>;
  path?: ConfigPaths4143;
}

const HeavyComponent4143 = memo(function HeavyComponent4143({ config }: HeavyProps4143) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4143) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4143 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4143: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4143.displayName = 'HeavyComponent4143';
export default HeavyComponent4143;
