'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4590<T> = T extends (infer U)[]
  ? DeepReadonlyArray4590<U>
  : T extends object
  ? DeepReadonlyObject4590<T>
  : T;

interface DeepReadonlyArray4590<T> extends ReadonlyArray<DeepReadonly4590<T>> {}

type DeepReadonlyObject4590<T> = {
  readonly [P in keyof T]: DeepReadonly4590<T[P]>;
};

type UnionToIntersection4590<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4590<T> = UnionToIntersection4590<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4590<T extends unknown[], V> = [...T, V];

type TuplifyUnion4590<T, L = LastOf4590<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4590<TuplifyUnion4590<Exclude<T, L>>, L>;

type DeepPartial4590<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4590<T[P]> }
  : T;

type Paths4590<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4590<K, Paths4590<T[K], Prev4590[D]>> : never }[keyof T]
  : never;

type Prev4590 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4590<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4590 {
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

type ConfigPaths4590 = Paths4590<NestedConfig4590>;

interface HeavyProps4590 {
  config: DeepPartial4590<NestedConfig4590>;
  path?: ConfigPaths4590;
}

const HeavyComponent4590 = memo(function HeavyComponent4590({ config }: HeavyProps4590) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4590) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4590 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4590: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4590.displayName = 'HeavyComponent4590';
export default HeavyComponent4590;
