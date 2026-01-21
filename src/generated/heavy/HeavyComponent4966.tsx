'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4966<T> = T extends (infer U)[]
  ? DeepReadonlyArray4966<U>
  : T extends object
  ? DeepReadonlyObject4966<T>
  : T;

interface DeepReadonlyArray4966<T> extends ReadonlyArray<DeepReadonly4966<T>> {}

type DeepReadonlyObject4966<T> = {
  readonly [P in keyof T]: DeepReadonly4966<T[P]>;
};

type UnionToIntersection4966<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4966<T> = UnionToIntersection4966<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4966<T extends unknown[], V> = [...T, V];

type TuplifyUnion4966<T, L = LastOf4966<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4966<TuplifyUnion4966<Exclude<T, L>>, L>;

type DeepPartial4966<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4966<T[P]> }
  : T;

type Paths4966<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4966<K, Paths4966<T[K], Prev4966[D]>> : never }[keyof T]
  : never;

type Prev4966 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4966<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4966 {
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

type ConfigPaths4966 = Paths4966<NestedConfig4966>;

interface HeavyProps4966 {
  config: DeepPartial4966<NestedConfig4966>;
  path?: ConfigPaths4966;
}

const HeavyComponent4966 = memo(function HeavyComponent4966({ config }: HeavyProps4966) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4966) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4966 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4966: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4966.displayName = 'HeavyComponent4966';
export default HeavyComponent4966;
