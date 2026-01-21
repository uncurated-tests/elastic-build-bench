'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4704<T> = T extends (infer U)[]
  ? DeepReadonlyArray4704<U>
  : T extends object
  ? DeepReadonlyObject4704<T>
  : T;

interface DeepReadonlyArray4704<T> extends ReadonlyArray<DeepReadonly4704<T>> {}

type DeepReadonlyObject4704<T> = {
  readonly [P in keyof T]: DeepReadonly4704<T[P]>;
};

type UnionToIntersection4704<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4704<T> = UnionToIntersection4704<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4704<T extends unknown[], V> = [...T, V];

type TuplifyUnion4704<T, L = LastOf4704<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4704<TuplifyUnion4704<Exclude<T, L>>, L>;

type DeepPartial4704<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4704<T[P]> }
  : T;

type Paths4704<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4704<K, Paths4704<T[K], Prev4704[D]>> : never }[keyof T]
  : never;

type Prev4704 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4704<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4704 {
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

type ConfigPaths4704 = Paths4704<NestedConfig4704>;

interface HeavyProps4704 {
  config: DeepPartial4704<NestedConfig4704>;
  path?: ConfigPaths4704;
}

const HeavyComponent4704 = memo(function HeavyComponent4704({ config }: HeavyProps4704) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4704) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4704 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4704: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4704.displayName = 'HeavyComponent4704';
export default HeavyComponent4704;
