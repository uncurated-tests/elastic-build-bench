'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4949<T> = T extends (infer U)[]
  ? DeepReadonlyArray4949<U>
  : T extends object
  ? DeepReadonlyObject4949<T>
  : T;

interface DeepReadonlyArray4949<T> extends ReadonlyArray<DeepReadonly4949<T>> {}

type DeepReadonlyObject4949<T> = {
  readonly [P in keyof T]: DeepReadonly4949<T[P]>;
};

type UnionToIntersection4949<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4949<T> = UnionToIntersection4949<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4949<T extends unknown[], V> = [...T, V];

type TuplifyUnion4949<T, L = LastOf4949<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4949<TuplifyUnion4949<Exclude<T, L>>, L>;

type DeepPartial4949<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4949<T[P]> }
  : T;

type Paths4949<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4949<K, Paths4949<T[K], Prev4949[D]>> : never }[keyof T]
  : never;

type Prev4949 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4949<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4949 {
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

type ConfigPaths4949 = Paths4949<NestedConfig4949>;

interface HeavyProps4949 {
  config: DeepPartial4949<NestedConfig4949>;
  path?: ConfigPaths4949;
}

const HeavyComponent4949 = memo(function HeavyComponent4949({ config }: HeavyProps4949) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4949) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4949 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4949: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4949.displayName = 'HeavyComponent4949';
export default HeavyComponent4949;
