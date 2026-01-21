'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4124<T> = T extends (infer U)[]
  ? DeepReadonlyArray4124<U>
  : T extends object
  ? DeepReadonlyObject4124<T>
  : T;

interface DeepReadonlyArray4124<T> extends ReadonlyArray<DeepReadonly4124<T>> {}

type DeepReadonlyObject4124<T> = {
  readonly [P in keyof T]: DeepReadonly4124<T[P]>;
};

type UnionToIntersection4124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4124<T> = UnionToIntersection4124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4124<T extends unknown[], V> = [...T, V];

type TuplifyUnion4124<T, L = LastOf4124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4124<TuplifyUnion4124<Exclude<T, L>>, L>;

type DeepPartial4124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4124<T[P]> }
  : T;

type Paths4124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4124<K, Paths4124<T[K], Prev4124[D]>> : never }[keyof T]
  : never;

type Prev4124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4124 {
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

type ConfigPaths4124 = Paths4124<NestedConfig4124>;

interface HeavyProps4124 {
  config: DeepPartial4124<NestedConfig4124>;
  path?: ConfigPaths4124;
}

const HeavyComponent4124 = memo(function HeavyComponent4124({ config }: HeavyProps4124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4124.displayName = 'HeavyComponent4124';
export default HeavyComponent4124;
