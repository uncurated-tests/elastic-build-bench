'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4501<T> = T extends (infer U)[]
  ? DeepReadonlyArray4501<U>
  : T extends object
  ? DeepReadonlyObject4501<T>
  : T;

interface DeepReadonlyArray4501<T> extends ReadonlyArray<DeepReadonly4501<T>> {}

type DeepReadonlyObject4501<T> = {
  readonly [P in keyof T]: DeepReadonly4501<T[P]>;
};

type UnionToIntersection4501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4501<T> = UnionToIntersection4501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4501<T extends unknown[], V> = [...T, V];

type TuplifyUnion4501<T, L = LastOf4501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4501<TuplifyUnion4501<Exclude<T, L>>, L>;

type DeepPartial4501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4501<T[P]> }
  : T;

type Paths4501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4501<K, Paths4501<T[K], Prev4501[D]>> : never }[keyof T]
  : never;

type Prev4501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4501 {
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

type ConfigPaths4501 = Paths4501<NestedConfig4501>;

interface HeavyProps4501 {
  config: DeepPartial4501<NestedConfig4501>;
  path?: ConfigPaths4501;
}

const HeavyComponent4501 = memo(function HeavyComponent4501({ config }: HeavyProps4501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4501.displayName = 'HeavyComponent4501';
export default HeavyComponent4501;
