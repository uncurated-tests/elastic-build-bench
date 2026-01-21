'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4656<T> = T extends (infer U)[]
  ? DeepReadonlyArray4656<U>
  : T extends object
  ? DeepReadonlyObject4656<T>
  : T;

interface DeepReadonlyArray4656<T> extends ReadonlyArray<DeepReadonly4656<T>> {}

type DeepReadonlyObject4656<T> = {
  readonly [P in keyof T]: DeepReadonly4656<T[P]>;
};

type UnionToIntersection4656<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4656<T> = UnionToIntersection4656<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4656<T extends unknown[], V> = [...T, V];

type TuplifyUnion4656<T, L = LastOf4656<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4656<TuplifyUnion4656<Exclude<T, L>>, L>;

type DeepPartial4656<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4656<T[P]> }
  : T;

type Paths4656<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4656<K, Paths4656<T[K], Prev4656[D]>> : never }[keyof T]
  : never;

type Prev4656 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4656<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4656 {
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

type ConfigPaths4656 = Paths4656<NestedConfig4656>;

interface HeavyProps4656 {
  config: DeepPartial4656<NestedConfig4656>;
  path?: ConfigPaths4656;
}

const HeavyComponent4656 = memo(function HeavyComponent4656({ config }: HeavyProps4656) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4656) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4656 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4656: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4656.displayName = 'HeavyComponent4656';
export default HeavyComponent4656;
