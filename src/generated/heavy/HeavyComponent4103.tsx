'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4103<T> = T extends (infer U)[]
  ? DeepReadonlyArray4103<U>
  : T extends object
  ? DeepReadonlyObject4103<T>
  : T;

interface DeepReadonlyArray4103<T> extends ReadonlyArray<DeepReadonly4103<T>> {}

type DeepReadonlyObject4103<T> = {
  readonly [P in keyof T]: DeepReadonly4103<T[P]>;
};

type UnionToIntersection4103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4103<T> = UnionToIntersection4103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4103<T extends unknown[], V> = [...T, V];

type TuplifyUnion4103<T, L = LastOf4103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4103<TuplifyUnion4103<Exclude<T, L>>, L>;

type DeepPartial4103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4103<T[P]> }
  : T;

type Paths4103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4103<K, Paths4103<T[K], Prev4103[D]>> : never }[keyof T]
  : never;

type Prev4103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4103 {
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

type ConfigPaths4103 = Paths4103<NestedConfig4103>;

interface HeavyProps4103 {
  config: DeepPartial4103<NestedConfig4103>;
  path?: ConfigPaths4103;
}

const HeavyComponent4103 = memo(function HeavyComponent4103({ config }: HeavyProps4103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4103.displayName = 'HeavyComponent4103';
export default HeavyComponent4103;
