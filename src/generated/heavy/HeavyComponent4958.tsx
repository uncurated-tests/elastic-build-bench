'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4958<T> = T extends (infer U)[]
  ? DeepReadonlyArray4958<U>
  : T extends object
  ? DeepReadonlyObject4958<T>
  : T;

interface DeepReadonlyArray4958<T> extends ReadonlyArray<DeepReadonly4958<T>> {}

type DeepReadonlyObject4958<T> = {
  readonly [P in keyof T]: DeepReadonly4958<T[P]>;
};

type UnionToIntersection4958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4958<T> = UnionToIntersection4958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4958<T extends unknown[], V> = [...T, V];

type TuplifyUnion4958<T, L = LastOf4958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4958<TuplifyUnion4958<Exclude<T, L>>, L>;

type DeepPartial4958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4958<T[P]> }
  : T;

type Paths4958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4958<K, Paths4958<T[K], Prev4958[D]>> : never }[keyof T]
  : never;

type Prev4958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4958 {
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

type ConfigPaths4958 = Paths4958<NestedConfig4958>;

interface HeavyProps4958 {
  config: DeepPartial4958<NestedConfig4958>;
  path?: ConfigPaths4958;
}

const HeavyComponent4958 = memo(function HeavyComponent4958({ config }: HeavyProps4958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4958.displayName = 'HeavyComponent4958';
export default HeavyComponent4958;
