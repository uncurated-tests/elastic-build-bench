'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4886<T> = T extends (infer U)[]
  ? DeepReadonlyArray4886<U>
  : T extends object
  ? DeepReadonlyObject4886<T>
  : T;

interface DeepReadonlyArray4886<T> extends ReadonlyArray<DeepReadonly4886<T>> {}

type DeepReadonlyObject4886<T> = {
  readonly [P in keyof T]: DeepReadonly4886<T[P]>;
};

type UnionToIntersection4886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4886<T> = UnionToIntersection4886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4886<T extends unknown[], V> = [...T, V];

type TuplifyUnion4886<T, L = LastOf4886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4886<TuplifyUnion4886<Exclude<T, L>>, L>;

type DeepPartial4886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4886<T[P]> }
  : T;

type Paths4886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4886<K, Paths4886<T[K], Prev4886[D]>> : never }[keyof T]
  : never;

type Prev4886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4886 {
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

type ConfigPaths4886 = Paths4886<NestedConfig4886>;

interface HeavyProps4886 {
  config: DeepPartial4886<NestedConfig4886>;
  path?: ConfigPaths4886;
}

const HeavyComponent4886 = memo(function HeavyComponent4886({ config }: HeavyProps4886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4886.displayName = 'HeavyComponent4886';
export default HeavyComponent4886;
