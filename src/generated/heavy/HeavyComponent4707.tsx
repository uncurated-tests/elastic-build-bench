'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4707<T> = T extends (infer U)[]
  ? DeepReadonlyArray4707<U>
  : T extends object
  ? DeepReadonlyObject4707<T>
  : T;

interface DeepReadonlyArray4707<T> extends ReadonlyArray<DeepReadonly4707<T>> {}

type DeepReadonlyObject4707<T> = {
  readonly [P in keyof T]: DeepReadonly4707<T[P]>;
};

type UnionToIntersection4707<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4707<T> = UnionToIntersection4707<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4707<T extends unknown[], V> = [...T, V];

type TuplifyUnion4707<T, L = LastOf4707<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4707<TuplifyUnion4707<Exclude<T, L>>, L>;

type DeepPartial4707<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4707<T[P]> }
  : T;

type Paths4707<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4707<K, Paths4707<T[K], Prev4707[D]>> : never }[keyof T]
  : never;

type Prev4707 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4707<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4707 {
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

type ConfigPaths4707 = Paths4707<NestedConfig4707>;

interface HeavyProps4707 {
  config: DeepPartial4707<NestedConfig4707>;
  path?: ConfigPaths4707;
}

const HeavyComponent4707 = memo(function HeavyComponent4707({ config }: HeavyProps4707) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4707) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4707 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4707: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4707.displayName = 'HeavyComponent4707';
export default HeavyComponent4707;
