'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4394<T> = T extends (infer U)[]
  ? DeepReadonlyArray4394<U>
  : T extends object
  ? DeepReadonlyObject4394<T>
  : T;

interface DeepReadonlyArray4394<T> extends ReadonlyArray<DeepReadonly4394<T>> {}

type DeepReadonlyObject4394<T> = {
  readonly [P in keyof T]: DeepReadonly4394<T[P]>;
};

type UnionToIntersection4394<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4394<T> = UnionToIntersection4394<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4394<T extends unknown[], V> = [...T, V];

type TuplifyUnion4394<T, L = LastOf4394<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4394<TuplifyUnion4394<Exclude<T, L>>, L>;

type DeepPartial4394<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4394<T[P]> }
  : T;

type Paths4394<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4394<K, Paths4394<T[K], Prev4394[D]>> : never }[keyof T]
  : never;

type Prev4394 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4394<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4394 {
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

type ConfigPaths4394 = Paths4394<NestedConfig4394>;

interface HeavyProps4394 {
  config: DeepPartial4394<NestedConfig4394>;
  path?: ConfigPaths4394;
}

const HeavyComponent4394 = memo(function HeavyComponent4394({ config }: HeavyProps4394) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4394) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4394 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4394: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4394.displayName = 'HeavyComponent4394';
export default HeavyComponent4394;
