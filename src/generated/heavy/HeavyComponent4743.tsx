'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4743<T> = T extends (infer U)[]
  ? DeepReadonlyArray4743<U>
  : T extends object
  ? DeepReadonlyObject4743<T>
  : T;

interface DeepReadonlyArray4743<T> extends ReadonlyArray<DeepReadonly4743<T>> {}

type DeepReadonlyObject4743<T> = {
  readonly [P in keyof T]: DeepReadonly4743<T[P]>;
};

type UnionToIntersection4743<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4743<T> = UnionToIntersection4743<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4743<T extends unknown[], V> = [...T, V];

type TuplifyUnion4743<T, L = LastOf4743<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4743<TuplifyUnion4743<Exclude<T, L>>, L>;

type DeepPartial4743<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4743<T[P]> }
  : T;

type Paths4743<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4743<K, Paths4743<T[K], Prev4743[D]>> : never }[keyof T]
  : never;

type Prev4743 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4743<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4743 {
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

type ConfigPaths4743 = Paths4743<NestedConfig4743>;

interface HeavyProps4743 {
  config: DeepPartial4743<NestedConfig4743>;
  path?: ConfigPaths4743;
}

const HeavyComponent4743 = memo(function HeavyComponent4743({ config }: HeavyProps4743) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4743) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4743 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4743: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4743.displayName = 'HeavyComponent4743';
export default HeavyComponent4743;
