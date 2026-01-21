'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4956<T> = T extends (infer U)[]
  ? DeepReadonlyArray4956<U>
  : T extends object
  ? DeepReadonlyObject4956<T>
  : T;

interface DeepReadonlyArray4956<T> extends ReadonlyArray<DeepReadonly4956<T>> {}

type DeepReadonlyObject4956<T> = {
  readonly [P in keyof T]: DeepReadonly4956<T[P]>;
};

type UnionToIntersection4956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4956<T> = UnionToIntersection4956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4956<T extends unknown[], V> = [...T, V];

type TuplifyUnion4956<T, L = LastOf4956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4956<TuplifyUnion4956<Exclude<T, L>>, L>;

type DeepPartial4956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4956<T[P]> }
  : T;

type Paths4956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4956<K, Paths4956<T[K], Prev4956[D]>> : never }[keyof T]
  : never;

type Prev4956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4956 {
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

type ConfigPaths4956 = Paths4956<NestedConfig4956>;

interface HeavyProps4956 {
  config: DeepPartial4956<NestedConfig4956>;
  path?: ConfigPaths4956;
}

const HeavyComponent4956 = memo(function HeavyComponent4956({ config }: HeavyProps4956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4956.displayName = 'HeavyComponent4956';
export default HeavyComponent4956;
